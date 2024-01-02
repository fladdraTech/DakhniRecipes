from accounts.models import User
from django.http import JsonResponse
from django.conf import settings
import jwt

class AuthMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        token = request.headers.get("x-access-token")
        if (
            request.path.startswith("/api/admin")
            or request.path.startswith("admin/")
            or request.path.startswith("/api/accounts/login")
            or request.path.startswith("/static/")
            or request.path.startswith("/media/")
            or request.path.startswith("/api/media/")
        ):
            response = self.get_response(request)
            return response
        if not token:
            # print(request.path)
            return JsonResponse(
                data={"msg": "Token not provided"}, status=403
            )
        try:
            jwt_data = jwt.decode(token, settings.JWT_SECRET, algorithms=["HS256"])
            request.thisUser = User.objects.get(id=jwt_data["id"])
            response = self.get_response(request)
            return response
        except (jwt.exceptions.InvalidSignatureError, User.DoesNotExist):
            return JsonResponse(
                data={"msg": "Invalid token"}, status=401
            )


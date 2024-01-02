from rest_framework.views import APIView
from rest_framework.response import Response
import jwt
from django.conf import settings

from .models import User
from .serializers import UserGetSerializer

class PasswordLoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get("username", '')
        password = request.data.get("password", '')
        data = {}
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response(
                data="Invalid Credentials", status=403
            )
        if not user.check_password(password):
            return Response(
                data="Invalid Credentials", status=403
            )
        token = jwt.encode(
            {"id": str(user.id)}, settings.JWT_SECRET, algorithm="HS256"
        )
        data['token']=token
        data['user'] = UserGetSerializer(user).data
        return Response(data=data, status=200)

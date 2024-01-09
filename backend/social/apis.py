from rest_framework.response import Response
from django.db import transaction

from portal.base import BaseAPIView
from portal.constants import GET, GETALL, POST, DELETE
from .models import SavedRecipe, RecentlySearched
from .serializers import RecentlySearchedSerializer, SavedRecipeSerializer, GetSavedRecipeSerializer


class RecentlSearchedRecipeView(BaseAPIView):
    model = RecentlySearched
    serializer_class = RecentlySearchedSerializer
    post_serializer = RecentlySearchedSerializer
    allowed_methods = [GETALL, POST]

    def get(self, request, id=None, *args, **kwargs):
        self.query_set = RecentlySearched.objects.filter(user=request.thisUser.id)
        return super().get(request, id, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        request.data["user"] = request.thisUser.id
        recently_search_serializer = RecentlySearchedSerializer(data=request.data)
        if recently_search_serializer.is_valid():
            obj = recently_search_serializer.save()
            return Response(
                data={"msg": "Saved Successfully", "id": obj.id}, status=200
            )
        else:
            return Response(data=recently_search_serializer.errors, status=400)


class SavedRecipeView(BaseAPIView):
    model = SavedRecipe
    serializer_class = GetSavedRecipeSerializer
    post_serializer = SavedRecipeSerializer
    allowed_methods = [GETALL, POST]

    def get(self, request, id=None, *args, **kwargs):
        self.query_set = SavedRecipe.objects.filter(user=request.thisUser.id)
        return super().get(request, id, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        request.data["user"] = request.thisUser.id
        saved_recipe_serializer = SavedRecipeSerializer(data=request.data)
        if saved_recipe_serializer.is_valid():
            obj = saved_recipe_serializer.save()
            return Response(
                data={"msg": "Saved Successfully", "id": obj.id}, status=200
            )
        else:
            return Response(data=saved_recipe_serializer.errors, status=400)

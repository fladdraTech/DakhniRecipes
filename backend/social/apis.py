from rest_framework.response import Response

from portal.base import BaseAPIView
from portal.constants import GETALL, POST
from .models import SavedRecipe, RecentlySearched, Rate, Review
from .serializers import (
    RateSerializer,
    GetReviewSerializer,
    ReviewSerializer,
    RecentlySearchedSerializer,
    SavedRecipeSerializer,
    GetSavedRecipeSerializer,
    GetRecentlySearchedSerializer,
)
from recipes.models import Recipe


class RateRecipeView(BaseAPIView):
    model = Rate
    serializer_class = RateSerializer
    post_serializer = RateSerializer
    related_models = {"recipe": Recipe}
    allowed_methods = [POST]

    def post(self, request, *args, **kwargs):
        request.data["user"] = request.thisUser.id
        return super().post(request, *args, **kwargs)


class ReviewRecipeView(BaseAPIView):
    model = Review
    serializer_class = GetReviewSerializer
    post_serializer = ReviewSerializer
    related_models = {"recipe": Recipe}
    allowed_methods = [POST, GETALL]

    def get(self, request, id=None, *args, **kwargs):
        recipeID = request.query_params.get("recipe")
        if recipeID and recipeID != "" and recipeID != "undefined":
            self.query_set = Review.objects.filter(recipe=recipeID)
        return super().get(request, id, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        request.data["user"] = request.thisUser.id
        return super().post(request, *args, **kwargs)


class RecentlSearchedRecipeView(BaseAPIView):
    model = RecentlySearched
    serializer_class = GetRecentlySearchedSerializer
    post_serializer = RecentlySearchedSerializer
    allowed_methods = [GETALL, POST]
    related_models = {"recipe": Recipe}

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
    related_models = {"recipe": Recipe}

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

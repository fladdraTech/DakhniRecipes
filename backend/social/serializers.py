from rest_framework.serializers import ModelSerializer
from .models import SavedRecipe, RecentlySearched
from recipes.serializers import RecipeSerializer


class SavedRecipeSerializer(ModelSerializer):
    class Meta:
        model = SavedRecipe
        fields = "__all__"


class GetSavedRecipeSerializer(ModelSerializer):
    recipe = RecipeSerializer(read_only=True)

    class Meta:
        model = SavedRecipe
        fields = "__all__"


class RecentlySearchedSerializer(ModelSerializer):
    class Meta:
        model = RecentlySearched
        fields = "__all__"

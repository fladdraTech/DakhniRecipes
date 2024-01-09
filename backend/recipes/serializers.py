from rest_framework.serializers import ModelSerializer
from .models import Recipe, Ingredient, IngredientList, Procedure
from portal.serializers import CategoryLovSerializer


class RecipeSerializer(ModelSerializer):
    class Meta:
        model = Recipe
        fields = "__all__"


class PostRecipeserializer(ModelSerializer):
    class Meta:
        model = Recipe
        exclude = ["category"]


class IngredientSerializer(ModelSerializer):
    class Meta:
        model = Ingredient
        fields = "__all__"


class IngredientLovSerializer(ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ["id", "name"]


class GetIngredientListSerializer(ModelSerializer):
    ingredient = IngredientLovSerializer(read_only=True)

    class Meta:
        model = IngredientList
        fields = ["id", "ingredient"]


class ProcedureSerializer(ModelSerializer):
    class Meta:
        model = Procedure
        fields = "__all__"


class GetRecipeSerializer(ModelSerializer):
    ingredients = GetIngredientListSerializer(read_only=True, many=True)
    procedure = ProcedureSerializer(read_only=True, many=True)
    category = CategoryLovSerializer(read_only=True, many=True)

    class Meta:
        model = Recipe
        fields = "__all__"

from rest_framework.response import Response
from django.db import transaction

from portal.base import BaseAPIView
from portal.constants import GET, GETALL, POST, DELETE
from .models import Recipe, Ingredient, IngredientList, Procedure
from .serializers import RecipeSerializer, GetRecipeSerializer, GetAllRecipeSerializer


class RecipeView(BaseAPIView):
    model = Recipe
    getall_serializer = GetAllRecipeSerializer
    serializer_class = GetRecipeSerializer
    post_serializer = RecipeSerializer
    related_models = {}
    allowed_methods = [GET, GETALL, POST, DELETE]

    def post(self, request, *args, **kwargs):
        try:
            request.data["chef"] = request.thisUser.id
            request.data["serve_qty"] = int(request.data.get("serve_qty"))
            with transaction.atomic():
                recipe_serializer = RecipeSerializer(data=request.data)
                if recipe_serializer.is_valid():
                    recipe = recipe_serializer.save()
                    ingredient_list_to_create = []
                    procedure_to_create = []
                    for ingredient in request.data.get("ingredients"):
                        ingredient["recipe"] = recipe
                        ingredient["ingredient"], _ = Ingredient.objects.get_or_create(
                            name=ingredient.get("name")
                        )
                        del ingredient["name"]
                        ingredient_list_to_create.append(IngredientList(**ingredient))
                    for procedure in request.data.get("procedure"):
                        procedure["recipe"] = recipe
                        procedure["order"] = int(procedure.get("order"))
                        procedure_to_create.append(Procedure(**procedure))
                    IngredientList.objects.bulk_create(ingredient_list_to_create)
                    Procedure.objects.bulk_create(procedure_to_create)
                    return Response(
                        data={"msg": "Saved Successfully", "id": recipe.id}, status=200
                    )
                else:
                    return Response(data=recipe_serializer.errors, status=400)
        except Exception as e:
            if recipe:
                recipe.delete()
            return Response(str(e), status=418)

    def put(self, request, id=None, *args, **kwargs):
        try:
            obj = Recipe.objects.get(id=id)
        except Recipe.DoesNotExist:
            return Response("Object does not exists.", status=418)
        recipe_serializer = RecipeSerializer(obj, data=request.data, partial=True)
        if recipe_serializer.is_valid():
            recipe_serializer.save()
            return Response(data={"msg": "Saved Successfully"}, status=200)
        else:
            return Response(data=recipe_serializer.errors, status=400)

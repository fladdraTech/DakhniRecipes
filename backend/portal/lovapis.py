from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import CategoryLovSerializer
from .models import Category
from recipes.models import Ingredient
from recipes.serializers import IngredientLovSerializer


lov_options = {
    "category": {
        "serializer": CategoryLovSerializer,
        "query_set": Category.objects.all().only("id", "name"),
    },
    "ingredient": {
        "serializer": IngredientLovSerializer,
        "query_set": Ingredient.objects.all().only("id", "name"),
    },
}


class LovApiView(APIView):
    def get(self, request, key, *args, **kwargs):
        if not key in lov_options.keys():
            return Response(data={"msg": "Not Found"}, status=404)
        else:
            return Response(
                data=lov_options[key]["serializer"](
                    lov_options[key]["query_set"], many=True
                ).data,
                status=200,
            )

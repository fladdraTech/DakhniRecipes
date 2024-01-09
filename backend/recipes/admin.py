from django.contrib import admin
from .models import *

admin.site.register(Recipe)
admin.site.register(Ingredient)
admin.site.register(Procedure)
admin.site.register(TrendingRecipe)
admin.site.register(PopularRecipe)
admin.site.register(IngredientList)

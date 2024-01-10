from .models import PopularRecipe
from portal.models import Configuration
from recipes.models import Recipe


def get_popular_recipes():
    rate_limit = Configuration.objects.all().first().popular_recipe_rate
    recipes = Recipe.objects.filter(rate__rate__gte=rate_limit).distinct()
    popular_recipes_to_create = []
    for recipe in recipes:
        popular_recipes_to_create.append(PopularRecipe(recipe=recipe))
    PopularRecipe.objects.bulk_create(popular_recipes_to_create)

from django.urls import path
from .apis import RecipeView, PopularRecipeView, TrendingRecipeView

urlpatterns = [
    path("popular-recipes/<str:id>/", PopularRecipeView.as_view()),
    path("trending-recipes/<str:id>/", TrendingRecipeView.as_view()),
    path("<str:id>/", RecipeView.as_view()),
]

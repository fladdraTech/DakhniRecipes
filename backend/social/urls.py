from django.urls import path
from .apis import RecentlSearchedRecipeView, SavedRecipeView

urlpatterns = [
    path("recently-search-recipe/<str:id>/", RecentlSearchedRecipeView.as_view()),
    path("saved-recipe/<str:id>/", SavedRecipeView.as_view()),
]

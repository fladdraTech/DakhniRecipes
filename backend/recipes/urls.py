from django.urls import path
from .apis import RecipeView

urlpatterns = [
    path("<str:id>/", RecipeView.as_view()),
]

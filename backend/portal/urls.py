from django.urls import path
from .lovapis import LovApiView
from .apis import PopularCategoriesView

urlpatterns = [
    path("drop-down/<str:key>/", LovApiView.as_view()),
    path("popular-categories/", PopularCategoriesView.as_view()),
]

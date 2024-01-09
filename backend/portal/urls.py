from django.urls import path
from .lovapis import LovApiView

urlpatterns = [
    path("drop-down/<str:key>/", LovApiView.as_view()),
]

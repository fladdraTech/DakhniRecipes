from django.urls import path
from .apis import PasswordLoginView

urlpatterns = [
    path('login/', PasswordLoginView.as_view()),
]
from django.urls import path
from .views import *

urlpatterns = [
    path('challenge/', ChallengeView.as_view(), name="challenges")
]
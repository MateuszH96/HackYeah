from django.urls import path
from .views import *

urlpatterns = [
    path('meeting/', MeetingView.as_view(), name="meeting"),
    path('category/', CategoryView.as_view(), name="category"),
    path('location/', LocationView.as_view(), name="location"),
]

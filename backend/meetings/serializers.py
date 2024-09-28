from rest_framework import serializers
from .models import *

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('__all__')
        extra_kwargs = {
            "google_url":{'required':False, "allow_null": True},
            "lat_long":{'required':False, "allow_null": True}
        }

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('__all__')

class MeetingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meeting
        fields = ('__all__')
        extra_kwargs = {
            'created_at':{'required':False, "allow_null": True},
            'deleted':{'required':False, "allow_null": True},
        }
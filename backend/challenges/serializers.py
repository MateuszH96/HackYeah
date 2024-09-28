from rest_framework import serializers
from .models import *
from meetings.serializers import CategorySerializer

class ChallengeTemplateSerializer(serializers.ModelSerializer):
    type = CategorySerializer()
    class Meta:
        model = ChallengeTemplate
        fields = ('__all__')

class ChallengeSerializer(serializers.ModelSerializer):
    template = ChallengeTemplateSerializer()
    class Meta:
        model = Challenge
        fields = ('__all__')


class UsersCompletedChallengesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsersCompletedChallenges
        fields = ('__all__')

class UserSubscriptionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSubscriptions
        fields = ('__all__')


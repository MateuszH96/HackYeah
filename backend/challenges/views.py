from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *

# Create your views here.
class ChallengeView(APIView):
    def get(self, request):
        challenges = Challenge.objects.all().select_related('template')
        serialized = ChallengeSerializer(challenges, many=True).data

        return Response(serialized)

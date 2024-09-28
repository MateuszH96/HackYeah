from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *

from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Meeting, Location, Category
from .serializers import MeetingSerializer, LocationSerializer
from django.core.paginator import Paginator

class MeetingView(APIView):
    def get(self, request):
        page_number = request.GET.get('page', 1) 
        limit = request.GET.get('limit', 10) 

        meeting_data = Meeting.objects.all()

        paginator = Paginator(meeting_data, limit)
        page = paginator.get_page(page_number)

        serializer_meeting = MeetingSerializer(page.object_list, many=True).data

        response_data = {
            'total_count': paginator.count,
            'total_pages': paginator.num_pages,
            'current_page': page.number,
            'objects': list(serializer_meeting),  # Serialize your objects here
        }

        return Response(response_data)

    def post(self, request):
        # Uzyskiwanie danych lokalizacji
        location_data = request.data.get('location')
        
        # Sprawdzanie czy lokalizacja już istnieje
        if location_data:
            location_serializer = LocationSerializer(data=location_data)
            if location_serializer.is_valid():
                location = location_serializer.save()  # Zapisuje lokalizację, jeśli jest nowa
            else:
                return Response(location_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "Location data is required."}, status=status.HTTP_400_BAD_REQUEST)

        # Przetwarzanie kategorii
        category_ids = request.data.get('categories', [])
        categories = Category.objects.filter(id__in=category_ids)

        # Tworzenie nowego spotkania
        meeting_data = {
            "title": request.data.get('title'),
            "description": request.data.get('description'),
            "date": request.data.get('date'),
            "location": location.id,  # Użyj ID nowo utworzonej lub istniejącej lokalizacji
            "deleted": request.data.get('deleted', False),
            "categories":request.data.get('categories')
        }

        serializer_meeting = MeetingSerializer(data=meeting_data)
        
        if serializer_meeting.is_valid():
            meeting = serializer_meeting.save()
            meeting.categories.set(categories)  # Ustawia kategorie
            return Response(serializer_meeting.data, status=status.HTTP_201_CREATED)

        return Response(serializer_meeting.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoryView(APIView):
    def get(self, request):
        category_data = Category.objects.all()
        serializer_category = CategorySerializer(category_data, many=True).data
        return Response(serializer_category)
    
    def post(self,request):
        category = request.data
        serializer_category = CategorySerializer(data=category)
        
        if serializer_category.is_valid():
            serializer_category.save()
            return Response(serializer_category.data,status=status.HTTP_201_CREATED)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)

class LocationView(APIView):
    def get(self, request):
        
        location_data = Location.objects.all()
        
        serializer_location = LocationSerializer(location_data, many=True).data
        
        return Response(serializer_location)

    def post(self, request):
        
        serializer_location = LocationSerializer(data=request.data)
        
        
        if serializer_location.is_valid():
            
            serializer_location.save()
            
            return Response(serializer_location.data, status=status.HTTP_201_CREATED)
        
        
        return Response(serializer_location.errors, status=status.HTTP_400_BAD_REQUEST)

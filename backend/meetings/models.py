from django.db import models

class Location(models.Model):
    name = models.CharField(max_length=100, default="Location")
    google_url = models.TextField(null=True, blank=True)  # Allow null in DB and blank in forms
    lat_long = models.CharField(max_length=255, null=True, blank=True)  # Allow null values

    def __str__(self):
        return self.google_url or "Unknown Location"


class Category(models.Model):
    name = models.CharField(max_length=100, null=False)  # Non-nullable by default

    def __str__(self):
        return self.name


class Meeting(models.Model):
    title = models.CharField(max_length=200, null=False)  # Non-nullable
    description = models.TextField(null=True, blank=True)  # Nullable and optional in forms
    date = models.DateTimeField(null=True, blank=True)  # Nullable if the meeting date isn't set
    categories = models.ManyToManyField(Category)  # Many-to-Many fields are nullable by default
    location = models.ForeignKey(Location, on_delete=models.CASCADE, null=True, blank=True)  # Allow nullable foreign key
    created_at = models.DateTimeField(auto_now_add=True)  # Automatically set when created, non-nullable
    deleted = models.BooleanField(default=False)  # Non-nullable but with a default value

    def __str__(self):
        return self.title
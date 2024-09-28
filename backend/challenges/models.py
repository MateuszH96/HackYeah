from django.db import models
from meetings.models import Category

# Create your models here.

class ChallengeTemplate(models.Model):
    lat = models.FloatField(null=False)
    long = models.FloatField(null=False)
    rarity = models.IntegerField(default=1)
    type = models.ForeignKey(Category, on_delete=models.CASCADE)

class Challenge(models.Model):
    template = models.ForeignKey(ChallengeTemplate, on_delete=models.CASCADE)
    created_at = models.DateTimeField()
    expires_at = models.DateTimeField(null=True)

class UsersCompletedChallenges(models.Model):
    user_id = models.IntegerField(null=False)
    challenge_id = models.ForeignKey(Challenge, on_delete=models.CASCADE)

class UserSubscriptions(models.Model):
    user_id = models.IntegerField()
    type = models.ForeignKey(Category, on_delete=models.CASCADE)
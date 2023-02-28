from django.db import models
from django.contrib.auth.models import User
from colleges.models import CollegeProfile

# Create your models here.
class StudentsProfile(models.Model):
    user = models.OneToOneField(User, unique=True, related_name='user_name', on_delete=models.CASCADE)
    college = models.OneToOneField(CollegeProfile, unique=True, on_delete=models.CASCADE)
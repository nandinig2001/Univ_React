from django.db import models
from django.contrib.auth.models import User
from colleges.models import CollegeProfile

# Create your models here.
class StudentsProfile(models.Model):
    user = models.OneToOneField(User, unique=True, related_name='user_name')
    college = models.OneToOneField(CollegeProfile, unique=True)
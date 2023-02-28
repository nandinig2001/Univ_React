from django.db import models

# Create your models here.
class CollegeProfile(models.Model):
    name = models.CharField(max_length=200)

class Faculty(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    title = models.CharField(max_length=10)
    department = models.CharField(max_length=10)


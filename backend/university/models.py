from django.db import models
from django.contrib.auth.models import User


class College(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    location = models.CharField(max_length=200)
    established_year = models.PositiveIntegerField()
    contact_email = models.EmailField()
    website = models.URLField(blank=True)
    logo = models.ImageField(upload_to='college_logos', blank=True)
    accreditation = models.CharField(max_length=200)
    ranking = models.CharField(max_length=200)


class Department(models.Model):
    name = models.CharField(max_length=200)
    college = models.ForeignKey(College, on_delete=models.CASCADE)
    head_of_department = models.ForeignKey(User, on_delete=models.CASCADE, related_name='department_head')
    description = models.TextField()
    contact_email = models.EmailField()
    phone_number = models.CharField(max_length=20, blank=True)


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    profile_pic = models.ImageField(upload_to='profile_pics', blank=True)
    college = models.ForeignKey(College, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=20, blank=True)
    address = models.CharField(max_length=200, blank=True)
    date_of_birth = models.DateField(blank=True, null=True)
    degree_program = models.CharField(max_length=200, blank=True)
    enrollment_year = models.PositiveIntegerField(blank=True, null=True)
    graduation_year = models.PositiveIntegerField(blank=True, null=True)


class Course(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    instructor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='courses_taught')
    students = models.ManyToManyField(User, related_name='courses_enrolled')
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    max_students = models.PositiveIntegerField()
    syllabus = models.FileField(upload_to='syllabus', blank=True)
    course_code = models.CharField(max_length=200)
    credits = models.DecimalField(max_digits=3, decimal_places=1)
    prerequisites = models.ManyToManyField('self', symmetrical=False, blank=True)


class CourseContent(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    file = models.FileField(upload_to='course_content', blank=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    order = models.PositiveIntegerField()


class Assignment(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    due_date = models.DateField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    max_score = models.PositiveIntegerField()
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    file = models.FileField(upload_to='assignment_submissions', blank=True)


class Grade(models.Model):
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    grade = models.DecimalField(max_digits=5, decimal_places=2)
    submitted_at = models.DateTimeField(auto_now_add=True)


class ERP(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    credit = models.DecimalField(max_digits=5, decimal_places=1)

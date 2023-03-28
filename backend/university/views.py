from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth.models import User
from .models import College, Department, UserProfile, Course, CourseContent, Assignment, Grade, ERP
from .serializers import CollegeSerializer, DepartmentSerializer, UserProfileSerializer, CourseSerializer, CourseContentSerializer, AssignmentSerializer, GradeSerializer, ERPSerializer, UserSerializer
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
from .serializers import LoginSerializer

class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        login(request, user)
        return Response({'status': 'success'}, status=status.HTTP_200_OK)
    
class RegistrationAPIView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

# College views
class CollegeListCreateView(generics.ListCreateAPIView):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer

class CollegeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer


# Department views
class DepartmentListCreateView(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class DepartmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


# UserProfile views
class UserProfileCreateView(generics.CreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class UserProfileDetailView(generics.RetrieveUpdateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.queryset.get(user=self.request.user)


# Course views
class CourseListCreateView(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


# CourseContent views
class CourseContentListCreateView(generics.ListCreateAPIView):
    queryset = CourseContent.objects.all()
    serializer_class = CourseContentSerializer

class CourseContentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CourseContent.objects.all()
    serializer_class = CourseContentSerializer


# Assignment views
class AssignmentListCreateView(generics.ListCreateAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer

class AssignmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer


# Grade views
class GradeCreateView(generics.CreateAPIView):
    queryset = Grade.objects.all()
    serializer_class = GradeSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(student=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class GradeListView(generics.ListAPIView):
    queryset = Grade.objects.all()
    serializer_class = GradeSerializer


# ERP views
class ERPListCreateView(generics.ListCreateAPIView):
    queryset = ERP.objects.all()
    serializer_class = ERPSerializer

class ERPDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ERP.objects.all()
    serializer_class = ERPSerializer


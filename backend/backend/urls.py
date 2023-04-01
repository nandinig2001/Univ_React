"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from django.urls import path, include
from rest_framework import routers
from django.contrib import admin
from university.views import (
    CollegeListCreateView,
    CollegeDetailView,
    DepartmentListCreateView,
    DepartmentDetailView,
    UserProfileCreateView,
    UserProfileDetailView,
    CourseListCreateView,
    CourseDetailView,
    CourseContentListCreateView,
    CourseContentDetailView,
    AssignmentListCreateView,
    AssignmentDetailView,
    GradeCreateView,
    GradeListView,
    ERPListCreateView,
    ERPDetailView,
    EmailLoginAuthToken,
    login_status,
)

urlpatterns = [
    path('colleges/', CollegeListCreateView.as_view(), name='college_list_create'),
    path('colleges/<int:pk>/', CollegeDetailView.as_view(), name='college_detail'),
    path('departments/', DepartmentListCreateView.as_view(), name='department_list_create'),
    path('departments/<int:pk>/', DepartmentDetailView.as_view(), name='department_detail'),
    path('userprofiles/create/', UserProfileCreateView.as_view(), name='userprofile_create'),
    path('userprofiles/<int:pk>/', UserProfileDetailView.as_view(), name='userprofile_detail'),
    path('courses/', CourseListCreateView.as_view(), name='course_list_create'),
    path('courses/<int:pk>/', CourseDetailView.as_view(), name='course_detail'),
    path('coursecontents/', CourseContentListCreateView.as_view(), name='coursecontent_list_create'),
    path('coursecontents/<int:pk>/', CourseContentDetailView.as_view(), name='coursecontent_detail'),
    path('assignments/', AssignmentListCreateView.as_view(), name='assignment_list_create'),
    path('assignments/<int:pk>/', AssignmentDetailView.as_view(), name='assignment_detail'),
    path('grades/create/', GradeCreateView.as_view(), name='grade_create'),
    path('grades/', GradeListView.as_view(), name='grade_list'),
    path('erps/', ERPListCreateView.as_view(), name='erp_list_create'),
    path('erps/<int:pk>/', ERPDetailView.as_view(), name='erp_detail'),
    path('admin/', admin.site.urls),
    path('api-auth/login/', EmailLoginAuthToken.as_view(), name='login'),
    path('api-auth/login-status/', login_status, name='login-status'),
    path('api-auth/', include('rest_framework.urls')),
    

]

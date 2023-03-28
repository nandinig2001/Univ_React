from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext_lazy as _
from .models import College, Department, UserProfile, Course, CourseContent, Assignment, Grade, ERP


class UserProfileInline(admin.StackedInline):
    model = UserProfile
    can_delete = False


class UserAdmin(UserAdmin):
    inlines = (UserProfileInline, )


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    fieldsets = (
        (None, {'fields': ('user', 'college', 'department')}),
        (_('Personal Info'), {'fields': ('bio', 'profile_pic', 'phone_number', 'address', 'date_of_birth')}),
        (_('Educational Info'), {'fields': ('degree_program', 'enrollment_year', 'graduation_year')}),
    )
    list_display = ('user', 'college', 'department', 'degree_program', 'enrollment_year', 'graduation_year')
    list_filter = ('college', 'department', 'degree_program', 'enrollment_year', 'graduation_year')
    search_fields = ('user__username', 'user__first_name', 'user__last_name', 'college__name', 'department__name')


class DepartmentInline(admin.StackedInline):
    model = Department
    extra = 1


class CollegeAdmin(admin.ModelAdmin):
    inlines = [DepartmentInline]


class UserProfileInline(admin.StackedInline):
    model = UserProfile


class UserProfileAdmin(UserAdmin):
    inlines = [UserProfileInline]



admin.site.register(College, CollegeAdmin)
admin.site.register(Course)
admin.site.register(CourseContent)
admin.site.register(Assignment)
admin.site.register(Grade)
admin.site.register(ERP)

from django.contrib import admin
from .models import ProjectCategory

class ProjectCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'updated_at')
    search_fields = ('name', 'description')
    ordering = ('name',)
    readonly_fields = ('created_at', 'updated_at')

admin.site.register(ProjectCategory, ProjectCategoryAdmin)

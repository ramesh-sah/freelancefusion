"""
URL configuration for freelancefusionbackendserver project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
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
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static




from django.urls import path, re_path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="Your API Title",
      default_version='v1',
      description="API documentation for your Django project.",
      terms_of_service="https://www.yourwebsite.com/terms/",
      contact=openapi.Contact(email="contact@yourwebsite.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)




urlpatterns = [
   
    
    # Swagger UI:
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    # Redoc UI:
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    # Swagger JSON or YAML:
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
     path('', include('admin_material.urls')),
    path('admin/', admin.site.urls),
    
    path('api/', include('account.urls')),
    path('api/', include('projectcategories.urls')),
    path('api/',include('projects.urls')),
    path('api/',include('applications.urls')),
    path('api/',include('contracts.urls')),
    path('api/',include('payments.urls')),
    path('api/', include('project_review.urls')),
    path('api/',include('chat.urls')),
    path('api/',include('notifications.urls')),
    path('api/',include('organization_setting.urls')),
    path('khalti/', include('khalti.urls')),
    
    
    
    
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
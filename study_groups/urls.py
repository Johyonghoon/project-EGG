from django.urls import path
from . import views

app_name = 'study_groups'
urlpatterns = [
    path('', views.index, name='index'),
]

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('stream', views.camView, name='camStream'),
]

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('stream', views.stream, name='stream'),
    path('frame', views.frame, name='frame'),
    path('snap', views.snap, name='snap'),
]

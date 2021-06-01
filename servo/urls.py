from django.urls import path
from . import views

urlpatterns = [
    path('up', views.up, name='up'),
    path('down', views.down, name='down'),
    path('right', views.right, name='right'),
    path('left', views.left, name='left'),
]

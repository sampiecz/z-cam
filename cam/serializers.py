from cam.models import Cam
from rest_framework import serializers

class CamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cam
        fields = '__all__' 


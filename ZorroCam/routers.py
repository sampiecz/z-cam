from rest_framework import routers
from cam.views import CamViewSet

router = routers.DefaultRouter()
router.register(r"cam", CamViewSet)


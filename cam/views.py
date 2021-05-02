from django.shortcuts import render
from django.views.decorators import gzip
from django.http import HttpResponse,StreamingHttpResponse
import cv2
import time

class VideoCamera(object):
    def __init__(self):
        self.video = cv2.VideoCapture(0)
        self.height = 480
        self.width = 640
        self.video.set(3, self.width)  # Set horizontal resolution
        self.video.set(4, self.height)  # Set vertical resolution
    def __del__(self):
        self.video.release()

    def get_frame(self):
        ret,image = self.video.read()
        center = (self.width / 2, self.height / 2)

        angle90 = 90
        angle180 = 180
        angle270 = 270

        scale = 1.0

        # Perform the counter clockwise rotation holding at the center
        # 90 degrees
        #M = cv2.getRotationMatrix2D(center, angle90, scale)
        #rotated90 = cv2.warpAffine(image, M, (self.height, self.width))

        # 180 degrees
        M = cv2.getRotationMatrix2D(center, angle180, scale)
        rotated180 = cv2.warpAffine(image, M, (self.width, self.height))

        ret,jpeg = cv2.imencode('.jpg',rotated180)
        return jpeg.tobytes()

def gen(camera):
    while True:
        frame = camera.get_frame()
        yield(b'--frame\r\n'
        b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

@gzip.gzip_page
def camView(request): 
    try:
        return StreamingHttpResponse(gen(VideoCamera()),content_type="multipart/x-mixed-replace;boundary=frame")
    except HttpResponseServerError as e:
        print("aborted")


# Renders actual contact page with CSRF token 
def index(request):
    context = {
        "props": {
            "CSRF_Token": csrf.get_token(request),
        }
    }
    return render(request, "cam/index.html", context)




############
# DRF
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.authentication import SessionAuthentication, BasicAuthentication

# CSRF
from django.middleware import csrf

# Permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

# Models 
from cam.models import Cam 
from cam.serializers import CamSerializer

# Can be inherited from to set specific permissions for each view in viewset
class MixedPermissionModelViewSet(viewsets.ModelViewSet):
   '''
   Mixed permission base model allowing for action level
   permission control. Subclasses may define their permissions
   by creating a 'permission_classes_by_action' variable.

   Example:
   permission_classes_by_action = {'list': [AllowAny],
                                   'create': [IsAdminUser]}
   '''

   permission_classes_by_action = {}

   def get_permissions(self):
      try:
        # return permission_classes depending on `action`
        return [permission() for permission in self.permission_classes_by_action[self.action]]
      except KeyError:
        # action is not set return default permission_classes
        return [permission() for permission in self.permission_classes]

# Inherit from above 'mixin' so I can make create endpoint only as public.
class CamViewSet(MixedPermissionModelViewSet):
    queryset = Cam.objects.all()
    serializer_class = CamSerializer
    permission_classes = [IsAdminUser]
    permission_classes_by_action = {'create': [AllowAny],}
    


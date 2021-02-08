from django.shortcuts import render
from django.http import HttpResponse,StreamingHttpResponse
import cv2
import time

# Create your views here.

class VideoCamera(object):
    def __init__(self):
        self.video = cv2.VideoCapture(0)
    def __del__(self):
        self.video.release()

    def get_frame(self):
        ret,image = self.video.read()
        ret,jpeg = cv2.imencode('.jpg',image)
        return jpeg.tobytes()

def gen(camera):
    while True:
        frame = camera.get_frame()
        yield(frame)
        time.sleep(1)

def index(request):
    # response = HttpResponse(gen(VideoCamera())
    return StreamingHttpResponse(gen(VideoCamera()),content_type="image/jpeg")

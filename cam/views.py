from django.shortcuts import render
from django.views.decorators import gzip
from django.http import HttpResponse,StreamingHttpResponse
from cam.helpers import VideoCamera
import time

def gen(camera):
    while True:
        frame = camera.get_frame()
        yield(b'--frame\r\n'
        b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

def stream(request): 
    try:
        return StreamingHttpResponse(gen(VideoCamera()),content_type="multipart/x-mixed-replace;boundary=frame")
    except HttpResponseServerError as e:
        print("aborted")

def img(request):
    vc = VideoCamera()
    return HttpResponse(
        vc.get_frame(), content_type='image/jpeg'
    )

def index(request):
    return render(request, "cam/index.html")

from django.shortcuts import render
from ctypes import *

cdll = cdll.LoadLibrary("RunServoDemo.so")
cdll.main()

def up(request):
    cdll.processKeyboardEvent(0)

def down(request):
    cdll.processKeyboardEvent(1)

def right(request):
    cdll.processKeyboardEvent(2)

def left(request):
    cdll.processKeyboardEvent(3)


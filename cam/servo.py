import ctypes

class Servo():

    def __init__(self):
        lib = ctypes.CDLL('RunServoDemo.so')
    
    def run(self):
        self.lib.main()

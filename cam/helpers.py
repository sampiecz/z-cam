import cv2

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

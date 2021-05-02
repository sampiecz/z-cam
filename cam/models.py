from django.db import models
import datetime

# Create your models here.
class Cam (models.Model):
    name = models.CharField(max_length=255, default="")
    image = models.ImageField(blank=True, default="")
    created_at = models.DateField(default=datetime.datetime.utcnow)
    location = models.CharField(max_length=255, default="")

    def __str__(self):
        return str(self.image)


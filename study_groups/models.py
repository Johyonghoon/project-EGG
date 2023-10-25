from django.db import models

# Create your models here.
class StudyGroup(models.Model):
    group_name = models.CharField(max_length=20)
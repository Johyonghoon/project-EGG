from django.db import models

# Create your models here.
class Problem(models.Model):
    problem_num = models.IntegerField()
    problem_name = models.CharField(max_length=20)
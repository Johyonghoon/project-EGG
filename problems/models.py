from django.db import models


class Problem(models.Model):
    problem_num = models.IntegerField()
    problem_name = models.CharField(max_length=20)
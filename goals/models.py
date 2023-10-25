from django.db import models
from problems.models import Problem
from study_groups.models import StudyGroup


# Create your models here.
class Goal(models.Model):
    problem = models.ForeignKey(Problem, on_delete=models.CASCADE)
    group = models.ForeignKey(StudyGroup, on_delete=models.CASCADE)
    goal_name = models.CharField(max_length=50)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
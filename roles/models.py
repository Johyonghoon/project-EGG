from django.db import models
from django.contrib.auth import get_user_model
from study_groups.models import StudyGroup


# Create your models here.
class Role(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    group = models.ForeignKey(StudyGroup, on_delete=models.CASCADE)
    is_staff = models.BooleanField(default=False)
# Generated by Django 4.2.6 on 2023-10-24 05:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Problem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('problem_num', models.IntegerField()),
                ('problem_name', models.CharField(max_length=20)),
            ],
        ),
    ]

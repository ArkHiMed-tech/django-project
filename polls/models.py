from django.db import models


class New(models.Model):
    name = models.CharField(max_length=30)
    main_text = models.CharField(max_length=300)
    pub_date = models.DateTimeField('date published', auto_now=True)
    author = models.CharField(max_length=30)
    image = models.ImageField(upload_to='images')

class Event(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=200)
    event_start_date = models.DateTimeField('event start date', null=True, blank=True)
    event_end_date = models.DateTimeField('event end date', null=True, blank=True)
    pub_date = models.DateTimeField('date published', auto_now=True)
    author = models.CharField(max_length=30)
    image = models.ImageField(upload_to='images', null=True, blank=True)
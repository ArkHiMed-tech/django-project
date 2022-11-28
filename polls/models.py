from django.db import models


class New(models.Model):
    name = models.CharField(max_length=30)
    main_text = models.CharField(max_length=300)
    pub_date = models.DateTimeField('date published')
    author = models.CharField(max_length=30)
    image = models.ImageField(upload_to='images')

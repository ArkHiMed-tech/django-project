from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('news/<int:page_id>/', views.news, name='news'),
    path('news/', views.news_redirect, name='news_redirect'), 
    path('events/<int:page_id>/', views.events, name='events'),
    path('events/', views.events_redirect, name='events_redirect')
]
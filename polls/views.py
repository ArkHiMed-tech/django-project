from django.http import HttpResponse, HttpResponseRedirect, HttpRequest
from django.template import loader
from django.core.paginator import Paginator
from django.shortcuts import redirect

from .models import New, Event


def index(request):
    template = loader.get_template('index.html')
    context = {
    }
    return HttpResponse(template.render(context, request))

def news(request, page_id):
    template = loader.get_template('news.html')
    news_list = New.objects.order_by('-pub_date')
    pages = Paginator(news_list, 5)
    if page_id > 2:
        lst = [page_id - 2, page_id - 1, page_id]
    elif page_id > 1:
        lst = [page_id - 1, page_id]
    else:
        lst = [page_id]
    if pages.page(page_id).has_next():
        lst.append(page_id + 1)
        if pages.page(page_id + 1).has_next():
            lst.append(page_id + 2)
    context = {'news_list': pages.page(page_id).object_list, 'pages': lst, 'page_id': page_id}
    return HttpResponse(template.render(context, request))

def news_redirect(request:HttpRequest): 
    return redirect(request.get_full_path(force_append_slash=True)+'1')

def events_redirect(request:HttpRequest):
    return redirect(request.get_full_path(force_append_slash=True)+'1')

def events(request, page_id):
    template = loader.get_template('events.html')
    events_list = Event.objects.order_by('-event_start_date')
    pages = Paginator(events_list, 5)
    if page_id > 2:
        lst = [page_id - 2, page_id - 1, page_id]
    elif page_id > 1:
        lst = [page_id - 1, page_id]
    else:
        lst = [page_id]
    if pages.page(page_id).has_next():
        lst.append(page_id + 1)
        if pages.page(page_id + 1).has_next():
            lst.append(page_id + 2)
    context = {'events_list': pages.page(page_id).object_list, 'pages': lst, 'page_id': page_id}
    return HttpResponse(template.render(context, request))
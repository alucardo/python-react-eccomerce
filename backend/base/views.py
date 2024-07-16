from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def getRotes(request):
    return JsonResponse('Hello', safe=False)
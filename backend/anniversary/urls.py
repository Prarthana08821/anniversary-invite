from django.urls import path
from .views import rsvp_create

urlpatterns = [
    path("rsvp/", rsvp_create),
]

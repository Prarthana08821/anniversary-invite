from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Rsvp
from .serializers import RsvpSerializer

@api_view(["GET", "POST"])
def rsvp_create(request):
    if request.method == "GET":
        rsvps = Rsvp.objects.exclude(message__isnull=True).exclude(message__exact="").order_by("-created_at")
        serializer = RsvpSerializer(rsvps, many=True)
        return Response(serializer.data)

    if request.method == "POST":
        serializer = RsvpSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

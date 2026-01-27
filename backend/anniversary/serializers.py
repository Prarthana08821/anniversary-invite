from rest_framework import serializers
from .models import Rsvp

class RsvpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rsvp
        fields = "__all__"
        extra_kwargs = {
            "phone": {"required": False},
            "attending": {"required": False},
            "message": {"required": False},
        }

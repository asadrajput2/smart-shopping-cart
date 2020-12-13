from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Item
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from .serializers import ItemSerializer

@receiver(post_save, sender=Item)
def item_add_handler(sender, instance, **kwargs):
    channel_layer = get_channel_layer()

    print(instance)

    async_to_sync(channel_layer.group_send)(
        "order" + str(instance.order.id),
        {
            "type": "send_new_item",
            "item": ItemSerializer(instance).data
        }
    )

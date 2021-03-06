from django.urls import re_path
from .consumers import ChatConsumer, ItemConsumer

websocket_urlpatterns = [
    re_path(r'ws/chat/$', ChatConsumer.as_asgi()),
    re_path(r'ws/order/(?P<order_id>\w+)/$', ItemConsumer.as_asgi()),
]

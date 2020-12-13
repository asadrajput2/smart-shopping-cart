import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.group_name = 'asd'

        # join group
        async_to_sync(self.channel_layer.group_add)(
            self.group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.group_name,
            self.channel_name
        )

    def receive(self, text_data):
        data_json = json.loads(text_data)
        message = data_json["message"]

        async_to_sync(self.channel_layer.group_send)(
            self.group_name,
            {
                "type": "new_message",
                "message": message
            }
        )

    def new_message(self, event):
        message = event['message']

        self.send(text_data=json.dumps({
            "type": "new_message",
            "message": message + " received"
        }))


class ItemConsumer(WebsocketConsumer):

    def connect(self):
        self.group_name = "order" + str(self.scope["url_route"]["kwargs"]["order_id"]) 

        async_to_sync(self.channel_layer.group_add)(
            self.group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self):
        async_to_sync(self.channel_layer.groiup_discard)(
            self.group_name,
            self.channel_name
        )

    def send_new_item(self, event):
        item = event["item"]

        self.send(text_data=json.dumps(
            {
                "type": "send_new_item",
                "item": item
            }
        ))

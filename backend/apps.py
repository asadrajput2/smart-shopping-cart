from django.apps import AppConfig


class BackendConfig(AppConfig):
    name = 'backend'

    def ready(self):
        from .signals import item_add_handler
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, ListCreateAPIView, CreateAPIView
from .serializers import *
from .models import *


class ProductsListView(ListAPIView):

    model = Product
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class OrderView(ListCreateAPIView):

    model = Order
    serializer_class = OrderSerializer

    def get_queryset(self):
        user = self.request.user
        return Order.objects.filter(user=user.id)


class ItemListView(ListCreateAPIView):

    model = Item
    serializer_class = ItemSerializer

    def get_queryset(self):
        user = self.request.user
        return Item.objects.filter(order__user=user, order=self.kwargs['order_id'])


class ItemDetailView(ListCreateAPIView):

    model = Item
    serializer_class = ItemSerializer

    def get_queryset(self):
        user = self.request.user
        return Item.objects.filter(order__user=user, id=self.kwargs['item_id'])


class ItemCreateView(CreateAPIView):

    model = Item
    serializer_class = ItemCreateSerializer

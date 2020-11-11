from rest_framework import serializers
from .models import Product, Order, Item


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ['id', 'name', 'manufacturer', 'weight', 'price']
        read_only_fields = ['id', 'name', 'manufacturer', 'weight', 'price']


class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = ['id', 'name', 'user', 'status',
                  'payment_status', 'created_at']


class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = ['id', 'order', 'product', 'created_at']
        depth = 1


class ItemCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = ['id', 'order', 'product', 'created_at']

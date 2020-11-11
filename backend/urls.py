from django.urls import path
from .views import *

urlpatterns = [
    path('products_list/', ProductsListView.as_view(), name="products_list"),
    path('orders_list/', OrderView.as_view(), name="orders_list"),
    path('items/list/<int:order_id>/', ItemListView.as_view(),
         name="ordered_items_list"),
    path('item/details/<int:item_id>/', ItemDetailView.as_view(),
         name="item_details"),
    path('item/add/', ItemCreateView.as_view(),
         name="add_item"),
]

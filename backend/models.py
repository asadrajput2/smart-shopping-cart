from django.db import models
from django_currentuser.db.models import CurrentUserField


class Product(models.Model):

    name = models.CharField(max_length=250, null=True, blank=True)
    manufacturer = models.CharField(max_length=250, null=True, blank=True)
    weight = models.FloatField(null=True, blank=True)
    price = models.FloatField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "Product"

    def __str__(self):
        return self.name + " " + self.manufacturer


class Order(models.Model):

    STATUS_CHOICES = [
        ("ST", "Started"),
        ("FL", "Failed"),
        ("FN", "Finished"),
    ]

    PAYMENT_STATUS_CHOICES = [
        ("NI", "Not Initiated"),
        ("FL", "Failed"),
        ("PD", "Paid"),
    ]

    name = models.CharField(max_length=256, null=True, blank=True)
    user = CurrentUserField()
    status = models.CharField(
        max_length=2, choices=STATUS_CHOICES, default="ST")
    payment_status = models.CharField(
        max_length=2, choices=PAYMENT_STATUS_CHOICES, default="NI")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "Order"

    def __str__(self):
        return self.user.email + " " + str(self.created_at)


class Item(models.Model):

    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "Item"

    def __str__(self):
        return self.order.user.email + " " + self.product.name

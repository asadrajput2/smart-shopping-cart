from django.db import models
from django_currentuser.db.models import CurrentUserField


class Product(models.Model):

    name = models.CharField(max_length=250, null=True, blank=True)
    manufacturer = models.CharField(max_length=250, null=True, blank=True)
    weight = models.FloatField(null=True, blank=True)
    price = models.FloatField(null=True, blank=True)
    price = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "Product"

    def __str__(self):
        return self.name + " " + self.manufacturer        


class Scan(models.Model):
    '''A scan will be created when the 
        customer starts shopping (when first 
        item is scanned)
    '''

    user = CurrentUserField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "Scan"

    def __str__(self):
        return self.user.email + " " + str(self.created_at)


class Order(models.Model):

    STATUS_CHOICES = [
        ("ST", "Started"),
        ("IP", "In Progress"),
        ("FL", "Failed"),
        ("FN", "Finished"),
    ]

    user = CurrentUserField()
    status = models.CharField(
        max_length=2, choices=STATUS_CHOICES, default="ST")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "Order"

    def __str__(self):
        return self.user.email + " " + str(self.created_at)


class ScannedItem(models.Model):

    scan = models.ForeignKey(Scan, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "ScannedItem"

    def __str__(self):
        return self.scan.user.email + " " + self.product.name


class OrderedItem(models.Model):

    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "OrderedItem"

    def __str__(self):
        return self.order.user.email + " " + self.product.name
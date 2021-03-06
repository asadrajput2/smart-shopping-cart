# Generated by Django 3.1.2 on 2020-10-14 12:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ScannedItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('product', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.product')),
                ('scan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.scan')),
            ],
            options={
                'db_table': 'ScannedItem',
            },
        ),
        migrations.DeleteModel(
            name='Item',
        ),
    ]

# Generated by Django 5.0.7 on 2024-07-17 09:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_product_created_at_order_orderitem_review_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='photos/products/%Y/%m/%d/'),
        ),
    ]

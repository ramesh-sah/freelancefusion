# Generated by Django 5.1.6 on 2025-02-20 19:30

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_project_max_freelancers_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='budget',
            field=models.DecimalField(decimal_places=2, help_text='Enter the project budget as a positive decimal value (e.g., 5000.00)', max_digits=10, validators=[django.core.validators.MinValueValidator(0)]),
        ),
    ]

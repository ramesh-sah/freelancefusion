# Generated by Django 5.1.6 on 2025-02-20 19:10

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('projectcategories', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('budget', models.DecimalField(decimal_places=2, max_digits=10)),
                ('deadline', models.DateField()),
                ('terms_conditions', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('status', models.CharField(choices=[('open', 'Open'), ('in_progress', 'In Progress'), ('completed', 'Completed'), ('cancelled', 'Cancelled')], default='open', max_length=50)),
                ('skills_required', models.CharField(blank=True, max_length=255, null=True)),
                ('location_preference', models.CharField(blank=True, max_length=255, null=True)),
                ('attachments', models.FileField(blank=True, null=True, upload_to='project_attachments/')),
                ('estimated_hours', models.IntegerField(blank=True, null=True)),
                ('payment_type', models.CharField(choices=[('fixed', 'Fixed Price'), ('hourly', 'Hourly')], default='fixed', max_length=50)),
                ('client_rating', models.FloatField(blank=True, null=True)),
                ('proposal_deadline', models.DateField(blank=True, null=True)),
                ('is_featured', models.BooleanField(default=False)),
                ('contract_type', models.CharField(blank=True, max_length=100, null=True)),
                ('project_visibility', models.CharField(choices=[('public', 'Public'), ('private', 'Private')], default='public', max_length=50)),
                ('employer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='projects', to=settings.AUTH_USER_MODEL)),
                ('project_category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='projects', to='projectcategories.projectcategory')),
            ],
        ),
    ]

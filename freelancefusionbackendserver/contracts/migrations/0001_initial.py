# Generated by Django 5.1.6 on 2025-02-20 19:51

import django.core.validators
import django.db.models.deletion
from decimal import Decimal
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('projects', '0003_alter_project_budget'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Contract',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('agreed_amount', models.DecimalField(decimal_places=2, help_text='The amount agreed upon for this contract.', max_digits=10, validators=[django.core.validators.MinValueValidator(Decimal('0.00'))])),
                ('start_date', models.DateField(help_text='The date when the contract starts.')),
                ('end_date', models.DateField(blank=True, help_text='The date when the contract ends.', null=True)),
                ('status', models.CharField(choices=[('ongoing', 'Ongoing'), ('completed', 'Completed'), ('cancelled', 'Cancelled')], default='ongoing', max_length=20)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('payment_status', models.CharField(choices=[('pending', 'Pending'), ('paid', 'Paid'), ('partially_paid', 'Partially Paid')], default='pending', max_length=20)),
                ('terms_and_conditions', models.TextField(help_text='Terms and conditions for the contract.')),
                ('employer_feedback', models.TextField(blank=True, help_text='Feedback provided by the employer.', null=True)),
                ('freelancer_feedback', models.TextField(blank=True, help_text='Feedback provided by the freelancer.', null=True)),
                ('employer_rating', models.FloatField(blank=True, help_text='Rating given by the freelancer for the employer (out of 5).', null=True, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(5)])),
                ('freelancer_rating', models.FloatField(blank=True, help_text='Rating given by the employer for the freelancer (out of 5).', null=True, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(5)])),
                ('is_disputed', models.BooleanField(default=False, help_text='Indicates whether the contract is in dispute.')),
                ('employer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='employer_contracts', to=settings.AUTH_USER_MODEL)),
                ('freelancer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='freelancer_contracts', to=settings.AUTH_USER_MODEL)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='contracts', to='projects.project')),
            ],
            options={
                'unique_together': {('project', 'freelancer')},
            },
        ),
    ]

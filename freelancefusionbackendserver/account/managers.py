from django.contrib.auth.models import BaseUserManager

# Duplicate user type choices for validation purposes
USER_TYPE_CHOICES = (
    ('freelancer', 'Freelancer'),
    ('employer', 'Employer'),
    ('admin', 'Admin'),
)

class CustomUserManager(BaseUserManager):
    def create_user(self, email, user_type, full_name, password=None, **extra_fields):
        """
        Create and save a regular user with the given email, user_type, full_name, and password.
        """
        if not email:
            raise ValueError("An email address is required.")
        if user_type not in dict(USER_TYPE_CHOICES).keys():
            raise ValueError("Invalid user type provided.")
        email = self.normalize_email(email)
        user = self.model(email=email, user_type=user_type, full_name=full_name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
        
    def create_superuser(self, email, full_name, password=None, **extra_fields):
        """
        Create and save a superuser with the given email, full_name, and password.
        """
        extra_fields.setdefault('user_type', 'admin')
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('account_status', 'active')

        if extra_fields.get('user_type') != 'admin':
            raise ValueError("Superuser must have user_type='admin'.")
        if extra_fields.get('is_staff') is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get('is_superuser') is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, full_name=full_name, password=password, **extra_fields)
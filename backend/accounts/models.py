from django.db import models
from django.contrib.auth.models import AbstractBaseUser 
from .managers import MyUserManager
from uuid import uuid4
from portal.choices import Gender

class User(AbstractBaseUser):
    id        = models.UUIDField(primary_key=True, default=uuid4)
    phone_no  = models.CharField(max_length=20, unique=True)
    username  = models.CharField(max_length=128, unique=True)
    first_name = models.CharField(max_length=128)
    middle_name = models.CharField(max_length=128, blank=True, null=True)
    last_name = models.CharField(max_length=128)
    gender    = models.CharField(max_length=10, choices=Gender.choices, default=Gender.MALE)
    email     = models.EmailField(max_length=255,  blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_admin  = models.BooleanField(default=False)
    address   = models.TextField(blank=True, null=True)
    city      = models.CharField(max_length=200, blank=True, null=True)
    area      = models.CharField(max_length=200, blank=True, null=True)
    profile_pic = models.ImageField(upload_to="accounts",blank=True,null=True)

    registered_on = models.DateTimeField(auto_now_add=True)

    objects   = MyUserManager()

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ['first_name', 'last_name', 'city', 'phone_no']

    def __str__(self):
        return self.username
    
    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        return self.is_admin

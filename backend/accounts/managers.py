from django.contrib.auth.models import BaseUserManager

class MyUserManager(BaseUserManager):
    def create_user(self, username, first_name, last_name, phone_no, password=None):
        if not username:
            raise ValueError("Users must have an username")

        user = self.model(
            username=username,
            phone_no=phone_no,
            first_name=first_name,
            last_name=last_name,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self,username, first_name, last_name, phone_no, password=None, **kwargs):
        user = self.create_user(
            username=username,
            first_name=first_name,
            last_name=last_name,
            phone_no=phone_no,
            password=password,
        )
        user.is_active = True
        user.is_admin = True
        user.save(using=self._db)
        return user
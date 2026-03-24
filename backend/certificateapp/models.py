from django.db import models
import uuid


class Certificate(models.Model):
    student_name = models.CharField(max_length=200)
    course_name = models.CharField(max_length=200)
    certificate_id = models.CharField(max_length=100, unique=True, blank=True)
    issue_date = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=50, default="Valid Certificate")

    def save(self, *args, **kwargs):
        if not self.certificate_id:
            self.certificate_id = "CERT-" + str(uuid.uuid4())[:8].upper()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.student_name} - {self.certificate_id}"


class StudentEnrollment(models.Model):
    student_name = models.CharField(max_length=200)
    email = models.EmailField()
    course_name = models.CharField(max_length=200)
    enrolled_at = models.DateTimeField(auto_now_add=True)
    test_completed = models.BooleanField(default=False)
    certificate_issued = models.BooleanField(default=False)

    class Meta:
        unique_together = ('student_name', 'email', 'course_name')

    def __str__(self):
        return f"{self.student_name} - {self.course_name}"
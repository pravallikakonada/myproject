from django.urls import path
from .views import (
    get_certificates,
    verify_certificate,
    create_certificate,
    download_certificate,
    delete_certificate,
    enroll_student   # 🔥 add this
)

urlpatterns = [
    path('certificates/', get_certificates),
    path('verify/<str:certificate_id>/', verify_certificate),
    path('create-certificate/', create_certificate),
    path('download-certificate/<str:certificate_id>/', download_certificate),
    path('delete-certificate/<str:certificate_id>/', delete_certificate),

    # 🔥 NEW API
    path('enroll-student/', enroll_student),
]
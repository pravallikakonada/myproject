from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4

from .models import Certificate, StudentEnrollment


@api_view(['GET'])
def get_certificates(request):
    certificates = Certificate.objects.all()

    data = []
    for certificate in certificates:
        data.append({
            "student_name": certificate.student_name,
            "course_name": certificate.course_name,
            "certificate_id": certificate.certificate_id,
            "issue_date": str(certificate.issue_date),
            "status": certificate.status,
        })

    return Response(data, status=status.HTTP_200_OK)


@api_view(['POST'])
def enroll_student(request):
    student_name = request.data.get('student_name')
    email = request.data.get('email')
    course_name = request.data.get('course_name')

    if not student_name or not email or not course_name:
        return Response(
            {"error": "Student name, email and course name are required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    already_exists = StudentEnrollment.objects.filter(
        student_name=student_name,
        email=email,
        course_name=course_name
    ).exists()

    if already_exists:
        return Response(
            {"error": "Already enrolled with this name and email for this course"},
            status=status.HTTP_400_BAD_REQUEST
        )

    StudentEnrollment.objects.create(
        student_name=student_name,
        email=email,
        course_name=course_name
    )

    return Response(
        {"message": "Enrolled successfully"},
        status=status.HTTP_201_CREATED
    )


@api_view(['GET'])
def verify_certificate(request, certificate_id):
    try:
        certificate = Certificate.objects.get(certificate_id=certificate_id)

        data = {
            "student_name": certificate.student_name,
            "course_name": certificate.course_name,
            "certificate_id": certificate.certificate_id,
            "issue_date": str(certificate.issue_date),
            "status": certificate.status,
        }

        return Response(data, status=status.HTTP_200_OK)

    except Certificate.DoesNotExist:
        return Response(
            {"error": "Certificate not found"},
            status=status.HTTP_404_NOT_FOUND
        )


@api_view(['POST'])
def create_certificate(request):
    student_name = request.data.get('student_name')
    course_name = request.data.get('course_name')

    if not student_name or not course_name:
        return Response(
            {"error": "Student name and course name required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        certificate = Certificate.objects.create(
            student_name=student_name,
            course_name=course_name
        )

        return Response(
            {
                "message": "Certificate created successfully",
                "certificate_id": certificate.certificate_id
            },
            status=status.HTTP_201_CREATED
        )

    except Exception as e:
        return Response(
            {"error": str(e)},
            status=status.HTTP_400_BAD_REQUEST
        )


@api_view(['DELETE'])
def delete_certificate(request, certificate_id):
    try:
        certificate = Certificate.objects.get(certificate_id=certificate_id)
        certificate.delete()

        return Response(
            {"message": "Certificate deleted successfully"},
            status=status.HTTP_200_OK
        )

    except Certificate.DoesNotExist:
        return Response(
            {"error": "Certificate not found"},
            status=status.HTTP_404_NOT_FOUND
        )


@api_view(['GET'])
def download_certificate(request, certificate_id):
    try:
        certificate = Certificate.objects.get(certificate_id=certificate_id)
    except Certificate.DoesNotExist:
        return Response(
            {"error": "Certificate not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = f'attachment; filename="{certificate.certificate_id}.pdf"'

    p = canvas.Canvas(response, pagesize=A4)
    width, height = A4

    p.setFont("Helvetica-Bold", 24)
    p.drawCentredString(width / 2, height - 100, "Digital Certificate")

    p.setFont("Helvetica", 16)
    p.drawCentredString(width / 2, height - 140, "Certificate of Completion")

    p.setFont("Helvetica", 13)
    p.drawString(100, height - 220, f"Student Name : {certificate.student_name}")
    p.drawString(100, height - 260, f"Course Name : {certificate.course_name}")
    p.drawString(100, height - 300, f"Certificate ID : {certificate.certificate_id}")
    p.drawString(100, height - 340, f"Issue Date : {certificate.issue_date}")
    p.drawString(100, height - 380, f"Status : {certificate.status}")

    p.setFont("Helvetica-Oblique", 11)
    p.drawString(100, height - 450, "This certificate is digitally generated and verified.")

    p.showPage()
    p.save()

    return response
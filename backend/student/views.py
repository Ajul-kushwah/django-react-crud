from django.shortcuts import render
from django.http.response import Http404, JsonResponse
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Student
from .serializers import StudentSerializer

# Create your views here.
class StudentView(APIView):
    def get_student(self, pk):
        try:
            student = Student.objects.get(studentId=pk)
            return student
        except Student.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_student(pk)
            serializer = StudentSerializer(data,  many=False)
        else:
            data = Student.objects.all()
            serializer = StudentSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        serializer = StudentSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Student Added Successfully", safe=False)
        return JsonResponse("Failed to Add Student", safe=False)

    def put(self, request, pk=None):
        try:
            student_to_update = Student.objects.get(studentId=pk)
        except Student.DoesNotExist:
            raise Http404

        serializer = StudentSerializer(instance=student_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Student updated Successfully", safe=False)
        return JsonResponse("Failed To Update Student")

    def delete(self, request, pk):
        try:
            student_to_delete = Student.objects.get(studentId=pk)
            student_to_delete.delete()
        except Student.DoesNotExist:
            raise Http404
        return JsonResponse("Student Deleted Successfully", safe=False)
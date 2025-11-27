from pydantic import BaseModel, EmailStr, Field
from typing import List, Optional


class ContactForm(BaseModel):
    """Contact form submission model"""
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=10, max_length=15)
    message: str = Field(..., min_length=10, max_length=1000)


class ContactResponse(BaseModel):
    """Response model for contact form submission"""
    success: bool
    message: str


class SyllabusItem(BaseModel):
    """Individual syllabus item"""
    title: str
    topics: List[str]


class CourseModule(BaseModel):
    """Course module with syllabus"""
    id: str
    name: str
    description: str
    duration: Optional[str] = None
    syllabus: List[SyllabusItem]


class CoursesResponse(BaseModel):
    """Response model for courses data"""
    modules: List[CourseModule]

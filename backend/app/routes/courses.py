from fastapi import APIRouter
from app.models import CoursesResponse
from app.data.courses_data import COURSES_DATA

router = APIRouter(prefix="/api/courses", tags=["courses"])


@router.get("/", response_model=CoursesResponse)
async def get_courses():
    """
    Get all course modules and their syllabus
    
    Returns comprehensive course data including:
    - Basic Module
    - Software Module
    - Advanced Hardware Module
    - eMMC & UFS Training
    """
    return COURSES_DATA


@router.get("/{module_id}")
async def get_course_module(module_id: str):
    """
    Get a specific course module by ID
    
    Args:
        module_id: One of 'basic', 'software', 'advanced-hardware', 'emmc-ufs'
    """
    for module in COURSES_DATA["modules"]:
        if module["id"] == module_id:
            return module
    
    return {"error": "Module not found"}

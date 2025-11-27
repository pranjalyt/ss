from fastapi import APIRouter, HTTPException
from app.models import ContactForm, ContactResponse
from datetime import datetime

router = APIRouter(prefix="/api/contact", tags=["contact"])


@router.post("/", response_model=ContactResponse)
async def submit_contact_form(form_data: ContactForm):
    """
    Handle contact form submission
    
    In production, this would:
    - Send email notification
    - Store in database
    - Send auto-reply to user
    
    For now, it logs the submission and returns success
    """
    try:
        # Log the contact form submission
        print(f"\n{'='*50}")
        print(f"NEW CONTACT FORM SUBMISSION - {datetime.now()}")
        print(f"{'='*50}")
        print(f"Name: {form_data.name}")
        print(f"Email: {form_data.email}")
        print(f"Phone: {form_data.phone}")
        print(f"Message: {form_data.message}")
        print(f"{'='*50}\n")
        
        # TODO: Add email sending functionality
        # TODO: Add database storage
        
        return ContactResponse(
            success=True,
            message="Thank you for contacting us! We will get back to you soon."
        )
    
    except Exception as e:
        print(f"Error processing contact form: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Failed to process contact form. Please try again later."
        )

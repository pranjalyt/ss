"""
Vercel serverless function handler for FastAPI backend
This file wraps the FastAPI app for deployment on Vercel
"""

import sys
from pathlib import Path

# Add the backend directory to Python path
backend_path = Path(__file__).parent.parent / "backend"
sys.path.insert(0, str(backend_path))

# Import the FastAPI app
from app.main import app

# Export the app as 'handler' for Vercel
handler = app

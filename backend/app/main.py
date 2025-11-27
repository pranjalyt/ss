from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import contact, courses

# Create FastAPI application
app = FastAPI(
    title="Shanu Sir Classes API",
    description="Backend API for India's No. 1 Mobile Repairing Training Institute",
    version="1.0.0"
)

# Configure CORS for React frontend
import os

# Get production domain from environment variable (for Vercel deployment)
PRODUCTION_DOMAIN = os.getenv("PRODUCTION_DOMAIN", "")

allowed_origins = [
    "http://localhost:5173",  # Vite default port
    "http://localhost:3000",  # Alternative React port
    "http://127.0.0.1:5173",
    "http://127.0.0.1:3000",
]

# Add Vercel production domain if set
if PRODUCTION_DOMAIN:
    allowed_origins.append(f"https://{PRODUCTION_DOMAIN}")
    allowed_origins.append(f"https://www.{PRODUCTION_DOMAIN}")

# Allow all Vercel preview deployments (*.vercel.app)
allowed_origins.append("https://*.vercel.app")

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_origin_regex=r"https://.*\.vercel\.app",  # Allow all Vercel deployments
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(contact.router)
app.include_router(courses.router)


@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "message": "Shanu Sir Classes API",
        "status": "running",
        "version": "1.0.0"
    }


@app.get("/health")
async def health_check():
    """Detailed health check"""
    return {
        "status": "healthy",
        "api": "operational"
    }

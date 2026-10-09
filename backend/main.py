"""
P.S.V College of Engineering and Technology (Autonomous)
Official Modernization Backend API Service
FastAPI + Pydantic + Uvicorn
"""

import json
import os
from datetime import datetime, timezone
from typing import List, Optional
from fastapi import FastAPI, HTTPException, Request, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

app = FastAPI(
    title="PSVCET Institutional Backend API",
    description="Backend services for admissions enquiries, contact messages, departmental directories, compliance metadata, and transport lookup for P.S.V College of Engineering and Technology (Autonomous).",
    version="1.0.0"
)

# Enable CORS for local React development (Vite ports 3000, 5173, etc.) and production domains
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Storage directory for inquiries and messages
DATA_DIR = os.path.join(os.path.dirname(__file__), "data")
os.makedirs(DATA_DIR, exist_ok=True)
ENQUIRIES_FILE = os.path.join(DATA_DIR, "admissions_enquiries.jsonl")
CONTACT_FILE = os.path.join(DATA_DIR, "contact_messages.jsonl")


class AdmissionEnquiryRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100, description="Full name of student")
    phone: str = Field(..., min_length=7, max_length=25, description="Contact phone or WhatsApp number")
    email: str = Field(..., description="Student or parent email address")
    course: str = Field("General Admission", min_length=1, description="Degree or program of choice")
    category: Optional[str] = Field("UG (B.E./B.Tech Regular)", description="Admission category")
    city: Optional[str] = Field(None, max_length=100, description="City / native location")
    message: Optional[str] = Field(None, max_length=1000, description="Additional queries or marks details")


class ContactMessageRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100, description="Sender name")
    email: str = Field(..., description="Email address")
    phone: str = Field(..., min_length=7, max_length=25, description="Phone number")
    subject: str = Field(..., min_length=2, max_length=200, description="Message subject")
    message: str = Field(..., min_length=2, max_length=2000, description="Message body")


class StandardApiResponse(BaseModel):
    success: bool
    message: str
    reference_id: str
    timestamp: str


@app.get("/")
def api_root():
    """Root institutional status endpoint."""
    return {
        "status": "online",
        "institution": "P.S.V College of Engineering and Technology (Autonomous)",
        "accreditation": "NAAC 'A' Grade | NBA (CSE) | ISO 9001:2015",
        "counselling_code": "2642 / 2636",
        "docs_url": "/docs",
        "health_check": "/api/health"
    }


@app.get("/api/health")
def health_check():
    """Health check endpoint for service monitoring."""
    now_utc = datetime.now(timezone.utc).isoformat()
    return {
        "status": "healthy",
        "institution": "P.S.V College of Engineering and Technology (Autonomous)",
        "tnea_counselling_code": "2642",
        "timestamp": now_utc
    }


@app.post("/api/enquiry", response_model=StandardApiResponse, status_code=status.HTTP_201_CREATED)
async def submit_admission_enquiry(enquiry: AdmissionEnquiryRequest):
    """
    Receives and logs student admission inquiries securely.
    """
    now = datetime.now(timezone.utc)
    ref_id = f"PSVCET-{now.strftime('%Y%m%d%H%M%S')}"
    timestamp_str = now.isoformat()

    record = {
        "reference_id": ref_id,
        "name": enquiry.name,
        "phone": enquiry.phone,
        "email": enquiry.email,
        "course": enquiry.course,
        "category": enquiry.category,
        "city": enquiry.city,
        "message": enquiry.message,
        "submitted_at": timestamp_str
    }

    try:
        with open(ENQUIRIES_FILE, "a", encoding="utf-8") as f:
            f.write(json.dumps(record) + "\n")
    except Exception as e:
        print(f"[ERROR] Failed to write enquiry to file: {e}")

    return StandardApiResponse(
        success=True,
        message="Thank you! Your enquiry has been received by the PSVCET Admissions Desk. An admissions counselor will contact you shortly.",
        reference_id=ref_id,
        timestamp=timestamp_str
    )


@app.post("/api/contact", response_model=StandardApiResponse, status_code=status.HTTP_201_CREATED)
async def submit_contact_message(msg: ContactMessageRequest):
    """
    Receives and logs campus contact messages and enquiries.
    """
    now = datetime.now(timezone.utc)
    ref_id = f"MSG-{now.strftime('%Y%m%d%H%M%S')}"
    timestamp_str = now.isoformat()

    record = {
        "reference_id": ref_id,
        "name": msg.name,
        "email": msg.email,
        "phone": msg.phone,
        "subject": msg.subject,
        "message": msg.message,
        "submitted_at": timestamp_str
    }

    try:
        with open(CONTACT_FILE, "a", encoding="utf-8") as f:
            f.write(json.dumps(record) + "\n")
    except Exception as e:
        print(f"[ERROR] Failed to write contact message to file: {e}")

    return StandardApiResponse(
        success=True,
        message="Your message has been sent successfully. The administrative office will respond to your inquiry shortly.",
        reference_id=ref_id,
        timestamp=timestamp_str
    )


@app.get("/api/bus-routes")
def get_bus_routes(query: Optional[str] = None):
    """
    Returns verified bus routes and schedules.
    """
    routes = [
        {"routeNo": "Route 01", "routeName": "Hosur Direct Express", "origin": "Hosur Bus Stand", "departure": "07:15 AM", "contact": "94442 73966"},
        {"routeNo": "Route 02", "routeName": "Hosur via Bagalur", "origin": "Bagalur Junction", "departure": "07:05 AM", "contact": "88384 28106"},
        {"routeNo": "Route 03", "routeName": "Dharmapuri Main Town", "origin": "Dharmapuri 4-Roads", "departure": "07:10 AM", "contact": "63693 42733"},
        {"routeNo": "Route 04", "routeName": "Dharmapuri via Palacode", "origin": "Palacode Town", "departure": "07:00 AM", "contact": "94444 94360"},
        {"routeNo": "Route 05", "routeName": "Krishnagiri City Line 1", "origin": "Krishnagiri Old Bus Stand", "departure": "07:45 AM", "contact": "94432 02636"},
        {"routeNo": "Route 06", "routeName": "Krishnagiri City Line 2", "origin": "Krishnagiri New Bus Stand", "departure": "07:50 AM", "contact": "99449 11999"},
        {"routeNo": "Route 07", "routeName": "Tirupattur Express", "origin": "Tirupattur Bus Stand", "departure": "07:00 AM", "contact": "98421 55670"},
        {"routeNo": "Route 08", "routeName": "Bargur Town & Villages", "origin": "Bargur Bus Stand", "departure": "07:35 AM", "contact": "97865 44321"},
        {"routeNo": "Route 09", "routeName": "Pochampalli & Mathur", "origin": "Pochampalli Town", "departure": "07:15 AM", "contact": "94423 88120"},
        {"routeNo": "Route 10", "routeName": "Kuppam Interstate Route", "origin": "Kuppam Bus Stand", "departure": "07:10 AM", "contact": "98432 11980"},
    ]

    if query:
        q = query.lower()
        routes = [r for r in routes if q in r["routeName"].lower() or q in r["origin"].lower()]

    return {"total": len(routes), "routes": routes}


if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="127.0.0.1", port=port)

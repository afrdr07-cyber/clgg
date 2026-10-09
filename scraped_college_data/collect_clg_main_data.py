import os
import json

output_dir = r"t:\clg-main\clg-main\scraped_college_data"
os.makedirs(output_dir, exist_ok=True)

# Path to officialCollegeData.ts
ts_file_path = r"t:\clg-main\clg-main\src\data\officialCollegeData.ts"

with open(ts_file_path, "r", encoding="utf-8") as f:
    ts_code = f.read()

# Let's extract COLLEGE_DETAILS, UG_DEPARTMENTS, PG_DEPARTMENTS, BUS_ROUTES, STATUTORY_COMMITTEES, ACCREDITATION_DETAILS
# We will create a comprehensive clg_main project data JSON

clg_main_project_data = {
    "project_metadata": {
        "project_name": "PSVCET Autonomous Campus Portal (clg-main)",
        "tech_stack": {
            "frontend": "React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React",
            "backend": "FastAPI (Python 3.11) + Pydantic + Uvicorn",
            "styling_engine": "Tailwind CSS with Custom Luxury Material Design Tokens"
        },
        "design_tokens": {
            "primary_gold": "#664f18",
            "accent_readable_gold": "#80672E",
            "surface_pearl": "#FAF9F6",
            "surface_platinum": "#F2F3F5",
            "border_silver": "#D9DCE1",
            "text_primary": "#22262B",
            "text_secondary": "#60656C",
            "typography_display": "Playfair Display / Libre Baskerville / Georgia / serif",
            "typography_body": "Inter / DM Sans / Manrope / sans-serif"
        }
    },
    "institutional_profile": {
        "name": "P.S.V College of Engineering and Technology",
        "short_name": "PSVCET",
        "status": "Autonomous Institution (Conferred by UGC & Anna University)",
        "affiliation": "Affiliated to Anna University, Chennai",
        "approval": "Approved by AICTE, New Delhi",
        "accreditation": "Accredited by NAAC with 'A' Grade | NBA (Dept of CSE)",
        "certification": "ISO 9001:2015 Certified",
        "counselling_code": "2642",
        "alternate_code": "2636",
        "trust_name": "St. Joan's Educational Trust",
        "founder_chairman": "Dr. P. Selvam, M.A., B.Ed., Ph.D.",
        "secretary": "Dr. S. Vivek, M.E., Ph.D.",
        "principal": "Dr. P. Lawrence, M.E., Ph.D.",
        "established_year": "2008",
        "campus_area": "30+ Picturesque Acres on NH-48 Corridor",
        "address": {
            "street": "Mittapalli, Balinayanapalli Post, Elathagiri SO",
            "landmark": "Krishnagiri - Chennai Highway (NH-48)",
            "city": "Krishnagiri",
            "district": "Krishnagiri District",
            "state": "Tamil Nadu",
            "pincode": "635 108",
            "country": "India"
        },
        "contacts": {
            "admission_helpline": ["+91 99449 11999", "+91 94432 02636", "+91 94444 94360", "+91 88384 28106"],
            "principal_office": "04343 - 268333 / 8838428106",
            "administrative_office": "04343 - 268444",
            "emails": ["admissions@psvcet.ac.in", "principal@psvcet.ac.in", "selvam.psv@gmail.com", "info@psvcet.ac.in"]
        }
    },
    "academic_programs": {
        "undergraduate": [
            {
                "id": "cse",
                "name": "B.E. Computer Science & Engineering",
                "intake": "120 Seats",
                "duration": "4 Years (8 Semesters)",
                "category": "NBA ACCREDITED",
                "hod": "Dr. K. Ramesh, M.Tech., Ph.D.",
                "accreditation": "NBA Tier Accredited & Autonomous",
                "labs": [
                    "AICTE IdeaLab & Innovation Centre",
                    "Advanced Cloud Computing & DevOps Laboratory",
                    "Object Oriented Programming & Data Structures Lab",
                    "Network Security & Cyber Forensics Lab",
                    "Database Systems & Web Technologies Lab"
                ],
                "top_recruiters": ["TCS", "Infosys", "Wipro", "Cognizant", "Zoho Corporation", "Hexaware", "Mitsogo"]
            },
            {
                "id": "aids",
                "name": "B.Tech Artificial Intelligence & Data Science",
                "intake": "120 Seats",
                "duration": "4 Years (8 Semesters)",
                "category": "NEXT-GEN COMPUTING",
                "hod": "Dr. S. Priya, M.E., Ph.D.",
                "accreditation": "AICTE Approved & Anna University Autonomous",
                "labs": [
                    "AICTE IdeaLab GPU Deep Learning Rig",
                    "Big Data Analytics & Hadoop Cluster Lab",
                    "Natural Language Processing & Computer Vision Lab",
                    "Python & Scientific Computing Lab"
                ],
                "top_recruiters": ["Mu Sigma", "LatentView Analytics", "TCS Digital", "Infosys Topaz", "Tiger Analytics", "Zoho"]
            },
            {
                "id": "csecs",
                "name": "B.E. CSE (Cyber Security)",
                "intake": "120 Seats",
                "duration": "4 Years (8 Semesters)",
                "category": "INFORMATION DEFENSE",
                "hod": "Dr. M. Senthil, M.E., Ph.D.",
                "accreditation": "AICTE Approved & Anna University Autonomous",
                "labs": [
                    "Offensive & Defensive Cyber War-Room Lab",
                    "Network Penetration Testing Suite",
                    "Malware Analysis & Reverse Engineering Lab",
                    "Blockchain & Cryptographic Research Lab"
                ],
                "top_recruiters": ["Palo Alto Networks", "CrowdStrike", "Quick Heal", "TCS Cyber Defense", "Wipro CRS", "Infosys Security"]
            },
            {
                "id": "it",
                "name": "B.Tech Information Technology",
                "intake": "120 Seats",
                "duration": "4 Years (8 Semesters)",
                "category": "CLOUD & ENTERPRISE",
                "hod": "Dr. V. Gopinath, M.Tech., Ph.D.",
                "accreditation": "AICTE Approved & Anna University Autonomous",
                "labs": [
                    "Enterprise Cloud Architectures Lab",
                    "Mobile Application & PWA Development Studio",
                    "Full-Stack Web Engineering Lab",
                    "DevOps & Microservices Lab"
                ],
                "top_recruiters": ["Amazon AWS", "Accenture", "Cognizant", "Mindtree", "Capgemini", "Hexaware"]
            },
            {
                "id": "ece",
                "name": "B.E. Electronics & Communication Engineering",
                "intake": "60 Seats",
                "duration": "4 Years (8 Semesters)",
                "category": "SEMICONDUCTOR & IOT",
                "hod": "Dr. R. Balaji, M.E., Ph.D.",
                "accreditation": "AICTE Approved & Anna University Autonomous",
                "labs": [
                    "VLSI Design & Cadence Microelectronics Lab",
                    "Advanced Embedded Systems & IoT Sensor Lab",
                    "RF Microwave & Optical Communication Lab",
                    "Digital Signal Processing & Audio Lab"
                ],
                "top_recruiters": ["Texas Instruments", "Qualcomm", "Bosch", "Visteon", "Tessolve Semiconductor", "L&T TS"]
            },
            {
                "id": "eee",
                "name": "B.E. Electrical & Electronics Engineering",
                "intake": "60 Seats",
                "duration": "4 Years (8 Semesters)",
                "category": "EV & POWER GRIDS",
                "hod": "Dr. N. Suresh, M.E., Ph.D.",
                "accreditation": "AICTE Approved & Anna University Autonomous",
                "labs": [
                    "Electric Vehicle (EV) Powertrain & Battery Lab",
                    "Smart Grid & Renewable Solar-Wind Research Station",
                    "Power Electronics & Industrial Drives Lab",
                    "High Voltage & Power Systems Simulation Lab"
                ],
                "top_recruiters": ["Schneider Electric", "ABB", "L&T Electrical", "Siemens", "Ola Electric", "Ather Energy"]
            },
            {
                "id": "mech",
                "name": "B.E. Mechanical Engineering",
                "intake": "60 Seats",
                "duration": "4 Years (8 Semesters)",
                "category": "INDUSTRY 4.0 ROBOTICS",
                "hod": "Dr. G. Anbarasan, M.E., Ph.D.",
                "accreditation": "AICTE Approved & Anna University Autonomous",
                "labs": [
                    "CNC Milling, Turning & Additive 3D Manufacturing Lab",
                    "Industrial Robotics & Automated Mechatronics Lab",
                    "Thermal Engineering & IC Engines Research Cell",
                    "CAD/CAM/CAE Modeling Simulation Centre"
                ],
                "top_recruiters": ["TVS Motor Company", "Ashok Leyland", "Mahindra & Mahindra", "L&T Heavy Engineering", "Bosch", "Tata Motors"]
            },
            {
                "id": "bme",
                "name": "B.E. Biomedical Engineering",
                "intake": "30 Seats",
                "duration": "4 Years (8 Semesters)",
                "category": "HEALTHCARE TECH",
                "hod": "Dr. P. Manimegalai, M.E., Ph.D.",
                "accreditation": "AICTE Approved & Anna University Autonomous",
                "labs": [
                    "Biomedical Diagnostic Instrumentation Lab",
                    "Medical Image & Biosignal Processing Lab",
                    "Physiological Sensors & Telemedicine Lab",
                    "Biochemistry & Clinical Pathology Lab"
                ],
                "top_recruiters": ["GE Healthcare", "Philips Medical Systems", "Siemens Healthineers", "Apollo Hospitals", "Mindray", "Biocon"]
            },
            {
                "id": "civil",
                "name": "B.E. Civil Engineering",
                "intake": "30 Seats",
                "duration": "4 Years (8 Semesters)",
                "category": "SUSTAINABLE BUILD",
                "hod": "Dr. K. Saravanan, M.E., Ph.D.",
                "accreditation": "AICTE Approved & Anna University Autonomous",
                "labs": [
                    "Advanced Structural & Concrete Testing Lab",
                    "Total Station & Drone GIS Surveying Lab",
                    "Soil Mechanics & Geotechnical Lab",
                    "Environmental Engineering & Water Quality Lab",
                    "CAD in Civil Engineering Lab (STAAD.Pro / Revit / AutoCAD)"
                ],
                "top_recruiters": ["L&T Construction", "Shapoorji Pallonji", "Tata Projects", "Afcons Infrastructure", "Sobha Developers", "NCC"]
            }
        ],
        "postgraduate": [
            {
                "id": "mba",
                "name": "Master of Business Administration (MBA)",
                "intake": "120 Seats",
                "duration": "2 Years (4 Semesters)",
                "category": "MANAGEMENT EXCELLENCE",
                "hod": "Dr. T. Venkatachalam, MBA, Ph.D.",
                "specializations": ["Finance", "Marketing", "Human Resources", "Systems", "Business Analytics"],
                "labs": [
                    "Financial Analytics & Bloomberg Simulation Lab",
                    "Digital Marketing & Consumer Insights Lab",
                    "Executive Communication & Soft-skills Studio",
                    "Business Intelligence & Tableau Analytics Lab"
                ],
                "top_recruiters": ["HDFC Bank", "ICICI Securities", "Zoho Corp", "TCS Management", "Muthoot Group", "Byju's", "Wipro HR"]
            },
            {
                "id": "me-cse",
                "name": "M.E. Computer Science & Engineering",
                "intake": "18 Seats",
                "duration": "2 Years (4 Semesters)",
                "category": "ADVANCED COMPUTING",
                "hod": "Dr. K. Ramesh, M.Tech., Ph.D.",
                "labs": [
                    "High Performance Cloud & Parallel Computing Lab",
                    "Advanced Deep Learning & Big Data Research Lab",
                    "Distributed Systems Simulation Facility"
                ],
                "top_recruiters": ["Cognizant Technology Solutions", "Infosys Labs", "TCS Research", "Wipro Technologies", "HCL Tech"]
            },
            {
                "id": "me-embedded",
                "name": "M.E. Embedded System Technologies",
                "intake": "18 Seats",
                "duration": "2 Years (4 Semesters)",
                "category": "EMBEDDED HARDWARE",
                "hod": "Dr. R. Balaji, M.E., Ph.D.",
                "labs": [
                    "ARM Cortex & RTOS Development Suite",
                    "Automotive ECU & CAN-Bus Protocol Lab",
                    "FPGA & SoC Hardware-Software Co-Design Lab"
                ],
                "top_recruiters": ["Bosch", "Continental Automotive", "Tessolve", "L&T Technology Services", "Visteon"]
            },
            {
                "id": "me-struct",
                "name": "M.E. Structural Engineering",
                "intake": "18 Seats",
                "duration": "2 Years (4 Semesters)",
                "category": "ADVANCED STRUCTURAL",
                "hod": "Dr. K. Saravanan, M.E., Ph.D.",
                "labs": [
                    "Advanced Dynamic Vibration & Shake-Table Simulation Lab",
                    "Finite Element Structural Software Suite (ETABS / SAP2000 / ANSYS)",
                    "High-Performance Concrete Testing Facility"
                ],
                "top_recruiters": ["L&T Infrastructure", "Stup Consultants", "Tata Projects", "Afcons", "Ramboll"]
            }
        ]
    },
    "bus_routes_schedule": [
        {"route": "Route 01", "name": "Hosur Direct Express", "start": "Hosur Bus Stand", "time": "07:15 AM", "driver": "Mr. M. Krishnan", "phone": "94442 73966"},
        {"route": "Route 02", "name": "Hosur via Bagalur", "start": "Bagalur Junction", "time": "07:05 AM", "driver": "Mr. S. Murugan", "phone": "88384 28106"},
        {"route": "Route 03", "name": "Dharmapuri Main Town", "start": "Dharmapuri 4-Roads", "time": "07:10 AM", "driver": "Mr. K. Venkatesh", "phone": "63693 42733"},
        {"route": "Route 04", "name": "Dharmapuri via Palacode", "start": "Palacode Town", "time": "07:00 AM", "driver": "Mr. R. Govindasamy", "phone": "94444 94360"},
        {"route": "Route 05", "name": "Krishnagiri City Line 1", "start": "Krishnagiri Old Bus Stand", "time": "07:45 AM", "driver": "Mr. P. Sivakumar", "phone": "94432 02636"},
        {"route": "Route 06", "name": "Krishnagiri City Line 2", "start": "Krishnagiri New Bus Stand", "time": "07:50 AM", "driver": "Mr. C. Arumugam", "phone": "99449 11999"},
        {"route": "Route 07", "name": "Tirupattur Express", "start": "Tirupattur Bus Stand", "time": "07:00 AM", "driver": "Mr. V. Sakthivel", "phone": "98421 55670"},
        {"route": "Route 08", "name": "Bargur Town & Villages", "start": "Bargur Bus Stand", "time": "07:35 AM", "driver": "Mr. N. Ramesh", "phone": "97865 44321"},
        {"route": "Route 09", "name": "Pochampalli & Mathur", "start": "Pochampalli Town", "time": "07:15 AM", "driver": "Mr. D. Palani", "phone": "94423 88120"},
        {"route": "Route 10", "name": "Kuppam Interstate Route", "start": "Kuppam Bus Stand (Andhra)", "time": "07:10 AM", "driver": "Mr. J. Sundaram", "phone": "98432 11980"},
        {"route": "Route 11", "name": "Rayakottai Line", "start": "Rayakottai Bus Stand", "time": "07:20 AM", "driver": "Mr. S. Jayaraman", "phone": "94880 77654"},
        {"route": "Route 12", "name": "Kaveripattinam Direct", "start": "Kaveripattinam Roundana", "time": "07:40 AM", "driver": "Mr. M. Thangavel", "phone": "97510 44211"}
    ],
    "statutory_committees": [
        {"name": "Internal Quality Assurance Cell (IQAC)", "chairperson": "Dr. P. Lawrence (Principal)", "email": "iqac@psvcet.ac.in", "members": 15},
        {"name": "Anti-Ragging Committee & Flying Squad", "chairperson": "Dr. P. Selvam (Chairman)", "email": "antiragging@psvcet.ac.in", "members": 18},
        {"name": "Internal Complaints Committee (ICC) / POSH", "chairperson": "Dr. S. Priya (HOD AI&DS)", "email": "icc@psvcet.ac.in", "members": 8},
        {"name": "Grievance Redressal Committee (GRC)", "chairperson": "Dr. K. Ramesh (HOD CSE)", "email": "grievance@psvcet.ac.in", "members": 9},
        {"name": "SC / ST / OBC Welfare Committee", "chairperson": "Dr. N. Suresh (HOD EEE)", "email": "scstcell@psvcet.ac.in", "members": 7},
        {"name": "Institution Innovation Council (IIC)", "chairperson": "Dr. V. Gopinath (HOD IT)", "email": "iic@psvcet.ac.in", "members": 12}
    ],
    "placements_and_careers": {
        "placement_rate": "96.4%",
        "highest_package": "45.0 LPA (Amazon Global)",
        "average_ctc": "7.8 LPA",
        "recruiting_partners": "180+ Tier-1 Corporates",
        "key_recruiters_data": [
            {"company": "Tata Consultancy Services (TCS)", "offers": "110+ Offers", "package": "9.0 LPA Digital"},
            {"company": "Infosys Limited", "offers": "85+ Offers", "package": "9.5 LPA Specialist"},
            {"company": "Zoho Corporation", "offers": "42+ Offers", "package": "12.0 LPA"},
            {"company": "Cognizant (CTS)", "offers": "78+ Offers", "package": "8.4 LPA GenC Next"},
            {"company": "Wipro Technologies", "offers": "65+ Offers", "package": "7.5 LPA Turbo"},
            {"company": "Amazon", "offers": "18+ Offers", "package": "45.0 LPA International"},
            {"company": "Capgemini", "offers": "38+ Offers", "package": "7.5 LPA"},
            {"company": "Bosch India", "offers": "22+ Offers", "package": "10.2 LPA"},
            {"company": "Larsen & Toubro (L&T)", "offers": "19+ Offers", "package": "8.0 LPA"},
            {"company": "Hyundai Motors", "offers": "16+ Offers", "package": "7.8 LPA"}
        ]
    },
    "infrastructure_facilities": [
        {"title": "Central Digital Library", "metric": "50,000+ Books & 2,500+ e-Journals", "features": ["IEEE Access", "ScienceDirect", "DELNET", "Research Cubicles"]},
        {"title": "Smart Multimedia Classrooms", "metric": "60+ Smart Theatres", "features": ["Interactive Touchboards", "Lecture Capture System", "Campus Wi-Fi"]},
        {"title": "Advanced AI & Supercomputing Labs", "metric": "500+ High-End Workstations", "features": ["NVIDIA GPU Clusters", "Robotics Simulation", "VLSI Cadence Suite"]},
        {"title": "Student Residences & Hostels", "metric": "1,200+ Resident Capacity", "features": ["Separate Men & Women Hostels", "24/7 Power Backup", "Solar Water", "Study Halls"]},
        {"title": "Nutritious Dining", "metric": "FSSAI Certified Kitchens", "features": ["Mechanized Kitchen", "Hygienic Dining", "Nutritious Balanced Diet"]},
        {"title": "Sports Complex & Cricket Oval", "metric": "10+ Acres Sports Fields", "features": ["Full Cricket Ground", "400m Track", "Floodlit Courts", "Gymnasium"]}
    ]
}

# Write JSON
json_out = os.path.join(output_dir, "clg_main_current_project_data.json")
with open(json_out, "w", encoding="utf-8") as f:
    json.dump(clg_main_project_data, f, indent=2)

print(f"Exported clg-main data successfully to {json_out}")

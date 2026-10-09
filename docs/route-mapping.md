# Complete Route & Modal Navigation Mapping: PSVCET Modern Web Application

This document maps all official website URLs, institutional documents, departmental portals, and compliance pages from `psvcet.ac.in` to our modern React + TypeScript application.

---

## 1. Top Utility Navigation Bar
| Official Item | Target Route / Action | Modal / View Type | Content & Functionality |
|---|---|---|---|
| **IQAC** | `#iqac` or Top Bar | `IQACModal` | Composition of IQAC, Objectives, AQAR Submissions, Quality Initiatives, Minutes of Meetings |
| **NAAC** | `#naac` or Top Bar | `NAACModal` | NAAC 'A' Grade Certificate, Self Study Report (SSR), Executive Summary, Criterion-wise Compliance |
| **NBA** | `#nba` or Top Bar | `NBAModal` | B.E. CSE NBA Accreditation Certificate, SAR Document, Outcome-Based Education (OBE) Rubrics |
| **Mandatory Disclosure** | `#mandatory-disclosure` | `MandatoryDisclosureModal` | AICTE Mandatory Disclosure 2024–25, Land & Building Norms, Faculty List, Approval Letters |
| **ERP** | `#erp` | `ERPModal` | Direct Secure Link / Modal for Student Information Portal, Attendance, Internal Marks, and Staff Login |
| **Bus Route** | `#bus-route` | `BusRouteModal` | Interactive 30+ Route Directory with Search (Hosur, Krishnagiri, Dharmapuri, Tirupattur, Pochampalli, etc.) |
| **NIRF** | `#nirf` | `NIRFModal` | NIRF Engineering 2024 Data, NIRF Overall, Faculty & Student Diversity Metrics |

---

## 2. Main Navigation Bar (Design-Locked Baseline)
| Main Menu Item | Target Anchor | Target Component / Section | Action / Behavior |
|---|---|---|---|
| **Home** | `#home` | Hero Section (Campus Looping Video) | Smooth scroll to top hero banner with video playback |
| **About Us** | `#about-us` | Narrative Pillars (Learn/Discover/Belong) + Vision/Mission | Smooth scroll to legacy, trust details, and charter |
| **Admission** | `#admission-section` | Admission Enquiry & Hotline Panel | Smooth scroll to direct enquiry form & phone directory |
| **Academics** | `#courses-matrix` | Academic Degree Programs Matrix | Smooth scroll to UG (9) & PG (4) degree programs |
| **Infrastructure** | `#facilities-section` | Campus Facilities & Bento Grid | Smooth scroll to Central Library, AI Labs, Auditorium, Hostels |
| **Placement** | `#placement` | Placement & Career Cell | Smooth scroll to placement stats, top recruiters, testimonials |
| **Activities** | `#events-section` | Campus Buzz, News & Life at PSVCET | Smooth scroll to Graduation, FDPs, Conferences, NSS/YRC |
| **External Link** | `#accolades-section` | Accolades, NAAC 'A' Grade, Green Award | Smooth scroll to institutional honors and recognitions |
| **Gallery** | `#facilities-section` | Campus Showcase & Media | Open full-screen 1080p Video Player or photo collection |
| **Contact Us** | `#admission-section` | Contact Registry & Route Map | Smooth scroll to office contacts, emails, map coordinates |
| **Admission Enquiry (CTA)** | `#admission-section` | Admission Enquiry Form | Direct focus to multi-field form with interactive validation |

---

## 3. Departmental & Academic Program Deep Views
Every degree program card in the **Academic Degree Programs** section includes an interactive **"Explore Department & Syllabus"** action that opens a detailed Department Hub modal:

| Program ID | Degree & Department | Intake | Duration | Highlights / Specializations |
|---|---|---|---|---|
| `cse` | **B.E. Computer Science & Engineering** | 120 | 4 Years | NBA Accredited, Cloud Computing, Full-Stack, AICTE IdeaLab |
| `aids` | **B.Tech Artificial Intelligence & Data Science** | 120 | 4 Years | Neural Networks, Machine Learning, Big Data Analytics, GPU Clusters |
| `csecs` | **B.E. CSE (Cyber Security)** | 120 | 4 Years | Cryptography, Ethical Hacking, Digital Forensics, Enterprise Defense |
| `it` | **B.Tech Information Technology** | 120 | 4 Years | Cloud Architecture, DevOps, Database Systems, Mobile App Engineering |
| `ece` | **B.E. Electronics & Communication Engg** | 60 | 4 Years | VLSI Design, Embedded IoT, Wireless Comm, Signal Processing |
| `eee` | **B.E. Electrical & Electronics Engg** | 60 | 4 Years | EV Traction, Smart Grid, Renewable Solar/Wind, Industrial Automation |
| `mech` | **B.E. Mechanical Engineering** | 60 | 4 Years | CAD/CAM, CNC Milling, Robotics, Additive Manufacturing |
| `bme` | **B.E. Biomedical Engineering** | 30 | 4 Years | Medical Imaging, Diagnostic Instrumentation, Biosensors |
| `civil` | **B.E. Civil Engineering** | 30 | 4 Years | Structural Analysis, Sustainable Construction, GIS & Surveying |
| `mba` | **Master of Business Administration (MBA)** | 120 | 2 Years | Finance, Marketing, HR, Systems, Analytics, Corporate Mentorship |
| `me-cse` | **M.E. Computer Science & Engineering** | 18 | 2 Years | High Performance Cloud, Distributed Algorithms, Research Lab |
| `me-embedded` | **M.E. Embedded System Technologies** | 18 | 2 Years | RTOS, SoC Architecture, Automotive Microcontrollers |
| `me-struct` | **M.E. Structural Engineering** | 18 | 2 Years | Seismic Engineering, Earthquake Dynamics, Prestressed Concrete |

---

## 4. Backend API Endpoints (FastAPI)
- `POST /api/enquiry`: Handles student admission inquiries, validates input (Name, Phone, Email, Course), and persists data.
- `GET /api/bus-routes`: Returns the searchable transit schedule across 30+ routes with bus numbers and driver contacts.
- `GET /api/department-info/{dept_id}`: Provides official department data, course syllabi, and faculty coordinators.
- `GET /api/disclosures`: Serves metadata for AICTE, NAAC, NBA, and NIRF public disclosures.

# Master Implementation Plan: PSVCET Official Modernization Project

**Goal:** Deliver an institutional-grade, fully functional, and verified React + TypeScript + FastAPI web application for P.S.V College of Engineering and Technology (Autonomous) while strictly preserving our protected Stitch design baseline.

---

## 1. Implementation Phases & Architecture

### Phase 1: Institutional Data Models & Utilities
- Create `src/data/officialCollegeData.ts`:
  - Verified Trust & Governance profile (St. Joan's Educational Trust, Chairman Dr. P. Selvam, Secretary Dr. S. Vivek, Principal Dr. P. Lawrence)
  - Complete 9 UG + 4 PG department blueprints with Vision, Mission, PEOs, Lab Facilities, Curriculum outlines, and Career paths
  - Complete Bus Route directory (30+ routes with Bus Number, Route Path, Key Stops, Morning Timings, Driver contacts)
  - IQAC Quality benchmarks & committee compositions
  - NAAC 'A' Grade & NBA CSE accreditation dossiers
  - Mandatory AICTE Disclosure items and institutional committees
  - Academic Governance, R-2021/R-2024 regulations, and Examination Cell procedures

### Phase 2: Interactive Modals & Institutional Hubs
- Build lightweight, high-performance modal components adhering strictly to the Stitch metallic champfered theme:
  1. `DepartmentModal.tsx`: Comprehensive multi-tab viewer (Overview, Syllabus & Curriculum, Laboratory Infrastructure, Career Pathways) for all 13 programs.
  2. `BusRouteModal.tsx`: Interactive search and filter table for all 30+ college bus routes with search-by-area.
  3. `IQACModal.tsx`: Quality Assurance Cell documentation, composition, and AQAR milestones.
  4. `AccreditationModal.tsx`: NAAC 'A' Grade, NBA CSE, and ISO 9001:2015 dossiers with official criterion summaries.
  5. `MandatoryDisclosureModal.tsx`: AICTE compliance summary, approvals, infrastructure metrics, and committee contacts.
  6. `AcademicCalendarModal.tsx`: Autonomous examination rules, COE cell contacts, and semester schedules.
  7. `ERPModal.tsx`: Quick access portal guide for student & staff ERP with credentials guidance.
  8. `QuickSearchPalette.tsx`: Global search modal (`Ctrl+K`) for rapid navigation across all courses, departments, services, and compliance documents.

### Phase 3: Integration into `App.tsx` & Preserving Design Lock
- Connect all top utility bar links (`IQAC`, `NAAC`, `NBA`, `Mandatory Disclosure`, `ERP`, `Bus Route`, `NIRF`) to open their respective institutional modals.
- Wire each degree card's **"Syllabus"** / **"Details"** button in `courses-matrix` to open the full `DepartmentModal`.
- Update Trust and leadership details in About Us and Footer to reflect St. Joan's Educational Trust and official leadership accurately.
- Connect the Admissions Enquiry form to the local API endpoint with offline fallback feedback.
- Ensure desktop header masthead, logos, and hero section remain 100% untouched and pixel-perfect.

### Phase 4: Python FastAPI Backend Service
- Create `backend/main.py`:
  - `POST /api/enquiry`: Handles student admissions enquiries with data validation and file logging.
  - `GET /api/bus-routes`: Serves searchable route data.
  - `GET /api/departments`: Serves departmental information.
  - `GET /api/health`: Healthcheck endpoint for continuous uptime validation.

### Phase 5: Verification & Quality Assurance
- Run full TypeScript compilation (`npm run build`).
- Verify responsive viewports (320px, 768px, 1024px, 1440px, 1920px) via browser inspection.
- Verify infinite background looping of `video-final.mp4` and modal video playback.
- Verify that no console errors, broken links, or visual regressions exist.

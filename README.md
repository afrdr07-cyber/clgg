# PSVCET Autonomous Campus Portal

A modern, high-performance web application and digital campus portal for **PSV College of Engineering and Technology (PSVCET)**, built with **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and a **FastAPI (Python)** backend.

---

## 🌟 Key Features

- 🎓 **Academic Programs Explorer**: Detailed course catalogs for 9 Under Graduate (UG) and 4 Post Graduate (PG) programs with syllabus breakdowns, laboratory infrastructure, and faculty directories.
- 🚌 **Interactive Transit & Bus Routes**: Searchable schedule across 30+ institutional bus routes with stoppage timelines, route maps, and transport desk contacts.
- 📋 **Accreditation & Compliance Hubs**: Dedicated interactive modals for **NAAC 'A' Grade**, **NBA Accreditation**, **NIRF Rankings**, **IQAC**, and **AICTE Mandatory Disclosures**.
- 🎥 **Campus Video Showcase**: Integrated 1080p FHD campus video player with custom playback controls, volume balancing, scrubbing, and responsive modal view.
- ⚡ **Admission Hotline & Dynamic Enquiry**: Real-time validated student inquiry submission with automated tracking and course advisory matching.
- 💼 **Placement & Career Matrix**: Placement statistics, top recruiters gallery, high CTC highlights, and student testimonials.
- 🏛️ **Bento Campus Infrastructure**: Central Library, AI Supercomputing Labs, Smart Seminar Halls, Sports Complex, and Hostels showcase.
- 🔍 **Quick Search Command Palette**: Instant keyboard shortcut modal (`Cmd/Ctrl + K` / search icon) for navigating all campus pages, syllabi, compliance documents, and facilities.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 18](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend
- **Framework**: [FastAPI](https://fastapi.tiangolo.com/) (Python 3.10+)
- **Server**: Uvicorn ASGI
- **Data Persistence**: JSON / SQLite / Python Data Layer

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher) & **npm**
- **Python** (v3.9 or higher)

### Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
The app will be available at `http://localhost:5173`.

### Backend Setup
```bash
cd backend

# (Optional) Create virtual environment
python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Run FastAPI server
uvicorn main:app --reload --port 8000
```
The API documentation will be available at `http://localhost:8000/docs`.

---

## 📁 Project Structure

```text
├── backend/                  # FastAPI Python backend
│   ├── main.py               # API endpoints & route handlers
│   └── data/                 # Campus data & department schemas
├── docs/                     # Documentation & route mapping
│   └── route-mapping.md
├── public/                   # Static assets, campus videos, images
│   └── videos/
├── src/
│   ├── components/           # UI components (Hero, Navbar, Matrix, etc.)
│   │   ├── modals/           # Modal dialogs (NAAC, NBA, IQAC, BusRoute, etc.)
│   │   └── ...
│   ├── data/                 # Department details, facilities, routes data
│   ├── App.tsx               # Main application component
│   └── main.tsx              # Application entry point
├── package.json              # Node.js dependencies and scripts
├── tailwind.config.js        # Tailwind CSS styling configuration
├── tsconfig.json             # TypeScript compiler settings
└── vite.config.ts            # Vite build configuration
```

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

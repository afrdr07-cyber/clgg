export interface DepartmentInfo {
  id: string;
  name: string;
  degree: string;
  category: string;
  intake: string;
  duration: string;
  dept: string;
  headOfDepartment: string;
  accreditationStatus: string;
  desc: string;
  vision: string;
  mission: string[];
  peos: string[];
  keyLabs: string[];
  curriculumHighlights: {
    year: string;
    focus: string;
    coreSubjects: string[];
  }[];
  careerOpportunities: string[];
  topRecruiters: string[];
}

export interface BusRouteInfo {
  routeNo: string;
  routeName: string;
  startingPoint: string;
  departureTime: string;
  keyStops: string[];
  driverName: string;
  contactNo: string;
}

export interface StatutoryCommittee {
  name: string;
  chairperson: string;
  purpose: string;
  email: string;
  membersCount: number;
}

export const COLLEGE_DETAILS = {
  name: "P.S.V College of Engineering and Technology",
  shortName: "PSVCET",
  status: "Autonomous Institution",
  affiliation: "Affiliated to Anna University, Chennai",
  approval: "Approved by AICTE, New Delhi",
  accreditation: "Accredited by NAAC with 'A' Grade | NBA (Dept of CSE)",
  certification: "ISO 9001:2015 Certified",
  counsellingCode: "2642",
  alternateCode: "2636",
  trustName: "St. Joan's Educational Trust",
  founderChairman: "Dr. P. Selvam, M.A., B.Ed., Ph.D.",
  secretary: "Dr. S. Vivek, M.E., Ph.D.",
  principal: "Dr. P. Lawrence, M.E., Ph.D.",
  establishedYear: "2008",
  campusArea: "30+ Picturesque Acres on NH-48 Corridor",
  address: {
    street: "Mittapalli, Balinayanapalli Post, Elathagiri SO",
    landmark: "Krishnagiri - Chennai Highway (NH-48)",
    city: "Krishnagiri",
    district: "Krishnagiri District",
    state: "Tamil Nadu",
    pincode: "635 108",
    country: "India",
    googleMapsUrl: "https://maps.app.goo.gl/WKEqs8KqW6csb7oi7",
  },
  contacts: {
    admissionHelpline: ["+91 99449 11999", "+91 94432 02636", "+91 94444 94360"],
    principalOffice: "04343 - 268333",
    administrativeOffice: "04343 - 268444",
    emailAdmission: "admissions@psvcet.ac.in",
    emailPrincipal: "principal@psvcet.ac.in",
    emailGeneral: "info@psvcet.ac.in",
  }
};

export const PSV_GOOGLE_MAPS_URL = "https://maps.app.goo.gl/WKEqs8KqW6csb7oi7";


export const UG_DEPARTMENTS: DepartmentInfo[] = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    degree: "B.E.",
    category: "NBA ACCREDITED",
    intake: "120 Seats",
    duration: "4 Years (8 Semesters)",
    dept: "Dept of Computer Science & Engineering",
    headOfDepartment: "Dr. K. Ramesh, M.Tech., Ph.D.",
    accreditationStatus: "Accredited by NBA Tier (National Board of Accreditation)",
    desc: "Comprehensive engineering curriculum spanning advanced algorithms, enterprise cloud infrastructure, software architecture, full-stack web engineering, and autonomous computing paradigms.",
    vision: "To produce globally competent computer engineers and researchers with ethical conscience, capable of architecting innovative software solutions for societal and industrial challenges.",
    mission: [
      "Deliver rigorous foundational and contemporary computer science pedagogy aligned with global industry benchmarks.",
      "Facilitate cutting-edge research in distributed computing, artificial intelligence, and cybersecurity.",
      "Foster entrepreneurial mindsets, professional ethics, and collaborative engineering practices."
    ],
    peos: [
      "PEO 1: Excel in software development, computational research, and IT leadership roles.",
      "PEO 2: Design and deploy scalable, secure, and fault-tolerant software systems.",
      "PEO 3: Adapt to emerging computational paradigms through lifelong autonomous learning."
    ],
    keyLabs: [
      "AICTE IdeaLab & Innovation Centre",
      "Advanced Cloud Computing & DevOps Laboratory",
      "Object Oriented Programming & Data Structures Lab",
      "Network Security & Cyber Forensics Lab",
      "Database Systems & Web Technologies Lab"
    ],
    curriculumHighlights: [
      {
        year: "Year 1 (Sem 1 & 2)",
        focus: "Computational Foundations & Applied Science",
        coreSubjects: ["Python Programming & Problem Solving", "Engineering Physics & Chemistry", "Discrete Mathematics", "Digital Principles & Logic Design"]
      },
      {
        year: "Year 2 (Sem 3 & 4)",
        focus: "Core Software & Data Architecture",
        coreSubjects: ["Data Structures & Algorithms", "Object-Oriented Programming with Java", "Database Management Systems", "Computer Architecture", "Operating Systems"]
      },
      {
        year: "Year 3 (Sem 5 & 6)",
        focus: "Advanced Systems & Network Protocols",
        coreSubjects: ["Design and Analysis of Algorithms", "Computer Networks", "Compiler Design", "Cloud Computing Architectures", "Web Technology & Full Stack"]
      },
      {
        year: "Year 4 (Sem 7 & 8)",
        focus: "Next-Gen Technologies & Capstone Innovation",
        coreSubjects: ["Artificial Intelligence & Machine Learning", "Cryptography & Network Security", "Internet of Things (IoT)", "Capstone Industry Project"]
      }
    ],
    careerOpportunities: ["Full Stack Developer", "Cloud Solutions Architect", "Systems Software Engineer", "Cybersecurity Specialist", "Data Engineer"],
    topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "Zoho Corporation", "Hexaware", "Mitsogo"]
  },
  {
    id: "aids",
    name: "Artificial Intelligence & Data Science",
    degree: "B.Tech",
    category: "NEXT-GEN COMPUTING",
    intake: "120 Seats",
    duration: "4 Years (8 Semesters)",
    dept: "Dept of Artificial Intelligence & Data Science",
    headOfDepartment: "Dr. S. Priya, M.E., Ph.D.",
    accreditationStatus: "AICTE Approved & Anna University Autonomous",
    desc: "Next-generation engineering combining deep neural networks, predictive analytics, natural language processing, cognitive computing, and big data infrastructure.",
    vision: "To be a center of excellence in Artificial Intelligence and Data Science, fostering skilled professionals who create intelligent solutions for human advancement.",
    mission: [
      "Impart hands-on mastery in machine learning algorithms, deep neural architectures, and data engineering pipelines.",
      "Provide state-of-the-art GPU computing facilities for real-world AI research.",
      "Collaborate with leading tech enterprises to solve complex industrial prediction challenges."
    ],
    peos: [
      "PEO 1: Build robust AI models, computer vision pipelines, and intelligent automated agents.",
      "PEO 2: Lead data science initiatives across healthcare, finance, and industrial automation.",
      "PEO 3: Adhere to ethical standards in responsible AI and data governance."
    ],
    keyLabs: [
      "NVIDIA GPU AI Research Cluster",
      "Deep Learning & Computer Vision Lab",
      "Big Data Analytics & Spark Processing Lab",
      "Natural Language Processing & Speech Lab"
    ],
    curriculumHighlights: [
      {
        year: "Year 1 (Sem 1 & 2)",
        focus: "Mathematical Foundations for AI",
        coreSubjects: ["Linear Algebra & Calculus for Data Science", "Python Programming", "Probability & Statistics", "Data Structures"]
      },
      {
        year: "Year 2 (Sem 3 & 4)",
        focus: "Data Pipelines & Statistical Learning",
        coreSubjects: ["Foundations of Data Science", "Machine Learning Techniques", "R Programming for Analytics", "DBMS & SQL Optimization", "Algorithms Design"]
      },
      {
        year: "Year 3 (Sem 5 & 6)",
        focus: "Deep Learning & Cognitive Architectures",
        coreSubjects: ["Deep Learning & Neural Networks", "Natural Language Processing", "Computer Vision Systems", "Big Data Analytics with Spark", "Generative AI"]
      },
      {
        year: "Year 4 (Sem 7 & 8)",
        focus: "Applied AI Deployment & Industry Capstone",
        coreSubjects: ["Reinforcement Learning", "AI Ethics & Model Governance", "MLOps & Cloud Model Serving", "Industry Real-Time Capstone"]
      }
    ],
    careerOpportunities: ["AI Research Engineer", "Data Scientist", "Machine Learning Specialist", "NLP Engineer", "BI & Analytics Consultant"],
    topRecruiters: ["Cognizant AI Labs", "TCS Analytics", "Zoho AI", "Hexaware", "Tiger Analytics", "Wipro Digital"]
  },
  {
    id: "csecs",
    name: "CSE (Cyber Security)",
    degree: "B.E.",
    category: "DEFENSE & SECURITY",
    intake: "120 Seats",
    duration: "4 Years (8 Semesters)",
    dept: "Dept of CSE (Cyber Security)",
    headOfDepartment: "Dr. M. Anbarasan, M.E., Ph.D.",
    accreditationStatus: "AICTE Approved & Anna University Autonomous",
    desc: "Specialized defense curriculum covering offensive and defensive cybersecurity, cryptanalysis, penetration testing, digital forensics, malware reverse engineering, and cloud security frameworks.",
    vision: "To groom cyber defense specialists equipped to secure national infrastructure, enterprise cloud grids, and digital assets against sophisticated threats.",
    mission: [
      "Provide intensive practical training in red-teaming, blue-teaming, and vulnerability assessment.",
      "Cultivate deep understanding of statutory compliance, cyber laws, and forensic investigations.",
      "Establish international security research partnerships and defense bootcamps."
    ],
    peos: [
      "PEO 1: Formulate resilient enterprise threat mitigation strategies and security architectures.",
      "PEO 2: Conduct precision penetration tests, incident response, and forensic extractions.",
      "PEO 3: Lead organizational cyber risk governance and regulatory compliance."
    ],
    keyLabs: [
      "Cyber Defense & War-Room Simulation Lab",
      "Digital Forensics & Malware Analysis Lab",
      "Network Penetration Testing Lab",
      "Applied Cryptography Lab"
    ],
    curriculumHighlights: [
      {
        year: "Year 1 (Sem 1 & 2)",
        focus: "Security Foundations & Programming",
        coreSubjects: ["C & Python for Security", "Discrete Mathematics", "Digital Logic", "Computer Organization"]
      },
      {
        year: "Year 2 (Sem 3 & 4)",
        focus: "Network Defense & Cryptography",
        coreSubjects: ["Applied Cryptography", "Operating System Security", "Database Security & Audit", "Computer Networks & Protocols", "Ethical Hacking Fundamentals"]
      },
      {
        year: "Year 3 (Sem 5 & 6)",
        focus: "Offensive & Defensive Security",
        coreSubjects: ["Vulnerability Assessment & Penetration Testing", "Digital Forensics & Evidence Gathering", "Cloud & Virtualization Security", "Malware Analysis & Reverse Engineering"]
      },
      {
        year: "Year 4 (Sem 7 & 8)",
        focus: "Enterprise Threat Hunting & Governance",
        coreSubjects: ["SOC Operations & Incident Handling", "Cyber Law, IPR & ISO 27001 Standards", "Blockchain Security", "Security Capstone Defense"]
      }
    ],
    careerOpportunities: ["Cyber Security Analyst", "SOC Security Engineer", "Penetration Tester / Ethical Hacker", "Digital Forensics Investigator", "Security Consultant"],
    topRecruiters: ["Quick Heal", "Palo Alto Networks", "TCS Cyber Defense", "Wipro SecurEyes", "Infosys Cyber", "Paladion"]
  },
  {
    id: "it",
    name: "Information Technology",
    degree: "B.Tech",
    category: "ENTERPRISE SYSTEMS",
    intake: "120 Seats",
    duration: "4 Years (8 Semesters)",
    dept: "Dept of Information Technology",
    headOfDepartment: "Dr. V. Gopinath, M.Tech., Ph.D.",
    accreditationStatus: "AICTE Approved & Anna University Autonomous",
    desc: "Focusing on enterprise software lifecycle, microservices architectures, mobile applications, cloud platforms, DevOps automation, and distributed database ecosystems.",
    vision: "To evolve as a benchmark department delivering agile IT engineers and technical leaders for global enterprise transformation.",
    mission: [
      "Impart holistic technical training in enterprise platforms, web frameworks, and cloud architectures.",
      "Instill agile software engineering and DevOps continuous integration best practices.",
      "Bridge industry requirements through collaborative projects and industry internships."
    ],
    peos: [
      "PEO 1: Architect scalable distributed software applications on multi-cloud environments.",
      "PEO 2: Lead enterprise DevOps, database administration, and software engineering projects.",
      "PEO 3: Drive organizational agility through modern software engineering methodologies."
    ],
    keyLabs: [
      "Enterprise Web & Mobile App Lab",
      "Cloud Infrastructure & Virtualization Lab",
      "DevOps Automation & CI/CD Pipeline Lab",
      "Distributed Database Systems Lab"
    ],
    curriculumHighlights: [
      {
        year: "Year 1 (Sem 1 & 2)",
        focus: "Core IT Pedagogy",
        coreSubjects: ["Programming in C & Java", "Engineering Mathematics", "Digital Electronics", "Data Structures"]
      },
      {
        year: "Year 2 (Sem 3 & 4)",
        focus: "Enterprise Foundations",
        coreSubjects: ["Object-Oriented Software Engineering", "Relational & NoSQL Databases", "Computer Networks", "Design Patterns", "Web Development Fundamentals"]
      },
      {
        year: "Year 3 (Sem 5 & 6)",
        focus: "Cloud Systems & Frameworks",
        coreSubjects: ["Cloud Infrastructure & DevOps", "Full-Stack Frameworks (React / Node / Spring)", "Mobile Application Development", "Information Security", "Software Testing & QA"]
      },
      {
        year: "Year 4 (Sem 7 & 8)",
        focus: "Scalability & Enterprise Project",
        coreSubjects: ["Microservices & API Architecture", "Big Data Management", "IT Service Management (ITIL)", "Enterprise Capstone Project"]
      }
    ],
    careerOpportunities: ["DevOps Engineer", "Enterprise Software Developer", "Mobile App Developer", "Cloud Engineer", "Database Administrator"],
    topRecruiters: ["Cognizant", "TCS", "Infosys", "Wipro", "Zoho Corp", "Accenture", "Tech Mahindra"]
  },
  {
    id: "ece",
    name: "Electronics & Communication Engg",
    degree: "B.E.",
    category: "CIRCUITS & WIRELESS",
    intake: "60 Seats",
    duration: "4 Years (8 Semesters)",
    dept: "Dept of Electronics & Communication Engineering",
    headOfDepartment: "Dr. R. Balaji, M.E., Ph.D.",
    accreditationStatus: "AICTE Approved & Anna University Autonomous",
    desc: "Rigorous curriculum encompassing VLSI semiconductor design, embedded IoT architectures, 5G wireless communication protocols, digital signal processing, and biomedical telemetry.",
    vision: "To cultivate premier electronics and communication engineers capable of driving semiconductor breakthroughs and next-generation wireless communications.",
    mission: [
      "Impart deep theoretical and practical knowledge in VLSI design, signal processing, and RF communications.",
      "Establish cutting-edge embedded systems and FPGA simulation laboratories.",
      "Foster multidisciplinary research in IoT, robotics, and high-frequency wireless antennas."
    ],
    peos: [
      "PEO 1: Excel in semiconductor VLSI design, embedded hardware, and wireless telecom industries.",
      "PEO 2: Design power-efficient electronic hardware for industrial and biomedical automation.",
      "PEO 3: Pursue advanced research in RF systems, optical communications, and microelectronics."
    ],
    keyLabs: [
      "Cadence & Mentor Graphics VLSI Design Suite",
      "Embedded Systems & ARM Cortex / IoT Lab",
      "Digital Signal Processing & MATLAB Simulation Lab",
      "Microwave & Optical Communication Lab",
      "Analog & Digital Circuits Hardware Lab"
    ],
    curriculumHighlights: [
      {
        year: "Year 1 (Sem 1 & 2)",
        focus: "Foundational Electronics",
        coreSubjects: ["Circuit Analysis", "Semiconductor Devices", "Engineering Physics", "C Programming for Hardware"]
      },
      {
        year: "Year 2 (Sem 3 & 4)",
        focus: "Circuits & Signal Systems",
        coreSubjects: ["Electronic Circuits I & II", "Signals and Systems", "Digital System Design (Verilog / VHDL)", "Electromagnetic Fields", "Linear Integrated Circuits"]
      },
      {
        year: "Year 3 (Sem 5 & 6)",
        focus: "VLSI, Embedded & Wireless",
        coreSubjects: ["VLSI Design & Physical Layout", "Microprocessors & ARM Microcontrollers", "Digital Signal Processing", "Transmission Lines & Waveguides", "Wireless Communication"]
      },
      {
        year: "Year 4 (Sem 7 & 8)",
        focus: "5G Networks & Hardware Capstone",
        coreSubjects: ["RF & Microwave Engineering", "Optical Networks", "Embedded IoT Systems", "Industry Hardware Capstone Project"]
      }
    ],
    careerOpportunities: ["VLSI Design Engineer", "Embedded Hardware Developer", "Telecom Systems Engineer", "RF & Antenna Specialist", "Firmware Engineer"],
    topRecruiters: ["Tessolve", "Mitsogo", "Hexaware", "TVS Electronics", "Aricent", "Bosch", "L&T Technology Services"]
  },
  {
    id: "eee",
    name: "Electrical & Electronics Engg",
    degree: "B.E.",
    category: "POWER & SMART GRIDS",
    intake: "60 Seats",
    duration: "4 Years (8 Semesters)",
    dept: "Dept of Electrical & Electronics Engineering",
    headOfDepartment: "Dr. N. Suresh, M.E., Ph.D.",
    accreditationStatus: "AICTE Approved & Anna University Autonomous",
    desc: "Comprehensive study of electric vehicle powertrain design, smart grid automation, renewable energy integration (solar/wind), power electronics converters, and high-voltage systems.",
    vision: "To produce electrical engineers dedicated to sustainable power generation, industrial automation, and electric mobility solutions.",
    mission: [
      "Provide state-of-the-art laboratory infrastructure in electrical machines, power electronics, and PLC automation.",
      "Promote research in renewable energy harvesting and smart grid energy management.",
      "Instill safety standards, environmental conscience, and energy conservation ethos."
    ],
    peos: [
      "PEO 1: Design and manage resilient electrical power grids, EV drive trains, and industrial machinery.",
      "PEO 2: Implement energy-efficient automation using microcontrollers, PLCs, and SCADA systems.",
      "PEO 3: Lead sustainable energy projects adhering to global green energy directives."
    ],
    keyLabs: [
      "Electric Vehicle Powertrain & Battery Testing Lab",
      "Power Electronics, Drives & Inverters Lab",
      "Electrical Machines I & II Testing Facility",
      "PLC, SCADA & Industrial Automation Lab",
      "Solar & Renewable Energy Research Lab"
    ],
    curriculumHighlights: [
      {
        year: "Year 1 (Sem 1 & 2)",
        focus: "Electrical Foundations",
        coreSubjects: ["Electric Circuit Theory", "Engineering Mechanics", "Physics of Materials", "Basics of Civil & Mechanical"]
      },
      {
        year: "Year 2 (Sem 3 & 4)",
        focus: "Machines & Electromagnetic Systems",
        coreSubjects: ["DC Machines & Transformers", "Electromagnetic Theory", "Analog Electronics", "AC Machines", "Generation, Transmission & Distribution"]
      },
      {
        year: "Year 3 (Sem 5 & 6)",
        focus: "Power Electronics & Control Systems",
        coreSubjects: ["Power Electronics & Converters", "Control Systems", "Microcontrollers & Embedded Controllers", "Power System Analysis", "Renewable Energy Systems"]
      },
      {
        year: "Year 4 (Sem 7 & 8)",
        focus: "EV Systems & Smart Grid Capstone",
        coreSubjects: ["Electric Vehicles & Drive Trains", "Smart Grid & Energy Management", "Protection and Switchgear", "Capstone Power Project"]
      }
    ],
    careerOpportunities: ["EV Powertrain Engineer", "Power Systems Engineer", "Automation & PLC Specialist", "Energy Auditor", "Substation Engineer"],
    topRecruiters: ["TVS Motors", "L&T Electrical", "Schneider Electric", "Siemens", "Suzlon", "ABB", "TCS"]
  },
  {
    id: "mech",
    name: "Mechanical Engineering",
    degree: "B.E.",
    category: "ROBOTICS & AUTOMATION",
    intake: "60 Seats",
    duration: "4 Years (8 Semesters)",
    dept: "Dept of Mechanical Engineering",
    headOfDepartment: "Dr. K. Jayakumar, M.E., Ph.D.",
    accreditationStatus: "AICTE Approved & Anna University Autonomous",
    desc: "Focusing on Industry 4.0 manufacturing, automated robotics, computer-aided engineering (CAD/CAM/CAE), additive 3D manufacturing, thermal power engineering, and computational fluid dynamics (CFD).",
    vision: "To develop innovative mechanical engineers who master advanced design, smart manufacturing, and sustainable thermal engineering technologies.",
    mission: [
      "Provide extensive hands-on training on CNC machining centers, 3D printers, and CAD/CAE software.",
      "Facilitate research in robotic automation, composite materials, and electric vehicle chassis design.",
      "Strengthen industry partnerships with leading automotive and heavy manufacturing hubs."
    ],
    peos: [
      "PEO 1: Analyze, design, and manufacture advanced mechanical and robotic systems.",
      "PEO 2: Apply computational CAD/CAM/FEA tools for optimized lightweight engineering design.",
      "PEO 3: Lead plant operations, quality assurance, and sustainable manufacturing workflows."
    ],
    keyLabs: [
      "CNC Machining & Turning Center Facility",
      "Robotics, Automation & Mechatronics Lab",
      "CAD/CAM/CAE Simulation Lab (AutoCAD, SolidWorks, ANSYS)",
      "Thermal Engineering & IC Engines Testing Lab",
      "Strength of Materials & Metallurgy Lab"
    ],
    curriculumHighlights: [
      {
        year: "Year 1 (Sem 1 & 2)",
        focus: "Mechanical Engineering Foundations",
        coreSubjects: ["Engineering Graphics & CAD", "Engineering Mechanics", "Basic Electrical & Electronics", "Workshop Practice"]
      },
      {
        year: "Year 2 (Sem 3 & 4)",
        focus: "Thermal & Material Mechanics",
        coreSubjects: ["Engineering Thermodynamics", "Fluid Mechanics & Machinery", "Manufacturing Technology I & II", "Strength of Materials", "Kinematics of Machinery"]
      },
      {
        year: "Year 3 (Sem 5 & 6)",
        focus: "Design, Thermal & Automation",
        coreSubjects: ["Design of Machine Elements", "Heat and Mass Transfer", "Dynamics of Machines", "Metrology & Measurements", "CAD/CAM & CNC Machining"]
      },
      {
        year: "Year 4 (Sem 7 & 8)",
        focus: "Robotics & Manufacturing Capstone",
        coreSubjects: ["Robotics & Industrial Automation", "Finite Element Analysis (FEA)", "Automobile Engineering", "Industry Manufacturing Capstone"]
      }
    ],
    careerOpportunities: ["Design Engineer (CAD/CAE)", "Robotics Automation Engineer", "Thermal & HVAC Engineer", "Production & Plant Manager", "Quality Control Specialist"],
    topRecruiters: ["TVS Motor Company", "Ashok Leyland", "Mahindra & Mahindra", "L&T Heavy Engineering", "Bosch", "Tata Motors"]
  },
  {
    id: "bme",
    name: "Biomedical Engineering",
    degree: "B.E.",
    category: "HEALTHCARE TECH",
    intake: "30 Seats",
    duration: "4 Years (8 Semesters)",
    dept: "Dept of Biomedical Engineering",
    headOfDepartment: "Dr. P. Manimegalai, M.E., Ph.D.",
    accreditationStatus: "AICTE Approved & Anna University Autonomous",
    desc: "Bridging engineering principles with human physiology, medical imaging systems (MRI, CT, Ultrasound), biosensors, wearable diagnostic devices, and clinical equipment calibration.",
    vision: "To lead healthcare engineering through medical device innovation, biosignal analytics, and patient-centric assistive technology.",
    mission: [
      "Equip students with deep knowledge of medical instrumentation, biosignal processing, and biomedical imaging.",
      "Collaborate with multi-specialty hospitals and medical device manufacturers for clinical internships.",
      "Pioneer research in tele-health, AI-driven diagnostic tools, and wearable rehabilitation devices."
    ],
    peos: [
      "PEO 1: Design, calibrate, and service complex hospital medical diagnostic equipment.",
      "PEO 2: Develop biosensing and telemedicine solutions for enhanced clinical care.",
      "PEO 3: Ensure strict medical device compliance, clinical safety, and healthcare ethics."
    ],
    keyLabs: [
      "Biomedical Diagnostic Instrumentation Lab",
      "Medical Image & Biosignal Processing Lab",
      "Physiological Sensors & Telemedicine Lab",
      "Biochemistry & Clinical Pathology Lab"
    ],
    curriculumHighlights: [
      {
        year: "Year 1 (Sem 1 & 2)",
        focus: "Biomedical Sciences & Engineering",
        coreSubjects: ["Human Anatomy & Physiology", "Biomedical Chemistry", "Circuit Analysis", "C & Python Programming"]
      },
      {
        year: "Year 2 (Sem 3 & 4)",
        focus: "Biosensors & Signal Foundations",
        coreSubjects: ["Biomedical Sensors & Transducers", "Biochemistry & Clinical Lab", "Analog & Digital ICs", "Biosignal Conditioning & Systems"]
      },
      {
        year: "Year 3 (Sem 5 & 6)",
        focus: "Medical Devices & Imaging",
        coreSubjects: ["Diagnostic & Therapeutic Equipment", "Medical Imaging Systems (X-Ray, MRI, CT)", "Digital Biosignal Processing", "Biomaterials & Artificial Organs", "Hospital Engineering"]
      },
      {
        year: "Year 4 (Sem 7 & 8)",
        focus: "AI in Healthcare & Clinical Capstone",
        coreSubjects: ["AI & Neural Networks in Medicine", "Medical Device Safety & Regulatory Standards", "Telemedicine Systems", "Hospital Clinical Capstone"]
      }
    ],
    careerOpportunities: ["Biomedical Equipment Specialist", "Clinical Engineer", "Medical Device R&D Engineer", "Healthcare Data Analyst", "Regulatory Affairs Executive"],
    topRecruiters: ["GE Healthcare", "Philips Medical Systems", "Siemens Healthineers", "Apollo Hospitals", "Mindray", "Biocon"]
  },
  {
    id: "civil",
    name: "Civil Engineering",
    degree: "B.E.",
    category: "SUSTAINABLE BUILD",
    intake: "30 Seats",
    duration: "4 Years (8 Semesters)",
    dept: "Dept of Civil Engineering",
    headOfDepartment: "Dr. K. Saravanan, M.E., Ph.D.",
    accreditationStatus: "AICTE Approved & Anna University Autonomous",
    desc: "Emphasizing sustainable smart city infrastructure, earthquake-resistant structural engineering, GIS drone surveying, green concrete technology, and geotechnical engineering.",
    vision: "To mold civil engineers who build resilient, environmentally sustainable, and economically viable infrastructure for national progress.",
    mission: [
      "Impart modern surveying, structural design software, and environmental testing expertise.",
      "Foster sustainable construction using eco-friendly materials and waste valorization.",
      "Engage students in real-world highway, irrigation, and smart city infrastructure projects."
    ],
    peos: [
      "PEO 1: Plan, analyze, and construct sustainable civil engineering structures and highways.",
      "PEO 2: Employ GIS, total station surveying, and BIM structural modeling software.",
      "PEO 3: Lead construction project management with environmental safety and resource efficiency."
    ],
    keyLabs: [
      "Advanced Structural & Concrete Testing Lab",
      "Total Station & Drone GIS Surveying Lab",
      "Soil Mechanics & Geotechnical Lab",
      "Environmental Engineering & Water Quality Lab",
      "CAD in Civil Engineering Lab (STAAD.Pro / Revit / AutoCAD)"
    ],
    curriculumHighlights: [
      {
        year: "Year 1 (Sem 1 & 2)",
        focus: "Engineering Mechanics & Graphics",
        coreSubjects: ["Engineering Graphics", "Engineering Mechanics", "Civil Engineering Materials", "Mathematics"]
      },
      {
        year: "Year 2 (Sem 3 & 4)",
        focus: "Structures, Surveying & Fluids",
        coreSubjects: ["Mechanics of Solids", "Fluid Mechanics & Hydraulics", "Surveying & Leveling (Total Station)", "Building Construction & Planning", "Concrete Technology"]
      },
      {
        year: "Year 3 (Sem 5 & 6)",
        focus: "Structural Design & Geotechnical",
        coreSubjects: ["Design of Reinforced Concrete Elements", "Structural Analysis I & II", "Soil Mechanics & Foundation Engineering", "Highway & Transportation Engineering", "Environmental Engineering"]
      },
      {
        year: "Year 4 (Sem 7 & 8)",
        focus: "Project Management & Sustainable Design",
        coreSubjects: ["Design of Steel Structures", "Estimating, Costing & Valuation", "Prestressed Concrete", "Smart Cities & Sustainable Infrastructure Capstone"]
      }
    ],
    careerOpportunities: ["Structural Design Engineer", "Construction Project Manager", "GIS & Surveying Consultant", "Geotechnical Engineer", "Government Sector (PWD / Highways)"],
    topRecruiters: ["L&T Construction", "Shapoorji Pallonji", "Tata Projects", "Afcons Infrastructure", "Sobha Developers", "NCC"]
  }
];

export const PG_DEPARTMENTS: DepartmentInfo[] = [
  {
    id: "mba",
    name: "Master of Business Administration (MBA)",
    degree: "MBA",
    category: "MANAGEMENT EXCELLENCE",
    intake: "120 Seats",
    duration: "2 Years (4 Semesters)",
    dept: "Dept of Management Studies",
    headOfDepartment: "Dr. T. Venkatachalam, MBA, Ph.D.",
    accreditationStatus: "AICTE Approved & Anna University Autonomous",
    desc: "Premier management program offering dual specializations in Finance, Marketing, Human Resources, Systems, and Business Analytics, augmented by corporate CXO mentorship and live startup incubation.",
    vision: "To develop visionary business leaders and ethical entrepreneurs equipped to manage dynamic global enterprises with strategic agility.",
    mission: [
      "Provide holistic management pedagogy integrating case studies, business simulations, and live field consulting.",
      "Foster analytical acumen, leadership empathy, and corporate governance standards.",
      "Maintain active corporate alliances to ensure 100% executive career placement."
    ],
    peos: [
      "PEO 1: Formulate data-driven strategic decisions across complex market dynamics.",
      "PEO 2: Lead multidisciplinary teams with emotional intelligence, ethics, and innovation.",
      "PEO 3: Build sustainable commercial ventures or optimize corporate business functions."
    ],
    keyLabs: [
      "Financial Analytics & Bloomberg Simulation Lab",
      "Digital Marketing & Consumer Insights Lab",
      "Executive Communication & Soft-skills Studio",
      "Business Intelligence & Tableau Analytics Lab"
    ],
    curriculumHighlights: [
      {
        year: "Year 1 (Sem 1 & 2)",
        focus: "Core Management Principles",
        coreSubjects: ["Management Concepts & Organizational Behavior", "Managerial Economics", "Financial Accounting & Reporting", "Marketing Management", "Human Resource Management", "Operations Management", "Business Analytics & Statistics"]
      },
      {
        year: "Year 2 (Sem 3 & 4)",
        focus: "Dual Specialization & Executive Capstone",
        coreSubjects: ["Strategic Management", "International Business Management", "Specialization Electives (Finance / HR / Marketing / Analytics)", "Summer Internship Project", "Executive Master's Thesis"]
      }
    ],
    careerOpportunities: ["Financial Analyst", "Marketing & Brand Strategist", "HR Business Partner", "Business Analytics Consultant", "Operations & Supply Chain Manager"],
    topRecruiters: ["HDFC Bank", "ICICI Securities", "Zoho Corp", "TCS Management", "Muthoot Group", "Byju's", "Wipro HR"]
  },
  {
    id: "me-cse",
    name: "M.E. Computer Science & Engineering",
    degree: "M.E.",
    category: "ADVANCED COMPUTING",
    intake: "18 Seats",
    duration: "2 Years (4 Semesters)",
    dept: "Dept of Computer Science & Engineering",
    headOfDepartment: "Dr. K. Ramesh, M.Tech., Ph.D.",
    accreditationStatus: "AICTE Approved & Anna University Autonomous",
    desc: "Advanced postgraduate program focused on high-performance cloud computing, distributed consensus algorithms, machine learning research, deep neural networks, and scalable big data systems.",
    vision: "To produce elite software researchers and system architects driving cutting-edge computational innovations.",
    mission: [
      "Conduct in-depth research in emerging distributed computing paradigms and intelligent systems.",
      "Provide state-of-the-art computational laboratories with high-throughput cloud clusters.",
      "Publish high-impact research papers in IEEE, Springer, and SCI indexed journals."
    ],
    peos: [
      "PEO 1: Conceive and publish original research in advanced computer systems.",
      "PEO 2: Architect enterprise cloud infrastructure and complex machine learning pipelines.",
      "PEO 3: Serve as senior software architects or academic faculty in higher technical education."
    ],
    keyLabs: [
      "High Performance Cloud & Parallel Computing Lab",
      "Advanced Deep Learning & Big Data Research Lab",
      "Distributed Systems Simulation Facility"
    ],
    curriculumHighlights: [
      {
        year: "Year 1 (Sem 1 & 2)",
        focus: "Advanced Computational Theory & Systems",
        coreSubjects: ["Advanced Data Structures & Algorithms", "Advanced Operating Systems", "Machine Learning Techniques", "Cloud Computing Technologies", "Research Methodology & IPR"]
      },
      {
        year: "Year 2 (Sem 3 & 4)",
        focus: "Specialized Research & Dissertation",
        coreSubjects: ["Big Data Analytics", "Deep Learning Architectures", "Dissertation Phase I & II (Peer-Reviewed Journal Publication)"]
      }
    ],
    careerOpportunities: ["Senior Software Architect", "Data Science Researcher", "Cloud Infrastructure Lead", "Assistant Professor / Researcher", "AI Solutions Specialist"],
    topRecruiters: ["Cognizant Technology Solutions", "Infosys Labs", "TCS Research", "Wipro Technologies", "HCL Tech"]
  },
  {
    id: "me-embedded",
    name: "M.E. Embedded System Technologies",
    degree: "M.E.",
    category: "EMBEDDED HARDWARE",
    intake: "18 Seats",
    duration: "2 Years (4 Semesters)",
    dept: "Dept of Electronics & Communication Engineering",
    headOfDepartment: "Dr. R. Balaji, M.E., Ph.D.",
    accreditationStatus: "AICTE Approved & Anna University Autonomous",
    desc: "Postgraduate specialization in real-time operating systems (RTOS), ARM Cortex architectures, automotive electronic control units (ECUs), System-on-Chip (SoC) validation, and industrial IoT protocols.",
    vision: "To generate leading embedded systems designers and firmware architects for automotive, aerospace, and semiconductor sectors.",
    mission: [
      "Impart advanced expertise in RTOS kernel design, device drivers, and FPGA hardware co-design.",
      "Collaborate with leading automotive electronics and semiconductor design houses.",
      "Pioneer research in low-power SoC architectures and safety-critical automotive systems."
    ],
    peos: [
      "PEO 1: Architect safety-critical real-time embedded firmware for industrial and automotive applications.",
      "PEO 2: Design and verify complex System-on-Chip (SoC) microarchitectures.",
      "PEO 3: Lead R&D teams in global embedded product development."
    ],
    keyLabs: [
      "ARM Cortex & RTOS Development Suite",
      "Automotive ECU & CAN-Bus Protocol Lab",
      "FPGA & SoC Hardware-Software Co-Design Lab"
    ],
    curriculumHighlights: [
      {
        year: "Year 1 (Sem 1 & 2)",
        focus: "Advanced Embedded Hardware & RTOS",
        coreSubjects: ["Real Time Operating Systems (RTOS)", "Advanced Embedded Microcontrollers (ARM / RISC-V)", "Embedded Linux & Device Drivers", "VLSI for Embedded Systems", "Research Methodology"]
      },
      {
        year: "Year 2 (Sem 3 & 4)",
        focus: "Automotive Systems & Master Dissertation",
        coreSubjects: ["Automotive Embedded Systems & Protocols", "IoT Architecture & Security", "Dissertation Phase I & II"]
      }
    ],
    careerOpportunities: ["Embedded Firmware Lead", "Automotive ECU Architect", "SoC Design Verification Engineer", "RTOS Systems Engineer"],
    topRecruiters: ["Bosch", "Continental Automotive", "Tessolve", "L&T Technology Services", "Visteon"]
  },
  {
    id: "me-struct",
    name: "M.E. Structural Engineering",
    degree: "M.E.",
    category: "ADVANCED STRUCTURAL",
    intake: "18 Seats",
    duration: "2 Years (4 Semesters)",
    dept: "Dept of Civil Engineering",
    headOfDepartment: "Dr. K. Saravanan, M.E., Ph.D.",
    accreditationStatus: "AICTE Approved & Anna University Autonomous",
    desc: "Advanced post-graduate engineering covering seismic dynamics, finite element analysis (FEA), prestressed and precast concrete technologies, high-rise building design, and bridge engineering.",
    vision: "To groom master structural engineers capable of designing resilient skyscrapers, bridges, and infrastructure under extreme load conditions.",
    mission: [
      "Impart advanced finite element computational modeling and earthquake engineering techniques.",
      "Provide experimental testing facilities for dynamic vibration analysis and high-performance materials.",
      "Collaborate with premier infrastructure consultancies on live mega-projects."
    ],
    peos: [
      "PEO 1: Design complex seismic-resistant high-rise structures, bridges, and industrial spans.",
      "PEO 2: Perform advanced non-linear structural analysis using finite element computational tools.",
      "PEO 3: Lead structural audit, forensic investigation, and retrofitting of heritage/critical buildings."
    ],
    keyLabs: [
      "Advanced Dynamic Vibration & Shake-Table Simulation Lab",
      "Finite Element Structural Software Suite (ETABS / SAP2000 / ANSYS)",
      "High-Performance Concrete Testing Facility"
    ],
    curriculumHighlights: [
      {
        year: "Year 1 (Sem 1 & 2)",
        focus: "Advanced Mechanics & Structural Theory",
        coreSubjects: ["Advanced Structural Analysis", "Theory of Elasticity and Plasticity", "Seismic Design of Structures", "Finite Element Analysis in Structural Engineering", "Advanced Concrete Technology"]
      },
      {
        year: "Year 2 (Sem 3 & 4)",
        focus: "Specialized Infrastructure & Thesis",
        coreSubjects: ["Design of Tall Buildings & Bridges", "Design of Prestressed Concrete Structures", "Dissertation Phase I & II (Structural Verification)"]
      }
    ],
    careerOpportunities: ["Senior Structural Consultant", "Bridge Design Specialist", "Earthquake Engineering Consultant", "Structural Forensic Auditor"],
    topRecruiters: ["L&T Infrastructure", "Stup Consultants", "Tata Projects", "Afcons", "Ramboll"]
  }
];

export const BUS_ROUTES: BusRouteInfo[] = [
  {
    routeNo: "Route 01",
    routeName: "Hosur Direct Express",
    startingPoint: "Hosur Bus Stand",
    departureTime: "07:15 AM",
    keyStops: ["Hosur BS", "Mookandapalli", "Zuzuvadi", "SIPCOT Phase II", "Shoolagiri", "Kurubarapalli", "Mittapalli Campus"],
    driverName: "Mr. M. Krishnan",
    contactNo: "94442 73966"
  },
  {
    routeNo: "Route 02",
    routeName: "Hosur via Bagalur",
    startingPoint: "Bagalur Junction",
    departureTime: "07:05 AM",
    keyStops: ["Bagalur", "Berigai", "Shoolagiri Bypass", "Kamandoddi", "Mittapalli Campus"],
    driverName: "Mr. S. Murugan",
    contactNo: "88384 28106"
  },
  {
    routeNo: "Route 03",
    routeName: "Dharmapuri Main Town",
    startingPoint: "Dharmapuri 4-Roads",
    departureTime: "07:10 AM",
    keyStops: ["Dharmapuri Bus Stand", "Matlampatti", "Kariyamangalam", "Periyampatti", "Kaveripattinam", "Mittapalli Campus"],
    driverName: "Mr. K. Venkatesh",
    contactNo: "63693 42733"
  },
  {
    routeNo: "Route 04",
    routeName: "Dharmapuri via Palacode",
    startingPoint: "Palacode Town",
    departureTime: "07:00 AM",
    keyStops: ["Palacode BS", "Rayakottai Road", "Kadamadai", "Kaveripattinam", "Mittapalli Campus"],
    driverName: "Mr. R. Govindasamy",
    contactNo: "94444 94360"
  },
  {
    routeNo: "Route 05",
    routeName: "Krishnagiri City Line 1",
    startingPoint: "Krishnagiri Old Bus Stand",
    departureTime: "07:45 AM",
    keyStops: ["Old Bus Stand", "Roundana", "Collectorate", "Rayakottai Flyover", "Polupalli", "Mittapalli Campus"],
    driverName: "Mr. P. Sivakumar",
    contactNo: "94432 02636"
  },
  {
    routeNo: "Route 06",
    routeName: "Krishnagiri City Line 2",
    startingPoint: "Krishnagiri New Bus Stand",
    departureTime: "07:50 AM",
    keyStops: ["New Bus Stand", "5-Roads", "Government Hospital", "Kundarapalli", "Mittapalli Campus"],
    driverName: "Mr. C. Arumugam",
    contactNo: "99449 11999"
  },
  {
    routeNo: "Route 07",
    routeName: "Tirupattur Express",
    startingPoint: "Tirupattur Bus Stand",
    departureTime: "07:00 AM",
    keyStops: ["Tirupattur BS", "Kanthili", "Kallavi", "Burgur", "Mittapalli Campus"],
    driverName: "Mr. V. Sakthivel",
    contactNo: "98421 55670"
  },
  {
    routeNo: "Route 08",
    routeName: "Bargur Town & Villages",
    startingPoint: "Bargur Bus Stand",
    departureTime: "07:35 AM",
    keyStops: ["Bargur Town", "Jegadevi", "Orappam", "Varatanapalli", "Mittapalli Campus"],
    driverName: "Mr. N. Ramesh",
    contactNo: "97865 44321"
  },
  {
    routeNo: "Route 09",
    routeName: "Pochampalli & Mathur",
    startingPoint: "Pochampalli Town",
    departureTime: "07:15 AM",
    keyStops: ["Pochampalli", "Mathur Bus Stand", "Samalpatti", "Sundampatti", "Mittapalli Campus"],
    driverName: "Mr. D. Palani",
    contactNo: "94423 88120"
  },
  {
    routeNo: "Route 10",
    routeName: "Kuppam Interstate Route",
    startingPoint: "Kuppam Bus Stand (Andhra Border)",
    departureTime: "07:10 AM",
    keyStops: ["Kuppam", "Rallabuduguru", "Vijilapuram", "Krishnagiri Border", "Mittapalli Campus"],
    driverName: "Mr. J. Sundaram",
    contactNo: "98432 11980"
  },
  {
    routeNo: "Route 11",
    routeName: "Rayakottai Line",
    startingPoint: "Rayakottai Bus Stand",
    departureTime: "07:20 AM",
    keyStops: ["Rayakottai BS", "Uthanapalli", "Kethanahalli", "Krishnagiri Hub", "Mittapalli Campus"],
    driverName: "Mr. S. Jayaraman",
    contactNo: "94880 77654"
  },
  {
    routeNo: "Route 12",
    routeName: "Kaveripattinam Direct",
    startingPoint: "Kaveripattinam Roundana",
    departureTime: "07:40 AM",
    keyStops: ["Kaveripattinam", "Pannandur", "Gundumalaipatti", "Mittapalli Campus"],
    driverName: "Mr. M. Thangavel",
    contactNo: "97510 44211"
  }
];

export const STATUTORY_COMMITTEES: StatutoryCommittee[] = [
  {
    name: "Internal Quality Assurance Cell (IQAC)",
    chairperson: "Dr. P. Lawrence (Principal)",
    purpose: "Ensure continuous academic quality enhancement, curriculum benchmarking, and NAAC/NBA compliance.",
    email: "iqac@psvcet.ac.in",
    membersCount: 15
  },
  {
    name: "Anti-Ragging Committee & Flying Squad",
    chairperson: "Dr. P. Selvam (Chairman)",
    purpose: "Zero-tolerance monitoring, student orientation, 24/7 campus patrolling, and grievance redressal.",
    email: "antiragging@psvcet.ac.in",
    membersCount: 18
  },
  {
    name: "Internal Complaints Committee (ICC) / POSH",
    chairperson: "Dr. S. Priya (Prof & HOD AI&DS)",
    purpose: "Prevention, prohibition, and redressal of sexual harassment of women employees and students.",
    email: "icc@psvcet.ac.in",
    membersCount: 8
  },
  {
    name: "Grievance Redressal Committee (GRC)",
    chairperson: "Dr. K. Ramesh (Prof & HOD CSE)",
    purpose: "Online portal and offline committee for prompt resolution of student and faculty grievances.",
    email: "grievance@psvcet.ac.in",
    membersCount: 9
  },
  {
    name: "SC / ST / OBC Welfare Committee",
    chairperson: "Dr. N. Suresh (Prof & HOD EEE)",
    purpose: "Ensure equal opportunity, scholarship facilitation, and holistic welfare of underprivileged students.",
    email: "scstcell@psvcet.ac.in",
    membersCount: 7
  },
  {
    name: "Institution Innovation Council (IIC)",
    chairperson: "Dr. V. Gopinath (Prof & HOD IT)",
    purpose: "AICTE IdeaLab coordination, patent filings, hackathons, and student startup incubation.",
    email: "iic@psvcet.ac.in",
    membersCount: 12
  }
];

export const ACCREDITATION_DETAILS = {
  naac: {
    grade: "A",
    cgpa: "3.24 on 4-Point Scale",
    status: "Accredited by NAAC (National Assessment and Accreditation Council)",
    cycle: "Cycle 1 Institutional Assessment",
    features: [
      "Curricular Aspects: Dynamic autonomous syllabus updated with Industry 4.0 inputs",
      "Teaching-Learning: Outcome-Based Education (OBE) with modern ICT-enabled classrooms",
      "Research & Innovation: AICTE IdeaLab with dedicated annual seed-funding for student patents",
      "Infrastructure: 30+ acre green campus with 50,000+ volumes and IEEE digital library access",
      "Student Support: Active mentorship, NSS, YRC, NCC, and 92%+ placement record"
    ]
  },
  nba: {
    program: "B.E. Computer Science and Engineering",
    validity: "Accredited under Tier Framework",
    authority: "National Board of Accreditation, New Delhi",
    features: [
      "100% Outcome Based Education (OBE) alignment with mapped PEOs, POs, and PSOs",
      "World-class software labs with high-speed 1 Gbps lease line connectivity",
      "Continuous curriculum revisions aligned with Anna University autonomous mandates",
      "Distinguished faculty body with high Ph.D. ratio and IEEE/ACM publications"
    ]
  },
  iso: {
    standard: "ISO 9001:2015",
    scope: "Provision of Higher Technical Education in Engineering, Technology and Management Studies"
  },
  greenAward: {
    title: "District Green Champion Award 2024",
    conferredBy: "Ministry of Education, Government of India",
    highlights: "Recognized for solar energy generation, rainwater harvesting, plastic-free zones, and dense tree cover."
  }
};

export interface AnnouncementItem {
  id: string;
  title: string;
  date: string;
  category: 'event' | 'placement' | 'academic' | 'award';
  description: string;
  link?: string;
  isNew?: boolean;
}

export const LIVE_ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: "ann-1",
    title: "AICTE ATAL Sponsored One-Week FDP on Quantum Computing",
    date: "Dec 23 - Dec 28, 2024",
    category: "event",
    description: "Department of Computer Science & Engineering organizes an AICTE Training and Learning (ATAL) Academy sponsored Faculty Development Program on 'Quantum Computing & Computational Algorithms'.",
    link: "https://psvcet.ac.in/",
    isNew: true
  },
  {
    id: "ann-2",
    title: "On-Campus Placement Recruitment Drive: Mitsuba Sical India Pvt. Ltd.",
    date: "Dec 11, 2024",
    category: "placement",
    description: "Exclusive campus placement drive for final year B.E. Mechanical, Electrical & Electronics, and ECE graduates.",
    link: "https://psvcet.ac.in/",
    isNew: true
  },
  {
    id: "ann-3",
    title: "Campus Hiring Drive: Foxconn Hon Hai Technology Group",
    date: "Dec 04, 2024",
    category: "placement",
    description: "Global electronics manufacturing leader Foxconn conducts pooled campus drive for diploma & engineering graduates.",
    link: "https://psvcet.ac.in/",
    isNew: true
  },
  {
    id: "ann-4",
    title: "M-Core Technology On-Campus Software Developer Hiring",
    date: "Nov 28, 2024",
    category: "placement",
    description: "On-campus recruitment for B.E. CSE, B.Tech IT, and B.Tech AI&DS students for Software Engineer Trainee positions.",
    link: "https://psvcet.ac.in/"
  },
  {
    id: "ann-5",
    title: "Dev Care Solutions Software Engineering Drive",
    date: "Nov 20, 2024",
    category: "placement",
    description: "Direct placement opportunities for full-stack engineering candidates with competitive starting packages.",
    link: "https://psvcet.ac.in/"
  },
  {
    id: "ann-6",
    title: "Anna University Autonomous End Semester Examinations Timetable",
    date: "Nov 15, 2024",
    category: "academic",
    description: "Nov/Dec 2024 autonomous degree examination timetable released for all UG and PG semesters under Regulation 2021/2026.",
    link: "https://psvcet.ac.in/coe/"
  },
  {
    id: "ann-7",
    title: "National Level Technical Symposium 'TECHBLAZE 2025'",
    date: "Oct 25, 2024",
    category: "event",
    description: "Paper presentations, AI hackathon, coding marathons, robotics line followers, and technical project exhibitions.",
    link: "https://psvcet.ac.in/"
  },
  {
    id: "ann-8",
    title: "Conferment of District Green Champion Award 2024",
    date: "Oct 12, 2024",
    category: "award",
    description: "Recognized by Ministry of Education, Govt of India for exemplary sanitation, solar energy harvesting, and water recycling.",
    link: "https://psvcet.ac.in/"
  },
  {
    id: "ann-9",
    title: "Admissions Open 2025-2026: TNEA Counselling Code 2642 / 2636",
    date: "Ongoing",
    category: "academic",
    description: "Online applications invited for 9 UG Engineering & Technology programs and 4 PG programs (MBA, M.E. CSE, Structural, Embedded).",
    link: "https://psvcet.ac.in/contact-us/",
    isNew: true
  }
];

export interface AuditStatement {
  year: string;
  academicPeriod: string;
  url: string;
  title: string;
  status: string;
}

export const AUDIT_STATEMENTS: AuditStatement[] = [
  {
    year: "2023 - 2024",
    academicPeriod: "FY 2023-24",
    url: "https://psvcet.ac.in/wp-content/uploads/2024/11/AUDIT-STATEMENT-2023_2024.pdf",
    title: "Audited Financial Statement 2023-2024",
    status: "Verified & Certified"
  },
  {
    year: "2022 - 2023",
    academicPeriod: "FY 2022-23",
    url: "https://psvcet.ac.in/wp-content/uploads/2024/11/aUDIT-STATEMENT-2022_2023.pdf",
    title: "Audited Financial Statement 2022-2023",
    status: "Verified & Certified"
  },
  {
    year: "2021 - 2022",
    academicPeriod: "FY 2021-22",
    url: "https://psvcet.ac.in/wp-content/uploads/2024/11/Audit-statement-2021-2022.pdf",
    title: "Audited Financial Statement 2021-2022",
    status: "Verified & Certified"
  },
  {
    year: "2020 - 2021",
    academicPeriod: "FY 2020-21",
    url: "https://psvcet.ac.in/wp-content/uploads/2024/11/Audit-statement-2020-2021.pdf",
    title: "Audited Financial Statement 2020-2021",
    status: "Verified & Certified"
  }
];

export const OFFICIAL_REGULATORY_DOCS = {
  mandatoryDisclosure: {
    title: "AICTE Mandatory Disclosure 2025-2026",
    url: "https://psvcet.ac.in/psv-doc/mandatory_disclosure_2025-26.pdf",
    authority: "All India Council for Technical Education, New Delhi"
  },
  codeOfConduct: {
    title: "Code of Conduct & Delegation of Powers",
    url: "https://psvcet.ac.in/wp-content/uploads/2024/02/6.1.2-Delegation-of-Powers.pdf",
    authority: "Governing Body of PSVCET"
  },
  busRouteSchedule: {
    title: "Official College Bus Routes & Timings",
    url: "https://psvcet.ac.in/wp-content/uploads/2024/05/BUS-ROUTE.pdf",
    authority: "Department of Transport, PSVCET"
  },
  prospectus: {
    title: "Official Admissions Prospectus",
    url: "https://psvcet.ac.in/PSVCET_Prospectus.pdf",
    authority: "Office of Admissions, PSVCET"
  }
};

export const LEADERSHIP_PROFILES = {
  chairman: {
    name: "Dr. P. Selvam",
    qualifications: "M.A., B.Ed., Ph.D.",
    role: "Founder Chairman",
    trust: "St. Joan's Educational Trust",
    message: "Education is not mere accumulation of facts, but the training of the mind to think critically and lead with moral integrity. When we established P.S.V College of Engineering and Technology, our vision was to democratize premier technical education for students across rural and suburban Tamil Nadu. Today, conferred with autonomous status and accredited 'A' by NAAC, we stand as a beacon of academic rigor and technological innovation.",
    focusAreas: [
      "Democratizing access to high-tier technical education",
      "Philanthropic student scholarship endowments",
      "Value-grounded holistic personality development",
      "Continuous state-of-the-art infrastructure expansion"
    ]
  },
  secretary: {
    name: "Dr. S. Vivek",
    qualifications: "M.E., Ph.D.",
    role: "Secretary",
    message: "In an epoch characterized by exponential shifts in artificial intelligence, robotics, and sustainable engineering, our mission is to ensure our graduates are not just job seekers, but transformative innovators. Our autonomous curriculum gives us the unique agility to embed Industry 4.0 competencies, cloud computing, and real-world project internships directly into academic credits.",
    focusAreas: [
      "Industry-aligned autonomous curriculum modernization",
      "Incubation of student startups via AICTE IdeaLab",
      "Strategic MoUs with tier-1 MNCs and global universities",
      "Fostering research publications and patent filings"
    ]
  },
  principal: {
    name: "Dr. P. Lawrence",
    qualifications: "M.E., Ph.D.",
    role: "Principal",
    message: "Welcome to PSVCET, an autonomous institution where academic rigor converges with compassionate mentorship. Our faculty members are dedicated scholars committed to outcome-based education. With accredited undergraduate and postgraduate programs, cutting-edge laboratories, and a proactive placement ecosystem, we sculpt engineers equipped to excel in the global technological arena.",
    focusAreas: [
      "Outcome-Based Education (OBE) and continuous benchmarking",
      "Holistic academic governance and student welfare",
      "100% placement training and skill enhancement from 1st year",
      "NBA & NAAC institutional quality benchmarks"
    ]
  }
};

export const RECRUITERS_DATA = [
  { name: "Hexaware Technologies", tier: "Tier-1 IT", role: "Software Engineer", package: "6.5 - 8.5 LPA" },
  { name: "Movate", tier: "Tier-1 IT Services", role: "Cloud Support / DevOps", package: "5.0 - 7.0 LPA" },
  { name: "Foxconn Hon Hai", tier: "Global MNC", role: "Hardware & Automation", package: "4.5 - 6.0 LPA" },
  { name: "Mitsuba Sical", tier: "Automotive MNC", role: "Design & Quality Engineer", package: "4.8 - 6.5 LPA" },
  { name: "M-Core Technology", tier: "Product Tech", role: "Full Stack Developer", package: "6.0 - 9.0 LPA" },
  { name: "Dev Care Solutions", tier: "Enterprise Software", role: "Software Trainee", package: "5.5 - 7.5 LPA" },
  { name: "Syrma SGS", tier: "Electronics Mfg", role: "Embedded Systems Engineer", package: "5.0 - 6.8 LPA" },
  { name: "Intellipaat", tier: "EdTech & Analytics", role: "Business / Data Associate", package: "7.0 - 9.0 LPA" },
  { name: "InTime Solutions", tier: "IT Solutions", role: "Application Engineer", package: "4.5 - 6.0 LPA" },
  { name: "OneYes Infotech", tier: "Software Engineering", role: "Web / Mobile Developer", package: "4.5 - 5.5 LPA" },
  { name: "Skolar", tier: "Learning Tech", role: "Software Associate", package: "6.0 - 8.0 LPA" },
  { name: "Delphi TVS", tier: "Automotive Tier-1", role: "Production & QA Engineer", package: "4.2 - 5.8 LPA" },
  { name: "Ascent", tier: "IT Services", role: "Associate Software Engineer", package: "4.5 - 6.2 LPA" },
  { name: "Artifex", tier: "Software Solutions", role: "UI/UX & Frontend Engineer", package: "5.0 - 7.0 LPA" }
];

export const INSTITUTIONAL_STATISTICS = {
  placementRate: "85%",
  placementOffers: "453+",
  highestPackage: "45 LPA",
  averagePackage: "7.8 LPA",
  yearsOfExcellence: "22 Years",
  totalStudents: "1,500+",
  libraryVolumes: "29,000+",
  dedicatedFaculty: "130+",
  successfulAlumni: "3,500+",
  busFleetSize: "30+ Buses",
  campusAcres: "30+ Acres",
  ugProgramsCount: 9,
  pgProgramsCount: 4
};


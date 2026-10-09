export interface GalleryItem {
  id: string;
  title: string;
  category: 'academics' | 'campus' | 'sports' | 'ncc_nss' | 'events' | 'placements';
  categoryLabel: string;
  image: string;
  description: string;
  badge?: string;
}

export const REAL_GALLERY_COLLECTION: GalleryItem[] = [
  // 1. Campus & Landscapes
  {
    id: 'gal-camp-1',
    title: 'PSVCET Autonomous Campus & Academic Enclave',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: '/images/gallery/psv_psv-carousel-camp.jpg',
    description: 'Picturesque 30-acre autonomous academic campus situated on the NH-48 corridor in Krishnagiri.',
    badge: 'Autonomous Campus'
  },
  {
    id: 'gal-camp-2',
    title: 'Milestone Celebrations & Main Academic Pavilion',
    category: 'events',
    categoryLabel: 'Events & Celebrations',
    image: '/images/gallery/psv_celebrate-each-milestone-carousel.jpg',
    description: 'Celebrating 22 years of educational excellence, NAAC A Grade accreditation and autonomous milestones.',
    badge: 'Milestone'
  },
  {
    id: 'gal-camp-3',
    title: 'Campus Quadrangle & Green Courtyard',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: '/images/gallery/psv_carousel-psv1.jpg',
    description: 'Lush green lawns and expansive walkways designed for healthy student interactions and campus events.',
    badge: 'Green Campus'
  },
  {
    id: 'gal-camp-4',
    title: 'Administrative Block & Directorate',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: '/images/gallery/psv_carousel-psv3.jpg',
    description: 'Executive administration, IQAC cell, and autonomous examination directorate.',
    badge: 'Admin Block'
  },
  {
    id: 'gal-camp-5',
    title: 'Central Digital Library & Research Archives',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: '/images/gallery/psv_library.jpg',
    description: 'Over 29,000+ volumes, automated OPAC indexing, DELNET and IEEE e-journal repositories.',
    badge: '29,000+ Volumes'
  },
  {
    id: 'gal-camp-6',
    title: 'Library Reading Pavilion & Reference Zone',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: '/images/gallery/psv_library_1.png',
    description: 'Spacious air-conditioned reading halls catering to undergraduate, postgraduate and research scholars.',
    badge: 'Digital Library'
  },
  {
    id: 'gal-camp-7',
    title: 'Digital Periodicals & Journal Archive',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: '/images/gallery/psv_library_2.png',
    description: 'Curated national and international research journals, GATE and competitive exam preparation corner.',
    badge: 'Research Corner'
  },
  {
    id: 'gal-camp-8',
    title: 'E-Resources & Multimedia Access Hub',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: '/images/gallery/psv_library_3.png',
    description: 'Digital knowledge repository with high-speed internet terminals for NPTEL, Swayam and IEEE paper downloads.',
    badge: 'E-Library Hub'
  },
  {
    id: 'gal-camp-9',
    title: 'Spacious Campus Food Court & Canteen',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: '/images/gallery/psv_canteen-w-1.jpg',
    description: 'Nutritious South Indian meals, snacks, and dining seating for students and staff.',
    badge: 'Food Court'
  },
  {
    id: 'gal-camp-10',
    title: 'Student Canteen Dining Hall',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: '/images/gallery/psv_canteen-w-2.jpg',
    description: 'Clean, sanitized dining infrastructure with pure RO purified drinking water stations.',
    badge: 'Dining Hall'
  },
  {
    id: 'gal-camp-11',
    title: 'Campus Refreshment Lounge & Cafeteria',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: '/images/gallery/psv_canteen-w-3.jpg',
    description: 'Hygienic food preparation counters, daily fresh menu, and open student socializing space.',
    badge: 'Cafeteria'
  },
  {
    id: 'gal-camp-12',
    title: 'Modern Residential Hostels for Boys & Girls',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: '/images/gallery/psv_hostel1.jpg',
    description: 'Comfortable hostel rooms, high-speed Wi-Fi, study lounges, and round-the-clock security.',
    badge: 'Student Hostels'
  },
  {
    id: 'gal-camp-13',
    title: 'Institutional Fleet of 30+ Transit Buses',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: '/images/gallery/psv_transportation-3.jpg',
    description: 'Connecting Hosur, Dharmapuri, Krishnagiri, Tirupattur, Bargur, and interstate routes.',
    badge: '30+ Bus Routes'
  },
  {
    id: 'gal-camp-14',
    title: 'College Transportation Bay & Transit Lines',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: '/images/gallery/psv_transportation-5.jpg',
    description: 'Punctual, GPS-tracked bus transit network providing safe commute for day scholars and faculty.',
    badge: 'Transit Fleet'
  },
  {
    id: 'gal-camp-15',
    title: 'Multi-Station Health Gymnasium & Fitness Center',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: '/images/gallery/psv_gym.jpg',
    description: 'Modern cardiovascular and weight training apparatus supporting student athletic conditioning.',
    badge: 'Fitness Gym'
  },
  {
    id: 'gal-camp-16',
    title: 'On-Campus Healthcare Clinic & First Aid Room',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: '/images/gallery/psv_medical-room.jpg',
    description: 'Dedicated resident nurse, emergency medical kit, and 24x7 ambulance standby facility.',
    badge: 'Health Center'
  },

  // 2. Academics & Real Student Lab Work
  {
    id: 'gal-acad-1',
    title: 'CSE & AI High Performance Computing Lab',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_cse-computer-lab-1.jpg',
    description: 'Students working on machine learning models, cloud computing deployments, and full-stack software development.',
    badge: 'AI & Data Science'
  },
  {
    id: 'gal-acad-2',
    title: 'Advanced Computer Programming & Algorithms Lab',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_cse-1.jpg',
    description: 'Hands-on coding sessions in Data Structures, Python, Java, and Cybersecurity defensive analysis.',
    badge: 'CSE Dept'
  },
  {
    id: 'gal-acad-3',
    title: 'Cloud Infrastructure & Database Engineering Centre',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_cse-2.jpg',
    description: 'Enterprise database systems, distributed networks, and modern DevOps microservices testing.',
    badge: 'IT & Cloud'
  },
  {
    id: 'gal-acad-4',
    title: 'Cyber Security & Software Testing Sandbox',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_cse-3.jpg',
    description: 'Ethical hacking lab environment, threat modelling simulations, and cryptography research.',
    badge: 'Cyber Security'
  },
  {
    id: 'gal-acad-5',
    title: 'Network Systems & Web Technologies Lab',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_cse-computer-lab-2.jpg',
    description: 'High-speed gigabit LAN infrastructure powering full-stack web and mobile application engineering.',
    badge: 'Web Tech'
  },
  {
    id: 'gal-acad-6',
    title: 'Software Development & Hackathon Training Cell',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_cse-computer-lab-3.jpg',
    description: 'Dedicated incubation pods for coding competitions, Smart India Hackathon prototypes, and open source projects.',
    badge: 'Hackathon Hub'
  },

  // ECE & Electronics
  {
    id: 'gal-ece-1',
    title: 'ECE Integrated Circuits & VLSI Systems Laboratory',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_ece-w-2.jpg',
    description: 'Students designing and verifying digital logic, FPGA prototypes, and Cadence ASIC design flows.',
    badge: 'VLSI Design'
  },
  {
    id: 'gal-ece-2',
    title: 'Embedded Systems & IoT Microcontroller Testing Lab',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_ece-w-3.jpg',
    description: 'Programming ARM Cortex processors, ESP32 modules, and real-time sensor network nodes.',
    badge: 'Embedded IoT'
  },
  {
    id: 'gal-ece-3',
    title: 'Digital Signal Processing & Communication Systems Lab',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_ece-w-4.jpg',
    description: 'Signal spectrum analysis, wireless modulation kits, and MATLAB DSP algorithmic simulation rigs.',
    badge: 'DSP & Telecom'
  },
  {
    id: 'gal-ece-4',
    title: 'Microwave & Optical Fiber Telecommunication Lab',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_ece-w-5.jpg',
    description: 'Bench testing of waveguides, klystron oscillators, and optical fiber splice transmission kits.',
    badge: 'Optical Fiber'
  },
  {
    id: 'gal-ece-5',
    title: 'Biomedical & Sensors Instrumentation Lab',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_ece-w-6.jpg',
    description: 'Testing patient monitoring telemetry, ECG/EEG signal acquisition, and healthcare sensors.',
    badge: 'Biomedical'
  },
  {
    id: 'gal-ece-6',
    title: 'Electronic Devices & Circuits Bench Testing',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_ece-w-8.jpg',
    description: 'Hands-on experimentation with power semiconductor circuits, oscilloscopes, and function generators.',
    badge: 'Circuits'
  },

  // Mechanical Engineering
  {
    id: 'gal-mech-1',
    title: 'Mechanical CAD/CAM & Additive Prototyping Centre',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_mech-1.jpg',
    description: 'Computer-aided 3D modeling with SolidWorks, Creo, and CNC g-code toolpath simulation.',
    badge: 'CAD/CAM'
  },
  {
    id: 'gal-mech-2',
    title: 'Precision Machine Tools & CNC Lathe Centre',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_mech-2.jpg',
    description: 'Industrial heavy-duty lathe machines, milling equipment, and precision tolerance manufacturing.',
    badge: 'CNC Machine'
  },
  {
    id: 'gal-mech-3',
    title: 'Thermal Engineering & IC Engine Test Rig',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_mech-3.jpg',
    description: 'Multi-cylinder test benches for analyzing fuel efficiency, heat transfer rates, and emission performance.',
    badge: 'IC Engine'
  },
  {
    id: 'gal-mech-4',
    title: 'Strength of Materials & Metallurgy Testing Lab',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_mech-4.jpg',
    description: 'Universal Testing Machine (UTM), Rockwell hardness testers, and torsion testing rigs.',
    badge: 'UTM Testing'
  },
  {
    id: 'gal-mech-5',
    title: 'Automotive Systems & Dynamics Workshop',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_mech-5.jpg',
    description: 'Gear transmission systems, braking rigs, and automotive chassis structural analysis.',
    badge: 'Automotive'
  },
  {
    id: 'gal-mech-6',
    title: 'Hydraulics & Fluid Mechanics Testing Laboratory',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_mech-6.jpg',
    description: 'Pelton wheel turbines, venturimeters, and centrifugal pump performance characterization rigs.',
    badge: 'Fluids Lab'
  },

  // Civil & Sciences
  {
    id: 'gal-civ-1',
    title: 'Civil Structural Analysis & Concrete Testing Lab',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_civil-w-1.jpg',
    description: 'Compressive strength testing of concrete cubes, aggregate grading, and curing tanks.',
    badge: 'Concrete Lab'
  },
  {
    id: 'gal-civ-2',
    title: 'Total Station & Advanced GPS Surveying Field',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_civil-w-2.jpg',
    description: 'Field surveying practicals using digital theodolites, total stations, and contour mapping.',
    badge: 'GPS Surveying'
  },
  {
    id: 'gal-civ-3',
    title: 'Geotechnical & Soil Mechanics Laboratory',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_civil-w-3.jpg',
    description: 'Triaxial shear testing, direct shear apparatus, and soil consolidation analysis.',
    badge: 'Soil Mechanics'
  },
  {
    id: 'gal-sci-1',
    title: 'Engineering Chemistry & Analytical Laboratory',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_chemistry-1.jpg',
    description: 'Water quality analysis, titration apparatus, flame photometers, and conductivity meters.',
    badge: 'Chemistry'
  },
  {
    id: 'gal-sci-2',
    title: 'Chemical Instrumentation & Titration Studio',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_chemistry-2.jpg',
    description: 'Analytical bench tests, pH metry, potentiometer rigs, and environmental chemical assessment.',
    badge: 'Chemical Studio'
  },
  {
    id: 'gal-sci-3',
    title: 'Spectroscopy & Polymer Synthesis Lab',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_chemistry-4.jpg',
    description: 'Advanced chemistry experimentation supporting nanotechnology and materials research.',
    badge: 'Spectroscopy'
  },
  {
    id: 'gal-sci-4',
    title: 'Engineering Physics & Optics Research Lab',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_physics-1.jpg',
    description: 'Laser diffraction spectrometers, Hall effect apparatus, and ultrasonic interferometers.',
    badge: 'Physics'
  },
  {
    id: 'gal-sci-5',
    title: 'Laser & Semiconductor Physics Bench',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_physics-2.jpg',
    description: 'Helium-Neon laser wavelength determination, band-gap measurement, and optical fiber attenuation analysis.',
    badge: 'Laser Optics'
  },
  {
    id: 'gal-sci-6',
    title: 'Thermal Conductivity & Elasticity Laboratory',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_physics-4.jpg',
    description: 'Lee disc method for bad conductors, Young modulus measurement, and torsional oscillation characterization.',
    badge: 'Thermal Lab'
  },
  {
    id: 'gal-mba-1',
    title: 'Department of Management Studies (MBA) Smart Room',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_mba-1.jpg',
    description: 'Executive seminar seating, case analysis pods, and interactive financial modeling displays.',
    badge: 'MBA Dept'
  },
  {
    id: 'gal-mba-2',
    title: 'MBA Business Analytics & Case Discussion Theatre',
    category: 'academics',
    categoryLabel: 'Academic & Labs',
    image: '/images/gallery/psv_mba-2.jpg',
    description: 'Management scholars presenting corporate business strategies, marketing pitches, and fintech analytics.',
    badge: 'Management'
  },

  // 3. Sports & Athletics
  {
    id: 'gal-sport-1',
    title: 'Anna University Zonal Volleyball Champions',
    category: 'sports',
    categoryLabel: 'Sports & Athletics',
    image: '/images/gallery/psv_volleyball.jpg',
    description: 'PSVCET varsity volleyball squad securing the championship trophy in the Anna University Zone-7 tournament.',
    badge: 'Zonal Champions'
  },
  {
    id: 'gal-sport-2',
    title: 'Inter-Collegiate Cricket Trophy Winners',
    category: 'sports',
    categoryLabel: 'Sports & Athletics',
    image: '/images/gallery/psv_cricket-3rd-place1.jpg',
    description: 'PSVCET cricket team celebrating podium victory with faculty directors and athletic coach.',
    badge: 'Cricket Trophy'
  },
  {
    id: 'gal-sport-3',
    title: 'State & University Level Athletic Laurels',
    category: 'sports',
    categoryLabel: 'Sports & Athletics',
    image: '/images/gallery/psv_sports-achivements-psv-1.jpg',
    description: 'Student athletes winning medals and certificates across regional university track and field meets.',
    badge: 'Athletics'
  },
  {
    id: 'gal-sport-4',
    title: 'PSVCET Sports Day Trophy Presentation Ceremony',
    category: 'sports',
    categoryLabel: 'Sports & Athletics',
    image: '/images/gallery/psv_sports-achivements-psv-2.jpg',
    description: 'Annual athletic meet prize distribution with Founder Chairman and distinguished sports dignitaries.',
    badge: 'Sports Day'
  },
  {
    id: 'gal-sport-5',
    title: 'Basketball Championship & Team Felicitation',
    category: 'sports',
    categoryLabel: 'Sports & Athletics',
    image: '/images/gallery/psv_basketball1.jpg',
    description: 'College basketball team felicitated for stellar performance in district-level tournaments.',
    badge: 'Basketball'
  },
  {
    id: 'gal-sport-6',
    title: 'Annual Sports Day Track & Field Honors',
    category: 'sports',
    categoryLabel: 'Sports & Athletics',
    image: '/images/gallery/psv_sports-achivements-psv-3.jpg',
    description: 'Recognizing outstanding student sportspersons in sprints, relays, and long jump championships.',
    badge: 'Track & Field'
  },
  {
    id: 'gal-sport-7',
    title: 'Inter-Departmental Sports Meet & Trophies',
    category: 'sports',
    categoryLabel: 'Sports & Athletics',
    image: '/images/gallery/psv_sports-achivements-psv-4.jpg',
    description: 'Intramural games fostering camaraderie, teamwork, and athletic excellence among students.',
    badge: 'Intramural'
  },

  // 4. NCC, NSS & Social Outreach
  {
    id: 'gal-ncc-1',
    title: 'National Cadet Corps (NCC) Unit Drills & Parade',
    category: 'ncc_nss',
    categoryLabel: 'NCC & NSS Outreach',
    image: '/images/gallery/psv_psv-1.jpg',
    description: 'PSVCET NCC cadets in ceremonial uniform during institutional parade inspection and flag hoisting.',
    badge: 'NCC Unit'
  },
  {
    id: 'gal-ncc-2',
    title: 'NSS Village Immersion & Rural Literacy Camp',
    category: 'ncc_nss',
    categoryLabel: 'NCC & NSS Outreach',
    image: '/images/gallery/psv_psv-3.jpeg',
    description: 'National Service Scheme student volunteers conducting village literacy awareness and hygiene drives.',
    badge: 'NSS Camp'
  },
  {
    id: 'gal-ncc-3',
    title: 'Youth Red Cross (YRC) Mega Blood Donation Camp',
    category: 'ncc_nss',
    categoryLabel: 'NCC & NSS Outreach',
    image: '/images/gallery/psv_psv-4.jpeg',
    description: 'Over 200+ units of voluntary blood donated by PSVCET students in collaboration with Govt Blood Bank.',
    badge: 'YRC Blood Drive'
  },
  {
    id: 'gal-ncc-4',
    title: 'Green Campus Tree Plantation & Eco Rally',
    category: 'ncc_nss',
    categoryLabel: 'NCC & NSS Outreach',
    image: '/images/gallery/psv_psv-8.jpg',
    description: 'Environmental stewardship rally planting saplings across the 30-acre campus corridor.',
    badge: 'Eco Drive'
  },
  {
    id: 'gal-ncc-5',
    title: 'National Integration & Social Service Assembly',
    category: 'ncc_nss',
    categoryLabel: 'NCC & NSS Outreach',
    image: '/images/gallery/psv_psv-9.jpg',
    description: 'Cadets and volunteers pledging for national harmony, anti-drug awareness, and community service.',
    badge: 'Social Service'
  },
  {
    id: 'gal-ncc-6',
    title: 'District Level Community Empowerment Outreach',
    category: 'ncc_nss',
    categoryLabel: 'NCC & NSS Outreach',
    image: '/images/gallery/psv_psv-10.jpg',
    description: 'Students presenting welfare kits and digital literacy workshops in surrounding rural schools.',
    badge: 'Community Outreach'
  },
  {
    id: 'gal-ncc-7',
    title: 'Student Health & Wellness Awareness Rally',
    category: 'ncc_nss',
    categoryLabel: 'NCC & NSS Outreach',
    image: '/images/gallery/psv_psv-5.jpeg',
    description: 'Community sensitization programme promoting clean sanitation, child education, and road safety.',
    badge: 'Health Awareness'
  },
  {
    id: 'gal-ncc-8',
    title: 'Rural Cleanliness Swachh Bharat Initiative',
    category: 'ncc_nss',
    categoryLabel: 'NCC & NSS Outreach',
    image: '/images/gallery/psv_psv-6.jpeg',
    description: 'PSVCET NSS volunteers executing village cleanliness and waste segregation workshops in adopted villages.',
    badge: 'Swachh Bharat'
  },
  {
    id: 'gal-ncc-9',
    title: 'Youth Red Cross First Aid & Disaster Training',
    category: 'ncc_nss',
    categoryLabel: 'NCC & NSS Outreach',
    image: '/images/gallery/psv_psv-7.jpeg',
    description: 'Practical emergency rescue drills, CPR training, and humanitarian relief preparedness sessions.',
    badge: 'Emergency Drills'
  },

  // 5. Placements & Industry Drives
  {
    id: 'gal-place-1',
    title: 'Hexaware Technologies On-Campus Placement Drive',
    category: 'placements',
    categoryLabel: 'Placement Drives',
    image: '/images/gallery/psv_hexaware-placement-23.jpg',
    description: 'Successful placement drive by Hexaware Technologies offering software engineering roles to final-year students.',
    badge: 'Hexaware'
  },
  {
    id: 'gal-place-2',
    title: 'Corporate Placement Training & Aptitude Studio',
    category: 'placements',
    categoryLabel: 'Placement Drives',
    image: '/images/gallery/psv_placement-cell-1.jpg',
    description: '100% placement training covering technical aptitude, coding rounds, and corporate soft skills.',
    badge: 'Placement Cell'
  },
  {
    id: 'gal-place-3',
    title: 'HR Executive Technical Interview Suites',
    category: 'placements',
    categoryLabel: 'Placement Drives',
    image: '/images/gallery/psv_placement-cell-2.jpg',
    description: 'Dedicated corporate cabins hosting tier-1 MNC hiring panels for final rounds.',
    badge: 'HR Suites'
  },
  {
    id: 'gal-place-4',
    title: 'Career Advisory & Placement Guidance Cell',
    category: 'placements',
    categoryLabel: 'Placement Drives',
    image: '/images/gallery/psv_placement-cell-3.jpg',
    description: 'Individual counseling for high-CTC campus jobs, core engineering roles, and higher education abroad.',
    badge: 'Career Desk'
  },

  // 6. Events, Awards & Conferences
  {
    id: 'gal-ev-1',
    title: 'District Green Champion Award 2024 Honor',
    category: 'events',
    categoryLabel: 'Awards & Conferences',
    image: '/images/gallery/psv_district-green-champion-award-2024.jpg',
    description: 'National recognition conferred by the Government of India for eco-friendly campus sustainability.',
    badge: 'National Award'
  },
  {
    id: 'gal-ev-2',
    title: 'AICTE ATAL Faculty Development Programme',
    category: 'events',
    categoryLabel: 'Awards & Conferences',
    image: '/images/gallery/psv_atal-fdp.jpg',
    description: 'National FDP on Quantum Computing & High Performance Computing in collaboration with AICTE.',
    badge: 'AICTE ATAL'
  },
  {
    id: 'gal-ev-3',
    title: 'Institutional Felicitation & National Awards Assembly',
    category: 'events',
    categoryLabel: 'Awards & Conferences',
    image: '/images/gallery/psv_award.jpg',
    description: 'Honoring university rank holders, faculty researchers, and outstanding student innovators.',
    badge: 'Felicitation'
  },
  {
    id: 'gal-ev-4',
    title: 'Smart Air-Conditioned Conference & Seminar Hall',
    category: 'events',
    categoryLabel: 'Awards & Conferences',
    image: '/images/gallery/psv_conference-room-1.jpg',
    description: 'Acoustically tuned hall hosting national conferences, IEEE symposiums, and guest lectures.',
    badge: 'Seminar Hall'
  },
  {
    id: 'gal-ev-5',
    title: 'NAAC Institutional Assessment & Quality Benchmarks',
    category: 'events',
    categoryLabel: 'Awards & Conferences',
    image: '/images/gallery/psv_naac_sss.jpg',
    description: 'NAAC A Grade peer team validation reflecting top-tier academic standards, faculty, and student satisfaction.',
    badge: 'NAAC A Grade'
  }
];


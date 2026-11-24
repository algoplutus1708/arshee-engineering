import { siteAssets } from "@/lib/assets";

export type ServiceSlug =
  | "testing-and-commissioning"
  | "validation-and-homologation"
  | "technical-documentation"
  | "retrofitment-and-maintenance"
  | "consulting"
  | "rental-services";

export type ServiceIconKey =
  | "gauge"
  | "shield-check"
  | "file-text"
  | "wrench"
  | "compass"
  | "cpu";

export interface ActivityItem {
  title: string;
  description?: string;
}

export interface TestingCategory {
  code?: string;
  title: string;
  description?: string;
  activities: ActivityItem[];
}

export interface DeliverableItem {
  title: string;
  description: string;
}

export interface ConsultingArea {
  number: string;
  title: string;
  items: string[];
}

export interface RentalSpec {
  label: string;
  value: string;
  detail?: string;
}

export interface ServiceGalleryImage {
  src: string;
  alt: string;
  caption: string;
  objectPosition?: "center" | "top";
}

export interface ServiceDetailContent {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  eyebrow: string;
  heroSummary: string;
  shortDescription: string;
  previewHighlights: string[];
  metaTitle: string;
  metaDescription: string;
  icon: ServiceIconKey;
  heroImage: string;
  heroImageAlt: string;
  heroObjectPosition?: "center" | "top";
  gallery?: ServiceGalleryImage[];
  introParagraphs: string[];
  valueHighlights: {
    title: string;
    detail: string;
  }[];
  relatedSlugs: ServiceSlug[];
  /** Used by Testing & Commissioning (Static / Dynamic) */
  testingCategories?: TestingCategory[];
  /** Used by Validation & Homologation (4 test groups with item lists) */
  validationGroups?: {
    title: string;
    items: string[];
  }[];
  /** Used by Technical Documentation */
  deliverablesHeading?: string;
  deliverables?: DeliverableItem[];
  /** Used by Retrofitment & Maintenance */
  keyActivitiesHeading?: string;
  keyActivities?: string[];
  /** Used by Consulting Services */
  consultingHeading?: string;
  consultingAreas?: ConsultingArea[];
  /** Used by Rental Services */
  rentalInstrumentsHeading?: string;
  rentalInstruments?: string[];
  testBench?: {
    heading: string;
    description: string;
    specs: RentalSpec[];
  };
  closingStatement?: string;
}

export const servicesData: ServiceDetailContent[] = [
  {
    slug: "testing-and-commissioning",
    title: "Testing & Commissioning",
    shortTitle: "Testing & Commissioning",
    eyebrow: "Rolling Stock Verification",
    heroSummary:
      "Systematic static and dynamic verification ensuring newly built, upgraded, or refurbished rolling stock meets operational, safety, and performance criteria.",
    shortDescription:
      "Comprehensive static and dynamic testing to validate operational readiness, safety, and compliance before commercial service.",
    previewHighlights: [
      "Static Electrical, Brake, HVAC & Door Checks",
      "Dynamic Traction, Braking & Ride Comfort",
      "Pantograph & Energy Consumption Trials",
      "Safety & Diagnostic System Verification",
    ],
    metaTitle: "Testing & Commissioning | Arshee Engineering & Innovations Pvt. Ltd.",
    metaDescription:
      "Static and dynamic rolling stock testing and commissioning services by AEI in accordance with Indian and international railway standards.",
    icon: "gauge",
    heroImage: siteAssets.field.cabConsoleTesting,
    heroImageAlt:
      "Arshee Engineering specialist verifying cab control console and diagnostic indicators against test procedures",
    heroObjectPosition: "top",
    gallery: [
      {
        src: siteAssets.field.coachDaqWiring,
        alt: "AEI engineer wiring onboard instrumentation to data acquisition system inside passenger coach",
        caption: "Onboard DAQ Signal Wiring & Verification",
        objectPosition: "top",
      },
      {
        src: siteAssets.field.mainControlCabinet,
        alt: "Engineer diagnosing main control device and electrical cabinet harnesses",
        caption: "Control Cabinet & Electrical Interface Checks",
        objectPosition: "top",
      },
      {
        src: siteAssets.stock.pantographTesting,
        alt: "Railway pantograph contacting overhead catenary wire for dynamic current collection testing",
        caption: "Dynamic Current Collection & Pantograph Interaction",
        objectPosition: "center",
      },
    ],
    introParagraphs: [
      "Testing and Commissioning is a critical phase in the lifecycle of rolling stock, ensuring that newly manufactured, assembled, upgraded or refurbished railway vehicles comply with prescribed operational, safety, functional and performance requirements before being inducted into passenger or commercial service.",
      "At Arshee Engineering, we undertake comprehensive testing and commissioning activities to validate the performance, reliability, safety and operational readiness of rolling stock. Our approach combines systematic inspection, advanced instrumentation, functional verification and performance evaluation in accordance with applicable Indian and international standards, customer specifications and regulatory requirements.",
    ],
    valueHighlights: [
      {
        title: "Operational Readiness Before Induction",
        detail:
          "Verifies that newly built, upgraded, or refurbished railway vehicles perform safely and reliably prior to passenger or commercial service.",
      },
      {
        title: "Full Static & Dynamic Coverage",
        detail:
          "Covers stationary depot/yard subsystem checks alongside controlled on-track motion trials under varying speeds and loading conditions.",
      },
      {
        title: "Standards & Specification Compliance",
        detail:
          "Executed in accordance with Indian and international standards, customer specifications, and regulatory requirements.",
      },
    ],
    relatedSlugs: ["validation-and-homologation", "technical-documentation", "rental-services"],
    testingCategories: [
      {
        code: "A",
        title: "Static Testing",
        description:
          "Static testing is carried out when the rolling stock is stationary, generally within the manufacturing facility, maintenance depot or commissioning yard. It focuses on verifying the integrity, functionality and integration of individual equipment and onboard systems.",
        activities: [
          {
            title: "Electrical System Testing",
            description:
              "Verification of power distribution, electrical circuits, lighting, auxiliary supplies, earthing and insulation.",
          },
          {
            title: "Brake System Testing",
            description:
              "Inspection and functional verification of pneumatic, electro-pneumatic and other braking arrangements.",
          },
          {
            title: "HVAC System Testing",
            description:
              "Assessment of heating, ventilation and air-conditioning performance and control functionality.",
          },
          {
            title: "Door System Testing",
            description:
              "Verification of door opening and closing mechanisms, interlocks, obstacle detection and emergency release.",
          },
          {
            title: "Control and Diagnostic Systems",
            description:
              "Validation of onboard control systems, monitoring interfaces, communication networks and fault diagnostics.",
          },
          {
            title: "Safety System Testing",
            description:
              "Functional checks of fire detection, emergency alarms, passenger communication and other safety-related equipment.",
          },
          {
            title: "Equipment Integration Checks",
            description:
              "Verification of interfaces and functional coordination between various onboard subsystems.",
          },
        ],
      },
      {
        code: "B",
        title: "Dynamic Testing",
        description:
          "Dynamic testing is performed with the rolling stock in motion, either on a dedicated test track or under controlled operational conditions. It evaluates the actual behaviour of the vehicle under different speeds, loading conditions and operating scenarios.",
        activities: [
          {
            title: "Traction and Performance Testing",
            description:
              "Evaluation of acceleration, deceleration, maximum operating speed, traction performance and energy consumption.",
          },
          {
            title: "Braking Performance Testing",
            description:
              "Assessment of service braking, emergency braking, stopping distance and braking response under different operating conditions.",
          },
          {
            title: "Ride Comfort and Vehicle Dynamics",
            description:
              "Measurement and assessment of vehicle vibrations, ride quality, stability and dynamic behaviour.",
          },
          {
            title: "Current Collection Testing",
            description:
              "Evaluation of pantograph–overhead equipment interaction, contact force, arcing and current collection performance.",
          },
          {
            title: "Energy Consumption Testing",
            description:
              "Measurement and analysis of traction energy consumption, regenerative energy and overall energy efficiency.",
          },
          {
            title: "Communication and Signalling Testing",
            description:
              "Verification of onboard communication, train control, signalling interfaces and operational responses.",
          },
          {
            title: "Noise and Vibration Testing",
            description:
              "Assessment of interior and exterior noise levels and vibration characteristics.",
          },
          {
            title: "Fault and Emergency Scenario Testing",
            description:
              "Verification of vehicle response to simulated faults, emergency situations and abnormal operating conditions.",
          },
        ],
      },
    ],
  },
  {
    slug: "validation-and-homologation",
    title: "Validation & Homologation",
    shortTitle: "Validation & Homologation",
    eyebrow: "Conformity & Type Approval",
    heroSummary:
      "Establishing technical conformity, safety, and operational suitability through engineering analysis, instrumentation, simulation, and physical testing.",
    shortDescription:
      "Technical conformity assessment, instrumentation, simulation, and physical testing against national and international standards.",
    previewHighlights: [
      "Static Mechanical Tests & Test Management",
      "Static Functional & TCMS Redundancy Checks",
      "Static Performance & Fatigue Verification",
      "Dynamic Trials, EMC/EMI & Oscillation",
    ],
    metaTitle: "Validation & Homologation | Arshee Engineering & Innovations Pvt. Ltd.",
    metaDescription:
      "Rolling stock validation, homologation, static mechanical, functional, performance, and dynamic testing services by AEI.",
    icon: "shield-check",
    heroImage: siteAssets.field.dewesoftLiveAnalysis,
    heroImageAlt:
      "Live onboard power, voltage, current, and regenerative energy telemetry acquisition during dynamic train trials",
    heroObjectPosition: "center",
    gallery: [
      {
        src: siteAssets.field.onboardTrialRacks,
        alt: "AEI engineers operating multi-channel onboard data acquisition racks during metro train trials",
        caption: "Onboard Dynamic Trial Instrumentation",
        objectPosition: "top",
      },
      {
        src: siteAssets.stock.trainBogie,
        alt: "Railway bogie and underframe mechanical suspension assembly for static and dynamic testing",
        caption: "Bogie Mechanical & Structural Validation",
        objectPosition: "center",
      },
      {
        src: siteAssets.stock.vandeBharatMumbai,
        alt: "Indian Railways Vande Bharat Express rolling stock on mainline track",
        caption: "Mainline Rolling Stock Trials & Homologation",
        objectPosition: "center",
      },
    ],
    introParagraphs: [
      "Validation & Homologation are essential engineering processes that establish the technical conformity, safety, reliability and operational suitability of rolling stock for its intended application. These processes involve systematically evaluating vehicle designs, engineering calculations, simulation models, and physical test results against applicable national and international standards, technical specifications, and regulatory requirements.",
      "At Arshee Engineering, we support rolling stock manufacturers, railway authorities and system integrators through specialised validation, performance assessment and technical documentation activities. By combining engineering analysis, advanced instrumentation, simulation-based assessment and physical testing, we help demonstrate that rolling stock designs and their associated systems meet the required acceptance criteria.",
      "Our approach provides reliable technical evidence, identifies potential design deviations, and supports clients throughout the validation and approval process.",
    ],
    valueHighlights: [
      {
        title: "Reliable Technical Evidence",
        detail:
          "Combines engineering calculations, simulation assessment, advanced instrumentation, and physical test results to verify acceptance criteria.",
      },
      {
        title: "Early Deviation Identification",
        detail:
          "Systematically identifies potential design deviations during mechanical, functional, performance, and dynamic evaluation.",
      },
      {
        title: "End-to-End Approval Support",
        detail:
          "Supports manufacturers, railway authorities, and system integrators throughout the validation and regulatory approval lifecycle.",
      },
    ],
    relatedSlugs: ["testing-and-commissioning", "technical-documentation", "consulting"],
    validationGroups: [
      {
        title: "Static Mechanical Test",
        items: [
          "Weighing",
          "Structural test",
          "Wheel off-loading",
          "Coefficient of flexibility",
          "Wedge test",
          "Bogie rotational resistance test",
          "Water tightness",
          "Test Management",
          "Air flow test",
          "Climatic Chamber test (execution support)",
          "Lifting ability test",
          "Static gauge",
        ],
      },
      {
        title: "Static Functional Test",
        items: [
          "Auxiliary Power supply and Control systems",
          "Battery Charging Test",
          "TCMS Redundancy test",
          "SW version verification test",
          "RMPU",
          "Exterior & Interior Lights",
          "CCTV / PAPIS / Infotainment",
          "Compressor / Air Production test",
          "Friction / Parking Brake",
          "Fire Detection system etc.",
        ],
      },
      {
        title: "Static Performance Test",
        items: ["Fatigue test", "Door", "Light", "Wiper"],
      },
      {
        title: "Dynamic Test",
        items: [
          "Traction, Brake & EBD",
          "IWS / Oscillation / Ride comfort",
          "Wheel slide protection",
          "Rescue (coupling / un-coupling)",
          "RTM, Energy consumption",
          "Journey time",
          "Current Collection, Noise",
          "EMC / EMI",
          "Train control / Speed Regulation",
        ],
      },
    ],
  },
  {
    slug: "technical-documentation",
    title: "Technical Documentation",
    shortTitle: "Technical Documentation",
    eyebrow: "Traceable Engineering Records",
    heroSummary:
      "Technically sound, structured, and traceable test plans, instrumentation schematics, calibration records, and compliance reports.",
    shortDescription:
      "Structured test plans, instrumentation schematics, calibration records, and compliance reports supporting operational acceptance.",
    previewHighlights: [
      "Customised Test Plans & Procedures",
      "Instrumentation Layouts & Sensor Diagrams",
      "Calibration & Measurement Traceability",
      "Final Test, Analysis & Compliance Reports",
    ],
    metaTitle: "Technical Documentation | Arshee Engineering & Innovations Pvt. Ltd.",
    metaDescription:
      "Comprehensive railway technical documentation including test plans, instrumentation layouts, calibration traceability, and validation reports.",
    icon: "file-text",
    heroImage: siteAssets.field.documentationReview,
    heroImageAlt:
      "AEI engineer reviewing test procedures and compliance documentation inside a metro passenger coach",
    heroObjectPosition: "top",
    gallery: [
      {
        src: siteAssets.field.teamBenchCollab,
        alt: "AEI engineering team preparing instrumentation setups and measurement logs",
        caption: "Instrumentation Setup & Traceability Logging",
        objectPosition: "top",
      },
      {
        src: siteAssets.field.cabConsoleTesting,
        alt: "Engineer recording cab verification readings against printed test procedure",
        caption: "On-Site Procedure Verification & Sign-Off",
        objectPosition: "top",
      },
      {
        src: siteAssets.field.dewesoftLiveAnalysis,
        alt: "Live measurement waveforms captured for final test and analysis reports",
        caption: "Measured Data & Graphical Analysis",
        objectPosition: "center",
      },
    ],
    introParagraphs: [
      "Accurate, structured and traceable engineering documentation forms the backbone of railway testing, validation and regulatory approval. Every measurement campaign, system verification and homologation milestone depends on clear methodology, verifiable calibration records and well-documented evidence.",
      "Our documentation deliverables translate design requirements and regulatory standards into actionable test procedures, sensor schematics, and final compliance reports ready for customer review and operational acceptance.",
    ],
    valueHighlights: [
      {
        title: "Traceable Measurement Integrity",
        detail:
          "Documents instrument calibration, accuracy, and channel configurations to substantiate the reliability of every measured parameter.",
      },
      {
        title: "Structured Standards Alignment",
        detail:
          "Procedures and compliance records are built directly from design documentation, technical specifications, and applicable regulatory standards.",
      },
      {
        title: "Seamless Approval Readiness",
        detail:
          "Clear observations, graphical analysis, and deviation summaries support validation, homologation, and operational acceptance.",
      },
    ],
    relatedSlugs: ["validation-and-homologation", "testing-and-commissioning", "consulting"],
    deliverablesHeading: "Key Technical Documents & Deliverables",
    deliverables: [
      {
        title: "Test Plans & Procedures",
        description:
          "Development of customised test plans and detailed procedures based on design documentation, technical specifications and applicable regulatory standards.",
      },
      {
        title: "Instrumentation Layouts",
        description:
          "Preparation of instrumentation schematics, sensor positioning diagrams, equipment layouts and measurement channel configurations.",
      },
      {
        title: "Calibration & Traceability Records",
        description:
          "Documentation of instrument calibration, measurement accuracy and traceability to ensure reliability of test results.",
      },
      {
        title: "Static & Dynamic Test Procedures",
        description:
          "Preparation of comprehensive procedures covering functional checks, performance requirements, test conditions and acceptance criteria.",
      },
      {
        title: "Validation & Compliance Records",
        description:
          "Compilation of test observations, measured parameters and compliance evidence demonstrating conformity with applicable standards and project requirements.",
      },
      {
        title: "Final Test & Analysis Reports",
        description:
          "Preparation of detailed reports incorporating test methodology, instrumentation details, measurement results, graphical analysis, observations, deviations and conclusions.",
      },
    ],
    closingStatement:
      "We believe that quality documentation is as important as quality testing. Our commitment is to deliver technically sound, clearly structured and traceable documentation that meets customer expectations and project requirements, while supporting a seamless journey towards validation, homologation and operational acceptance.",
  },
  {
    slug: "retrofitment-and-maintenance",
    title: "Retrofitment & Maintenance",
    shortTitle: "Retrofitment & Maintenance",
    eyebrow: "Lifecycle Asset Reliability",
    heroSummary:
      "System upgrades, refurbishment, overhaul, and preventive maintenance to enhance performance, safety, and rolling stock service life.",
    shortDescription:
      "System upgrades, refurbishment, overhaul, and preventive maintenance solutions to extend rolling stock performance and safety.",
    previewHighlights: [
      "Preventive & Periodic Maintenance",
      "Overhaul & Fleet Check Execution",
      "Subsystem Retrofit & Modernisation",
      "Manpower Support, Troubleshooting & Risk Assessment",
    ],
    metaTitle: "Retrofitment & Maintenance | Arshee Engineering & Innovations Pvt. Ltd.",
    metaDescription:
      "Rolling stock retrofitment, modernisation, overhaul, fleet checks, and preventive maintenance solutions by Arshee Engineering.",
    icon: "wrench",
    heroImage: siteAssets.field.underframePitInspection,
    heroImageAlt:
      "AEI engineer inspecting underframe brake and pneumatic equipment in maintenance depot pit with schematics",
    heroObjectPosition: "top",
    gallery: [
      {
        src: siteAssets.field.mainControlCabinet,
        alt: "AEI engineer troubleshooting onboard main control device and wiring harnesses",
        caption: "Control System Troubleshooting & Upgrades",
        objectPosition: "top",
      },
      {
        src: siteAssets.stock.vandeBharatSleeper,
        alt: "Vande Bharat Sleeper trainset rake prepared for modern subsystem integration and testing",
        caption: "Vande Bharat Assembly, Integration & Upgrades",
        objectPosition: "center",
      },
      {
        src: siteAssets.stock.delhiMetro,
        alt: "Metro Rail passenger trainset representing urban fleet maintenance and retrofitment",
        caption: "Metro Rail Fleet Maintenance & Modernisation",
        objectPosition: "center",
      },
    ],
    introParagraphs: [
      "At Arshee Engineering, we provide reliable retrofitment and maintenance solutions to enhance the performance, safety and service life of existing rolling stock. Our capabilities include system upgrades, equipment replacement, refurbishment, modernisation and preventive maintenance, ensuring improved operational efficiency, reduced downtime and long-term asset reliability.",
      "From scheduled fleet checks and preventive servicing to targeted troubleshooting, risk assessment, and full subsystem retrofits—including integration work on modern fleets such as Vande Bharat trains and Metro Rail systems—our teams support high fleet availability.",
    ],
    valueHighlights: [
      {
        title: "Extended Asset Service Life",
        detail:
          "Targeted equipment replacement, refurbishment, and system modernisation keep existing fleets safe, reliable, and operationally relevant.",
      },
      {
        title: "Reduced Operational Downtime",
        detail:
          "Structured preventive and periodic maintenance paired with rapid fault troubleshooting helps maintain fleet availability.",
      },
      {
        title: "Dedicated Field Manpower & Risk Control",
        detail:
          "Experienced technical manpower support and systematic risk assessments strengthen depot and fleet-wide maintenance operations.",
      },
    ],
    relatedSlugs: ["testing-and-commissioning", "consulting", "rental-services"],
    keyActivitiesHeading: "Key Activities",
    keyActivities: [
      "Preventive Maintenance",
      "Periodic Maintenance",
      "Overhaul",
      "Retrofit",
      "Fleet Check",
      "Manpower Support",
      "Troubleshooting",
      "Risk Assessment",
    ],
  },
  {
    slug: "consulting",
    title: "Consulting Services",
    shortTitle: "Consulting Services",
    eyebrow: "Lifecycle Engineering Advisory",
    heroSummary:
      "Lifecycle railway engineering advisory spanning regulatory strategy, mechanical & electrical design, simulation, testing support, and documentation.",
    shortDescription:
      "End-to-end technical advisory, mechanical and electrical design, simulation, FAT/SAT support, and regulatory strategy.",
    previewHighlights: [
      "Regulatory Compliance (EN, UIC, RDSO, TSI)",
      "Car Body, Bogie, Electrical & TCMS Design",
      "FEA, Multibody & Braking Simulation",
      "FAT/SAT & On-Track Validation Support",
    ],
    metaTitle: "Consulting Services | Arshee Engineering & Innovations Pvt. Ltd.",
    metaDescription:
      "Specialised railway engineering consulting covering regulatory compliance, design, simulation, testing support, and technical documentation.",
    icon: "compass",
    heroImage: siteAssets.field.aeiVuzTrackside,
    heroImageAlt:
      "AEI engineering team collaborating with international partners alongside metro rolling stock",
    heroObjectPosition: "top",
    gallery: [
      {
        src: siteAssets.field.teamMetroStation,
        alt: "Multidisciplinary railway engineering and testing team at Ashram Metro station",
        caption: "Cross-Functional Project Advisory & Trials",
        objectPosition: "top",
      },
      {
        src: siteAssets.stock.velimTestCircuit,
        alt: "European railway test circuit supporting international homologation and advisory standards",
        caption: "International TSI, EN & UIC Regulatory Alignment",
        objectPosition: "center",
      },
      {
        src: siteAssets.stock.vandeBharatMumbai,
        alt: "Indian Railways Vande Bharat Express representing mainline rolling stock engineering advisory",
        caption: "Mainline & High-Speed Rolling Stock Advisory",
        objectPosition: "center",
      },
    ],
    introParagraphs: [
      "At Arshee Engineering, we provide specialised consulting and engineering solutions to support railway projects throughout their lifecycle – from initial planning and design to implementation, testing and optimisation. We combine technical expertise with practical industry experience to help clients make informed engineering decisions, achieve regulatory compliance and deliver cost-effective, reliable solutions.",
    ],
    valueHighlights: [
      {
        title: "Informed Engineering Decisions",
        detail:
          "Bridges engineering concepts and real-world railway operations across tender preparation, procurement advisory, and technology selection.",
      },
      {
        title: "Design & Simulation Rigour",
        detail:
          "Combines mechanical, electrical, and TCMS design with FEA, multibody dynamics, and traction/braking performance simulation.",
      },
      {
        title: "Regulatory & Approval Readiness",
        detail:
          "Guides clients through EN, UIC, RDSO, and TSI compliance requirements, FAT/SAT execution, and approval strategy.",
      },
    ],
    relatedSlugs: ["validation-and-homologation", "technical-documentation", "testing-and-commissioning"],
    consultingHeading: "Our Key Service Areas",
    consultingAreas: [
      {
        number: "01",
        title: "Technical Consulting & Project Advisory",
        items: [
          "Regulatory guidance and compliance (EN, UIC, RDSO, TSI, etc.)",
          "Tender preparation, technical specifications and bid support",
          "Validation, homologation and approval strategy",
          "Procurement advisory, vendor evaluation and technology selection",
        ],
      },
      {
        number: "02",
        title: "Design & Engineering",
        items: [
          "Mechanical design of car bodies, bogies and couplers",
          "Electrical and electronic system engineering",
          "TCMS, control systems and onboard diagnostics",
          "Structural and aerodynamic analysis",
        ],
      },
      {
        number: "03",
        title: "Simulation & Modelling",
        items: [
          "Finite Element Analysis (FEA)",
          "Multibody simulation for vehicle dynamics and ride comfort",
          "Traction and braking performance simulation",
          "Engineering analysis and design optimisation",
        ],
      },
      {
        number: "04",
        title: "Testing & Validation Support",
        items: [
          "Test planning, instrumentation and measurement setups",
          "Factory Acceptance Testing (FAT) and Site Acceptance Testing (SAT)",
          "Static and dynamic testing",
          "On-track trials and performance validation",
        ],
      },
      {
        number: "05",
        title: "Technical Documentation",
        items: [
          "Design and engineering documentation",
          "Operation and maintenance manuals",
          "Technical specifications and wiring diagrams",
          "Test procedures, validation reports and compliance records",
        ],
      },
    ],
    closingStatement:
      "Our objective is to bridge the gap between engineering concepts and real-world railway applications, delivering practical, dependable and future-ready solutions that create lasting value for our clients.",
  },
  {
    slug: "rental-services",
    title: "Rental Services",
    shortTitle: "Rental Services",
    eyebrow: "Calibrated Instrumentation & Test Benches",
    heroSummary:
      "Cost-effective access to calibrated railway testing sensors, DAQ systems, and a high-capacity compression test bench.",
    shortDescription:
      "Flexible access to calibrated testing sensors, DAQ systems, and high-capacity compression test benches without capital overhead.",
    previewHighlights: [
      "Pressure, LVDT & Vibration Sensors",
      "Strain Gauges, DAQ, GPS & RADAR",
      "Compression Capacity: Up to 4,000 kN",
      "Tensile (1,500 kN) & Vertical Load (1,000 kN)",
    ],
    metaTitle: "Rental Services | Arshee Engineering & Innovations Pvt. Ltd.",
    metaDescription:
      "Calibrated railway testing instruments, DAQ systems, and compression test bench rental up to 4,000 kN by Arshee Engineering.",
    icon: "cpu",
    heroImage: siteAssets.field.daqHardware,
    heroImageAlt:
      "Multi-channel ruggedised Dewesoft data acquisition (DAQ) hardware deployed onboard a railway vehicle",
    heroObjectPosition: "center",
    gallery: [
      {
        src: siteAssets.field.opticalCameraRig,
        alt: "Precision optical measurement camera mounted on test rig",
        caption: "Precision Optical & Sensor Mounting",
        objectPosition: "center",
      },
      {
        src: siteAssets.field.tracksideAnemometer,
        alt: "Tripod-mounted environmental and airflow transducer deployed trackside",
        caption: "Field-Ready Environmental & Airflow Gauges",
        objectPosition: "center",
      },
      {
        src: siteAssets.field.dewesoftLiveAnalysis,
        alt: "Real-time DAQ monitoring interface displaying voltage, current, and energy traces",
        caption: "Live Multi-Channel DAQ Telemetry",
        objectPosition: "center",
      },
    ],
    introParagraphs: [
      "At Arshee Engineering, we offer flexible and cost-effective rental solutions for high-precision testing instruments and specialised compression test benches for railway and industrial applications. Our rental services provide clients with access to reliable, calibrated equipment without the burden of significant capital investment, ensuring greater flexibility and cost efficiency for short-term and project-specific requirements.",
    ],
    valueHighlights: [
      {
        title: "Zero Capital Investment Burden",
        detail:
          "Provides immediate access to specialised testing instruments and high-capacity load benches for short-term and project-specific campaigns.",
      },
      {
        title: "Calibrated Measurement Accuracy",
        detail:
          "Supplies reliable, calibrated sensors and data acquisition systems to safeguard test repeatability and measurement confidence.",
      },
      {
        title: "High-Capacity Structural Load Testing",
        detail:
          "Robust compression test bench supporting up to 4,000 kN compression, 1,500 kN tensile, and 1,000 kN vertical load applications.",
      },
    ],
    relatedSlugs: ["testing-and-commissioning", "validation-and-homologation", "technical-documentation"],
    rentalInstrumentsHeading: "Instruments Available for Rental",
    rentalInstruments: [
      "Pressure Sensors & Transducers",
      "Displacement Sensors (LVDT, Potentiometric)",
      "Accelerometers & Vibration Sensors",
      "Strain Gauges",
      "Data Acquisition (DAQ) Systems",
      "GPS & RADAR Sensors",
    ],
    testBench: {
      heading: "Compression Test Bench Rental",
      description:
        "We offer a robust and calibrated compression test bench suitable for specialised load testing applications.",
      specs: [
        {
          label: "Compression Test Capacity",
          value: "Up to 4,000 kN",
        },
        {
          label: "Tensile Test Capacity",
          value: "Up to 1,500 kN",
        },
        {
          label: "Vertical Load Testing",
          value: "Up to 1,000 kN",
        },
      ],
    },
    closingStatement:
      "Our objective is to make specialised testing equipment accessible, helping clients optimise project costs while maintaining measurement accuracy, reliability and testing efficiency.",
  },
];

export const servicesBySlug: Record<ServiceSlug, ServiceDetailContent> = servicesData.reduce(
  (acc, service) => {
    acc[service.slug] = service;
    return acc;
  },
  {} as Record<ServiceSlug, ServiceDetailContent>
);

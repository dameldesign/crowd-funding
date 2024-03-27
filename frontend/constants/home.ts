import {
  FooterNavigationType,
  LocationType,
  mapBackendStructure,
} from "@/types";




export const popularJobs: LocationType[] = [
  {
    imgURL: "/assets/images/agency.png",
    label: "EcoTech Solutions",
    slug: "hotel-manager",
    organization: "Agency Nest",
    jobtype: "Part-Time",
    serviceFees: "1,500 - 5,900",
    duration: "monthly",
    category: "template",
    company: "Agile ",
    location: "Walter Carrington Crescent, Victoria Island, Lagos",
    number: "+234 905 932 3873",
    btnName: "Apply Now",
    status: "active",
    tags: ["Shoe Store", "Cloth Store", "Clothes Customization"],

  },
  {
    imgURL: "/assets/images/ibis.png",
    label: "HealthTech Innovations",
    slug: "hotel-manager-2",
    organization: "Ibis Hotel",
    serviceFees: "1500",
    jobtype: "Part-Time",
    category: "tool",
    duration: "monthly",
    company: "Agile",
    location: "Walter Carrington Crescent, Victoria Island, Lagos",
    number: "+234 905 932 3873",
    btnName: "Apply Now",
    status: "close",
  },
  {
    imgURL: "/assets/images/fxtn.png",
    label: "EcoTech Solutions",
    slug: "sales-manager",
    category: "dapp'",
    organization: "Forex Time Nigeria",
    jobtype: "Full-Time",
    serviceFees: "2000",
    company: "Agile",
    location: "Walter Carrington Crescent, Victoria Island, Lagos",
    number: "+234 905 932 3873",
    btnName: "Apply Now",
    status: "active",
  },
  {
    imgURL: "/assets/images/stanbic.png",
    label: "HealthTech Innovations",
    slug: "financial-manager",
    organization: "Forex Time Nigeria",
    jobtype: "Full-Time",
    serviceFees: "500 - 2000",
    category: "dapp",
    company: "Agile",
    location: "Walter Carrington Crescent, Victoria Island, Lagos",
    number: "+234 905 932 3873",
    btnName: "Apply Now",
    status: "active",
  },
];

export const popularProject: mapBackendStructure[] = [
  {
    projectName: "EcoTech Solutions",
    projectSummary:
      "Developing sustainable technology solutions for environmental conservation.",
    totalAmount: 1760,
    methodology: "Agile",
    appendices: ["Research Reports", "Prototype Designs"],
    expectedDeliverables: ["Prototype Model", "Feasibility Study"],
    milestones: ["Research Phase", "Prototype Development", "Testing Phase"],
    timeline: "6 months",
    team: [
      "Project Manager",
      "Software Developers",
      "Environmental Scientists",
    ],
    slug: "ecotech-solutions",
    projectDocumentation: "https://www.servustech.com",
    securityMeasures: "Data encryption, access control",
    fairness: "Transparent selection process",
    technicalChallenges: [
      "Integration of IoT devices",
      "Optimizing energy efficiency",
    ],
    solution: "Smart waste management system",
    community: "Engagement with local environmental groups",
    scope: "Global impact",
    logoURI: "/assets/images/STL.jpg",
    marketFit: "High demand for sustainable technology solutions",
    tokenomics: "No tokenomics applicable",
    id: 1,
    category: ["dapp"],
    status: "active",
  },

  {
    projectName: "HealthTech Innovations",
    projectSummary:
      "Creating cutting-edge technology solutions to improve healthcare accessibility.",
    minimumAmount: 500,
    totalAmount: 1750,
    methodology: "Scrum",
    appendices: ["Clinical Trials Data", "User Feedback"],
    expectedDeliverables: ["Mobile App Prototype", "Pilot Study Results"],
    milestones: ["Requirements Gathering", "Development Phase", "User Testing"],
    timeline: "9 months",
    team: ["Product Manager", "UX/UI Designers", "Medical Professionals"],
    slug: "healthTech-innovations",
    projectDocumentation: "https://www.getprospa.com/webstore/shoesbybecky",
    securityMeasures: "HIPAA compliance, encryption",
    fairness: "Equal opportunity for participation",
    technicalChallenges: [
      "Integration with legacy systems",
      "Ensuring data privacy",
    ],
    solution: "Telemedicine platform",
    community: "Engagement with healthcare providers",
    scope: "National rollout",
    logoURI: "/assets/images/agency.png",
    marketFit: "Growing demand for remote healthcare solutions",
    tokenomics: "No tokenomics applicable",
    id: 2,
    category: ["template", "dapp", ],
    status: "active",
  },
  {
    projectName: "EducationTech Hub",
    projectSummary:
      "Building an online platform to enhance educational resources and accessibility.",
    totalAmount: 2000,
    methodology: "Kanban",
    appendices: ["Educational Content", "User Surveys"],
    expectedDeliverables: ["Interactive Learning Modules", "Usage Analytics"],
    milestones: ["Content Creation", "Platform Development", "User Training"],
    timeline: "12 months",
    team: ["Project Lead", "Content Creators", "Software Engineers"],
    slug: "educationTech-hub",
    projectDocumentation: "https://www.getprospa.com/webstore/shoesbybecky",
    securityMeasures: "SSL encryption, user authentication",
    fairness: "Transparent content curation process",
    technicalChallenges: ["Scalability", "User interface optimization"],
    solution: "Online learning portal",
    community: "Engagement with educators and students",
    scope: "Global reach",
    logoURI: "/assets/images/fxtn.png",
    marketFit: "Growing demand for online education platforms",
    tokenomics: "No tokenomics applicable",
    id: 3,
    category: ["template"],
    status: "closed",
  },
  {
    projectName: "HealthTech Innovations",
    projectSummary:
      "Creating cutting-edge technology solutions to improve healthcare accessibility.",
    minimumAmount: 500,
    totalAmount: 1000,
    methodology: "Scrum",
    appendices: ["Clinical Trials Data", "User Feedback"],
    expectedDeliverables: ["Mobile App Prototype", "Pilot Study Results"],
    milestones: ["Requirements Gathering", "Development Phase", "User Testing"],
    timeline: "9 months",
    team: ["Product Manager", "UX/UI Designers", "Medical Professionals"],
    slug: "healthTech-innovations",
    projectDocumentation: "https://www.getprospa.com/webstore/shoesbybecky",
    securityMeasures: "HIPAA compliance, encryption",
    fairness: "Equal opportunity for participation",
    technicalChallenges: [
      "Integration with legacy systems",
      "Ensuring data privacy",
    ],
    solution: "Telemedicine platform",
    community: "Engagement with healthcare providers",
    scope: "National rollout",
    logoURI: "/assets/images/fch.png",
    marketFit: "Growing demand for remote healthcare solutions",
    tokenomics: "No tokenomics applicable",
    id: 4,
    category: ["tool"],
    status: "active",
  },
];




export const exploreNavigationLinks: FooterNavigationType[] = [

    { route: "#", label: "JavaScript" },
    { route: "#", label: "Python" },
    { route: "#", label: "Java" },
    { route: "#", label: "C++" },
    { route: "#", label: "C#" },
    { route: "#", label: "Ruby" },
    { route: "#", label: "Go" },
    { route: "#", label: "Rust" },
    { route: "#", label: "Swift" },
    { route: "#", label: "Kotlin" },
    { route: "#", label: "TypeScript" },
    { route: "#", label: "Solidity" }, // Ethereum smart contract language
    { route: "#", label: "Vyper" }, // Ethereum smart contract language
    { route: "#", label: "WebAssembly" }, // Smart contract language for Ethereum 2.0
    { route: "#", label: "Rust" }, // Can be used for smart contracts in Ethereum 2.0
    { route: "#", label: "SmartPy" }, // Smart contract language for Tezos
    { route: "#", label: "Michelson" }, // Smart contract language for Tezos
    { route: "#", label: "Cairo" }, // Smart contract language for StarkNet
    { route: "#", label: "Move" }, // Libra Blockchain language
    { route: "#", label: "Scala" }, // Language used in the Ethereum Virtual Machine (EVM)
    { route: "#", label: "Haskell" }, // Language used in the Cardano blockchain
   ];


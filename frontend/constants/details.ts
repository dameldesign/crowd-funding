import {
  mapBackendStructure,
} from "@/types";


export const ExploreLinks = [
  {
    title: "Explore new cuisines",
    links: [
      {
        label: "Italian Cuisine",
        url: "/",
      },
      {
        label: "American Cuisine",
        url: "/",
      },
      {
        label: "Chinese Cuisine",
        url: "/",
      },
      {
        label: "Thai Cuisine",
        url: "/",
      },
    ],
  },
  {
    title: "Best of Lagos",
    links: [
      {
        label: "Restaurants",
        url: "/",
      },
      {
        label: "Bars",
        url: "/",
      },
      {
        label: "Coffee Shops",
        url: "/",
      },
      {
        label: "Fast Food",
        url: "/",
      },
    ],
  },
  {
    title: "Related articles",
    links: [
      {
        label: "Best Fast Food in Lagos",
        url: "/",
      },
      {
        label: "Where to eat mexican food in Lagos?",
        url: "/",
      },
    ],
  },
  {
    title: "Other places nearby",
    links: [
      {
        label: "Food Markets Near Me",
        url: "/",
      },
      {
        label: "Coffee Shops Near Me",
        url: "/",
      },
      {
        label: "Bakeries Near Me",
        url: "/",
      },
      {
        label: "Restaurants Near Me",
        url: "/",
      },
    ],
  },
  {
    title: "Related videos",
    links: [
      {
        label: "Mexican Food in Nigeria",
        url: "/",
      },
    ],
  },
];

export const REVIEWS = [
  {
    imgUrl: "/assets/images/Maureen.png",
    name: "Maureen C.",
    slug: "maureen-c",
    address: "Lekki, Nigeria",
    date: "November 7, 2022",
    text: `I found this place on Connect Nigeria and have been trying to find tasty mexican food in Lagos I frequent most often. Tacos are very delicious....
    I love love it so much 💝
     Thank you!`,
  },

  {
    imgUrl: "/assets/images/Tetteh.png",
    name: "Tetteh C.",
    slug: "tetteh-c",
    address: "Ikeja, Nigeria",
    date: "November 7, 2022",
    text: `Chipotle’s personnel is very friendly and easy to communicate with. Love the delivery option.
    You should definitely try burrito and quesadilla both.`,
  },
  {
    imgUrl: "/assets/images/Yetunda.png",
    name: "Yetunda C.",
    slug: "yetunda-c",
    address: "Lagos, Nigeria",
    date: "November 7, 2022",
    text: `Their tacos are the most delicious in the city, crispy and spicy, I'll recommend anyone to try every of 3 types of tacos.`,
  },
  {
    imgUrl: "/assets/images/Tetteh.png",
    name: "Tetteh C.",
    slug: "tetteh-c-2",
    address: "Ikeja, Nigeria",
    date: "November 7, 2022",
    text: `Chipotle's personnel is very friendly and easy to communicate with. Love the delivery option.
    You should definitely try burrito and quesadilla both.`,
  },
  {
    imgUrl: "/assets/images/Yetunda.png",
    name: "Yetunda C.",
    slug: "yetunda-c-2",
    address: "Lagos, Nigeria",
    date: "November 7, 2022",
    text: `Their tacos are the most delicious in the city, crispy and spicy, I'll recommend anyone to try every of 3 types of tacos.`,
  },
];



export const JOB_DETAILS = {
  projectName: "Hotel Manager",
  slug: "hotel-manager",
  profile: "Ibis Hotel",
  about: `As a hotel manager at Ibis you need to:
  recruiting, training and supervising staff
  managing budgets
  maintaining statistical and financial records
  planning maintenance work, events and room bookings
  handling customer complaints and queries
  promoting and marketing the business
  ensuring compliance with health and safety legislation and licensing laws.`,
  info: {
    projectName: "Ibis",
    employees: "10,000 - 20,000",
    about: `Ibis is a French brand of economy hotels owned by Accor. Created in 1974, Ibis became Accor's economy megabrand in 2011 with the launch of Ibis Styles and Ibis Budget. As of December 2019, there were 1,218 hotels under the Ibis brand (excluding Styles and Budget hotels), with 155,678 rooms in total across 67 countries. Ibis megabrand (including both other chains) became the biggest hotel operator in Europe in 2013, with 1,277 hotels.`,
  },
  applicants: 33,
  images: ["/assets/images/ibis-logo.png"],
  price: "250,000",
  datePosted: "December 10, 2022",
  rating: 4.5,
  review: 49,
  open: "7:00 AM",
  close: "8:00 PM",
  contact: {
    address: "Abiola Okeke, Medina estate, Gbagada, Lagos",
    phone: "+234 905 932 3873",
    url: "https://www.ibis-hotel.com",
  },
  noOfPhotos: 42,
  photos: [
    "/assets/images/indoor-1.png",
    "/assets/images/indoor-2.png",
    "/assets/images/indoor-3.png",
    "/assets/images/indoor-4.png",
    "/assets/images/indoor-5.png",
    "/assets/images/indoor-6.png",
    "/assets/images/indoor-7.png",
    "/assets/images/indoor-8.png",
    "/assets/images/indoor-9.png",
    "/assets/images/indoor-10.png",
    "/assets/images/indoor-11.png",
    "/assets/images/indoor-12.png",
  ],
  related: [
    
    {
      imgUrl: "/assets/images/stanbic.png",
      name: "Financial Manager",
      slug: "financial-manager",
      type: "Part-time ",
      address: "Stanbic IBTC Bank",
      price: "145,000",
    },
    {
      imgUrl: "/assets/images/stanbic.png",
      name: "Sales Manager",
      slug: "sales-manager",
      type: "Part-time ",
      address: "Stanbic IBTC Bank",
      price: "145,000",
    },
  ],
};


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
    projectDocumentation: "https://www.getprospa.com/webstore/shoesbybecky",
    securityMeasures: "Data encryption, access control",
    fairness: "Transparent selection process",
    technicalChallenges: [
      "Integration of IoT devices",
      "Optimizing energy efficiency",
    ],
    solution: "Smart waste management system",
    community: "Engagement with local environmental groups",
    scope: "Global impact",
    logoURI: "/assets/images/ibis.png",
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
    logoURI: "/assets/images/stanbic.png",
    marketFit: "Growing demand for remote healthcare solutions",
    tokenomics: "No tokenomics applicable",
    id: 4,
    category: ["tool"],
    status: "active",
  },
];

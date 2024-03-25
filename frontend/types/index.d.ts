import { Interface } from "readline";
import { StaticImageData } from "next/image";

// Define types for category and status
type Category = 'dapp' | 'tool' | 'template';
type Status = 'active' | 'closed';

export interface HeaderLink {
  route: string;
  label: string;
  isToggleable?: boolean;
  toggler?: EventEmitter;
}

export interface HeaderSubLink {
  route: string;
  label: string;
  desc: string;
  linkLabel: string;
}

export interface MenuCategoryLink {
  route: string;
  label: string;
  desc: string;
}

export interface FooterNavigationType {
  route: string;
  label: string;
}

export interface SubheaderLink {
  imgURL: string;
  route: string;
  label: string;
}

export interface FooterNavigationType {
  route: string;
  label: string;
}

export interface ProfileSideLink {
  route: string;
  label: string;
  icon: string;
  sub_links?: {
    route: string;
    label: string;
    icon: string;
  }[];
}

export interface Job {
  id?: string;
  employer_name?: string;
  employer_logo?: string | undefined;
  employer_website?: string;
  job_employment_type?: string;
  job_title?: string;
  job_description?: string;
  job_apply_link?: string;
  job_city?: string;
  job_state?: string;
  job_country?: string;
}

export interface MoreOnCN {
  name: string;
  value: string;
}

export interface Country {
  name: {
    common: string;
  };
}

export interface ParamsProps {
  params: { id: string };
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface URLProps {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}


export interface LocationSliderType {
  label: string;
  imgURL: string;
}

export interface LocationType {
  slug: string;
  eventFees?: number | undefined;
  website?: string | undefined;
  tags?: string[] | undefined;
  jobsFees?: number | undefined | string;
  jobtype?: string | undefined;
  estatesNewFees?: number | undefined | string;
  estateslashedFees?: number | undefined | string;
  locationestate?: string | undefined;
  estateFees?: number | undefined;
  open?: string | undefined;
  close?: string | undefined;
  status?: string | undefined;
  serviceFees?: string | undefined;
  openTime?: string | undefined;
  company?: string | undefined;
  location?: string | undefined;
  number?: number | undefined | string;
  label: string;
  imgURL: string;
  time?: string;
  category?: string;
  btnName?: string;
  rateNumber?: number;
  rate?: number;
  organization?: string;
  duration?: string;
  estatesNewFees?: string;
  rooms?: string | number;
  bathroom?: string | number;
  sqft?: string | number;
  bodyestate?: string | number;
  estateTime?: string | number;
}


export interface mapBackendStructure {
  projectName: string;
  projectSummary: string;
  minimumAmount?: number;
  totalAmount: number;
  methodology: string;
  appendices?: string[];
  expectedDeliverables: string[];
  milestones: string[];
  timeline: string;
  team: string[];
  slug: string;
  projectDocumentation: string;
  securityMeasures: string;
  fairness: string;
  technicalChallenges: string[];
  solution: string;
  community: string;
  scope: string;
  logoURI: string;
  marketFit: string;
  tokenomics: string;
  id: number;
  category: Category[]; // Added category property
  status: Status;     // Added status property
}


export interface ICategoryDetails {
  // name: string;
  projectName: string;
  about: string;
  images: string[];
  rating: number;
  review: number;
  open: string;
  close: string;
  contact: {
    address: string;
    phone: string;
    url: string;
  };
  tags: string[];
  noOfPhotos: number;
}

export interface IAlsoViewedItems {
  imgUrl: string;
  name: string;
  slug?: string;
  type: string;
  address: string;
  reviews: number;
  price?: string;
  promoPrice?: string;
}

export interface IExploreLinks {
  title: string;
  links: { label: string; url: string }[];
  index: number;
}

export interface IReviewBlock {
  imgUrl: string;
  name: string;
  address: string;
  date: string;
  text: string;
}

export interface IBusinessListing {
  name: string;
  imgUrl: string;
  category: string;
  date: string;
  address: string;
  phone: string;
  price: string;
  promoPrice?: string;
}
export interface ICarInfo {
  engine: string;
  transmission: string;
  drivetrain: string;
  fuel_type: string;
  body_style: string;
  doors: number;
  condition: string;
  mileage: string;
  gas_mileage: string;
  vin: string;
  exterior_color: string;
  interior_color: string;
}
export type BadgeCriteriaType = keyof typeof BADGE_CRITERIA;

export type Linked = {
  label: string;
  url: string;
  icon: string | StaticImageData;
  number?: number;
};

export type AdvertType = {
  advertImg: string;
};

export interface NavbarHomepageProps {
  links: Linked[];
  active: string;
}

export interface IInvoiceFilter {
  name: string;
  options?: string[];
  placeholder?: string;
  type?: string;
}

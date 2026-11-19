export type ProjectStatus =  "ongoing" | "upcoming" | "completed" | "ready-to-move";

export type SpaceKind = 'residential' | 'plot' | 'commercial';

export type ProjectCategory = 'Residential' | 'Plots' | 'Commercial' | 'Mixed-Use';

/**
 * One kind of unit offered inside a project.
 * - residential: Flats (2 BHK, 3 BHK…)
 * - plot: Residential plots / land parcels
 * - commercial: Shops, offices, showrooms
 */
export interface ProjectSpace {
  kind: SpaceKind;
  /** e.g. "Flats", "Residential Plots", "Shops" */
  type: string;
  /** Number of units — omit if not yet finalised */
  units?: number;
  /** e.g. "2 & 3 BHK", "1,000–2,400 sq.ft" */
  carpetAreas?: string[];
  /** Which floors/blocks this space occupies, e.g. "Floors 1–7" */
  location?: string;
  description?: string;
}

export interface ProjectFact {
  label: string;
  value: string;
}

export interface Project {
    slug: string;
    name: string;
    /** The builder who develops the project. Downtown Realtyj is the sales & marketing partner. */
    developer: string;
    status: ProjectStatus;
    reraNo: string;
    locality: string;
    city: string;
    state: 'Bihar' | 'Jharkhand';
    builtUpArea: string;
    structure: string;
    summary: string;
    highlights: string[];
    amenities: string[];
    /** Starting price shown to buyers — always the builder's own price, e.g. "₹42 Lakh" */
    priceFrom?: string;
    description?: string[];
    spaces?: ProjectSpace[]; 
    extraFacts?: ProjectFact[];
    mapQuery?: string;
    image?: string;
    gallery?: string[];
    featured?: boolean;
}

/** A project announced but not yet launched — only basic info is shown. */
export interface UpcomingProject {
  slug: string;
  name: string;
  /** "Downtown Realtyj" for our own developments, otherwise the partner builder */
  developer: string;
  /** True when Downtown Realtyj is developing the project itself */
  ownProject: boolean;
  city: string;
  state: 'Bihar' | 'Jharkhand';
  /** Optional area within the city, e.g. "Bailey Road" */
  locality?: string;
  /** e.g. "Flats", "Plots" */
  offering: string;
  /** Optional one-line teaser */
  teaser?: string;
  /** Representational images (not exact) */
  images: string[];
  /** Text Google Maps can search, e.g. "Bailey Road, Patna, Bihar" */
  mapQuery: string;
}

export interface Locality {
  name: string;
  /** One line on why buyers pick this area */
  note: string;
  image: string;
}

export interface Testimonial {
  name: string;
  detail: string;
  rating: number;
  quote: string;
}

export type SpaceFilter = 'All' | SpaceKind;

export interface SearchFilters {
  city: string;
  status: 'All' | ProjectStatus;
  locality: string;
  space: SpaceFilter;
}

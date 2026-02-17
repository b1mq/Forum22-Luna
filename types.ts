
export interface Movie {
  id: string;
  title: string;
  genre: string;
  meta: string;
  description: string;
  fullSynopsis?: string;
  duration: number;
  fsk: number;
  posterUrl: string;
  isNew?: boolean;
  featured?: boolean;
  director?: string;
  cast?: string[];
  labels?: string[]; // e.g. ["OmU", "Arthouse", "Highlight"]
}

export type CinemaLocation = 'forum' | 'luna';

export interface Showtime {
  movieId: string;
  day: string;
  date: string;
  time: string;
  location: CinemaLocation;
  label?: string;
  highlighted?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  dropdown?: NavLink[];
}

export enum PageType {
  HOME = 'home',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  SERVICE = 'service',
  CONTACT = 'contact',
  PRICES = 'prices'
}

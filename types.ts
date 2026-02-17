
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
  labels?: string[];
  // Fix: moodTags property added to match usage in constants.ts and support AI-driven filtering
  moodTags?: string[];
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
  fullDate: string;
}

export interface NavLink {
  label: string;
  href: string;
  dropdown?: NavLink[];
}

export interface BookingState {
  movieId: string;
  time: string;
  date: string;
  tickets: number;
  step: 'selection' | 'success';
}

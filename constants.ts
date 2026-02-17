
import { Movie, Showtime } from './types';

export const MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Für immer hier',
    genre: 'Drama · Arthouse',
    meta: 'Brasilien 2024',
    director: 'Walter Salles',
    cast: ['Fernanda Torres', 'Selton Mello'],
    description: 'Ein berührendes Porträt einer Familie im Brasilien der 70er Jahre.',
    fullSynopsis: 'Rio de Janeiro, 1971. Die Familie Paiva genießt ihr Leben, bis der Vater plötzlich von der Militärpolizei verschleppt wird. Die Mutter Eunice muss über sich hinauswachsen, um ihre fünf Kinder zu schützen und die Hoffnung auf Gerechtigkeit nicht zu verlieren. Ein Meisterwerk über Mut и menschliche Würde.',
    duration: 135,
    fsk: 12,
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop',
    isNew: true,
    featured: true,
    labels: ['Arthouse', 'OmU', 'Oscar-Kandidat']
  },
  {
    id: '2',
    title: 'The Zone of Interest',
    genre: 'Historisches Drama',
    meta: 'USA/UK 2023',
    director: 'Jonathan Glazer',
    description: 'Das Leben des KZ-Kommandanten Rudolf Höß direkt neben Auschwitz.',
    fullSynopsis: 'Der Kommandant von Auschwitz, Rudolf Höß, und seine Frau Hedwig versuchen, für ihre Familie ein traumhaftes Leben mit Garten und Haus direkt neben dem Lager aufzubauen. Ein verstörender Blick auf die Banalität des Bösen.',
    duration: 105,
    fsk: 12,
    posterUrl: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=800&auto=format&fit=crop',
    labels: ['Arthouse', 'Preisträger']
  },
  {
    id: '3',
    title: 'Alles steht Kopf 2',
    genre: 'Animation · Familie',
    meta: 'USA 2024',
    director: 'Kelsey Mann',
    description: 'Rileys Emotionen müssen Platz für Zuwachs machen: Zweifel zieht ein!',
    fullSynopsis: 'Riley ist nun ein Teenager. Das Hauptquartier wird plötzlich abgerissen, um Platz für etwas völlig Unerwartetes zu schaffen: neue Emotionen! Freude, Kummer, Wut, Angst und Ekel sind sich nicht sicher, wie sie sich fühlen sollen, als Zweifel auftaucht.',
    duration: 96,
    fsk: 0,
    posterUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800&auto=format&fit=crop',
    labels: ['Blockbuster', 'Familienkino']
  }
];

const generateDates = () => {
  const dates = [];
  const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  const now = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date();
    d.setDate(now.getDate() + i);
    dates.push({
      dayLabel: days[d.getDay()],
      dateStr: d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' }),
      fullDate: d.toISOString().split('T')[0]
    });
  }
  return dates;
};

export const WEEK_DATES = generateDates();

export const SHOWTIMES: (Showtime & { fullDate: string })[] = [
  // Forum 22 (Bad Urach)
  { movieId: '1', day: WEEK_DATES[0].dayLabel, date: WEEK_DATES[0].dateStr, fullDate: WEEK_DATES[0].fullDate, time: '19:30', location: 'forum', highlighted: true },
  { movieId: '2', day: WEEK_DATES[0].dayLabel, date: WEEK_DATES[0].dateStr, fullDate: WEEK_DATES[0].fullDate, time: '17:00', location: 'forum' },
  { movieId: '1', day: WEEK_DATES[1].dayLabel, date: WEEK_DATES[1].dateStr, fullDate: WEEK_DATES[1].fullDate, time: '20:00', location: 'forum' },
  
  // Luna (Metzingen)
  { movieId: '3', day: WEEK_DATES[0].dayLabel, date: WEEK_DATES[0].dateStr, fullDate: WEEK_DATES[0].fullDate, time: '15:00', location: 'luna', highlighted: true },
  { movieId: '3', day: WEEK_DATES[1].dayLabel, date: WEEK_DATES[1].dateStr, fullDate: WEEK_DATES[1].fullDate, time: '16:00', location: 'luna' },
  { movieId: '2', day: WEEK_DATES[2].dayLabel, date: WEEK_DATES[2].dateStr, fullDate: WEEK_DATES[2].fullDate, time: '19:45', location: 'luna', highlighted: true },
  { movieId: '1', day: WEEK_DATES[2].dayLabel, date: WEEK_DATES[2].dateStr, fullDate: WEEK_DATES[2].fullDate, time: '17:30', location: 'luna' },
];

export const NAVIGATION = [
  { label: 'Startseite', href: '/' },
  { label: 'Programm', href: '/weekly' },
  {
    label: 'Über Uns',
    href: '/about',
    dropdown: [
      { label: 'Das Kino', href: '/about/cinema' },
      { label: 'Das Café', href: '/about/cafe' },
      { label: 'Unser Team', href: '/about/team' },
      { label: 'Jobs & Ehrenamt', href: '/about/jobs' }
    ]
  },
  { 
    label: 'Service', 
    href: '/service/prices',
    dropdown: [
      { label: 'Eintrittspreise', href: '/service/prices' },
      { label: 'Gutscheine', href: '/service/vouchers' },
      { label: 'Sondervorstellungen', href: '/service/special-events' },
      { label: 'Anfahrt', href: '/contact' }
    ]
  },
  { label: 'Kontakt', href: '/contact' }
];
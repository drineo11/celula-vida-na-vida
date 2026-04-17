// Mock data for Célula Vida na Vida
// This will be replaced with database data when backend is connected

export interface Participant {
  id: string;
  name: string;
  birthDate: string;
  address?: string;
  photoUrl?: string;
  phone?: string;
}

export interface WeekScheduleAssignments {
  casa: string[];
  quebraGelo?: string[];
  estudo?: string[];
  salinha: string[];
  // Prayer night specific
  igreja?: string[];
  pais?: string[];
  missoes?: string[];
}

export interface WeekSchedule {
  id: string;
  weekNumber: number;
  label: string;
  date: string;
  isPrayerNight?: boolean;
  prayerNightType?: "church" | "cell" | null;
  prayerTime?: string;
  houseName?: string;
  address?: string;
  mapsLink?: string;
  assignments: WeekScheduleAssignments;
}

export interface PrayerNightAssignments {
  casa: string[];
  salinha: string[];
  lideresIgreja?: string[];
  liderancaPais?: string[];
  igrejaPerseguida?: string[];
}

export interface PrayerNight {
  date: string;
  assignments: PrayerNightAssignments;
}

export interface MonthlySchedule {
  id: string;
  month: number;
  year: number;
  weeks: WeekSchedule[];
  prayerNight?: PrayerNight;
}

export interface CellMeeting {
  id: string;
  title?: string;
  date: string;
  time: string;
  houseName: string;
  address: string;
  mapsLink: string;
  backgroundImage?: string;
}

export interface Notice {
  id: string;
  title: string;
  description: string;
  date?: string;
  pinned: boolean;
  location?: string;
  mapsLink?: string;
}

// Mapeamento de endereços das casas
export interface HouseLocation {
  houseName: string;
  address: string;
  mapsLink: string;
}

export const houseLocations: Record<string, HouseLocation> = {
  "Ana Carla": {
    houseName: "Casa da Ana Carla & Guilherme",
    address: "Av. Alberto Renart, 795 - Santa Inês 1, São José dos Campos - SP",
    mapsLink: "https://maps.app.goo.gl/54Chr1MN7wjvKPg16",
  },
  "Ana": {
    houseName: "Casa da Ana Carla & Guilherme",
    address: "Av. Alberto Renart, 795 - Santa Inês 1, São José dos Campos - SP",
    mapsLink: "https://maps.app.goo.gl/54Chr1MN7wjvKPg16",
  },
  "Guilherme": {
    houseName: "Casa da Ana Carla & Guilherme",
    address: "Av. Alberto Renart, 795 - Santa Inês 1, São José dos Campos - SP",
    mapsLink: "https://maps.app.goo.gl/54Chr1MN7wjvKPg16",
  },
  "Adriano": {
    houseName: "Casa do Adriano & Adriana",
    address: "Rua Rio Paru, 175 - Jd Pararangaba, São José dos Campos - SP",
    mapsLink: "https://maps.app.goo.gl/ehihCn8FvJRSHkMb9",
  },
  "Adriana": {
    houseName: "Casa do Adriano & Adriana",
    address: "Rua Rio Paru, 175 - Jd Pararangaba, São José dos Campos - SP",
    mapsLink: "https://maps.app.goo.gl/ehihCn8FvJRSHkMb9",
  },
  "Paulo": {
    houseName: "Casa do Paulo & Silvana",
    address: "Rua dos Heliotrópios, 255 - Jd. Motorama, São José dos Campos - SP",
    mapsLink: "https://maps.app.goo.gl/c8SH5ua3syX5dQ6g9",
  },
  "Silvana": {
    houseName: "Casa do Paulo & Silvana",
    address: "Rua dos Heliotrópios, 255 - Jd. Motorama, São José dos Campos - SP",
    mapsLink: "https://maps.app.goo.gl/c8SH5ua3syX5dQ6g9",
  },
  "Marcelo": {
    houseName: "Casa do Marcelo & Andreia",
    address: "Rua Cidade Montevideo, 134 - Vista Verde, São José dos Campos - SP",
    mapsLink: "https://maps.app.goo.gl/QEySpXEnsrSCxZHP6",
  },
  "Andreia": {
    houseName: "Casa do Marcelo & Andreia",
    address: "Rua Cidade Montevideo, 134 - Vista Verde, São José dos Campos - SP",
    mapsLink: "https://maps.app.goo.gl/QEySpXEnsrSCxZHP6",
  },
  "Cláudia": {
    houseName: "Casa da Cláudia",
    address: "Rua Barbados, 54 - Vista Verde, São José dos Campos - SP",
    mapsLink: "https://maps.app.goo.gl/Tp5Bexymzg9wt9wW9",
  },
  "Zenildo": {
    houseName: "Casa do Zenildo & Márcia",
    address: "R. Buenos Aíres, 83 - Vista Verde, São José dos Campos - SP",
    mapsLink: "https://maps.app.goo.gl/45XFmvBLFmhDnnFD8",
  },
  "Márcia": {
    houseName: "Casa do Zenildo & Márcia",
    address: "R. Buenos Aíres, 83 - Vista Verde, São José dos Campos - SP",
    mapsLink: "https://maps.app.goo.gl/45XFmvBLFmhDnnFD8",
  },
};

// Participantes e aniversários
export const mockParticipants: Participant[] = [
  // Fevereiro
  { id: "1", name: "Tamires", birthDate: "1990-02-09" },
  { id: "2", name: "Beatriz", birthDate: "1990-02-25" },
  // Março
  { id: "3", name: "Adriano", birthDate: "1984-03-22" },
  // Abril
  { id: "4", name: "Isaac", birthDate: "2010-04-12" },
  // Maio
  { id: "5", name: "Marcelo Junior", birthDate: "2010-05-09" },
  { id: "6", name: "Márcia", birthDate: "1985-05-24" },
  // Junho
  { id: "7", name: "Cláudia", birthDate: "1985-06-08" },
  { id: "8", name: "Ana Carla", birthDate: "1992-06-14" },
  { id: "9", name: "Laura", birthDate: "2015-06-28" },
  // Agosto
  { id: "10", name: "Lara", birthDate: "2012-08-01" },
  { id: "11", name: "Ygor", birthDate: "1990-08-03" },
  { id: "12", name: "Silvana", birthDate: "1983-08-10" },
  { id: "13", name: "Zenildo", birthDate: "1980-08-11" },
  { id: "14", name: "Paulo", birthDate: "1980-08-12" },
  { id: "15", name: "Benjamim", birthDate: "2018-08-18" },
  // Setembro
  { id: "16", name: "Rômulo", birthDate: "1988-09-13" },
  { id: "17", name: "Yasmim", birthDate: "1990-09-13" },
  { id: "18", name: "Adriana", birthDate: "1990-09-28" },
  // Outubro
  { id: "19", name: "Marcelo", birthDate: "1982-10-07" },
  // Novembro
  { id: "20", name: "Josy", birthDate: "1986-11-16" },
  { id: "21", name: "Guilherme", birthDate: "1988-11-23" },
  // Dezembro
  { id: "22", name: "Rodrigo", birthDate: "1985-12-17" },
  { id: "23", name: "Andreia", birthDate: "1986-12-29" },
];

// Fallback meeting (used when no schedule week is found)
const fallbackMeeting: CellMeeting = {
  id: "fallback",
  date: "2026-04-03",
  time: "20:00",
  houseName: "Casa do Adriano & Adriana",
  address: "Rua Rio Paru, 175 - Jd Pararangaba, São José dos Campos - SP",
  mapsLink: "https://maps.app.goo.gl/ehihCn8FvJRSHkMb9",
};

// Mock Monthly Schedule
export const mockMonthlySchedule: MonthlySchedule = {
  id: "2",
  month: 4,
  year: 2026,
  weeks: [
    {
      id: "w1",
      weekNumber: 1,
      label: "Semana 01 - Sexta",
      date: "2026-04-03",
      houseName: "Casa do Adriano & Adriana",
      address: "Rua Rio Paru, 175 - Jd Pararangaba, São José dos Campos - SP",
      mapsLink: "https://maps.app.goo.gl/ehihCn8FvJRSHkMb9",
      assignments: {
        casa: ["Adriano", "Adriana"],
        quebraGelo: ["Adriano", "Adriana"],
        estudo: ["Adriano"],
        salinha: ["Adriana"],
      },
    },
    {
      id: "w2",
      weekNumber: 2,
      label: "Semana 02 - Sexta",
      date: "2026-04-10",
      houseName: "Casa do Paulo & Silvana",
      address: "Rua dos Heliotrópios, 255 - Jd. Motorama, São José dos Campos - SP",
      mapsLink: "https://maps.app.goo.gl/c8SH5ua3syX5dQ6g9",
      assignments: {
        casa: ["Paulo", "Silvana"],
        quebraGelo: ["Paulo", "Silvana"],
        estudo: ["Adriana"],
        salinha: ["Marcelo", "Andreia"],
      },
    },
    {
      id: "w3",
      weekNumber: 3,
      label: "Semana 03 - Sexta",
      date: "2026-04-17",
      houseName: "Casa do Marcelo & Andreia",
      address: "Rua Cidade Montevideo, 134 - Vista Verde, São José dos Campos - SP",
      mapsLink: "https://maps.app.goo.gl/QEySpXEnsrSCxZHP6",
      assignments: {
        casa: ["Marcelo", "Andreia"],
        quebraGelo: ["Marcelo", "Andreia"],
        estudo: ["Paulo"],
        salinha: ["Guilherme", "Ana Carla"],
      },
    },
    {
      id: "w4",
      weekNumber: 4,
      label: "Semana 04 - Sexta",
      date: "2026-04-24",
      houseName: "Casa do Zenildo & Márcia",
      address: "R. Buenos Aíres, 83 - Vista Verde, São José dos Campos - SP",
      mapsLink: "https://maps.app.goo.gl/45XFmvBLFmhDnnFD8",
      assignments: {
        casa: ["Zenildo", "Márcia"],
        quebraGelo: ["Zenildo", "Márcia"],
        estudo: ["Adriano"],
        salinha: ["Paulo", "Silvana"],
      },
    },
  ],
};

export const mockNotices: Notice[] = [
  {
    id: "1",
    title: "Day Camp",
    description: "Dia 21/04",
    date: "2026-04-21",
    pinned: false,
    location: "Recanto Planeta Terra - Putim",
    mapsLink: "https://maps.app.goo.gl/KYA6rZqtCXgLFwcr9",
  },
];

// Helper function to get current week's schedule
// Helper to parse date without timezone issues
function parseDateLocal(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

/**
 * Returns the current week's schedule based on today's date.
 * Logic: show the week's data from Monday before the meeting through
 * the day of the meeting (Friday/Saturday). After the meeting day,
 * advance to the next week.
 */
export function getCurrentWeekSchedule(schedule: MonthlySchedule): WeekSchedule | null {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Find the week whose meeting date is today or the next upcoming one.
  // After the meeting day, we advance to the next week.
  for (let i = 0; i < schedule.weeks.length; i++) {
    const weekDate = parseDateLocal(schedule.weeks[i].date);
    weekDate.setHours(0, 0, 0, 0);

    // If today is on or before the meeting day, this is the current week
    if (today <= weekDate) {
      return schedule.weeks[i];
    }
  }

  // All weeks are in the past — return the last one
  return schedule.weeks[schedule.weeks.length - 1] || null;
}

/**
 * Derives a CellMeeting from the current week's schedule.
 * Automatically uses the house location data from the week.
 */
export function getCurrentMeeting(schedule: MonthlySchedule): CellMeeting {
  const week = getCurrentWeekSchedule(schedule);

  if (!week) return fallbackMeeting;

  // For prayer nights at church, show church info
  if (week.isPrayerNight && week.prayerNightType === "church") {
    return {
      id: week.id,
      title:"NOITE DE ORAÇÃO",
      date: week.date,
      time: week.prayerTime || "20:00",
      houseName: "Igreja Aliança Cristã e Missionária - Vista Verde",
      address: "Rua Buenos Aires, 414 - Bairro Vista Verde, São José dos Campos - SP",
      mapsLink: "https://maps.app.goo.gl/divXFvEau5qx6y2GA",
    };
  }

  // Use the week's location data if available
  if (week.houseName && week.address) {
    return {
      id: week.id,
      date: week.date,
      time: "20:00",
      houseName: week.houseName,
      address: week.address,
      mapsLink: week.mapsLink || "",
    };
  }

  // Fallback: try to resolve from the "casa" assignment using houseLocations
  const casaPerson = week.assignments.casa?.[0];
  const location = casaPerson ? houseLocations[casaPerson] : null;

  if (location) {
    return {
      id: week.id,
      date: week.date,
      time: "20:00",
      houseName: location.houseName,
      address: location.address,
      mapsLink: location.mapsLink,
    };
  }

  return { ...fallbackMeeting, id: week.id, date: week.date };
}

// Helper function to check birthdays
export function getTodayBirthdays(participants: Participant[]): Participant[] {
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();

  return participants.filter((p) => {
    const birthDate = parseDateLocal(p.birthDate);
    return birthDate.getMonth() + 1 === todayMonth && birthDate.getDate() === todayDay;
  });
}

// Helper function to get this week's birthdays
export function getWeekBirthdays(participants: Participant[]): Participant[] {
  const today = new Date();
  const weekFromNow = new Date(today);
  weekFromNow.setDate(weekFromNow.getDate() + 7);

  return participants.filter((p) => {
    const birthDate = parseDateLocal(p.birthDate);
    const thisYearBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    return thisYearBirthday >= today && thisYearBirthday <= weekFromNow;
  });
}

// Helper to format date in Portuguese
export function formatDatePT(dateString: string): string {
  const date = parseDateLocal(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return date.toLocaleDateString("pt-BR", options);
}

// Helper to get month name in Portuguese
export function getMonthNamePT(month: number): string {
  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  return months[month - 1] || "";
}

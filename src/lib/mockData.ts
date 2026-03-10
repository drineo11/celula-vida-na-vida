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
  assignments: WeekScheduleAssignments;
}

export interface PrayerNight {
  date: string;
  assignments: {
    casa: string[];
    lideresIgreja: string[];
    liderancaPais: string[];
    igrejaPerseguida: string[];
    salinha: string[];
  };
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
}

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

// Mock Current Cell Meeting
export const mockCurrentMeeting: CellMeeting = {
  id: "1",
  date: "2026-03-13",
  time: "20:00",
  houseName: "Casa do Adriano & Adriana",
  address: "Rua Rio Paru, 175 - Jardim Pararangaba, São José dos Campos - SP",
  mapsLink: "https://www.google.com/maps/place/Rua+Rio+Paru,+175+-+Jardim+Pararangaba,+S%C3%A3o+Jos%C3%A9+dos+Campos+-+SP,+12224-800/@-23.1704358,-45.8121876,17z/data=!3m1!4b1!4m6!3m5!1s0x94cc4c69f78cd313:0x81c4a247a17c3415!8m2!3d-23.1704408!4d-45.8096127!16s%2Fg%2F11vjpzjsmp?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D",
};

// Mock Monthly Schedule
export const mockMonthlySchedule: MonthlySchedule = {
  id: "1",
  month: 3,
  year: 2026,
  weeks: [
    {
      id: "w1",
      weekNumber: 1,
      label: "Semana 01 - Sexta",
      date: "2026-03-06",
      assignments: {
        casa: ["Cláudia"],
        quebraGelo: ["Cláudia"],
        estudo: ["Adriana"],
        salinha: ["Paulo", "Silvana"],
      },
    },
    {
      id: "w2",
      weekNumber: 2,
      label: "Semana 02 - Sexta",
      date: "2026-03-13",
      assignments: {
        casa: ["Adriano", "Adriana"],
        quebraGelo: ["Adriano", "Adriana"],
        estudo: ["Paulo"],
        salinha: ["Marcelo", "Andreia"],
      },
    },
    {
      id: "w3",
      weekNumber: 3,
      label: "Semana 03 - Sexta",
      date: "2026-03-20",
      assignments: {
        casa: ["Ana", "Guilherme"],
        quebraGelo: ["Ana", "Guilherme"],
        estudo: ["Silvana"],
        salinha: ["Adriano", "Adriana"],
      },
    },
    {
      id: "w4",
      weekNumber: 4,
      label: "Semana 04 - Sábado",
      date: "2026-03-28",
      isPrayerNight: true,
      prayerNightType: "church",
      prayerTime: "20:00",
      assignments: {
        casa: ["—"],
        quebraGelo: ["—"],
        estudo: ["—"],
        salinha: ["—"],
      },
    },
  ],
};

// Recados & Programação
export const mockNotices: Notice[] = [
  {
    id: "1",
    title: "Escola de Oração",
    description: "Dia 14/03 às 14:00",
    date: "2026-03-14",
    pinned: false,
  },
  {
    id: "2",
    title: "Guia do Discipulador",
    description: "Dia 21/03",
    date: "2026-03-21",
    pinned: false,
  },
  {
    id: "3",
    title: "Day Camp",
    description: "Dia 21/04",
    date: "2026-04-21",
    pinned: false,
  },
];

// Helper function to get current week's schedule
// Helper to parse date without timezone issues
function parseDateLocal(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export function getCurrentWeekSchedule(schedule: MonthlySchedule): WeekSchedule | null {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (const week of schedule.weeks) {
    const weekDate = parseDateLocal(week.date);
    weekDate.setHours(0, 0, 0, 0);
    
    // Check if today is within 3 days before or after the meeting
    const diffDays = Math.abs((today.getTime() - weekDate.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays <= 3) {
      return week;
    }
  }

  // Return the next upcoming week
  for (const week of schedule.weeks) {
    const weekDate = parseDateLocal(week.date);
    if (weekDate >= today) {
      return week;
    }
  }

  return schedule.weeks[0] || null;
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

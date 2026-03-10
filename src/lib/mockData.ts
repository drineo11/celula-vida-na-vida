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

// Mock Participants
export const mockParticipants: Participant[] = [
  { id: "1", name: "Cláudia", birthDate: "1985-01-15" },
  { id: "2", name: "Adriana", birthDate: "1990-03-22" },
  { id: "3", name: "Guilherme", birthDate: "1988-07-10" },
  { id: "4", name: "Ana", birthDate: "1992-01-14" },
  { id: "5", name: "Marcelo", birthDate: "1982-11-05" },
  { id: "6", name: "Andreia", birthDate: "1986-09-18" },
  { id: "7", name: "Adriano", birthDate: "1984-04-30" },
  { id: "8", name: "Paulo", birthDate: "1980-12-25" },
  { id: "9", name: "Silvana", birthDate: "1983-06-08" },
];

// Mock Current Cell Meeting
export const mockCurrentMeeting: CellMeeting = {
  id: "1",
  date: "2025-01-17",
  time: "20:00",
  houseName: "Casa da Cláudia",
  address: "Rua Barbados, 54 - Vista Verde, São José dos Campos - SP",
  mapsLink: "https://maps.google.com/?q=Rua+Barbados,+54+-+Vista+Verde,+São+José+dos+Campos+-+SP",
};

// Mock Monthly Schedule
export const mockMonthlySchedule: MonthlySchedule = {
  id: "1",
  month: 1,
  year: 2025,
  weeks: [
    {
      id: "w1",
      weekNumber: 1,
      label: "Semana 01 - Sexta",
      date: "2025-01-03",
      assignments: {
        casa: ["Cláudia"],
        quebraGelo: ["Cláudia"],
        estudo: ["Adriana"],
        salinha: ["Guilherme", "Ana"],
      },
    },
    {
      id: "w2",
      weekNumber: 2,
      label: "Semana 02 - Sexta",
      date: "2025-01-10",
      assignments: {
        casa: ["Marcelo", "Andreia"],
        quebraGelo: ["Marcelo", "Andreia"],
        estudo: ["Adriano"],
        salinha: ["Paulo", "Silvana"],
      },
    },
    {
      id: "w3",
      weekNumber: 3,
      label: "Semana 03 - Sexta",
      date: "2025-01-17",
      assignments: {
        casa: ["Guilherme", "Ana"],
        quebraGelo: ["Guilherme", "Ana"],
        estudo: ["Marcelo"],
        salinha: ["Adriano", "Adriana"],
      },
    },
    {
      id: "w4",
      weekNumber: 4,
      label: "Semana 04 - Sexta",
      date: "2025-01-24",
      assignments: {
        casa: ["Adriano", "Adriana"],
        quebraGelo: ["Adriano", "Adriana"],
        estudo: ["Paulo"],
        salinha: ["Marcelo", "Andreia"],
      },
    },
  ],
  prayerNight: {
    date: "2025-01-31",
    assignments: {
      casa: ["Paulo", "Silvana"],
      lideresIgreja: ["Paulo", "Silvana"],
      liderancaPais: ["Adriano", "Adriana"],
      igrejaPerseguida: ["Marcelo", "Andreia"],
      salinha: ["Guilherme", "Ana"],
    },
  },
};

// Mock Notices
export const mockNotices: Notice[] = [
  {
    id: "1",
    title: "Culto de Celebração",
    description: "Domingo às 18h no templo principal. Venha adorar conosco!",
    date: "2025-01-19",
    pinned: true,
  },
  {
    id: "2",
    title: "Retiro de Casais",
    description: "Inscrições abertas para o retiro de fevereiro. Vagas limitadas!",
    date: "2025-02-14",
    pinned: false,
  },
  {
    id: "3",
    title: "Dia de Jejum",
    description: "Quarta-feira será dia de jejum coletivo pela célula.",
    date: "2025-01-22",
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

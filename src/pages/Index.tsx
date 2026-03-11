import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WeeklyBanner } from "@/components/WeeklyBanner";
import { WeekScheduleCard } from "@/components/WeekScheduleCard";
import { NoticesSection } from "@/components/NoticesSection";
import { BirthdaySection } from "@/components/BirthdaySection";
import { MonthlyBirthdaySection } from "@/components/MonthlyBirthdaySection";
import {
  mockParticipants,
  mockMonthlySchedule,
  mockNotices,
  getCurrentWeekSchedule,
  getCurrentMeeting,
  getWeekBirthdays,
} from "@/lib/mockData";
import { parseDateSafe } from "@/lib/utils";

const Index = () => {
  const currentWeekSchedule = getCurrentWeekSchedule(mockMonthlySchedule);
  const currentMeeting = getCurrentMeeting(mockMonthlySchedule);
  const weekBirthdays = getWeekBirthdays(mockParticipants);

  // Filter monthly birthdays from participants
  const currentMonth = new Date().getMonth() + 1;
  const monthlyBirthdays = mockParticipants
    .filter((p) => {
      const birthMonth = parseDateSafe(p.birthDate).getMonth() + 1;
      return birthMonth === currentMonth;
    })
    .map((p) => ({
      id: p.id,
      name: p.name,
      birthDate: p.birthDate,
      photoUrl: p.photoUrl ?? null,
    }))
    .sort((a, b) => {
      const dayA = parseDateSafe(a.birthDate).getDate();
      const dayB = parseDateSafe(b.birthDate).getDate();
      return dayA - dayB;
    });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container py-6 space-y-6">
        {/* Weekly Meeting Banner */}
        <WeeklyBanner meeting={currentMeeting} />

        {/* Week Schedule */}
        <WeekScheduleCard schedule={currentWeekSchedule} />

        {/* Birthdays (conditional) */}
        <BirthdaySection birthdays={weekBirthdays} />

        {/* Notices */}
        <NoticesSection notices={mockNotices} />

        {/* Monthly Birthdays */}
        <MonthlyBirthdaySection birthdays={monthlyBirthdays} />
      </main>

      <Footer />
    </div>
  );
};

export default Index;

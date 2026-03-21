import { Home, Snowflake, BookOpen, Baby, Church, Users, Globe } from "lucide-react";
import { MonthlySchedule as MonthlyScheduleType, getMonthNamePT } from "@/lib/mockData";
import { Logo } from "./Logo";
import aliancaLogo from "@/assets/alianca-logo-white.png";
import { parseDateSafe } from "@/lib/utils";

interface MonthlyScheduleProps {
  schedule: MonthlyScheduleType;
}

const categoryIcons = {
  casa: Home,
  quebraGelo: Snowflake,
  estudo: BookOpen,
  salinha: Baby,
};

const categoryLabels = {
  casa: "Casa",
  quebraGelo: "Quebra-Gelo",
  estudo: "Estudo",
  salinha: "Salinha",
};

const prayerCategoryIcons = {
  casa: Home,
  igreja: Church,
  pais: Users,
  missoes: Globe,
  salinha: Baby,
};

const prayerCategoryLabels = {
  casa: "Casa",
  igreja: "Igreja",
  pais: "País",
  missoes: "Missões",
  salinha: "Salinha",
};

export function MonthlyScheduleView({ schedule }: MonthlyScheduleProps) {
  const monthName = getMonthNamePT(schedule.month);

  return (
    <div className="min-h-screen bg-gradient-wine">
      {/* Header */}
      <header className="container py-8 text-center text-primary-foreground">
        <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-2">
          ESCALA
        </h1>
        <p className="font-display text-2xl sm:text-3xl italic opacity-90">
          {monthName}
        </p>
      </header>

      {/* Weeks Grid */}
      <main className="container pb-8 space-y-6">
        {schedule.weeks.map((week) => {
          const date = parseDateSafe(week.date);
          const dayNumber = date.getDate().toString().padStart(2, "0");
          const monthNumber = (date.getMonth() + 1).toString().padStart(2, "0");

          const isPrayerNight = week.isPrayerNight ?? false;
          const isChurchPrayer = isPrayerNight && week.prayerNightType === "church";
          const isCellPrayer = isPrayerNight && week.prayerNightType === "cell";

          // Church prayer night - only date/time info
          if (isChurchPrayer) {
            const timeDisplay = week.prayerTime || "20:00";
            return (
              <article 
                key={week.id}
                className="bg-card rounded-2xl overflow-hidden shadow-card animate-fade-in"
              >
                <div className="bg-primary text-primary-foreground px-4 py-3">
                  <h2 className="font-display font-bold text-lg sm:text-xl flex items-center gap-2">
                    <Church size={18} />
                    • NOITE DE ORAÇÃO NA IGREJA • {dayNumber}/{monthNumber}
                  </h2>
                </div>
                <div className="p-7 text-center text-muted-foreground">
                  <p className="text-lg sm:text-3xl">Reunião na igreja às <strong>{timeDisplay}</strong></p>
                </div>
              </article>
            );
          }

          // Cell prayer night - with assignments
          if (isCellPrayer) {
            return (
              <article 
                key={week.id}
                className="bg-card rounded-2xl overflow-hidden shadow-card animate-fade-in"
              >
                <div className="bg-primary text-primary-foreground px-4 py-3">
                  <h2 className="font-display font-bold text-lg sm:text-xl flex items-center gap-2">
                    <Church size={18} />
                    • NOITE DE ORAÇÃO NA CÉLULA • {dayNumber}/{monthNumber}
                  </h2>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
                    {(Object.keys(prayerCategoryLabels) as Array<keyof typeof prayerCategoryLabels>).map((key) => {
                      const Icon = prayerCategoryIcons[key];
                      const people = week.assignments[key] || [];
                      
                      return (
                        <div key={key} className="flex flex-col items-center">
                          <Icon size={18} className="text-muted-foreground mb-1" />
                          <div className="schedule-item-header w-full text-center text-[9px] sm:text-xs px-1">
                            {prayerCategoryLabels[key]}
                          </div>
                          <div className="schedule-item-body py-2 text-xs sm:text-sm font-medium">
                            {people.join(" & ")}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          }

          // Regular week
          return (
            <article 
              key={week.id}
              className="bg-card rounded-2xl overflow-hidden shadow-card animate-fade-in"
            >
              {/* Week Header */}
              <div className="bg-primary text-primary-foreground px-4 py-3">
                <h2 className="font-display font-bold text-lg sm:text-xl">
                  • {week.label} • {dayNumber}/{monthNumber}
                </h2>
              </div>

              {/* Assignments Grid */}
              <div className="p-4">
                <div className="schedule-grid">
                  {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map((key) => {
                    const Icon = categoryIcons[key];
                    const people = week.assignments[key] || [];
                    
                    return (
                      <div key={key} className="flex flex-col items-center">
                        <Icon size={20} className="text-muted-foreground mb-1" />
                        <div className="schedule-item-header w-full text-center">
                          {categoryLabels[key]}
                        </div>
                        <div className="schedule-item-body py-3 font-medium">
                          {people.join(" & ")}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}

        {/* Footer Logo */}
        <div className="flex items-center justify-between pt-6 pb-4">
          <Logo variant="light" size="md" />
          <img 
            src={aliancaLogo} 
            alt="Igreja Aliança Cristã & Missionária - Vista Verde" 
            className="h-12 w-auto"
          />
        </div>
      </main>
    </div>
  );
}

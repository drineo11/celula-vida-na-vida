import { Link } from "react-router-dom";
import { Home, Snowflake, BookOpen, Baby, ChevronRight, Church, Users, Globe } from "lucide-react";
import { WeekSchedule } from "@/lib/mockData";
import { parseDateSafe } from "@/lib/utils";

interface WeekScheduleCardProps {
  schedule: WeekSchedule | null;
  showFullLink?: boolean;
}
const categoryIcons = {
  casa: Home,
  quebraGelo: Snowflake,
  estudo: BookOpen,
  salinha: Baby
};
const categoryLabels = {
  casa: "Casa",
  quebraGelo: "Quebra-Gelo",
  estudo: "Estudo",
  salinha: "Salinha"
};
const prayerCategoryIcons = {
  casa: Home,
  igreja: Church,
  pais: Users,
  missoes: Globe,
  salinha: Baby
};
const prayerCategoryLabels = {
  casa: "Casa",
  igreja: "Igreja",
  pais: "País",
  missoes: "Missões",
  salinha: "Salinha"
};
export function WeekScheduleCard({
  schedule,
  showFullLink = true
}: WeekScheduleCardProps) {
  if (!schedule) {
    return <section className="wine-card animate-fade-in">
        <h2 className="font-display font-bold text-xl sm:text-2xl text-primary mb-4">
          Escala da Semana
        </h2>
        <div className="text-center py-8 text-muted-foreground">
          <p>Escala ainda não publicada</p>
        </div>
      </section>;
  }
  const formattedDate = parseDateSafe(schedule.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit"
  });
  const isPrayerNight = schedule.isPrayerNight ?? false;
  const isChurchPrayer = isPrayerNight && schedule.prayerNightType === "church";
  const isCellPrayer = isPrayerNight && schedule.prayerNightType === "cell";

  // Church prayer - simple display
  if (isChurchPrayer) {
    const timeDisplay = schedule.prayerTime || "20:00";
    return <section className="wine-card animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-primary flex items-center gap-2">
            <Church size={20} />
            Noite de Oração
          </h2>
          <span className="week-label self-start sm:self-auto">
            Na Igreja • {formattedDate}
          </span>
        </div>
        <div className="text-center py-4 text-muted-foreground">
          <p>Reunião na igreja às <strong>{timeDisplay}</strong></p>
        </div>
        {showFullLink && <Link to="/escala" className="flex items-center justify-center gap-1 mt-5 text-primary font-medium text-sm hover:underline">
            Ver escala do mês
            <ChevronRight size={16} />
          </Link>}
      </section>;
  }

  // Cell prayer - with assignments
  if (isCellPrayer) {
    return <section className="wine-card animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-primary flex items-center gap-2">
            <Church size={20} />
            Noite de Oração
          </h2>
          <span className="week-label self-start sm:self-auto">
            Na Célula • {formattedDate}
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {(Object.keys(prayerCategoryLabels) as Array<keyof typeof prayerCategoryLabels>).map(key => {
          const Icon = prayerCategoryIcons[key];
          const people = schedule.assignments[key] || [];
          return <div key={key} className="schedule-item">
                <div className="schedule-item-header flex items-center justify-center gap-1">
                  <Icon size={12} />
                  <span>{prayerCategoryLabels[key]}</span>
                </div>
                <div className="schedule-item-body">
                  {people.join(" & ")}
                </div>
              </div>;
        })}
        </div>
        {showFullLink && <Link to="/escala" className="flex items-center justify-center gap-1 mt-5 text-primary font-medium text-sm hover:underline">
            Ver escala do mês
            <ChevronRight size={16} />
          </Link>}
      </section>;
  }

  // Regular week
  return <section className="wine-card animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <h2 className="font-display font-bold text-xl sm:text-2xl text-primary text-center underline">
          Escala da Semana
        </h2>
        <span className="week-label self-center sm:self-auto text-center">
          {schedule.label} • {formattedDate}
        </span>
      </div>

      <div className="schedule-grid">
        {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map(key => {
        const Icon = categoryIcons[key];
        const people = schedule.assignments[key] || [];
        return <div key={key} className="schedule-item">
              <div className="schedule-item-header flex items-center justify-center gap-1">
                <Icon size={12} />
                <span>{categoryLabels[key]}</span>
              </div>
              <div className="schedule-item-body">
                {people.join(" & ")}
              </div>
            </div>;
      })}
      </div>

      {showFullLink && <Link to="/escala" className="flex items-center justify-center gap-1 mt-5 text-primary font-medium text-sm hover:underline">
          Ver escala do mês
          <ChevronRight size={16} />
        </Link>}
    </section>;
}
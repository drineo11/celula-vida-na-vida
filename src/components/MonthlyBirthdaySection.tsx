import { Cake, PartyPopper } from "lucide-react";
import { getMonthNamePT } from "@/lib/mockData";
import { parseDateSafe } from "@/lib/utils";

interface BirthdayPerson {
  id: string;
  name: string;
  birthDate: string;
  photoUrl: string | null;
}

interface MonthlyBirthdaySectionProps {
  birthdays: BirthdayPerson[];
}

export function MonthlyBirthdaySection({ birthdays }: MonthlyBirthdaySectionProps) {
  if (birthdays.length === 0) {
    return null;
  }

  const currentMonth = new Date().getMonth() + 1; // 1-12 for getMonthNamePT
  const monthName = getMonthNamePT(currentMonth);

  const formatBirthDay = (birthDate: string): string => {
    const date = parseDateSafe(birthDate);
    return `${date.getDate()}`;
  };

  return (
    <section className="wine-card animate-fade-in bg-gradient-to-br from-coral-400/10 to-coral-500/5 border border-coral-400/20">
      <div className="flex items-center gap-2 mb-5">
        <PartyPopper className="text-coral-500" size={24} />
        <h2 className="font-display font-bold text-xl sm:text-2xl text-primary">
          Aniversariantes de {monthName} 🎉
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {birthdays.map((person) => (
          <article 
            key={person.id}
            className="flex items-center gap-3 p-3 bg-card rounded-xl shadow-sm"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-coral flex items-center justify-center text-foreground">
              {person.photoUrl ? (
                <img 
                  src={person.photoUrl} 
                  alt={person.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <Cake size={20} />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground truncate">
                {person.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                Dia {formatBirthDay(person.birthDate)}
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-4 font-medium">
        Feliz aniversário a todos! Que Deus abençoe ricamente! 🙏
      </p>
    </section>
  );
}

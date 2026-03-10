import { Cake, PartyPopper } from "lucide-react";
import { Participant } from "@/lib/mockData";
import { parseDateSafe } from "@/lib/utils";

interface BirthdaySectionProps {
  birthdays: Participant[];
}

export function BirthdaySection({ birthdays }: BirthdaySectionProps) {
  if (birthdays.length === 0) {
    return null;
  }

  const calculateAge = (birthDate: string): number => {
    const today = new Date();
    const birth = parseDateSafe(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <section className="wine-card animate-fade-in bg-gradient-to-br from-coral-400/10 to-coral-500/5 border border-coral-400/20">
      <div className="flex items-center gap-2 mb-5">
        <PartyPopper className="text-coral-500" size={24} />
        <h2 className="font-display font-bold text-xl sm:text-2xl text-primary">
          Aniversariantes 🎉
        </h2>
      </div>

      <div className="grid gap-4">
        {birthdays.map((person) => (
          <article 
            key={person.id}
            className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-sm"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-coral flex items-center justify-center text-foreground">
              {person.photoUrl ? (
                <img 
                  src={person.photoUrl} 
                  alt={person.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <Cake size={24} />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-lg truncate">
                {person.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                Completando {calculateAge(person.birthDate) + 1} anos! 🎂
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-4 font-medium">
        Feliz aniversário! Que Deus abençoe ricamente! 🙏
      </p>
    </section>
  );
}

import { Link } from "react-router-dom";
import { ArrowLeft, Home, Users } from "lucide-react";

interface OikosFamily {
  leader: string;
  members: string[];
}

const oikosData: OikosFamily[] = [
  { leader: "Adriana", members: ["Geraldo", "Maria"] },
  { leader: "Andreia", members: ["Aloísio", "Janete"] },
  { leader: "Márcia", members: ["Regina", "Matheus", "Rayssa"] },
  { leader: "Cláudia", members: ["Ronaldo", "Júlia", "Vitor"] },
  { leader: "Silvana", members: ["Adriane", "Edilene", "Viviane"] },
  { leader: "Isaac", members: ["Terry", "Gustavo", "Rafael"] },
  { leader: "Zenildo", members: ["Irmãos"] },
  { leader: "Ana Carla", members: ["Josie"] },
  { leader: "Marcelo", members: ["João Pedro"] },
  { leader: "Adriano", members: ["Helyasafe", "Andriele"] },
];

const Oikos = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          to="/"
          className="flex items-center gap-1 px-3 py-2 bg-card/90 backdrop-blur-sm rounded-full shadow-card text-sm font-medium text-primary hover:bg-card transition-colors cursor-pointer"
          aria-label="Voltar para a página inicial"
        >
          <ArrowLeft size={16} />
          Voltar
        </Link>
      </div>

      {/* Hero Header */}
      <header className="bg-gradient-wine text-primary-foreground pt-16 pb-10 px-4 text-center">
        <div className="container max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Home className="w-7 h-7 sm:w-8 sm:h-8 opacity-90" />
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Oikós
            </h1>
          </div>
          <p className="text-sm sm:text-base opacity-80 font-body max-w-xl mx-auto leading-relaxed">
            Antes de tudo, recomendo que se façam súplicas, orações, intercessões e ação de graças por todos os homens;
            Isso é bom e agradável perante Deus, nosso Salvador, que deseja que todos os homens sejam salvos e cheguem ao conhecimento da verdade. 
            <br />1 Timóteo 2:1,3 e 4
          </p>
        </div>
      </header>

      {/* Oikos List */}
      <main className="container max-w-2xl mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col gap-3 sm:gap-4">
          {oikosData.map((item, index) => (
            <article
              key={item.leader}
              className="wine-card animate-fade-in group"
              style={{ animationDelay: `${index * 60}ms`, animationFillMode: "both" }}
              role="listitem"
            >
              <div>
                <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground leading-tight">
                  {item.leader}
                </h2>
                <div className="mt-2 flex flex-wrap gap-2 sm:gap-2.5">
                  {item.members.map((member) => (
                    <span
                      key={member}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm sm:text-base font-medium rounded-full bg-wine-50 text-wine-700 border border-wine-100 transition-colors duration-200"
                    >
                      <Users className="w-4 h-4 opacity-60" />
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground font-body">
            <span className="font-semibold text-primary">
              {oikosData.length}
            </span>{" "}
            membros cuidando de{" "}
            <span className="font-semibold text-primary">
              {oikosData.reduce((acc, item) => acc + item.members.length, 0)}
            </span>{" "}
            pessoas
          </p>
        </div>
      </main>
    </div>
  );
};

export default Oikos;

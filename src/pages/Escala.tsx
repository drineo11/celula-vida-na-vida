import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { MonthlyScheduleView } from "@/components/MonthlySchedule";
import { mockMonthlySchedule } from "@/lib/mockData";

const Escala = () => {
  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          to="/" 
          className="flex items-center gap-1 px-3 py-2 bg-card/90 backdrop-blur-sm rounded-full shadow-card text-sm font-medium text-primary hover:bg-card transition-colors"
        >
          <ArrowLeft size={16} />
          Voltar
        </Link>
      </div>

      <MonthlyScheduleView schedule={mockMonthlySchedule} />
    </div>
  );
};

export default Escala;

import { MapPin, ExternalLink } from "lucide-react";
import { CellMeeting, formatDatePT } from "@/lib/mockData";
import { Logo } from "./Logo";
import bannerBg from "@/assets/banner-bg.jpeg";
import { parseDateSafe } from "@/lib/utils";

interface WeeklyBannerProps {
  meeting: CellMeeting;
}

export function WeeklyBanner({ meeting }: WeeklyBannerProps) {
  const dateObj = parseDateSafe(meeting.date);
  
  const formattedDate = formatDatePT(meeting.date);
  const dayOfWeek = dateObj.toLocaleDateString("pt-BR", { weekday: "long" });
  const dayNumber = dateObj.getDate();
  const month = dateObj.toLocaleDateString("pt-BR", { month: "long" }).toUpperCase();

  return (
    <section 
      className="relative overflow-hidden rounded-2xl"
      style={{
        backgroundImage: `url(${meeting.backgroundImage || bannerBg})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "hsl(350, 75%, 35%)",
      }}
    >
      {/* Wine overlay with fade effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsla(350, 78%, 28%, 0.92) 0%, hsla(350, 75%, 35%, 0.88) 50%, hsla(350, 70%, 42%, 0.82) 100%)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col items-center text-center text-primary-foreground">
        {/* Top subtle text */}
        <p className="font-display italic text-lg sm:text-xl opacity-90 mb-2">
          Sexta-feira tem
        </p>

        {/* Main Title */}
        <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-4">
          CÉLULA
        </h1>

        {/* Date and Time Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="bg-primary-foreground text-primary px-4 py-2 rounded-lg">
            <span className="font-display font-bold text-xl sm:text-2xl">
              {dayNumber} {month}
            </span>
          </div>
          <span className="text-lg sm:text-xl">às</span>
          <div className="bg-primary-foreground text-primary px-4 py-2 rounded-lg">
            <span className="font-display font-bold text-xl sm:text-2xl">
              {meeting.time}h
            </span>
          </div>
        </div>

        {/* Location Card */}
        <div className="bg-primary-foreground/15 backdrop-blur-sm rounded-xl px-5 py-3 mb-4">
          <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
            <span className="text-coral-400 font-semibold">Local:</span>
            <span>{meeting.houseName}</span>
          </div>
        </div>

        {/* Address */}
        <p className="text-sm sm:text-base opacity-90 mb-4 max-w-md">
          {meeting.address}
        </p>

        {/* Maps Button */}
        <a
          href={meeting.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="coral-btn text-sm"
        >
          <MapPin size={16} className="mr-2" />
          Abrir no Google Maps
          <ExternalLink size={14} className="ml-2" />
        </a>

        {/* Logo at bottom */}
        <div className="mt-8 opacity-80">
          <Logo variant="light" size="sm" />
        </div>
      </div>
    </section>
  );
}

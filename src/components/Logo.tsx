import logoBlack from "@/assets/logo-black.png";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "light", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8 sm:h-10",
    lg: "h-10 sm:h-12",
  };

  // Use CSS filter to invert colors for white version
  const filterClass = variant === "light" ? "invert brightness-0 invert" : "";

  return (
    <img 
      src={logoBlack} 
      alt="Célula Vida na Vida" 
      className={`${sizeClasses[size]} w-auto ${filterClass}`}
    />
  );
}

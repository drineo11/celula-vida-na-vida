import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-wine shadow-wine">
      <div className="container flex h-14 sm:h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo variant="light" size="md" />
        </Link>
      </div>
    </header>
  );
}

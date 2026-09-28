import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag, Menu, X, Mail } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Logo } from "@/components/Logo";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { cartCount } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-charcoal text-charcoal-foreground">
      {/* Thin utility bar */}
      <div className="hidden border-b border-white/10 md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-end gap-2 px-4 text-xs font-medium text-charcoal-foreground/65 md:px-6">
          <Mail className="h-3.5 w-3.5 text-ember" />
          <a href="mailto:admin@consultpoints.com" className="hover:text-ember">
            admin@consultpoints.com
          </a>
        </div>
      </div>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative py-1 text-sm font-semibold text-charcoal-foreground/75 transition-colors hover:text-charcoal-foreground [&.active]:text-charcoal-foreground [&.active]:after:absolute [&.active]:after:-bottom-1 [&.active]:after:left-0 [&.active]:after:h-0.5 [&.active]:after:w-full [&.active]:after:bg-ember"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "active" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden h-11 items-center justify-center rounded-md bg-ember px-5 text-sm font-bold text-ember-foreground transition-colors hover:bg-ember/85 md:inline-flex"
          >
            Get Support
          </Link>

          <Link
            to="/cart"
            aria-label="Cart"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-md hover:bg-white/10"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-ember px-1 text-xs font-bold text-ember-foreground">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md hover:bg-white/10 lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-charcoal lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="flex h-12 items-center text-base font-semibold text-charcoal-foreground/90 hover:text-ember"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="my-2 flex h-11 items-center justify-center rounded-md bg-ember text-sm font-semibold text-ember-foreground"
            >
              Get Support
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

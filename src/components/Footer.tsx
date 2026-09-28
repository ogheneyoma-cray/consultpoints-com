import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Send, Check } from "lucide-react";
import { Logo } from "@/components/Logo";

const exploreLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/contact", label: "Contact" },
] as const;

const legalLinks = [
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/refund-policy", label: "Refund Policy" },
] as const;

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      {/* Four-column grid: brand, explore, legal, newsletter signup */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 md:px-6 lg:grid-cols-4 lg:gap-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-foreground/65">
            Consultpoints keeps small and mid-sized business networks running, supported, and
            secure, with a team that actually answers when something needs attention.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Explore</p>
          <ul className="mt-4 space-y-2.5">
            {exploreLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-charcoal-foreground/75 hover:text-charcoal-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Legal</p>
          <ul className="mt-4 space-y-2.5">
            {legalLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-charcoal-foreground/75 hover:text-charcoal-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="mailto:admin@consultpoints.com"
            className="mt-5 flex items-center gap-2 text-sm text-charcoal-foreground/75 hover:text-charcoal-foreground"
          >
            <Mail className="h-4 w-4 text-ember" />
            admin@consultpoints.com
          </a>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Stay updated</p>
          <p className="mt-4 text-sm text-charcoal-foreground/65">
            Occasional notes on new service listings. No spam, unsubscribe anytime.
          </p>
          {subscribed ? (
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-ember">
              <Check className="h-4 w-4" />
              You are on the list.
            </p>
          ) : (
            <form onSubmit={onSubscribe} className="mt-4 flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@business.com"
                aria-label="Email address"
                className="h-11 w-full min-w-0 rounded-md border border-white/15 bg-white/5 px-3 text-sm text-charcoal-foreground placeholder:text-charcoal-foreground/40 focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/40"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-ember text-ember-foreground hover:bg-ember/85"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-charcoal-foreground/55 sm:flex-row md:px-6">
          <span>© {new Date().getFullYear()} Consultpoints. All rights reserved.</span>
          <span>Managed IT support and network infrastructure for SMEs.</span>
        </div>
      </div>
    </footer>
  );
}

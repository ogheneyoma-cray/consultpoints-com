import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Search, ShieldCheck, Clock3, ListChecks, ArrowUpRight, Plus } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Consultpoints | Managed IT Support & Network Infrastructure" },
      {
        name: "description",
        content:
          "Managed IT support and network infrastructure for SMEs. Help desk support, network and Wi-Fi setup, security hardening, backup, servers, and IT consulting.",
      },
    ],
  }),
});

const stats = [
  { icon: Clock3, value: "1 business day", label: "Typical reply time on a support message" },
  { icon: ListChecks, value: "7", label: "Services, each reviewed before it is listed" },
  { icon: ShieldCheck, value: "Monthly", label: "Retainer coverage for ongoing support" },
];

// Home page copy is used verbatim (per the site brief), split into its
// five original paragraphs and presented as an expandable record rather
// than prose-with-a-pull-quote or a numbered vertical timeline.
const record = [
  {
    label: "Why Consultpoints exists",
    body: "Consultpoints exists for one simple reason, to make managed IT support and network infrastructure for SMEs easy to find, easy to trust, and easy to order without second-guessing the price or the description. We built this store to feel premium from the first click, and we keep raising the bar as we grow, because a good first impression only matters if it holds up on the tenth visit too. Every page here reflects that same intention, nothing rushed, nothing left half finished. A lot of that work happens before a listing ever reaches the homepage, which is exactly how we prefer to keep it. It is a habit more than a written policy, and habits are usually what actually hold up under real pressure.",
  },
  {
    label: "How quality control works here",
    body: "Quality control is not an afterthought here, it is built into how we work from the start. We test, we double check, and we would rather tell you a service is out of stock than let a rushed order go out the door. That standard applies whether an order is worth a small amount or a large one, because the size of the order was never the point, getting it right was. We would rather explain a short delay honestly than let a promise slip quietly and hope nobody notices the difference. It is easy to promise good service on a homepage, the actual test is whether it still holds true on a busy day.",
  },
  {
    label: "What earns a place on this site",
    body: "Everything under managed IT support and network infrastructure for SMEs on this site has earned its place through a proper review, not just added to pad out the numbers. We would rather have a shorter list you can trust completely than a long one full of guesswork, because the goal was always to help you decide quickly, not to overwhelm you with options. We would rather be judged on the orders that went out this week than on the copy written for this page. That has meant turning down shortcuts more than once when they would have quietly compromised what Consultpoints is trying to stand for.",
  },
  {
    label: "What we actually watch",
    body: "Customer satisfaction is the metric we actually watch day to day. Response times, order accuracy, and repeat orders tell us more than any single review does, and we treat every complaint as a chance to fix something before the next customer runs into the same issue. Nothing gets brushed aside just because it is inconvenient to address. We would rather grow slowly on that basis than grow quickly and lose track of what made Consultpoints worth choosing in the first place. We revisit this standard regularly rather than setting it once and assuming it holds on its own without checking.",
  },
  {
    label: "Where to start",
    body: "Take a look through the catalogue, add what you need to your cart, and check out whenever you are ready. If you have a question before ordering, reach out first, we would rather answer it properly than have you guess and end up disappointed with the result. That standard applies to every listing under managed IT support and network infrastructure for SMEs on this site, not only the ones we expect to sell fastest. It is a simple filter to describe, but applying it consistently is what actually keeps a catalogue trustworthy over months rather than weeks.",
  },
];

function Index() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [openRecord, setOpenRecord] = useState(0);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/services", search: query.trim() ? { q: query.trim() } : {} });
  };

  return (
    <PageLayout>
      {/* Video-style hero: crossfading Ken Burns photo loop reads as motion,
          gradient scrim, centered search bar. No location text or imagery. */}
      <section className="relative flex h-[86vh] min-h-[560px] items-center justify-center overflow-hidden bg-charcoal text-charcoal-foreground">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="/images/hero-network-room.jpg"
            alt=""
            className="hero-slide-a absolute inset-0 h-full w-full object-cover"
          />
          <img
            src="/images/hero-support-desk.jpg"
            alt=""
            className="hero-slide-b absolute inset-0 h-full w-full object-cover"
          />
          <img
            src="/images/hero-data-center.jpg"
            alt=""
            className="hero-slide-c absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-ember">
            Managed IT Support &amp; Network Infrastructure for SMEs
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl">
            IT support that answers, networks that hold up.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-charcoal-foreground/80 md:text-lg">
            Help desk support, network builds, security hardening, and backup, handled by a team
            that documents its work and actually picks up when something needs attention.
          </p>

          <form
            onSubmit={onSearch}
            className="mt-9 flex w-full max-w-lg items-center gap-2 rounded-full bg-white/10 p-2 backdrop-blur-sm ring-1 ring-white/15"
          >
            <Search className="ml-3 h-5 w-5 flex-shrink-0 text-charcoal-foreground/60" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, e.g. Wi-Fi, backup, firewall"
              aria-label="Search services"
              className="h-11 w-full min-w-0 bg-transparent text-sm text-charcoal-foreground placeholder:text-charcoal-foreground/50 focus:outline-none"
            />
            <button
              type="submit"
              className="h-11 flex-shrink-0 rounded-full bg-ember px-5 text-sm font-bold text-ember-foreground transition-colors hover:bg-ember/85"
            >
              Search
            </button>
          </form>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-wider text-charcoal-foreground/55">
            <span>Help Desk</span>
            <span className="h-1 w-1 rounded-full bg-ember" />
            <span>Networks</span>
            <span className="h-1 w-1 rounded-full bg-ember" />
            <span>Security</span>
            <span className="h-1 w-1 rounded-full bg-ember" />
            <span>Backup</span>
            <span className="h-1 w-1 rounded-full bg-ember" />
            <span>Servers</span>
            <span className="h-1 w-1 rounded-full bg-ember" />
            <span>Consulting</span>
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="border-b border-border bg-paper-2">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-3 md:px-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-charcoal text-ember">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services: numbered ledger rows, not a card grid or a tab panel */}
      <section className="mx-auto max-w-5xl px-4 py-20 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">The listing</p>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              Seven services. One straightforward list.
            </h2>
          </div>
          <a
            href="/services"
            className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-ember"
          >
            Full pricing and details <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 border-t border-border">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* Narrative: expandable record of the home-page copy, not a
          pull-quote block or a vertical timeline */}
      <section className="border-y border-border bg-paper-2">
        <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">
            How we operate
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            Five short answers about how Consultpoints actually runs
          </h2>

          <div className="mt-10 divide-y divide-border rounded-xl border border-border bg-card">
            {record.map((entry, i) => {
              const isOpen = openRecord === i;
              return (
                <div key={entry.label}>
                  <button
                    onClick={() => setOpenRecord(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-foreground">{entry.label}</span>
                    <Plus
                      className={`h-4 w-4 flex-shrink-0 text-ember transition-transform ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                      {entry.body}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA: diagonal split panel with a single action and trust chips,
          not a two-button banner or a centered email-capture form */}
      <section className="relative overflow-hidden bg-charcoal text-charcoal-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[1.3fr_1fr] md:px-6 md:py-20">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Have a network problem that needs a straight answer?
            </h2>
            <p className="mt-4 max-w-md text-sm text-charcoal-foreground/75">
              Message the team directly and a real person will reply, usually within a business
              day. No ticket queue that goes quiet, no automated response pretending to be one.
            </p>
            <a
              href="/contact"
              className="mt-7 inline-flex h-12 items-center justify-center rounded-md bg-ember px-7 text-sm font-bold text-ember-foreground transition-colors hover:bg-ember/85"
            >
              Talk to the team
            </a>
          </div>
          <div className="flex flex-col justify-center gap-4 border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 flex-shrink-0 text-ember" />
              <p className="text-sm text-charcoal-foreground/85">
                Every listing reviewed before it goes on the site
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Clock3 className="h-5 w-5 flex-shrink-0 text-ember" />
              <p className="text-sm text-charcoal-foreground/85">
                Reply within a business day, usually sooner
              </p>
            </div>
            <div className="flex items-center gap-3">
              <ListChecks className="h-5 w-5 flex-shrink-0 text-ember" />
              <p className="text-sm text-charcoal-foreground/85">
                Pricing shown upfront, nothing added at checkout
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

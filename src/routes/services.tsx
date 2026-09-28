import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { Search } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  validateSearch: (s) => z.object({ q: z.string().optional() }).parse(s),
  head: () => ({
    meta: [
      { title: "Services | Consultpoints" },
      {
        name: "description",
        content:
          "Browse the full Consultpoints catalogue: help desk support, network and Wi-Fi setup, security hardening, backup, servers, and IT consulting, priced in Naira.",
      },
    ],
  }),
});

const categories = ["All", ...Array.from(new Set(services.map((s) => s.category)))];

function ServicesPage() {
  const { q } = Route.useSearch();
  const [query, setQuery] = useState(q ?? "");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return services.filter((s) => {
      const matchesCategory = category === "All" || s.category === category;
      const matchesQuery =
        !term ||
        s.name.toLowerCase().includes(term) ||
        s.summary.toLowerCase().includes(term) ||
        s.category.toLowerCase().includes(term);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <PageLayout>
      <section className="bg-charcoal text-charcoal-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-ember">Services</p>
          <h1 className="mt-4 text-3xl font-bold md:text-4xl">Every service, one honest page.</h1>
          <div className="mt-6 space-y-4 text-charcoal-foreground/80">
            <p>
              Everything listed here falls under managed IT support and network infrastructure for
              SMEs, reviewed and updated regularly so the page reflects what is actually available
              rather than an outdated snapshot from months ago. We would rather remove a listing
              that has gone out of stock than leave it up and disappoint someone at checkout. None
              of this is visible to a first-time visitor, but it is exactly what makes a second
              visit worth having.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 md:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services"
              aria-label="Search services"
              className="h-11 w-full rounded-md border border-input bg-background pl-10 pr-4 text-sm focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/30"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                  category === c
                    ? "border-charcoal bg-charcoal text-charcoal-foreground"
                    : "border-border bg-transparent text-muted-foreground hover:border-charcoal/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-border">
          {filtered.length === 0 ? (
            <p className="py-10 text-center text-sm text-muted-foreground">
              No services match that search. Try a different term or category.
            </p>
          ) : (
            filtered.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)
          )}
        </div>
      </section>

      <section className="border-t border-border bg-paper-2">
        <div className="mx-auto max-w-4xl space-y-6 px-4 py-16 text-base leading-relaxed text-foreground/85 md:px-6">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Why this page stays this way
          </h2>
          <p>
            Before anything is added to this page, it goes through a consistent review, checking
            whether it meets our own standard, whether the description is accurate, and whether we
            would be comfortable recommending it to a friend ordering for themselves. If the answer
            is no on any count, it does not get listed until that is fixed. That habit is part of
            why customers tend to trust what is written here rather than double-checking it
            elsewhere first. We would rather spend the extra time here than have a customer discover
            the gap after an order is already placed. It is a slower way to run a catalogue page,
            and we have decided that trade-off is worth making consistently.
          </p>
          <p>
            The range covers different needs within managed IT support and network infrastructure
            for SMEs, so whether you are after something entry level or something more specific,
            there should be an option that fits what you are actually looking for. We add to the
            catalogue gradually, prioritising quality over simply having more listings to display. A
            listing that fails that check gets fixed or removed, it does not stay up just because it
            took time to prepare. It is a plain habit rather than a marketing point, but it is the
            habit that actually keeps this page worth trusting. We would rather catch an issue
            ourselves than have a customer point it out after an order has already gone through.
          </p>
          <p>
            We designed this page so ordering takes a few minutes, not an afternoon spent
            second-guessing the process. Add what you need to your cart, review it once, and
            complete checkout when you are ready, with no unnecessary steps forced in between. It
            also means updates happen even to older listings, not only to the ones added most
            recently. We would rather answer a question about a listing directly than leave any
            ambiguity for you to sort out alone. We would rather keep this page accurate than keep
            it large, since accuracy is what actually earns repeat orders.
          </p>
          <p>
            We back every listing here with proper support after the order is placed, not just
            before you pay. If something is not right, we would rather fix it directly than have you
            left guessing what to do next. That review happens quietly in the background, well
            before a listing is visible to anyone browsing the page. We check this page the way we
            would want a store to check its own shelves, regularly and honestly. We treat this page
            as something to maintain properly, not something to publish once and leave alone
            indefinitely.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

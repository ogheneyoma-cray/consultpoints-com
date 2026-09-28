import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, Check, Clock } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { getServiceBySlug } from "@/data/services";
import { useCart } from "@/context/CartContext";
import { formatNaira } from "@/lib/format";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetailPage,
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.name} | Consultpoints` },
          { name: "description", content: loaderData.service.summary },
          { property: "og:title", content: loaderData.service.name },
          { property: "og:description", content: loaderData.service.summary },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <PageLayout>
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">Service not found</h1>
        <p className="mt-3 text-muted-foreground">
          The service you are looking for is no longer listed.
        </p>
        <Link
          to="/services"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-charcoal px-6 text-sm font-semibold text-charcoal-foreground"
        >
          Back to services
        </Link>
      </div>
    </PageLayout>
  ),
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <PageLayout>
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <Link to="/services" className="text-sm font-medium text-muted-foreground hover:text-ember">
          ← Back to services
        </Link>

        <div className="mt-6 grid gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-border bg-muted">
            <img
              src={service.image}
              alt={service.name}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ember">
              {service.category}
            </p>
            <h1 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">{service.name}</h1>
            <p className="mt-4 text-2xl font-bold text-foreground">{formatNaira(service.price)}</p>
            <p className="mt-6 leading-relaxed text-muted-foreground">{service.description}</p>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground/80">
              <Clock className="h-4 w-4 text-ember" />
              Typical turnaround: {service.turnaround}
            </div>

            <ul className="mt-6 space-y-2">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-ember" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 items-center rounded-md border border-input">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex h-12 w-12 items-center justify-center hover:bg-accent"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-semibold">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="flex h-12 w-12 items-center justify-center hover:bg-accent"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <button
                onClick={() => {
                  addToCart(service.id, qty);
                  setAdded(true);
                }}
                className="inline-flex h-12 flex-1 items-center justify-center rounded-md bg-charcoal px-6 text-sm font-semibold text-charcoal-foreground transition-colors hover:bg-charcoal-2"
              >
                Add to Cart
              </button>
            </div>
            {added && (
              <p className="mt-3 text-sm font-medium text-ember">
                Added to your cart.{" "}
                <Link to="/cart" className="underline">
                  View cart
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

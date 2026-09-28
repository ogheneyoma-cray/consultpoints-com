import { Link } from "@tanstack/react-router";
import { useCart } from "@/context/CartContext";
import { formatNaira } from "@/lib/format";
import type { Service } from "@/data/services";

/**
 * Horizontal ledger-style row, not a card grid: thumbnail, details, and
 * price/action sit in one line item, closer to a pricing sheet than a
 * product tile. Stacks to a compact block on narrow screens.
 */
export function ServiceCard({ service, index }: { service: Service; index?: number }) {
  const { addToCart } = useCart();
  return (
    <div className="group grid grid-cols-[auto_1fr] items-center gap-5 border-b border-border py-6 sm:grid-cols-[2.5rem_5.5rem_1fr_auto] sm:gap-6">
      {typeof index === "number" && (
        <span className="hidden self-start pt-1 text-sm font-bold text-muted-foreground/50 sm:block">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="row-span-2 block h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-muted sm:row-span-1 sm:h-20 sm:w-24"
      >
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-wider text-ember">
          {service.category}
        </p>
        <Link
          to="/services/$slug"
          params={{ slug: service.slug }}
          className="mt-0.5 block text-base font-bold leading-tight text-foreground hover:text-ember"
        >
          {service.name}
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{service.summary}</p>
      </div>
      <div className="col-span-2 flex items-center justify-between gap-4 sm:col-span-1 sm:flex-col sm:items-end sm:justify-center sm:gap-2">
        <p className="text-lg font-bold text-foreground">{formatNaira(service.price)}</p>
        <button
          onClick={() => addToCart(service.id)}
          className="inline-flex h-10 items-center justify-center rounded-md bg-charcoal px-4 text-sm font-semibold text-charcoal-foreground transition-colors hover:bg-charcoal-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

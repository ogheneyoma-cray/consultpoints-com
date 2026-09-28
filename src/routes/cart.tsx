import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2, Minus, Plus } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useCart } from "@/context/CartContext";
import { formatNaira } from "@/lib/format";

export const Route = createFileRoute("/cart")({
  component: CartPage,
  head: () => ({ meta: [{ title: "Your Cart | Consultpoints" }] }),
});

function CartPage() {
  const { detailed, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (detailed.length === 0) {
    return (
      <PageLayout>
        <div className="mx-auto max-w-2xl px-4 py-24 text-center">
          <h1 className="text-3xl font-bold text-foreground">Your cart is empty</h1>
          <p className="mt-3 text-muted-foreground">You have not added any services yet.</p>
          <Link
            to="/services"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-charcoal px-6 text-sm font-semibold text-charcoal-foreground hover:bg-charcoal-2"
          >
            Browse Services
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">Your Cart</h1>
        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <ul className="space-y-4 lg:col-span-2">
            {detailed.map(({ service, quantity, lineTotal }) => (
              <li key={service.id} className="flex gap-4 rounded-xl border border-border p-4">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-24 w-28 flex-shrink-0 rounded-lg object-cover"
                />
                <div className="flex flex-1 flex-col">
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="font-semibold text-foreground hover:text-ember"
                  >
                    {service.name}
                  </Link>
                  <p className="text-sm text-muted-foreground">{formatNaira(service.price)} each</p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex h-11 items-center rounded-md border border-input">
                      <button
                        onClick={() => updateQuantity(service.id, quantity - 1)}
                        className="flex h-11 w-11 items-center justify-center hover:bg-accent"
                        aria-label="Decrease"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-10 text-center text-sm font-semibold">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(service.id, quantity + 1)}
                        className="flex h-11 w-11 items-center justify-center hover:bg-accent"
                        aria-label="Increase"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="font-bold text-foreground">{formatNaira(lineTotal)}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(service.id)}
                  aria-label="Remove"
                  className="flex h-11 w-11 items-center justify-center self-start rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
          <aside className="h-fit rounded-xl border border-border bg-paper-2 p-6">
            <h2 className="text-lg font-bold text-foreground">Order Summary</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd className="font-semibold">{formatNaira(cartTotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Delivery</dt>
                <dd className="font-semibold">Scheduled after checkout</dd>
              </div>
              <div className="flex justify-between border-t border-border pt-3 text-base">
                <dt className="font-bold text-foreground">Total</dt>
                <dd className="font-bold text-foreground">{formatNaira(cartTotal)}</dd>
              </div>
            </dl>
            <Link
              to="/checkout"
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-md bg-ember px-6 text-sm font-semibold text-ember-foreground hover:bg-ember/85"
            >
              Proceed to Checkout
            </Link>
          </aside>
        </div>
      </div>
    </PageLayout>
  );
}

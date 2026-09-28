import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/order-confirmation")({
  component: ConfirmationPage,
  validateSearch: (s) => z.object({ order: z.string().optional() }).parse(s),
  head: () => ({ meta: [{ title: "Order Confirmed | Consultpoints" }] }),
});

function ConfirmationPage() {
  const { order } = Route.useSearch();
  return (
    <PageLayout>
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-ember" />
        <h1 className="mt-6 text-3xl font-bold text-foreground md:text-4xl">
          Thank you for your order
        </h1>
        <p className="mt-3 text-muted-foreground">
          Your order has been placed successfully. A member of the team will follow up by email
          shortly to schedule the work.
        </p>
        {order && (
          <p className="mt-6 inline-block rounded-md border border-border bg-paper-2 px-4 py-2 text-sm font-semibold">
            Order number: <span className="text-ember">{order}</span>
          </p>
        )}
        <div className="mt-8">
          <Link
            to="/services"
            className="inline-flex h-12 items-center justify-center rounded-md bg-charcoal px-6 text-sm font-semibold text-charcoal-foreground hover:bg-charcoal-2"
          >
            Continue browsing
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}

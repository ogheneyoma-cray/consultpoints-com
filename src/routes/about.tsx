import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | Consultpoints" },
      {
        name: "description",
        content:
          "Consultpoints started with a straightforward idea, that managed IT support and network infrastructure for SMEs deserved a better, more modern option.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <PageLayout>
      <section className="grid gap-0 lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-charcoal px-4 py-16 text-charcoal-foreground md:px-6 md:py-24 lg:py-32">
          <div className="mx-auto max-w-lg lg:mx-0">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-ember">
              About Consultpoints
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
              The idea behind Consultpoints
            </h1>
            <p className="mt-6 text-charcoal-foreground/80">
              The idea behind Consultpoints came from noticing a gap that kept showing up. Too many
              businesses in managed IT support and network infrastructure for SMEs treated customers
              as one-time transactions instead of people who might come back again and again if the
              experience was actually good. We wanted to build something premium enough that people
              would genuinely want to return, not because they had no other option, but because we
              earned it. We would rather stay accountable to that idea than let it quietly become a
              slogan we stopped checking ourselves against. We would rather be honest about what we
              are still improving than pretend everything about Consultpoints is already finished.
            </p>
          </div>
        </div>
        <div className="h-64 lg:h-auto">
          <img
            src="/images/about-team.jpg"
            alt="Consultpoints team collaborating during a planning session"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-12 px-4 py-16 md:px-6 md:py-24">
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Our mission</h2>
          <p className="mt-4 leading-relaxed text-foreground/85">
            Our mission is to make managed IT support and network infrastructure for SMEs
            accessible without cutting corners on quality anywhere along the way. We measure
            success by whether a customer's second order was easier than their first, not by how
            many banners we can fit on a page or how many listings we can publish in a week. It
            sounds simple written down, but keeping it true as managed IT support and network
            infrastructure for SMEs evolves has taken more discipline than we expected at the
            start. It is the kind of standard that only really shows up over a long series of
            ordinary orders, not one big moment.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            What being personable means
          </h2>
          <p className="mt-4 leading-relaxed text-foreground/85">
            Being personable is not a slogan we put on a page, it shows up in the details, how
            quickly we respond to a message, how clearly we describe what we sell, and how we
            handle it when something does not go to plan on our end rather than blaming the
            customer for the mix-up. That is part of why Consultpoints still feels like a small
            operation in the way decisions actually get made day to day. It shapes hiring,
            sourcing, and even which questions get answered first when several things need
            attention at once.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Our team</h2>
          <p className="mt-4 leading-relaxed text-foreground/85">
            Our team is deliberately kept lean so that nothing falls through the cracks between
            departments. Everyone involved has a hand in managed IT support and network
            infrastructure for SMEs, whether that is sourcing, quality checks, or replying directly
            to a message from a customer who needs help deciding what to order next. That belief
            has been tested more than once as the business has grown, and it has held up each time
            we checked it honestly. That consistency is harder to maintain than it sounds,
            especially once a business has more customers to answer to.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Still growing</h2>
          <p className="mt-4 leading-relaxed text-foreground/85">
            Consultpoints is a work in progress in the best sense, we keep improving, keep
            listening to feedback, and keep the same commitment to managed IT support and network
            infrastructure for SMEs that we started with, even as the business itself changes
            shape. None of it happened by accident, every part of how Consultpoints runs was a
            deliberate choice made more than once. We expect to keep adjusting the details as
            managed IT support and network infrastructure for SMEs changes, while keeping this same
            underlying approach in place.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/85">
            We would rather move a little slower and get an order right than rush it out and have
            to fix a mistake afterward, because the fix rarely feels as good as getting it right the
            first time.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-paper-2 p-8 text-center">
          <p className="text-lg font-semibold text-foreground">
            Ready to see how Consultpoints would approach your network?
          </p>
          <Link
            to="/services"
            className="mt-5 inline-flex h-12 items-center justify-center rounded-md bg-charcoal px-7 text-sm font-bold text-charcoal-foreground hover:bg-charcoal-2"
          >
            Browse Services
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

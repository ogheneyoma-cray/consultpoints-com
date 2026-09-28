import { createFileRoute, Link } from "@tanstack/react-router";
import { Gem, Headset, ListChecks, BadgeCheck } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/why-choose-us")({
  component: WhyChooseUsPage,
  head: () => ({
    meta: [
      { title: "Why Choose Us | Consultpoints" },
      {
        name: "description",
        content:
          "Quality comes first, support that actually helps, a meticulous process, and fair pricing without hidden costs.",
      },
    ],
  }),
});

const pillars = [
  {
    icon: Gem,
    heading: "Quality comes first, always",
    body: "Every service under managed IT support and network infrastructure for SMEs that carries the Consultpoints name has been checked against a standard we set for ourselves, not just a minimum bar required to get something listed and out of the way. That is a deliberate choice we keep making even when a shortcut would be easier in the moment. It is easier to describe a standard like this than to live up to it consistently, and we know that difference matters. We would rather be measured against that standard than against a list of features that sound good on a page.",
  },
  {
    icon: Headset,
    heading: "Support that actually helps",
    body: "We treat customer support as a core part of the business, not an afterthought bolted on at the end. Every message is read and answered by someone who actually understands managed IT support and network infrastructure for SMEs, so you get a useful answer the first time you ask, not the third. We would rather under-promise here than write something impressive that the rest of the site cannot actually back up. We would rather explain exactly why we do something than ask you to just take our word for it. It shows up most clearly in the small moments, a quick reply, an accurate listing, an order that arrives as described.",
  },
  {
    icon: ListChecks,
    heading: "A meticulous process",
    body: "Everything about the ordering process is built to be consistent, find what you need, add it to your cart, and check out without unnecessary friction slowing you down at any point along the way. That is the bar we set for ourselves, and we would rather be told honestly if we are falling short of it. We built this page to describe what is actually true about Consultpoints, not what sounds best in a headline. None of it replaces judging us by an actual order, this page is simply an honest account of what to expect.",
  },
  {
    icon: BadgeCheck,
    heading: "Fair pricing, no hidden costs",
    body: "We price managed IT support and network infrastructure for SMEs fairly, without inflating numbers first just to offer a discount later that looks better than it actually is. The price you see reflects what we genuinely think it is worth, nothing added on top. We would rather earn that trust slowly and keep it than promise more than we can consistently deliver. None of these points work in isolation, they only mean something when they hold together across every single order. None of this is meant to sound impressive, it is meant to be accurate about how Consultpoints actually operates.",
  },
];

function WhyChooseUsPage() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-charcoal text-charcoal-foreground">
        <img
          src="/images/why-choose-us.jpg"
          alt="A network engineer troubleshooting a laptop connected to networking equipment"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 to-charcoal" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center md:px-6 md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-ember">
            Why Choose Us
          </p>
          <h1 className="mt-5 text-3xl font-bold md:text-4xl">
            Four things we hold ourselves to on every order
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.heading} className="rounded-xl border border-border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent">
                <p.icon className="h-6 w-6 text-ember" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-foreground">{p.heading}</h2>
              <p className="mt-3 leading-relaxed text-foreground/80">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-paper-2">
        <div className="mx-auto max-w-3xl space-y-5 px-4 py-16 text-base leading-relaxed text-foreground/85 md:px-6">
          <p>
            We built Consultpoints around these principles because they are the reasons we would
            choose a business ourselves as customers. We hold ourselves to the same standard we
            would expect if the roles were reversed. We check ourselves against this regularly, not
            just when writing a page meant to convince someone to buy. That is not a claim we
            expect you to take on faith, it is something you can judge for yourself after one
            order. That consistency is the actual reason people come back, not any single feature
            we could put in a headline.
          </p>
          <div className="pt-2 text-center">
            <Link
              to="/services"
              className="inline-flex h-12 items-center justify-center rounded-md bg-charcoal px-7 text-sm font-bold text-charcoal-foreground hover:bg-charcoal-2"
            >
              See the full catalogue
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

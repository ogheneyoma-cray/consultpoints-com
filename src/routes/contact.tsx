import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Clock, MessageSquare } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | Consultpoints" },
      {
        name: "description",
        content:
          "Reach Consultpoints at admin@consultpoints.com. Whether you are still deciding on an order or already have one placed, we want to hear from you.",
      },
    ],
  }),
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

const faqs = [
  {
    q: "How quickly will I hear back?",
    a: "We check it regularly throughout the day and aim to reply within a business day, often sooner where we can manage it. Response times can vary slightly depending on volume, but we would rather be honest than promise something unrealistic.",
  },
  {
    q: "Can I ask questions before ordering?",
    a: "Yes, and we would rather you did. If a listing description was unclear before you ordered, contact us first, we would rather answer the question than have you guess.",
  },
  {
    q: "Who actually reads my message?",
    a: "None of this is handled by an automated system pretending to be a person, a real member of the team reads it. Every message gets read by someone who can actually act on it.",
  },
  {
    q: "What if something did not go smoothly with my order?",
    a: "Let us know honestly, and if something went well, that helps us just as much to hear too. We would rather hear a complaint directly than have you quietly decide not to order from Consultpoints again without telling us why.",
  },
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => {
        if (i.path[0]) errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageLayout>
      <section className="bg-charcoal text-charcoal-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-ember">Contact Us</p>
          <h1 className="mt-4 text-3xl font-bold md:text-4xl">
            Whether you are deciding or already ordering, we want to hear from you
          </h1>
          <p className="mt-5 max-w-2xl text-charcoal-foreground/80">
            Have a question about managed IT support and network infrastructure for SMEs, an
            existing order, or something you would like to see us carry in future. We would rather
            you ask directly than guess and end up unsure, so reach out any time that suits you.
            That is a deliberate choice, since automated replies rarely handle a specific question
            about managed IT support and network infrastructure for SMEs very well. We would rather
            answer directly than send you searching through a help page for something we could just
            explain.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          <aside className="space-y-5 lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-ember" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a
                    href="mailto:admin@consultpoints.com"
                    className="text-sm text-muted-foreground hover:text-ember"
                  >
                    admin@consultpoints.com
                  </a>
                </div>
              </div>
              <div className="mt-5 flex items-start gap-3">
                <MessageSquare className="mt-0.5 h-5 w-5 flex-shrink-0 text-ember" />
                <div>
                  <p className="font-semibold text-foreground">Read by a person</p>
                  <p className="text-sm text-muted-foreground">
                    The quickest way to reach us is by email at admin@consultpoints.com. Every
                    message gets read by someone who can actually act on it, not a queue that goes
                    nowhere.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-ember" />
                <div>
                  <p className="font-semibold text-foreground">Response time</p>
                  <p className="text-sm text-muted-foreground">
                    We aim to resolve most questions in a single reply rather than dragging things
                    out. If something needs more digging on our end, we will tell you what to
                    expect and follow up.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Feedback from customers is one of the main ways Consultpoints actually improves over
              time. We keep this process simple on purpose, because a complicated way to ask a
              question usually means fewer people bother asking.
            </p>
          </aside>

          <form
            onSubmit={onSubmit}
            className="space-y-5 rounded-xl border border-border bg-card p-6 lg:col-span-3"
            noValidate
          >
            {sent && (
              <div className="rounded-md border border-ember/40 bg-accent p-4 text-sm">
                Thank you for reaching out to Consultpoints. Your message has been sent and a real
                member of the team will get back to you.
              </div>
            )}
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-foreground">
                Name
              </label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                className="mt-2 h-12 w-full rounded-md border border-input bg-background px-4 text-sm focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/30"
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                className="mt-2 h-12 w-full rounded-md border border-input bg-background px-4 text-sm focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/30"
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold text-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                className="mt-2 w-full rounded-md border border-input bg-background p-4 text-sm focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/30"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-md bg-ember px-6 text-sm font-semibold text-ember-foreground hover:bg-ember/85"
            >
              Send message
            </button>
          </form>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            A few common questions
          </h2>
          <div className="mt-8 divide-y divide-border rounded-xl border border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6">
                <summary className="cursor-pointer list-none text-base font-semibold text-foreground marker:hidden">
                  <span className="flex items-center justify-between">
                    {f.q}
                    <span className="text-ember transition-transform group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-xl border border-border bg-paper-2 p-8 text-center text-base leading-relaxed text-foreground/85">
          <p>
            We treat every message as important, whether it is a quick question or a longer one, so
            do not hesitate to get in touch about anything at all on your mind. We genuinely mean it
            when we say a message here reaches someone who can help, not a queue that goes nowhere.
            That applies whether the question is about managed IT support and network
            infrastructure for SMEs generally or about one specific order you have already placed.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

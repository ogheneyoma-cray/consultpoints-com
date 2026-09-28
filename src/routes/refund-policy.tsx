import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/refund-policy")({
  component: RefundPolicyPage,
  head: () => ({ meta: [{ title: "Refund Policy | Consultpoints" }] }),
});

function RefundPolicyPage() {
  return (
    <LegalPage title="Refund Policy">
      <p>
        Because managed IT support and network infrastructure for SMEs is delivered digitally,
        access is typically granted immediately or shortly after payment is confirmed. Given the
        nature of digital delivery, refund requests are handled differently from a physical product
        return and are assessed on a case by case basis. None of this replaces your rights under
        applicable consumer protection law, which continue to apply alongside this policy. A refund
        decision is never made to save a little money at the expense of a genuine complaint being
        addressed properly.
      </p>

      <h2>When a refund applies</h2>
      <p>
        We will consider a refund if you were charged in error, if access was never successfully
        delivered after payment, or if there is a genuine fault with the managed IT support and
        network infrastructure for SMEs you ordered that we cannot correct within a reasonable
        time. We would rather lose a little on an individual refund than damage the trust
        CONSULTPOINTS LIMITED has built with its customers. We keep a record of every refund
        request so patterns in managed IT support and network infrastructure for SMEs orders can be
        addressed properly rather than repeated.
      </p>

      <h2>What is not covered</h2>
      <p>
        We do not offer refunds for change of mind once digital access under managed IT support and
        network infrastructure for SMEs has been delivered and used. If a listing description was
        unclear before you ordered, contact us first, we would rather answer the question than
        process a refund after the fact. We assess these requests honestly rather than looking for
        a reason to decline them. This applies the same way regardless of how the order under
        managed IT support and network infrastructure for SMEs was paid for.
      </p>

      <h2>How to request a refund</h2>
      <p>
        Refund requests should be sent to admin@consultpoints.com along with your order details. We
        review each request individually and respond with a decision, and where a refund is
        approved, it is processed back to the original payment method used at checkout. We would
        rather take a short amount of extra time reviewing a request than issue a blanket no
        without actually looking into it. We aim to make this process as straightforward as the
        ordering process itself.
      </p>

      <h2>Processing time</h2>
      <p>
        Once a refund is approved, we process it promptly, though the exact time it takes to
        reflect in your account depends on your payment provider and is outside our direct control.
        We would rather resolve a genuine issue quickly than let it turn into a drawn out dispute.
        None of this is meant to make a refund difficult to obtain when it is genuinely owed.
      </p>

      <p>
        We aim to be fair and reasonable when reviewing refund requests for managed IT support and
        network infrastructure for SMEs. If something about our decision does not seem right to
        you, tell us and we will reconsider it properly. If you are unsure whether your situation
        qualifies, ask before assuming either way, we would rather clarify it directly. This policy
        is applied consistently across every order, not adjusted informally case by case without a
        stated reason.
      </p>

      <p>
        If any part of this page is unclear, contact us directly rather than assuming, we would
        rather clarify it than have you guess.
      </p>
    </LegalPage>
  );
}

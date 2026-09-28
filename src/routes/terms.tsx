import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({ meta: [{ title: "Terms and Conditions | Consultpoints" }] }),
});

function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions">
      <p>
        These Terms and Conditions govern your use of CONSULTPOINTS LIMITED and any order placed
        for managed IT support and network infrastructure for SMEs through this site. Using the
        site, browsing the catalogue, or completing a checkout counts as acceptance of these terms
        as they stand at that time. We recommend checking this page occasionally, since it may be
        updated as the business grows. This applies equally whether you are ordering for the first
        time or are a returning customer under managed IT support and network infrastructure for
        SMEs.
      </p>

      <h2>Eligibility and orders</h2>
      <p>
        You must be able to enter into a legally binding agreement to place an order with
        CONSULTPOINTS LIMITED. By ordering, you confirm that the details you provide, including
        your contact email, are accurate and that you are authorized to use the payment method
        provided at checkout. We reserve the right to cancel or decline an order where this cannot
        be confirmed. These terms exist to protect ordinary customers as much as they protect
        CONSULTPOINTS LIMITED, not to hide anything in fine print.
      </p>

      <h2>Orders and pricing</h2>
      <p>
        Once an order for managed IT support and network infrastructure for SMEs is placed and
        paid for, delivery of access or service details typically follows within the timeframe
        stated on the relevant listing. Prices are shown at the time of ordering and are subject to
        change for future orders, though a completed order is honored at the price paid. We apply
        this the same way to every order under managed IT support and network infrastructure for
        SMEs, regardless of size, so there is no separate informal standard for a larger or smaller
        purchase.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on this site, including text, product or service descriptions, graphics, and
        the CONSULTPOINTS LIMITED logo, is the property of CONSULTPOINTS LIMITED or its licensors
        and is protected by applicable intellectual property law. You may not copy, reproduce, or
        reuse this content for commercial purposes without prior written permission. Where local
        consumer protection law gives you stronger rights than stated here, those rights are not
        reduced by this page.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        While we take reasonable care in describing managed IT support and network infrastructure
        for SMEs accurately, CONSULTPOINTS LIMITED does not guarantee that the site will be free of
        errors or interruptions at all times. Our liability in connection with any order is limited
        to the amount paid for that order, except where such a limit is not permitted by law. If a
        situation comes up that this page does not clearly cover, contact us and we will tell you
        plainly how it is handled.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        These terms are governed by applicable law and should be read alongside our Privacy Policy
        and Refund Policy. If any part of these terms is found unenforceable, the remaining terms
        continue to apply in full. Questions about this page can be sent through the Contact page.
        We review this page occasionally as the business changes, rather than leaving it untouched
        indefinitely once published.
      </p>

      <p>
        Nothing here is meant to be complicated, it is written to be read and understood by an
        ordinary customer, not a lawyer.
      </p>
    </LegalPage>
  );
}

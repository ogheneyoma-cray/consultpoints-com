import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({ meta: [{ title: "Privacy Policy | Consultpoints" }] }),
});

function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        When you browse CONSULTPOINTS LIMITED or place an order for managed IT support and network
        infrastructure for SMEs, we collect information such as your name, email address, and
        order details, along with basic technical information like browser type and pages visited.
        This information is collected directly from you when you fill in a form or complete a
        checkout. We treat this responsibility seriously because trust is central to ordering
        managed IT support and network infrastructure for SMEs from a business you have not met in
        person.
      </p>

      <h2>How we use your information</h2>
      <p>
        We use the information collected to complete orders, provide support when you contact us,
        and understand how the site is used so it can be improved. We do not use your information
        for purposes unrelated to running CONSULTPOINTS LIMITED without informing you first. We
        only ask for what is actually needed to fulfil an order or answer a question, nothing
        beyond that.
      </p>

      <h2>Cookies</h2>
      <p>
        This site may use cookies or similar technology to keep your cart contents while you browse
        and to understand general site usage. You can usually adjust your browser settings to limit
        or block cookies, though doing so may affect how well the cart and checkout function. None
        of this changes depending on how you found CONSULTPOINTS LIMITED or how you are paying for
        an order.
      </p>

      <h2>Sharing your information</h2>
      <p>
        Your information is shared only where necessary, for example with a payment processor to
        complete your transaction, or where required by law. We do not pass your details to third
        parties for their own marketing purposes without your consent. If you are ever unsure what
        a specific piece of information is used for, ask us directly and we will explain plainly.
      </p>

      <h2>Security</h2>
      <p>
        Reasonable technical and organizational measures are in place to protect your information
        from unauthorized access or disclosure. While no online system can be guaranteed completely
        secure, we treat the security of your data as an ongoing responsibility, not a one-time
        setup. We keep this policy in plain language on purpose, since a privacy policy nobody can
        understand does not actually protect anyone.
      </p>

      <h2>Your rights</h2>
      <p>
        You have the right to ask what information CONSULTPOINTS LIMITED holds about you and to
        request corrections or deletion where appropriate. To exercise any of these rights, reach
        out to admin@consultpoints.com and we will handle the request directly. None of your
        information is used for purposes you were not told about at the point it was collected.
      </p>

      <p>
        We may revise this policy from time to time, and any changes will be reflected on this page
        with an updated date. Continuing to use CONSULTPOINTS LIMITED after a change means you
        accept the revised policy. Questions about privacy can be sent to admin@consultpoints.com
        at any time. This applies to every customer under managed IT support and network
        infrastructure for SMEs, not only to larger orders or repeat customers.
      </p>

      <p>
        Where a specific situation is not covered explicitly on this page, contact us and we will
        explain how it is handled rather than leaving you to guess.
      </p>

      <p>
        This policy applies to every order placed through the site, regardless of size, and is not
        adjusted informally on a case by case basis.
      </p>
    </LegalPage>
  );
}

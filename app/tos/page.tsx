import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="container-fluid mx-auto">
        <div className="p-5">
          <div className="text-center p-5">
            <Link href="/" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                  clipRule="evenodd"
                />
              </svg>
              Back
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
              Terms and Conditions for {config.appName}
            </h1>
            <p className="text-gray-600 mb-4">
              www.ipoexpert.in (&quot;Website&quot;) is owned and operated by S K & Associates
              (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed to protecting the
              privacy of any individual or entity (&quot;User&quot;) who accesses or uses the
              Website. This Privacy Policy describes how we collect, use, disclose,
              and protect Personal Data you provide when accessing or using the
              Website.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 mb-4">
              By using this Website, you affirm that you have read, understood,
              and agree to comply with these Terms of Service, including any
              policies referenced herein (such as our Privacy Policy and
              Disclaimer).
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              2. Services Provided
            </h2>
            <p className="text-gray-600 mb-4">
              This Website provides information related to Initial Public Offer
              (IPO) related services, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Initial Public Offerings (IPOs)</li>
              <li>IPO Intermediaries</li>
              <li>Advisory for Corporates, SMEs, and Individuals</li>
            </ul>
            <p className="text-gray-600 mb-4">
              The information provided on the Website is for general information
              purposes only and does not constitute an offer to sell or a
              solicitation to buy any securities, investment products, or
              advisory services.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              3. No Professional or Financial Advice
            </h2>
            <p className="text-gray-600 mb-4">
              The content on this Website is provided for informational purposes
              only and does not constitute financial, legal, or investment advice.
              You should consult directly with a qualified financial advisor or
              legal professional before making any decisions based on the content
              on the Website.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              4. User Responsibilities
            </h2>
            <p className="text-gray-600 mb-4">
              As a user of the Website, you agree:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>
                Not to use the Website for any unlawful purposes or to violate any
                laws in your jurisdiction.
              </li>
              <li>
                Not to engage in any behavior that could harm, disrupt, or
                compromise the functionality of the Website.
              </li>
              <li>
                To provide accurate and complete information when requested and
                maintain the confidentiality of any account credentials.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              5. Confidentiality and Privacy
            </h2>
            <p className="text-gray-600 mb-4">
              We take the privacy of our users seriously. Any personal information
              you provide while using the Website will be handled in accordance
              with our Privacy Policy. You acknowledge that internet-based
              communication is not always secure, and you agree that the Company
              will not be held liable for unauthorized access to your data unless
              due to negligence on our part.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              6. No Advance Payments
            </h2>
            <p className="text-gray-600 mb-4">
              We do not ask for any advance payments nor charge any fees for
              joining IPO Expert. Any claims made by third parties requesting
              advance payments or fees on behalf of the Company are fraudulent,
              and you agree that any payments made to such individuals or entities
              are at your own risk. The Company will not be responsible for any
              losses or damages incurred due to fraudulent third-party activities.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              7. Third-Party Content and Links
            </h2>
            <p className="text-gray-600 mb-4">
              The Website may contain links to external websites or third-party
              content. The Company does not endorse or assume any responsibility
              for the content, privacy policies, or practices of third-party
              websites. You access such third-party websites at your own risk.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-600 mb-4">
              The Company and its directors, employees, and affiliates will not be
              held liable for any direct, indirect, incidental, or consequential
              damages resulting from the use of the Website or reliance on any
              content provided. This includes but is not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Loss of data</li>
              <li>Loss of profits</li>
              <li>Business interruption</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              9. Indemnification
            </h2>
            <p className="text-gray-600 mb-4">
              You agree to indemnify and hold the Company harmless from any
              claims, damages, losses, liabilities, and expenses (including legal
              fees) arising out of:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Your use or misuse of the Website</li>
              <li>Your violation of any laws, rules, or regulations</li>
              <li>Any breach of these Terms of Service</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              10. Changes to Terms
            </h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify or update these Terms of Service at
              any time. Changes will be posted on this page, and your continued
              use of the Website after such changes constitutes acceptance of the
              updated terms.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              11. Governing Law
            </h2>
            <p className="text-gray-600 mb-4">
              These Terms of Service and any disputes arising out of or related to
              the use of the Website are governed by the laws in which IPO Expert
              operates, without regard to its conflict of law principles.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              12. Contact Information
            </h2>
            <p className="text-gray-600">
              If you have any questions regarding these Terms of Service, please
              contact us at:
              <br />
              <strong>Email:</strong> info@ipoexpert.in
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TOS;

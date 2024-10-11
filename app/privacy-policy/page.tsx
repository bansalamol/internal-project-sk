import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
              Privacy Policy for {config.appName}
            </h1>
            <p className="text-gray-600 mb-4">
              Effective Date: 12 October, 2024
            </p>
            <p className="text-gray-600 mb-4">
            <span className="underline">www.ipoexpert.io</span> (&quot;Website&quot;) is owned and operated by S K & Associates
              (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed to protecting the
              privacy of any individual or entity (&quot;User&quot;) who accesses or uses the
              Website. This Privacy Policy describes how we collect, use, disclose,
              and protect Personal Data you provide when accessing or using the
              Website.
              <br /><br />
              By accessing and using the Website, you agree to the terms of this Privacy Policy. Please read it carefully before continuing to use the Website. This policy may be updated periodically, and continued use of the Website signifies your acceptance of any changes.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              1. Personal Data We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We may collect and process the following categories of Personal Data:
            </p>
            <br />
            <h4 className="font-bold">(a) Data Provided by You</h4>
            <p className="text-gray-600 mb-4">
              When you submit information via forms on the Website or contact us for inquiries, you may be required to provide:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Name</li>
              <li>Email Address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Company or organization name</li>
              <li>Professional details</li>
              <li>Other relevant details based on the nature of your request</li>
            </ul>
            <p className="text-gray-600 mb-4">
              We process this data for purposes such as responding to your inquiries, improving our services, and managing relationships.
            </p>

            <h4 className="font-bold">(b) Automatically Collected Data</h4>
            <p className="text-gray-600 mb-4">
              We may collect certain technical data automatically when you visit the Website, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Device type, make/model</li>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages viewed, frequency and timing of visits</li>
              <li>Marketing preferences</li>
            </ul>
            <p className="text-gray-600 mb-4">
              This data helps us improve the Website’s functionality, conduct analytics, and enhance security.
            </p>

            <h4 className="font-bold">(c) Newsletters & Updates</h4>
            <p className="text-gray-600 mb-4">
              By providing your email address, you may receive periodic emails from us regarding industry updates, financial related insights. You can unsubscribe from these emails at any time by following the instructions provided in the email or contacting us at info@ipoexpert.io
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              2. Use of Personal Data
            </h2>
            <p className="text-gray-600 mb-4">
              We use your Personal Data for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>To provide information on our services, such as IPO advisory, corporate finance solutions and other financial related services</li>
              <li>To respond to inquiries or provide customer service</li>
              <li>To maintain and improve the Website&apos;s functionality and security</li>
              <li>To send you industry news, market updates, or investment banking insights, if you have subscribed to our &nbsp;&nbsp;&nbsp; mailing list</li>
              <li>To comply with legal obligations and regulatory requirements</li>
            </ul>
            <p className="text-gray-600 mb-4">
              We do not use your Personal Data for any other purposes without your consent.
            </p>
            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              3. No Advance Payments
            </h2>
            <p className="text-gray-600 mb-4">
              <strong>We do not request or accept any advance payments.</strong> Any claims by third parties asking for advance fees on behalf of the Company are fraudulent, and you agree that any payment made to such individuals is at your own risk.
              The Company is not responsible for any losses or damages resulting from these activities.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              4. Retention of Personal Data
            </h2>
            <p className="text-gray-600 mb-4">
              We retain your Personal Data only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. If you request the deletion of your data, we will ensure it is promptly deleted, subject to any legal obligations that require its retention
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              5. Sharing Your Personal Data
            </h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your Personal Data to third parties without your prior consent, except in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>To comply with legal obligations or respond to regulatory requests</li>
              <li>To protect the rights, property, or safety of the Company, our clients, or others</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              6. Security of Personal Data
            </h2>
            <p className="text-gray-600 mb-4">
              We take appropriate security measures to protect your Personal Data from unauthorized access, disclosure, alteration, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Encrypted data transmission</li>
              <li>Secure servers with restricted access</li>
              <li>Regular security scans and updates to safeguard against vulnerabilities</li>
            </ul>
            <p className="text-gray-600 mb-4">
              However, no system is completely secure, and we cannot guarantee the absolute security of your data.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              7. Cookies
            </h2>
            <p className="text-gray-600 mb-4">
              Cookies are small data files stored on your device when you visit the Website. They help us track site usage and user preferences, enabling us to enhance user experience. You may choose to disable cookies through your browser settings, but this may limit certain features of the Website.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              8. Third-Party Links
            </h2>
            <p className="text-gray-600 mb-4">
              The Website may contain links to third-party websites, whose privacy practices may differ from ours. We are not responsible for the privacy policies or practices of these external sites, and encourage you to review their policies before sharing any information
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              9. Disclosures to Regulatory Authorities
            </h2>
            <p className="text-gray-600 mb-4">
              We may disclose your Personal Data as required by law, including to government authorities or law enforcement agencies, in compliance with applicable regulations.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              10. Updates to Privacy Policy
            </h2>
            <p className="text-gray-600 mb-4">
              This Privacy Policy may be updated periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the revised policy on the Website. Please review this policy regularly to stay informed of any updates.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              11. Jurisdiction and Governing Law
            </h2>
            <p className="text-gray-600 mb-4">
              This Privacy Policy is governed by the laws of India. Any disputes arising out of or relating to this Privacy Policy shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra, India.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              12. Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li><strong>Email:</strong>info@ipoexpert.io</li>
            </ul>
            <p className="text-gray-600 mb-4">
              By using <span className="underline">www.ipoexpert.io</span>, you consent to the terms of this Privacy Policy
            </p>

          </div>
        </div>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
};

export default PrivacyPolicy;

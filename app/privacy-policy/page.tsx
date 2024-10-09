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
              Effective Date: 09 October, 2024
            </p>
            <p className="text-gray-600 mb-4">
              www.ipoexpert.in (&quot;Website&quot;) is owned and operated by S K & Associates
              (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed to protecting the
              privacy of any individual or entity (&quot;User&quot;) who accesses or uses the
              Website. This Privacy Policy describes how we collect, use, disclose,
              and protect Personal Data you provide when accessing or using the
              Website.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              1. Personal Data We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We may collect and process the following categories of Personal Data:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Data Provided by You: Name, Email address, Phone number, etc.</li>
              <li>
                Automatically Collected Data: IP address, Device type, Browser type, etc.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              2. Use of Personal Data
            </h2>
            <p className="text-gray-600 mb-4">
              We use your Personal Data for purposes such as providing information on
              our services, responding to inquiries, and maintaining security.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              3. No Advance Payments
            </h2>
            <p className="text-gray-600 mb-4">
              We do not request or accept any advance payments. Any claims by third
              parties asking for advance fees are fraudulent.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              4. Retention of Personal Data
            </h2>
            <p className="text-gray-600 mb-4">
              We retain your data as long as necessary for the purposes it was
              collected, or as required by law.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              5. Sharing Your Personal Data
            </h2>
            <p className="text-gray-600 mb-4">
              We do not sell or trade your Personal Data without your consent, except
              in compliance with legal obligations.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              6. Security of Personal Data
            </h2>
            <p className="text-gray-600 mb-4">
              We take security measures to protect your data but cannot guarantee
              absolute security.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              7. Cookies
            </h2>
            <p className="text-gray-600 mb-4">
              Cookies help us track user preferences. You can disable cookies through
              your browser settings.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              8. Third-Party Links
            </h2>
            <p className="text-gray-600 mb-4">
              We are not responsible for the privacy practices of third-party websites.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              9. Disclosures to Regulatory Authorities
            </h2>
            <p className="text-gray-600 mb-4">
              We may disclose your Personal Data as required by law.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              10. Updates to Privacy Policy
            </h2>
            <p className="text-gray-600 mb-4">
              This Privacy Policy may be updated periodically. Continued use of the
              Website signifies your acceptance of any changes.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              11. Jurisdiction and Governing Law
            </h2>
            <p className="text-gray-600 mb-4">
              This Privacy Policy is governed by the laws of India, with disputes
              subject to the courts of Mumbai, Maharashtra, India.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              12. Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions or concerns, please contact us at: info@ipoexpert.in
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

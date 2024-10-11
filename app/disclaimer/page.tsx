import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = getSEOTags({
  title: `Disclaimer | ${config.appName}`,
  canonicalUrlRelative: "/disclaimer",
});

const Disclaimer = () => {
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
              Disclaimer for {config.appName}
            </h1>
             <p className="text-gray-600 mb-4">
              Effective Date: 12 October, 2024
            </p>
            <p className="text-gray-600 mb-4">
              www.ipoexpert.io (the &quot;Website&quot;) is owned and operated by S K & Associates (the &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). The following disclaimer (&quot;Disclaimer&quot;) governs your use of the Website and its contents. By accessing and using this Website, you agree to the terms of this Disclaimer. If you do not agree with the terms of this Disclaimer, you should not use the Website.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              1. No Offer or Advice
            </h2>
            <p className="text-gray-600 mb-4">
              The content provided on this Website is for general information purposes only. Nothing on this Website constitutes an offer, solicitation, or recommendation<b/> to buy or sell any securities or financial instruments, or to participate in an IPO or any particular advisory services. The information provided does not constitute financial advice or investment advice, nor does it create any engagement between the Company and the User.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              2. No Warranty or Guarantee
            </h2>
            <p className="text-gray-600 mb-4">
              The Company makes no representation or warranty, express or implied, regarding the accuracy, completeness, timeliness, or reliability of the information on this Website. We do not guarantee the accuracy, quality, or performance of any products, services, or advice mentioned on this Website. 
            </p>
            <p className="text-gray-600 mb-4">
              The Website is provided &quot;as is&quot; without warranties of any kind. We disclaim all warranties, express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              3. Limitation of Liability
            </h2>
            <p className="text-gray-600 mb-4">
              To the fullest extent permitted by law, the Company shall not be liable for any loss or damage arising out of or in connection with the use of the Website or its content. This includes any loss of profits, business interruptions, or any other damages, whether direct, indirect, consequential, or punitive, even if we have been advised of the possibility of such loss or damage.
            </p>
            <p> Under no circumstances will we be liable for any loss or damage resulting from your reliance on information obtained through the Website.</p>  
            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              4. Third-Party Links and Content
            </h2>
            <p className="text-gray-600 mb-4">
              The Website may contain links to third-party websites, services, or products. These links are provided for your convenience and do not imply endorsement, approval, or responsibility for the content, products, or services of such third parties. 
            </p>
            <p>We are not responsible for the content, privacy practices, or security of any third-party websites and you access them at your own risk.</p>  
            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              5. No Advance Payments
            </h2>
            <p className="text-gray-600 mb-4">
              We do not request or accept any advance payments for any services or transactions. Any individual or third party claiming to act on behalf of the Company requesting advance payments or fees is not authorized, and you are advised to exercise caution. Any payment made to such entities is at your own risk, and the Company disclaims any responsibility for any transactions conducted outside our official channels.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              6. Confidentiality and Use of the Website
            </h2>
            <p className="text-gray-600 mb-4">
              While we take steps to ensure the security of the Website, we cannot guarantee the confidentiality of any information transmitted over the Internet. Any data or information submitted by you through the Website is at your own risk, and you are responsible for ensuring that any information you provide is accurate, legal, and does not infringe on the rights of third parties.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              7. Changes to the Website and Disclaimer
            </h2>
            <p className="text-gray-600 mb-4">
              The Company reserves the right to make changes to the Website, including its content, design, and functionality, at any time and without notice. We may update this Disclaimer from time to time to reflect changes in our business, legal obligations, or industry standards. We encourage you to review this Disclaimer regularly to stay informed of any updates.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              8. Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-600 mb-4">
              This Disclaimer, and your use of the Website, is governed by and construed in accordance with the laws of the Republic of India. Any dispute arising out of or relating to this Disclaimer or your use of the Website shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra, India.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              9. Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Disclaimer or the Website, please contact us at:
              <br />
              Email: info@ipoexpert.io
            </p>

            <p className="text-gray-600 mb-4">
              By accessing and using www.ipoexpert.io, you acknowledge that you have read, understood, and agree to the terms outlined in this Disclaimer.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Disclaimer;

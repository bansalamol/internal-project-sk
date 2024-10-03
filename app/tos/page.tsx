import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
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
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Terms and Conditions for IPO EXPERT
Last Updated: September 27, 2024

Welcome to IPO EXPERT!

These Terms of Service ("Terms") govern your use of the IPO EXPERT website at https://ipoclub.in ("Website") and the services provided by IPO EXPERT. By accessing and using our Website and services, you agree to these Terms.

Description of IPO EXPERT
IPO EXPERT is a platform that provides resources, tools, and expert guidance to help companies prepare for an Initial Public Offering (IPO) with greater efficiency and support.

Ownership and Usage Rights
When you subscribe to IPO EXPERT’s services, you gain access to exclusive resources and materials. While you have the right to use these materials for preparing your IPO, they cannot be resold or redistributed without permission. Refunds, if applicable, are subject to our refund policy.

User Data and Privacy
We collect and store user data, including names, email addresses, and payment information, as necessary to provide our services. For more information on how we handle your data, please review our Privacy Policy at https://ipoclub.in/privacy-policy.

Non-Personal Data Collection
We use cookies to gather non-personal data for the purpose of improving user experience and optimizing our services.

Governing Law
These Terms are governed by the laws of the jurisdiction in which IPO EXPERT operates.

Updates to the Terms
IPO EXPERT reserves the right to modify these Terms at any time. Any updates will be communicated to users through email or on our Website.

For any questions or concerns about these Terms, please contact us at info@ipoclub.in.

Thank you for choosing IPO EXPERT!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;

import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import config from "@/config";
import TestimonialsAvatars from "@/components/TestimonialsAvatars";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="container-fluid mx-auto">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-green-50 to-blue-100">
          <div className="mx-auto max-w-[85rem] px-4 pb-10 pt-2 sm:px-6 lg:px-8 lg:pt-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mt-5">
                <h1 className="flex flex-col items-center gap-3 text-4xl font-extrabold tracking-tight md:-mb-4 lg:text-6xl">
                  <span className="relative">IPO Club</span>
                  <span className="relative">
                    <span className="mr-4 md:mr-5">The Complete Ecosystem for Companies Going</span>
                    <span className="relative inline-block">
                      <span className="absolute inset-0 bg-accent -rotate-1 rounded-md"></span>
                      <span className="relative z-10 px-4 py-2">Public</span>
                    </span>
                  </span>
                </h1>
              </div>
              <div className="mt-12 max-w-3xl">
                <p className="text-xl text-gray-500">
                  From Strategy to Success, Your One-Stop Destination for IPOs
                </p>
              </div>
              <div className="mb-2 mt-6 flex items-center space-x-2 rounded-2xl border-gray-300 px-4 py-2">
                <div className="space-y-8 mx-auto w-full max-w-md">
                    <a href="/signin" className="btn btn-block bg-indigo-600 text-white hover:bg-indigo-700 sm:w-auto">
                      <span className="ml-2">Unlock Free Articles</span>
                    </a>
                </div>
              </div>
              <div className="mt-10">
                <TestimonialsAvatars priority={true} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Why Choose IPO Club? */}
        <section className="my-16 py-16 rounded-lg bg-gradient-to-r from-cyan-300 to-blue-200">
          <h2 className="text-4xl font-bold text-center mb-8">
            Transform Your IPO Journey with Comprehensive Support
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            IPO Club offers an end-to-end ecosystem tailored to help businesses seamlessly transition into the public market. From preparation to execution, our expert team ensures your IPO is strategic, successful, and efficient.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl">
              <div className="text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">IPO Strategy Consulting</h3>
              <p className="text-gray-600 mt-2">Personalized roadmap to go public.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl">
              <div className="text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Regulatory & Compliance</h3>
              <p className="text-gray-600 mt-2">Full support with regulatory filings and compliance.</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl">
              <div className="text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Financial Structuring</h3>
              <p className="text-gray-600 mt-2">Expert guidance on valuations, capital structuring, and underwriting.</p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl">
              <div className="text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l2 2-2 2m7-4l2 2-2 2m-6.9 1.1A6.01 6.01 0 0 0 15 14a6 6 0 0 0 0-12 6.01 6.01 0 0 0-5.9 5.1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Marketing & PR</h3>
              <p className="text-gray-600 mt-2">Build a strong market presence with investor relations and media outreach.</p>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl">
              <div className="text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v12h9V9H8.25M12 3v6m0 0h6m-6 0H3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Post-IPO Advisory</h3>
              <p className="text-gray-600 mt-2">Continuous support after going public to maintain growth.</p>
            </div>

            {/* Feature 6 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl">
              <div className="text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h1.5M9 15h1.5M9 18h1.5M12 9h1.5M12 6h1.5M12 3h1.5M15 15h1.5M15 18h1.5m-9 6v-3M6 21h3M6 18v-3m0-9v12m0-3v-6M21 3v6h-6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Data-Driven Insights</h3>
              <p className="text-gray-600 mt-2">Leverage market analytics for informed decision-making throughout the process.</p>
            </div>
          </div>
        </section>



        {/* Section 2: Our Services */}
        {/* <section className="my-16 bg-green-50/60 py-12 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold text-center mb-8">A Full Suite of Services for Every Step of Your IPO</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            We specialize in a comprehensive range of services designed to support your IPO at every stage.
          </p>
          <ul className="list-disc max-w-3xl mx-auto text-left space-y-4 text-lg mt-8">
            <li>IPO Readiness Assessment: Assess your company’s IPO potential and identify key areas of improvement.</li>
            <li>Financial and Legal Advisory: Collaborate with top-tier advisors to streamline all financial and legal processes.</li>
            <li>Investor Engagement: Tap into our extensive network of investors to generate demand and ensure a successful offering.</li>
            <li>Merchant Banker Relations: Access trusted Merchant Bankers to help structure and execute the offering.</li>
            <li>Due Diligence & Documentation: Ensure compliance with regulatory frameworks and manage all documentation.</li>
          </ul>
          <div className="text-center mt-8">
            <a href="/services" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-blue-600 transition duration-300">
              Learn More About Our Services
            </a>
          </div>
        </section> */}

        {/* Section 3: Success Stories */}

        {/* <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8">Companies We've Helped Go Public</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            Explore some of our success stories where we helped businesses successfully launch their IPOs.
          </p>
          <ul className="list-disc max-w-3xl mx-auto text-left space-y-4 text-lg mt-8">
            <li>Case Study 1: Manufacturing Company</li>
            <li>Case Study 2: Technology Start-Up</li>
            <li>Case Study 3: SME in Consumer Goods</li>
          </ul>
          <div className="text-center mt-8">
            <a href="/case-studies" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-blue-600 transition duration-300">
              Read Our Case Studies
            </a>
          </div>
        </section> */}

        {/* Section 4: Our Expert Team */}
        <section className="my-16 bg-gray-100 py-12 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold text-center mb-8">Meet the Experts Behind Your IPO Success</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            Our team of seasoned professionals includes investment bankers, legal experts, financial strategists, and communications specialists—all with deep expertise in IPOs and capital markets.
          </p>
          <div className="text-center mt-8">
            <a href="/team" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-blue-600 transition duration-300">
              Meet the Team
            </a>
          </div>
        </section>

        {/* Section 5: Join the IPO Club Today */}
        <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8">Ready to Take Your Company Public?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            Join IPO Club and gain access to our extensive ecosystem, deep investor network, and industry-leading Merchant Bankers.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="/signup" className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-slate-600 transition duration-300">
              Join Now
            </a>
            <a href="/schedule-consultation" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-blue-600 transition duration-300">
              Schedule a Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

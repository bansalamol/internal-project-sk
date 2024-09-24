import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsAvatars from "@/components/TestimonialsAvatars";
import FAQ from "@/components/FAQ";
import ButtonGradient from "@/components/ButtonGradient";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="container-fluid mx-auto">
        {/* Banner Section */}
        <section className="relative hero overflow-hidden min-h-screen">
          <Image
            src="/assets/images/ipo3.avif"
            alt="Background"
            className="object-cover w-full"
            fill
          />
          <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
          <div className="relative z-10 mx-auto max-w-[85rem] px-4 pb-10 pt-2 sm:px-6 lg:px-8 lg:pt-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mt-3">
                <h1 className="text-white flex flex-col items-center gap-3 text-3xl font-extrabold tracking-tight md:-mb-4 lg:text-6xl">
                  <span className="relative text-white uppercase">IPO Club - Your Gateway</span>
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
                <p className="text-xl text-white">
                  From Strategy to Success, Your One-Stop Destination for IPOs
                </p>
              </div>
              <div className="mb-2 mt-6 flex items-center space-x-2 rounded-2xl px-4 py-2">
                <div className="space-y-8 mx-auto w-full max-w-md">
                  <a href="/register" className="btn bg-indigo-600 text-white hover:bg-indigo-700 sm:w-auto border-none">
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
        <section className="bg-green-50/60" id="services">
          <div className="mx-auto max-w-5xl px-8 py-16">
            <div className="mb-20 flex w-full flex-col text-center">
              <p className="mb-8 font-medium">A Full Suite of Services for Every Step of Your IPO</p>
              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
                We specialize in a comprehensive range of services designed to support your IPO at every stage.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">

              {/* IPO Readiness Assessment */}
              <div>
                <div className="relative mx-auto flex items-center justify-center">
                  <svg className="text-blue-100" width="72" height="75" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z"></path>
                  </svg>
                  <svg className="absolute size-9 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-black">IPO Readiness Assessment</h3>
                <p className="mt-4 text-base text-gray-600">Assess your company’s IPO potential and identify key areas of improvement.</p>
              </div>

              {/* Financial and Legal Advisory */}
              <div>
                <div className="relative mx-auto flex items-center justify-center">
                  <svg className="text-green-100" width="62" height="64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z"></path>
                  </svg>
                  <svg className="absolute size-9 text-green-600" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M14.5 19.5H9.5m5 0C14.5 18.786 14.5 18.43 14.538 18.193c.123-.764.144-.812.631-1.413.15-.186.71-.688 1.83-1.692 1.534-1.373 2.5-3.368 2.5-5.588 0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5c0 2.221.965 4.216 2.5 5.588 1.12 1.004 1.68 1.506 1.83 1.692.487.601.509.649.631 1.413M14.5 19.5c0 .934 0 1.402-.201 1.75-.132.228-.321.417-.549.549-.349.201-.816.201-1.751.201s-1.402 0-1.75-.201a1.124 1.124 0 01-.549-.549C9.5 20.901 9.5 20.434 9.5 19.5" />
                    <path d="M12.786 8.5L10.643 11.5h3l-2.143 3" />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Financial and Legal Advisory</h3>
                <p className="mt-4 text-base text-gray-600">Collaborate with top-tier advisors to streamline all financial and legal processes.</p>
              </div>

              {/* Investor Engagement */}
              <div>
                <div className="relative mx-auto flex items-center justify-center">
                  <svg className="text-orange-100" width="72" height="75" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z"></path>
                  </svg>
                  <svg className="absolute size-9 text-orange-600" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M256 0.5C115.1 0.5 0.5 115.1 0.5 255.992S115.1 511.5 256 511.5c140.9 0 255.5-114.6 255.5-255.508S396.9 0.5 256 0.5z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-black">Investor Engagement</h3>
                <p className="mt-4 text-base text-gray-600">Tap into our extensive network of investors to generate demand and ensure a successful offering.</p>
              </div>

              {/* Regulatory Compliance */}
              <div>
                <div className="relative mx-auto flex items-center justify-center">
                  <svg className="text-yellow-100" width="66" height="68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M65.5 30C65.5 50.4345 46.4345 66 26 66C5.56554 66 0.5 50.4345 0.5 30C0.5 9.56555 46.4345 -6.5 65.5 30Z" />
                  </svg>
                  <svg className="absolute size-9 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Regulatory Compliance</h3>
                <p className="mt-4 text-base text-gray-600">Ensure that your IPO process complies with all regulatory requirements.</p>
              </div>

              {/* Post-IPO Support */}
              <div>
                <div className="relative mx-auto flex items-center justify-center">
                  <svg className="text-purple-100" width="62" height="64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z"></path>
                  </svg>
                  <svg className="absolute size-9 text-purple-600" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M14.5 19.5H9.5m5 0C14.5 18.786 14.5 18.43 14.538 18.193c.123-.764.144-.812.631-1.413.15-.186.71-.688 1.83-1.692 1.534-1.373 2.5-3.368 2.5-5.588 0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5c0 2.221.965 4.216 2.5 5.588 1.12 1.004 1.68 1.506 1.83 1.692.487.601.509.649.631 1.413M14.5 19.5c0 .934 0 1.402-.201 1.75-.132.228-.321.417-.549.549-.349.201-.816.201-1.751.201s-1.402 0-1.75-.201a1.124 1.124 0 01-.549-.549C9.5 20.901 9.5 20.434 9.5 19.5" />
                    <path d="M12.786 8.5L10.643 11.5h3l-2.143 3" />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Post-IPO Support</h3>
                <p className="mt-4 text-base text-gray-600">Receive post-IPO support to maintain your company’s success on the public market.</p>
              </div>

              {/* New Service */}
              <div>
                <div className="relative mx-auto flex items-center justify-center">
                  <svg className="text-pink-100" width="64" height="64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0Z" />
                  </svg>
                  <svg className="absolute size-9 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 8v4l3 3M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z" />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">New Service</h3>
                <p className="mt-4 text-base text-gray-600">Explore our newly added service to further support your IPO journey.</p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <a href="/services" className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-slate-600 transition duration-300">
                Learn More Services
              </a>
            </div>
          </div>
        </section>


        {/* Section 3: FAQs */}
        <FAQ />

        {/* Section 4: Knowledge */}
        <section className="my-16 py-16 bg-base-100">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-extrabold text-3xl md:text-5xl tracking-tight mb-12 md:mb-20">
              Tired of managing Stripe invoices?
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12">
              <div className="bg-error/20 text-error p-8 md:p-12 rounded-lg w-full ">
                <h3 className="font-bold text-lg mb-4">
                  Stripe invoices without ZenVoice
                </h3>

                <ul className="list-disc list-inside space-y-1.5 ">
                  {/* Pains the user is experiencing by not using your product */}
                  {[
                    "Manually create invoices",
                    "Or pay up to $2 per invoice",
                    "Waste hours in customer support",
                    "Can’t update details once sent (VAT, Tax ID)",
                    "Can't make invoices for previous purchases",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 shrink-0 opacity-75"
                      >
                        <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-success/20 text-success p-8 md:p-12 rounded-lg w-full">
                <h3 className="font-bold text-lg mb-4">
                  Stripe invoices + ZenVoice
                </h3>

                <ul className="list-disc list-inside space-y-1.5 ">
                  {/* Features of your product fixing the pain (try to match each with/withot lines) */}
                  {[
                    "Self-serve invoices",
                    `One-time payment for unlimited invoices`,
                    "No more customer support",
                    "Editable invoices to stay compliant",
                    "Invoices for any payment, even past ones",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 shrink-0 opacity-75"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Success Stories */}
        {/* <section className="my-16 py-12 bg-gradient-to-r from-cyan-100 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
              Companies We've Helped Go Public
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-10">
              Explore some of our success stories where we helped businesses successfully launch their IPOs.
            </p>

           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-500 mx-auto mb-4">
                  <svg className="text-white" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-9H8l3.293-3.293a1 1 0 00-1.414-1.414L6 12.586 10.586 17a1 1 0 001.414-1.414L9 13h2v5a1 1 0 102 0v-5h2a1 1 0 100-2h-3V8a1 1 0 10-2 0v5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 text-center">Manufacturing Company</h3>
                <p className="text-gray-600 text-center mt-2">We guided a major manufacturing firm to successfully launch their IPO.</p>
              </div>

              
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 mx-auto mb-4">
                  <svg className="text-white" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 00-7.071 17.071l-2.12 2.121a1 1 0 001.414 1.415l2.121-2.122A10 10 0 1012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-3-8h2V7a1 1 0 112 0v5h2a1 1 0 010 2h-6a1 1 0 010-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 text-center">Technology Start-Up</h3>
                <p className="text-gray-600 text-center mt-2">We assisted a tech start-up in their rapid IPO process with full support.</p>
              </div>

              
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 mx-auto mb-4">
                  <svg className="text-white" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 7h-2v6h6v-2h-4V7zm-1-5C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 text-center">Consumer Goods SME</h3>
                <p className="text-gray-600 text-center mt-2">Our team helped an SME in consumer goods secure a successful public launch.</p>
              </div>
            </div>

            
            <div className="text-center mt-12">
              <a href="/case-studies" className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-slate-700 transition duration-300">
                Read Our Case Studies
              </a>
            </div>
          </div>
        </section> */}

        {/* Section 5: Our Expert Team */}
        {/* <section className="my-16 py-12 bg-gradient-to-r from-blue-100 to-indigo-100">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-900">
            Meet the Experts Behind Your IPO Success
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
            Our team of seasoned professionals includes investment bankers, legal experts, financial strategists,
            and communications specialists—all with deep expertise in IPOs and capital markets.
          </p>

          <div className="flex justify-center gap-8 flex-wrap mt-10">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Team Member 1" className="rounded-full mb-4 w-32 mx-auto shadow-md" />
              <h3 className="text-xl font-semibold text-center text-indigo-700">Jane Doe</h3>
              <p className="text-gray-600 text-center">Lead Investment Banker</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Team Member 2" className="rounded-full mb-4 w-32 mx-auto shadow-md" />
              <h3 className="text-xl font-semibold text-center text-indigo-700">John Smith</h3>
              <p className="text-gray-600 text-center">Financial Strategist</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Team Member 3" className="rounded-full mb-4 w-32 mx-auto shadow-md" />
              <h3 className="text-xl font-semibold text-center text-indigo-700">Sarah Johnson</h3>
              <p className="text-gray-600 text-center">Legal Expert</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/team"
              className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-indigo-600 transition duration-300"
            >
              Meet the Team
            </a>
          </div>
        </section> */}

        {/* Section 6: Join the IPO Club Today */}
        <section className="my-16 py-12 bg-neutral text-neutral-content">
          <h2 className="text-3xl font-bold text-center mb-8">Ready to Take Your Company Public?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center text-white">
            Join IPO Club and gain access to our extensive ecosystem, deep investor network, and industry-leading Merchant Bankers.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="/signup">
              <ButtonGradient />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

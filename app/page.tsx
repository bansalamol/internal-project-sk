"use client";

import React from 'react';
import { Suspense, useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "react-toastify";
import ButtonGradient from "@/components/ButtonGradient";
import Image from "next/image";
import config from "@/config";
import MessageModal from "@/components/MessageModal";
import OneTimeModal from "@/components/OneTimeModal";
//import IPOCLUBFAQ from "@/components/IPOCLUBFAQ";



export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const [shouldRedirect] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const mobile = formData.get("mobile") as string;
    const email = formData.get("email") as string;
    const role = formData.get("role") as string;
    const company = formData.get("company") as string;
    const address = formData.get("address") as string;

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, mobile, email, role, company, address }),
      });

      if (response.ok) {
        // Store modal message and state in session storage
        const successMessage = 'We appreciate your interest in IPO EXPERT! Our professional will get in touch with you shortly to provide more details and answer any questions you may have.';
        setModalMessage(successMessage);
        setIsError(false);
        form.reset();
        setShowModal(true); // Show the modal instead of redirecting
      } else {
        const errorData = await response.json();
        toast.error(errorData.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    }
  };


  useEffect(() => {
    if (shouldRedirect) {
      router.push('/');
    }
  }, [shouldRedirect, router]);


  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // Check sessionStorage for modal data
    const storedMessage = sessionStorage.getItem('modalMessage');
    const storedError = sessionStorage.getItem('isError');

    if (storedMessage) {
      setModalMessage(storedMessage);
      setIsError(storedError === 'true');
      setShowModal(true);

      // Clear sessionStorage after showing the modal
      sessionStorage.removeItem('modalMessage');
      sessionStorage.removeItem('isError');
    }
  }, []); // Run only once on component mount

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="container-fluid mx-auto">
        {/* Banner Section */}
        <section className="relative flex flex-col min-h-screen md:flex-row">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/assets/images/banner1.avif"
              alt="Background"
              className="object-cover w-full h-full"
              fill
            />
            <div className="absolute inset-0 bg-neutral bg-opacity-70"></div>
          </div>

          {/* Left Side: Text Content */}
          <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-center px-4 pb-10 pt-2 sm:px-6 lg:px-8 lg:pt-4 h-full">
            <div className="mx-auto max-w-3xl text-center mt-20 lg:mt-52">
              <div className="mt-3">
                <h1 className="text-white text-3xl font-extrabold tracking-tight md:-mb-4 lg:text-6xl">
                  <span className="relative text-white uppercase">IPO EXPERT - Your Gateway to Capital</span>
                  <span className="relative">
                    <span className="mr-4 md:mr-5 text-3xl block my-3">The Complete Ecosystem for Companies Going</span>
                    <span className="relative inline-block">
                      <span className="absolute inset-0 bg-accent rounded-md"></span>
                      <span className="relative z-10 px-4 py-2">Public</span>
                    </span>
                  </span>
                </h1>
              </div>
            </div>
          </div>


          {/* Right Side: Form Section */}
          <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center px-2">
            <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 mt-10 mb-4"> {/* Changed max-w-md to max-w-lg */}
              <h2 className="text-3xl font-bold text-center mb-6">Join {config.appName}</h2>
              <p className="text-xl text-center">
                From Strategy to Success, Your One-Stop Destination for IPOs
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900">Mobile</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                    placeholder="1234567890"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                    placeholder="name@domain.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                    placeholder="Company Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                    placeholder="Enter your address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">Register as</label>
                  <select
                    id="role"
                    name="role"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="Company planning for an IPO">Company planning for an IPO</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg h-5 w-5 p-1"
                    checked
                  />
                  <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900">
                    I accept the <a href="/tos" className="text-blue-500 hover:underline">terms and conditions</a>
                  </label>
                </div>
                <div className="mt-6 flex justify-center space-x-4">
                  <button
                    type="submit"
                    className="btn btn-gradient animate-shimmer"
                  >
                    Join {config.appName}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>


        {/* Section 1: Why Choose IPO EXPERT? */}
        <section className="py-16 rounded-lg bg-gradient-to-r from-cyan-300 to-blue-200" id="services">
          <h2 className="text-4xl font-bold text-center mb-8">
            {/*Transform Your IPO Journey with Comprehensive Support*/}
            WHAT WE DO
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            IPO EXPERT offers an end-to-end ecosystem tailored to help businesses seamlessly transition into the public market. From preparation to execution, our expert team ensures your IPO is strategic, successful, and efficient.
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
        <section className="py-16 bg-green-50/60" id="about">
          <div className="mx-auto max-w-5xl px-8 py-16">
            <div className="mb-20 flex w-full flex-col text-center">
              <h2 className="text-4xl font-bold text-center mb-8">
                HOW WE DO
                {/*We specialize in a comprehensive range of professional services designed to support your IPO at every stage.*/}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">A Full Suite of Services for Every Step of Your IPO</p>
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

              {/* Financial &amp; Legal Advisory */}
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
                <h3 className="mt-8 text-lg font-semibold text-black">Financial &amp; Legal Advisory</h3>
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

              {/* Audit &amp; Compliances */}
              <div>
                <div className="relative mx-auto flex items-center justify-center">
                  <svg className="text-yellow-100" width="66" height="68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M65.5 30C65.5 50.4345 46.4345 66 26 66C5.56554 66 0.5 50.4345 0.5 30C0.5 9.56555 46.4345 -6.5 65.5 30Z" />
                  </svg>
                  <svg className="absolute size-9 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Audit &amp; Compliances</h3>
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

              {/* Financial Modeling &amp; Valuation */}
              <div>
                <div className="relative mx-auto flex items-center justify-center">
                  <svg className="text-pink-100" width="64" height="64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0Z" />
                  </svg>
                  <svg className="absolute size-9 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 8v4l3 3M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z" />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Financial Modeling &amp; Valuation</h3>
                <p className="mt-4 text-base text-gray-600">Maximize Your Valuation with a robust Business model.</p>
              </div>
            </div>
            {/* <div className="flex justify-center mt-12">
              <a href="/services" className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-slate-600 transition duration-300">
                Learn More Services
              </a>
            </div> */}
          </div>
        </section>


        {/* Section 3: FAQs */}
        {/* <IPOCLUBFAQ /> */}

        {/* Section 4: Ecosystem */}
        <section className="py-16 relative overflow-hidden  bg-gradient-to-r from-cyan-100 to-blue-50 ">
          <div className="max-w-6xl mx-auto px-6">
            {/* Background Shape */}
            <div className="absolute inset-0 opacity-30">
              <div className="w-96 h-96 bg-gradient-to-r from-blue-300 to-cyan-400 rounded-full blur-3xl opacity-50 transform scale-125 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-80 h-80 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full blur-2xl opacity-30 transform scale-110 translate-x-1/2 translate-y-1/3"></div>
            </div>
            <h2 className="text-4xl font-bold text-center mb-8">
              IPO EXPERT ECOSYSTEM
            </h2>
            <p className="text-center text-lg text-gray-600 mb-4">
              IPO EXPERT Ecosystem navigates seamlessly with all participants, including Merchant Bankers, Industry Experts, Lenders, Legal Counsels, Auditors, PR agencies, RTAs, and Investors, ensuring a seamless and successful IPO journey.
            </p>

            {/* Image and Content Row */}
            <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 z-10">

              {/* Image on the Left */}
              <div className="w-full flex justify-center">
                <Image
                  src="/assets/images/ecosystem6.png"
                  alt="Ecosystem"
                  width={800}
                  height={800}
                  className="max-w-full h-auto transition-transform transform hover:scale-105 duration-300"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Section 5: Success Stories */}
        {/* <section className="py-16 bg-gradient-to-r from-cyan-100 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
              Companies We&apos;ve Helped Go Public
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

        {/* Section 6: Benefits */}
        <section className="py-16 bg-base-100" id="benefits">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-8">BENEFITS</h2>

            <p className="text-center text-lg mb-8 md:mb-12">
              Having an expert involved in the process of an Initial Public Offering (IPO) can be crucial for its success. Here are the advantages of involving an expert:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Strategic Guidance and Structuring */}
              <div className="p-6 sm:p-8 bg-gradient-to-r from-green-500 via-teal-400 to-blue-500 rounded-lg shadow-lg text-white">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-white mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <h3 className="text-xl font-semibold">Strategic Guidance and Structuring</h3>
                </div>
                <p>Tailored frameworks to align with your business goals and expert insights for optimal decision-making.</p>
              </div>

              {/* Regulatory Compliance */}
              <div className="p-6 sm:p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-lg shadow-lg text-white">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-white mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                  </svg>
                  <h3 className="text-xl font-semibold">Regulatory Compliance</h3>
                </div>
                <p>Navigate complex regulations seamlessly with proactive compliance strategies.</p>
              </div>

              {/* Valuation Accuracy */}
              <div className="p-6 sm:p-8 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-400 rounded-lg shadow-lg text-white">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-white mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l2.09 6.26H20l-5 4.64L16.18 22 12 18.36 7.82 22 9 12.9 4 8.26h5.91z" />
                  </svg>
                  <h3 className="text-xl font-semibold">Valuation Accuracy</h3>
                </div>
                <p>Reliable assessments reflecting true market value with informed pricing strategies to attract investors.</p>
              </div>

              {/* Investor Confidence */}
              <div className="p-6 sm:p-8 bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-400 rounded-lg shadow-lg text-white">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-white mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                    <path fillRule="evenodd" d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clipRule="evenodd" />
                  </svg>

                  <h3 className="text-xl font-semibold">Investor Confidence</h3>
                </div>
                <p>Build trust through transparency and clear communication to showcase robust financial health.</p>
              </div>

              {/* Efficient Roadshows and Marketing */}
              <div className="p-6 sm:p-8 bg-gradient-to-r from-pink-500 via-red-400 to-orange-500 rounded-lg shadow-lg text-white">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-white mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8h18M3 12h18m-7 4h4" />
                  </svg>
                  <h3 className="text-xl font-semibold">Efficient Roadshows and Marketing</h3>
                </div>
                <p>Streamlined presentations that maximize engagement with targeted marketing strategies.</p>
              </div>

              {/* Time and Cost Efficiency */}
              <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-500 via-teal-500 to-green-400 rounded-lg shadow-lg text-white">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-white mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
                  </svg>

                  <h3 className="text-xl font-semibold">Time and Cost Efficiency</h3>
                </div>
                <p>Accelerated processes that save time and resources, optimizing overall productivity.</p>
              </div>
            </div>

            <p className="text-center text-lg mt-8 md:mt-12">
              For further information on how we can assist you in your IPO journey, feel free to contact us for a consultation.
            </p>
          </div>
        </section>


        {/* Section 7: Our Expert Team */}
        {/* <section className="py-16 bg-gradient-to-r from-blue-100 to-indigo-100">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-900">
            Meet the Experts Behind Your IPO Success
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
            Our team of seasoned professionals includes investment bankers, legal experts, financial strategists,
            and communications specialists—all with deep expertise in IPOs and capital markets.
          </p>

          <div className="flex justify-center gap-8 flex-wrap mt-10">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Team Member 1"
                width={128}
                height={128}
                className="rounded-full mb-4 w-32 h-32 object-cover mx-auto shadow-md"
              />
              <h3 className="text-xl font-semibold text-center text-indigo-700">Jane Doe</h3>
              <p className="text-gray-600 text-center">Lead Investment Banker</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <Image
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Team Member 2"
                width={128}
                height={128}
                className="rounded-full mb-4 w-32 h-32 object-cover mx-auto shadow-md"
              />
              <h3 className="text-xl font-semibold text-center text-indigo-700">John Smith</h3>
              <p className="text-gray-600 text-center">Financial Strategist</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3276&q=80"
                alt="Team Member 3"
                width={128}
                height={128}
                className="rounded-full mb-4 w-32 h-32 object-cover mx-auto shadow-md"
              />
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

        {/* Section 8: Join the IPO EXPERT Today */}
        <section className="py-16 bg-neutral text-neutral-content">
          <h2 className="text-4xl font-bold text-center mb-8">
            Ready to Take Your Company Public?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center text-white">
            Join IPO EXPERT and gain access to our extensive ecosystem, deep investor network, and industry-leading Merchant Bankers.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="/register">
              <ButtonGradient />
            </a>
          </div>
        </section>

        {showModal && (
          <MessageModal
            message={modalMessage}
            isError={isError}
            onClose={closeModal}
          />
        )}

        <OneTimeModal />
      </main>

      <Footer />
    </>
  );
}

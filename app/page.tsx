"use client";

import React from 'react';
import { Suspense, useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "react-toastify";
import ButtonGradient from "@/components/ButtonGradient";
import Image from "next/image";
import config from "@/config";
import MessageModal from "@/components/MessageModal";
import OneTimeModal from "@/components/OneTimeModal";

// Hook for scroll-triggered animations
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className={`fade-in-section ${className}`}>
      {children}
    </div>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [termsChecked, setTermsChecked] = useState(true);
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
        const successMessage = 'We appreciate your interest in IPO EXPERT! Our professional will get in touch with you shortly to provide more details and answer any questions you may have.';
        setModalMessage(successMessage);
        setIsError(false);
        form.reset();
        setShowModal(true);
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
    const storedMessage = sessionStorage.getItem('modalMessage');
    const storedError = sessionStorage.getItem('isError');

    if (storedMessage) {
      setModalMessage(storedMessage);
      setIsError(storedError === 'true');
      setShowModal(true);
      sessionStorage.removeItem('modalMessage');
      sessionStorage.removeItem('isError');
    }
  }, []);

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        {/* ===== HERO SECTION ===== */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/assets/images/banner1.avif"
              alt="Background"
              className="object-cover w-full h-full"
              fill
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-blue-900/75"></div>
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 pb-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-cyan-300 text-sm font-medium">Your Trusted IPO Advisory Partner</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Your Gateway to
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-300">
                  Capital Markets
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                The complete ecosystem for companies going public. From strategy to execution, we ensure your IPO journey is seamless, strategic, and successful.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#register">
                  <ButtonGradient title="Start Your IPO Journey" />
                </a>
                <a
                  href="#services"
                  className="px-8 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300"
                >
                  Explore Services
                </a>
              </div>
            </div>

            {/* Stats bar - hidden for now */}
            {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: "100+", label: "Companies Advised" },
                { number: "50+", label: "Successful IPOs" },
                { number: "20+", label: "Industry Experts" },
                { number: "10+", label: "Years Experience" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>


        {/* ===== SERVICES / WHAT WE DO ===== */}
        <section className="py-20 lg:py-28 bg-white" id="services">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">Our Services</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900">What We Do</h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-4">
                  IPO EXPERT offers an end-to-end ecosystem tailored to help businesses seamlessly transition into the public market.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                      </svg>
                    ),
                    title: "IPO Strategy Consulting",
                    desc: "Personalized roadmap and strategic planning to take your company public with confidence.",
                    color: "from-blue-500 to-cyan-500",
                    bg: "bg-blue-50",
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                      </svg>
                    ),
                    title: "Regulatory & Compliance",
                    desc: "Full support with regulatory filings, SEBI compliance, and documentation requirements.",
                    color: "from-teal-500 to-green-500",
                    bg: "bg-teal-50",
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    ),
                    title: "Financial Structuring",
                    desc: "Expert guidance on valuations, capital structuring, and underwriting strategies.",
                    color: "from-indigo-500 to-purple-500",
                    bg: "bg-indigo-50",
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                      </svg>
                    ),
                    title: "Marketing & PR",
                    desc: "Build a strong market presence with investor relations and media outreach campaigns.",
                    color: "from-orange-500 to-red-500",
                    bg: "bg-orange-50",
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                      </svg>
                    ),
                    title: "Post-IPO Advisory",
                    desc: "Continuous support after going public to maintain growth and shareholder value.",
                    color: "from-pink-500 to-rose-500",
                    bg: "bg-pink-50",
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                      </svg>
                    ),
                    title: "Data-Driven Insights",
                    desc: "Leverage market analytics for informed decision-making throughout the IPO process.",
                    color: "from-cyan-500 to-blue-500",
                    bg: "bg-cyan-50",
                  },
                ].map((service, i) => (
                  <div
                    key={i}
                    className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-gray-700">{service.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>


        {/* ===== HOW WE WORK ===== */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white" id="about">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold tracking-widest text-teal-600 uppercase">Our Process</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900">How We Work</h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-4">
                  A full suite of services for every step of your IPO journey
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    title: "IPO Readiness Assessment",
                    desc: "Assess your company's IPO potential and identify key areas of improvement.",
                    gradient: "from-blue-600 to-cyan-500",
                  },
                  {
                    step: "02",
                    title: "Financial & Legal Advisory",
                    desc: "Collaborate with top-tier advisors to streamline all financial and legal processes.",
                    gradient: "from-teal-600 to-green-500",
                  },
                  {
                    step: "03",
                    title: "Investor Engagement",
                    desc: "Tap into our extensive network of investors to generate demand and ensure a successful offering.",
                    gradient: "from-indigo-600 to-blue-500",
                  },
                  {
                    step: "04",
                    title: "Audit & Compliance",
                    desc: "Ensure that your IPO process complies with all regulatory requirements.",
                    gradient: "from-purple-600 to-pink-500",
                  },
                  {
                    step: "05",
                    title: "Post-IPO Support",
                    desc: "Receive post-IPO support to maintain your company's success on the public market.",
                    gradient: "from-orange-600 to-red-500",
                  },
                  {
                    step: "06",
                    title: "Financial Modeling & Valuation",
                    desc: "Maximize your valuation with a robust business model and data-driven pricing.",
                    gradient: "from-cyan-600 to-teal-500",
                  },
                ].map((item, i) => (
                  <div key={i} className="relative group">
                    <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                      <div className={`inline-block text-5xl font-extrabold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-4`}>
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>


        {/* ===== ECOSYSTEM ===== */}
        <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" id="ecosystem">
          {/* Decorative blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>

          <AnimatedSection>
            <div className="relative z-10 max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <span className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">Our Network</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">IPO Expert Ecosystem</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
                  IPO EXPERT Ecosystem navigates seamlessly with all participants, including Merchant Bankers, Industry Experts, Lenders, Legal Counsels, Auditors, PR Agencies, RTAs, and Investors, ensuring a seamless and successful IPO journey.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl bg-white p-6 md:p-10">
                  <Image
                    src="/assets/images/ecosystem6.png"
                    alt="IPO Expert Ecosystem"
                    width={800}
                    height={800}
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>


        {/* ===== BENEFITS ===== */}
        <section className="py-20 lg:py-28 bg-white" id="benefits">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold tracking-widest text-purple-600 uppercase">Why Choose Us</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900">Benefits of IPO Expert</h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-4">
                  Having an expert involved in the process of an Initial Public Offering can be crucial for its success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                    title: "Strategic Guidance",
                    desc: "Tailored frameworks to align with your business goals and expert insights for optimal decision-making.",
                    gradient: "from-blue-600 to-cyan-500",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    ),
                    title: "Regulatory Compliance",
                    desc: "Navigate complex regulations seamlessly with proactive compliance strategies and expert guidance.",
                    gradient: "from-teal-600 to-green-500",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ),
                    title: "Valuation Accuracy",
                    desc: "Reliable assessments reflecting true market value with informed pricing strategies to attract investors.",
                    gradient: "from-indigo-600 to-purple-500",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                    title: "Investor Confidence",
                    desc: "Build trust through transparency and clear communication to showcase robust financial health.",
                    gradient: "from-orange-600 to-red-500",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                      </svg>
                    ),
                    title: "Efficient Roadshows",
                    desc: "Streamlined presentations that maximize engagement with targeted marketing strategies.",
                    gradient: "from-pink-600 to-rose-500",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "Time & Cost Efficiency",
                    desc: "Accelerated processes that save time and resources, optimizing overall productivity.",
                    gradient: "from-cyan-600 to-blue-500",
                  },
                ].map((benefit, i) => (
                  <div key={i} className="group p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>


        {/* ===== REGISTRATION FORM ===== */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white" id="register">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Content */}
                <div>
                  <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">Get Started</span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900">
                    Join {config.appName} Today
                  </h2>
                  <p className="text-lg text-gray-500 mt-4 leading-relaxed">
                    From strategy to success, your one-stop destination for IPOs. Register now and our team will reach out to discuss how we can help your company go public.
                  </p>
                  <div className="mt-8 space-y-4">
                    {[
                      "Personalized IPO strategy consultation",
                      "Access to our extensive investor network",
                      "End-to-end regulatory and compliance support",
                      "Dedicated team of industry experts",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Form */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block mb-1.5 text-sm font-medium text-gray-700">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="mobile" className="block mb-1.5 text-sm font-medium text-gray-700">Mobile</label>
                        <input
                          type="tel"
                          id="mobile"
                          name="mobile"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="1234567890"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-1.5 text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block mb-1.5 text-sm font-medium text-gray-700">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="Your Company"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block mb-1.5 text-sm font-medium text-gray-700">Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="Enter your address"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block mb-1.5 text-sm font-medium text-gray-700">Register as</label>
                      <select
                        id="role"
                        name="role"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        required
                      >
                        <option value="">Select Role</option>
                        <option value="Company planning for an IPO">Company planning for an IPO</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={termsChecked}
                        onChange={(e) => setTermsChecked(e.target.checked)}
                        required
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I accept the <a href="/tos" className="text-blue-600 hover:underline">terms and conditions</a>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full btn btn-gradient animate-shimmer py-3 text-lg"
                    >
                      Join {config.appName}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>


        {/* ===== CTA SECTION ===== */}
        <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Take Your Company Public?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              Join IPO EXPERT and gain access to our extensive ecosystem, deep investor network, and industry-leading Merchant Bankers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#register">
                <ButtonGradient title="Get Started Today" />
              </a>
              <a
                href="mailto:info@ipoexpert.io"
                className="px-8 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 inline-block"
              >
                Contact Us
              </a>
            </div>
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
        <ScrollToTop />
      </main>

      <Footer />
    </>
  );
}

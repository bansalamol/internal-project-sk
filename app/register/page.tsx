"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import config from "@/config";
import { Suspense, useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "react-toastify";


const Register = () => {
    const router = useRouter();
    const [shouldRedirect, setShouldRedirect] = useState(false);

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
                sessionStorage.setItem('modalMessage', 'We appreciate your interest in IPO EXPERT! Our professional will get in touch with you shortly to provide more details and answer any questions you may have.');
                sessionStorage.setItem('isError', 'false');
                form.reset();

                // Set redirect state
                setShouldRedirect(true);
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


    return (
        <>
            <Suspense>
                <Header />
            </Suspense>
            <main className="p-8" data-theme={config.colors.theme}>
                <div className="text-center mb-4">
                    <Link href="/" className="btn btn-ghost btn-sm">
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
                        Home
                    </Link>
                </div>

                <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
                    <h2 className="text-3xl font-bold text-center mb-6">Join {config.appName}</h2>

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
                                <option value="">Select role</option>
                                <option value="Company planning for an IPO">Company planning for an IPO</option>
                               {/*} <option value="Institutional Investor">Institutional Investor</option>
                                <option value="CA/CS/MBA/Practising Professionals">CA/CS/MBA/Practising Professionals</option>
                                <option value="Merchant Banker">Merchant Banker</option>
                                <option value="Individual Investor">Individual Investor</option>
                                <option value="Legal Counsels">Legal Counsels</option>
                                <option value="Industry Expert">Industry Expert</option>
                                <option value="Rating Agencies">Rating Agencies</option>
                                <option value="FPI">FPI</option>
                                <option value="HNI Investor">HNI Investor</option>
                                <option value="RTA">RTA</option>
                                <option value="Investment Advisor">Investment Advisor</option>*/}
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


                        <button
                            type="submit"
                            className="btn bg-slate-900 text-white hover:bg-slate-700"
                        >
                            Join {config.appName}
                        </button>
                    </form>
                </div>


            </main>
            <Footer />
        </>
    );
};

export default Register;

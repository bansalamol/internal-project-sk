'use client';
import { Suspense, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SignupForm() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        registerAs: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., sending data to the server)
        console.log(formData);
    };

    return (
        <>
            <Suspense>
                <Header />
            </Suspense>
            <div className="container mx-auto p-4">
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
                
                <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
                <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                            Mobile
                        </label>
                        <input
                            type="text"
                            name="mobile"
                            id="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email ID
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="registerAs" className="block text-sm font-medium text-gray-700">
                            Register As
                        </label>
                        <select
                            name="registerAs"
                            id="registerAs"
                            value={formData.registerAs}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="" disabled>Select an option</option>
                            <option value="Company planning for an IPO">Company planning for an IPO</option>
                            <option value="Institutional Investor">Institutional Investor</option>
                            <option value="CA/CS/MBA/Practising Professionals">CA/CS/MBA/Practising Professionals</option>
                            <option value="Merchant Banker">Merchant Banker</option>
                            <option value="Individual Investor">Individual Investor</option>
                            <option value="Legal Counsels">Legal Counsels</option>
                            <option value="Industry Expert">Industry Expert</option>
                            <option value="Rating Agencies">Rating Agencies</option>
                            <option value="FPI">FPI</option>
                            <option value="HNI Investor">HNI Investor</option>
                            <option value="RTA">RTA</option>
                            <option value="Investment Advisor">Investment Advisor</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white w-full py-3 rounded-md hover:bg-blue-600"
                    >
                        Register
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}

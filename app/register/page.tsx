"use client";

import Link from "next/link";
import config from "@/config";
import { Suspense, useState, FormEvent, ChangeEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateMobile = (mobile: string): boolean => {
        const regex = /^[0-9]{10}$/; // Adjust the regex according to your mobile format
        return regex.test(mobile);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { username, email, mobile, password, confirmPassword } = formData;

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        if (!validateMobile(mobile)) {
            setError("Please enter a valid mobile number.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        setError(""); // Reset error state

        // Simulate a backend call for email duplication check
        const isEmailDuplicate = false; // Assume the check is done

        if (isEmailDuplicate) {
            setError("Email already exists.");
            return;
        }

        try {
            // Send the data to your backend for registration
            // const response = await fetch('/api/register', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ username, email, mobile, password }),
            // });

            // Simulate successful registration
            setSuccess("Registration successful!");
            setFormData({
                username: "",
                email: "",
                mobile: "",
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            setError("Registration failed. Please try again.");
        }
    };

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
                    <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
                    {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
                    {success && <div className="text-green-500 mb-4 text-center">{success}</div>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition duration-200"
                                placeholder="name@flowbite.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile</label>
                            <input
                                type="number"
                                id="mobile"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition duration-200"
                                placeholder="1234567890"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition duration-200"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                            <input
                                type="password"
                                id="repeat-password"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition duration-200"
                                required
                            />
                        </div>
                        <div className="flex items-start mb-4">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
                                    required
                                />
                            </div>
                            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200">
                            Register New Account
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Register;

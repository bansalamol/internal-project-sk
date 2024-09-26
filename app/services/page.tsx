import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Suspense>
                <Header />
            </Suspense>
            <main className="container-fluid mx-auto">
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
                {/* About IPO Club */}
                <section className="py-16 bg-gradient-to-r from-cyan-100 to-blue-50 text-center">
                    <h2 className="text-3xl font-bold mb-4">Choose your role to learn more</h2>
                    <p className="text-gray-600 mb-8">Let us know who you are, and we&apos;ll provide personalized information.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white shadow-md rounded-lg p-6 hover:bg-blue-100 cursor-pointer transition">
                            <h3 className="text-xl font-semibold mb-2">Investor</h3>
                            <p className="text-gray-500">I am an investor looking for IPO opportunities.</p>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                Learn More
                            </button>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 hover:bg-blue-100 cursor-pointer transition">
                            <h3 className="text-xl font-semibold mb-2">Company</h3>
                            <p className="text-gray-500">I represent a company interested in IPO listing.</p>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                Learn More
                            </button>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 hover:bg-blue-100 cursor-pointer transition">
                            <h3 className="text-xl font-semibold mb-2">Individual</h3>
                            <p className="text-gray-500">I am an individual looking to invest in IPOs.</p>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                Learn More
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );

}

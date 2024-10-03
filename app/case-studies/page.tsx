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
                {/* Case-Studies IPO EXPERT */}
                <section className="py-16 bg-gradient-to-r from-cyan-100 to-blue-50 text-center">
                    <h2 className="text-3xl font-bold mb-4">Explore Our IPO Case Studies</h2>
                    <p className="text-gray-600 mb-8">Discover how our clients navigated the IPO process and achieved success in public markets.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="bg-white shadow-md rounded-lg p-6 hover:bg-blue-100 cursor-pointer transition">
                            {/* SVG icon for Tech Innovations Inc. */}
                            <div className="flex justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                    <line x1="9" y1="21" x2="9" y2="9" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Tech Innovations Inc.</h3>
                            <p className="text-gray-500">Learn how Tech Innovations Inc. successfully raised $500M through their IPO, leveraging market timing and strategic investor engagement.</p>
                        </div>

                        <div className="bg-white shadow-md rounded-lg p-6 hover:bg-blue-100 cursor-pointer transition">
                            {/* SVG icon for Green Energy Solutions */}
                            <div className="flex justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L12 12L22 12" />
                                    <path d="M12 12L3 21L12 12L12 22" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Green Energy Solutions</h3>
                            <p className="text-gray-500">Discover how Green Energy Solutions went public to accelerate growth and build long-term shareholder value, raising $300M in the process.</p>
                        </div>

                        <div className="bg-white shadow-md rounded-lg p-6 hover:bg-blue-100 cursor-pointer transition">
                            {/* SVG icon for FinTech Ventures */}
                            <div className="flex justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L12 12L22 12" />
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">FinTech Ventures</h3>
                            <p className="text-gray-500">See how FinTech Ventures capitalized on the IPO market to drive innovation, raising $400M while expanding their global reach.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );

}

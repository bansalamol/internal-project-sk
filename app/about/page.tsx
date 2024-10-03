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
            <main className="container mx-auto p-4">
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
                {/* About IPO EXPERT */}
                <section className="my-12 text-center bg-gradient-to-r from-blue-500 to-indigo-500 py-12 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-center mb-8 text-white">About IPO EXPERT</h1>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto text-white">
                        IPO EXPERT is run by industry experts with years of experience in the field of initial public offerings (IPOs).
                        Our mission is to connect institutional investors, individual investors, and professionals like CAs, CSs, MBAs,
                        with the latest opportunities in the IPO market.
                    </p>
                </section>



            </main>
            <Footer />
        </>
    );

}

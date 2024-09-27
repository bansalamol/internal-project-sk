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

                {/* Back to Home */}
                <div className="text-center mb-8">
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
                <section className="bg-gradient-to-b from-slate-400 via-gray-100 to-slate-400 py-16 text-center">
                    {/* Page Title */}
                    <div className="max-w-6xl mx-auto text-center mb-20 px-4">
                        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                            Our Innovation Ecosystem
                        </h1>
                        <p className="text-lg text-black max-w-3xl mx-auto">
                            Discover how we foster innovation, empower startups, and partner with industry leaders to shape the future.
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
                        {/* Dynamic Cards */}
                        {[
                            { title: "Open Innovation", content: "We encourage collaboration and creativity across industries, solving complex challenges through the exchange of ideas and fostering breakthrough technologies." },
                            { title: "Hosted Startups", content: "We offer mentorship and resources to early-stage startups, providing access to our network of experts and potential investment opportunities." },
                            { title: "Incubators", content: "Our incubators provide startups with coworking spaces, technical resources, and mentoring to turn ideas into successful business ventures." },
                            { title: "Partner Startups", content: "We collaborate with strategic startups to develop cutting-edge solutions, explore new markets, and accelerate innovation." },
                            { title: "Strategic Partnerships", content: "Through long-term partnerships, we foster sustainable growth, drive innovation, and address global challenges together with our collaborators." },
                            { title: "Funding", content: "We provide a range of funding opportunities to accelerate the development of innovative projects and bring transformative products to market." },
                            { title: "Business Partnerships", content: "Our business partnerships create a network of expertise, technology, and resources to tackle today’s biggest challenges together." },
                            { title: "Chairs and Universities", content: "By partnering with academic institutions, we stay ahead of the curve on technological advancements, exploring new ideas and driving research." },
                            { title: "Third-Party Environments", content: "We collaborate with tech hubs and accelerators to integrate cutting-edge solutions into our ecosystem, driving forward innovation in our business practices." }
                        ].map((item, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
                                <div className="p-8">
                                    <h2 className="text-2xl font-bold text-blue-700 mb-4">{item.title}</h2>
                                    <p className="text-gray-600">{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}

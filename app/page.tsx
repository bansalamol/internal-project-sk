import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="container mx-auto p-4">
        {/* Hero Section */}
        <section className="my-12 text-center bg-gradient-to-r from-blue-500 to-indigo-500 py-12 rounded-lg shadow-lg">
          <h1 className="text-5xl font-extrabold text-white">Welcome to IPO Club</h1>
          <p className="mt-4 text-lg text-gray-100 max-w-2xl mx-auto">
            Join a community of investors and professionals looking to make their mark in the IPO market.
          </p>
          <div className="mt-6">
            <a href="/signup" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold shadow-md hover:bg-gray-200 transition duration-300">
              Join Now
            </a>
          </div>
        </section>

        {/* About IPO Club */}
        <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8">About IPO Club</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            IPO Club is run by industry experts with years of experience in the field of initial public offerings (IPOs).
            Our mission is to connect institutional investors, individual investors, and professionals like CAs, CSs, MBAs,
            with the latest opportunities in the IPO market.
          </p>
        </section>

        {/* Why Join? */}
        <section className="my-16 bg-gray-100 py-12 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold text-center mb-8">Why Join IPO Club?</h2>
          <ul className="list-inside max-w-2xl mx-auto text-left space-y-4 text-lg">
            <li className="flex items-center">
              <span className="material-icons text-blue-500 mr-2">insights</span>
              Access to exclusive IPO insights and analysis
            </li>
            <li className="flex items-center">
              <span className="material-icons text-blue-500 mr-2">people</span>
              Opportunities to network with industry professionals
            </li>
            <li className="flex items-center">
              <span className="material-icons text-blue-500 mr-2">trending_up</span>
              Stay ahead of market trends and make informed decisions
            </li>
          </ul>
        </section>

        {/* How to Join */}
        <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8">How to Join</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            It's easy to join IPO Club. Simply fill out the registration form with your details and select your role — whether you're a company planning an IPO, an investor, or a professional, we have a place for you in our community.
          </p>
          <div className="text-center">
            <a href="/signup" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-blue-600 transition duration-300">
              Join Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );

}

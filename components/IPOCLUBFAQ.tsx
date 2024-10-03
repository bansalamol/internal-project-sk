"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

// <IPOCLUBFAQ> component is a lsit of <Item> component
// Just import the IPOCLUBFAQ & add your IPOCLUBFAQ content to the const faqList arrayy below.

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "What is an IPO EXPERT?",
    answer: (
      <p>
        An IPO EXPERT is a community that provides investors with insights, resources, and exclusive opportunities related to upcoming Initial Public Offerings (IPOs). Members can stay informed and make better investment decisions.
      </p>
    ),
  },
  {
    question: "How does the IPO EXPERT add value to investors?",
    answer: (
      <div>
        The IPO EXPERT adds value by providing:
        <ul className="list-disc list-inside space-y-1.5 mt-2">
          <li>Exclusive IPO research and analysis: Get detailed guidance on companies planning to go public.</li>
          <li>Early access to IPO opportunities: Some IPO Clubs may have partnerships allowing members priority access to IPO allocations.</li>
          <li>Expert insights and market trends: Stay updated on IPO performance, sector trends, and expert opinions to help guide your investment strategy.</li>
          <li>Community and networking: Connect with other like-minded investors and professionals to exchange knowledge and strategies.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Why should I join an IPO EXPERT instead of investing on my own?",
    answer: (
      <p>
        An IPO EXPERT provides access to curated, timely information and in-depth company studies, reducing the research burden on individual investors. The EXPERT offers expert analysis, detailed reports on a company&apos;s financial health, growth potential, and market position, along with IPO alerts and insights that may not be easily available elsewhere. This comprehensive approach equips you with the knowledge to make more informed and confident investment decisions.
      </p>
    ),
  },
  {
    question: "Can the IPO EXPERT guarantee profits from IPO investments?",
    answer: (
      <p>
        No, IPO EXPERT cannot guarantee profits. The stock market, especially IPOs, can be volatile, and while the EXPERT provides valuable information and analysis, investing always involves risk. It&apos;s essential to perform your own due diligence.
      </p>
    ),
  },
  {
    question: "What kind of IPOs does the EXPERT focus on?",
    answer: (
      <p>
        The IPO EXPERT covers a wide range of sectors and companies, from tech startups to established firms. Depending on the platform, you may receive information on domestic and international IPOs, as well as small-cap or large-cap companies.
      </p>
    ),
  },
  {
    question: "How do I benefit from the community in an IPO EXPERT?",
    answer: (
      <p>
        Being part of an IPO EXPERT allows you to share experiences, strategies, and insights with fellow investors. This collaborative environment fosters learning and can help you develop more refined approaches to IPO investments.
      </p>
    ),
  },
];


const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${isOpen && "rotate-180"
              }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen && "rotate-180 hidden"
              }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const IPOCLUBFAQ = () => {
  return (
    <section className="my-16 py-16 px-6" id="faq">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex basis-1/2 flex-col text-left">
          <p className="mb-4 inline-block font-semibold">FAQ</p>
          <h2 className="text-3xl font-bold text-base-content lg:text-5xl">Frequently Asked Questions</h2>
        </div>
        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default IPOCLUBFAQ;

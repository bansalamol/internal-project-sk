"use client";

import { useState, useEffect } from "react";
import type { JSX } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";
import config from "@/config";
import React from 'react';
import ButtonGradient from "@/components/ButtonGradient";

const links: { href: string; label: string }[] = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "How We Work" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#benefits", label: "Benefits" },
  { href: "#register", label: "Register" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cta: JSX.Element = (
    <Link href="#register">
      <ButtonGradient title="Get Started" />
    </Link>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-effect shadow-lg py-1"
          : "bg-transparent py-2"
      }`}
    >
      <nav className="container flex items-center justify-between px-8 py-2 mx-auto" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link className="flex items-center gap-2 shrink-0" href="/" title={`${config.appName} homepage`}>
            <Image
              src={logo}
              alt={`${config.appName} logo`}
              placeholder="blur"
              className={`w-36 h-auto sm:w-36 md:w-44 lg:w-52 transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              priority={true}
              width={640}
              height={640}
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 ${scrolled ? "text-base-content" : "text-white"}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:justify-center lg:gap-8 lg:items-center">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
              title={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:justify-end lg:flex-1">{cta}</div>
      </nav>

      {/* Mobile menu */}
      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div className="fixed inset-y-0 right-0 z-10 w-full px-8 py-4 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-neutral/10 shadow-2xl">
          <div className="flex items-center justify-between">
            <Link className="flex items-center gap-2 shrink-0" href="/" title={`${config.appName} homepage`}>
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                className="w-36"
                priority={true}
                width={640}
                height={640}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flow-root mt-6">
            <div className="py-4">
              <div className="flex flex-col gap-y-4 items-start">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                    title={link.label}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex flex-col">{cta}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

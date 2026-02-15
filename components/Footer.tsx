import Link from "next/link";
import Image from "next/image";
import config from "@/config";


const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white" id="contact">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/assets/images/logo-transparent.png"
                alt={`${config.appName} logo`}
                priority={true}
                className="w-48 h-auto brightness-0 invert"
                width={640}
                height={234}
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for navigating the IPO journey. From strategy to execution, we ensure your success in the public market.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/tos" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@ipoexpert.io"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@ipoexpert.io
              </a>
              <a
                href="https://ipoexpert.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                ipoexpert.io
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {config.appName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

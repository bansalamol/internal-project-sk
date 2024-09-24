import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-green-50 to-blue-100">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/#" aria-current="page" className="flex gap-2 justify-center md:justify-start items-center">
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                priority={true}
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <strong className="font-extrabold tracking-tight text-base md:text-lg">
                {config.appName}
              </strong>
            </Link>
            <p className="text-gray-900 font-bold mt-3 text-sm text-base-content/80">
              {config.appDescription}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Quick Links</h2>
              <ul className="text-gray-800 dark:text-gray-800 font-medium">
                <li><Link href="/about" className="link link-hover">About IPO Club</Link></li>
                <li><Link href="/services" className="link link-hover">Services</Link></li>
                <li><Link href="/contact" className="link link-hover">Contact Us</Link></li>
                <li><Link href="/blog" className="link link-hover">Blog</Link></li>
                <li><Link href="/faqs" className="link link-hover">FAQs</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-800 dark:text-gray-800 font-medium">
                <li><Link href="/tos" className="link link-hover">Terms of Service</Link></li>
                <li><Link href="/privacy-policy" className="link link-hover">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="flex flex-col text-center md:text-left">
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                CONTACT INFO
              </h2>
              <div className="text-gray-800 dark:text-gray-800 font-medium">
                <p>Office: 123 IPO St, Business City</p>
                <a href="mailto:info@ipo-club.com" className="link link-hover">
                  Email: info@ipo-club.com
                </a>
                <a href="tel:+11234567890"><p className="link link-hover">Talk to an Expert now</p></a>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Copyright and Social Media Links */}
        <div className="flex justify-between items-center">
          <p className="text-black text-sm text-base-content/60">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" className="text-base-content/60">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-base-content/60">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" className="text-base-content/60">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="https://github.com/" target="_blank" className="text-base-content/60">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>

  );
};

export default Footer;

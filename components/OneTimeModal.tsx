import { useEffect, useState } from 'react';

export default function OneTimeModal() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Show modal only on first visit 
        const modalShown = sessionStorage.getItem('modalShown');
        if (!modalShown) {
            setShowModal(true);
            sessionStorage.setItem('modalShown', 'true');
        }
    }, []);

    const handleClose = () => {
        setShowModal(false);
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="bg-gradient-to-r from-cyan-100 to-blue-50 text-black rounded-lg shadow-lg max-w-xs sm:max-w-md md:max-w-lg w-full p-3 sm:p-4">
                <h2 className="text-base sm:text-lg font-bold mb-2">
                    DISCLAIMER
                </h2>
                <p className="text-xs sm:text-sm text-gray-700 leading-tight">
                    The information provided on this website is sourced from reliable channels and may change without prior notice at the sole discretion of IPO CLUB.
                    <br /><br />
                    IPO CLUB does not guarantee or warrant that the information on this website will always reflect the most up-to-date changes, especially regarding market conditions, IPO schedules, or financial details.
                    All data, reports, analysis, and services mentioned here are for informational purposes only and are subject to revision. No individual or entity is permitted to copy, modify, display, create derivative works, transmit, exploit, sell, or distribute the content of this website without permission. It is the responsibility of the viewer to verify the accuracy and completeness of the information provided.
                    <br /><br />
                    IPO CLUB holds no control over the content or availability of external websites linked through our platform, and we shall not be liable for any information or content on these Linked websites.
                    <br /><br />
                    By continuing to use our website, you confirm that you have read, understood, and agreed to these terms. IPO CLUB reserves the right to revise these terms periodically.
                </p>
                <div className="flex justify-center mt-3">
                    <button
                        className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-900"
                        onClick={handleClose}
                    >
                        I Agree
                    </button>
                </div>
            </div>
        </div>
    );
}

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
            <div className="mt-6 bg-gradient-to-r from-cyan-100 to-blue-50 text-black rounded-lg shadow-lg max-w-xl w-full mx-4 md:mx-6 lg:mx-8 p-6 md:p-8 overflow-y-auto max-h-screen">
                <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">
                    DISCLAIMER
                </h2>
                <p className="text-gray-600 mb-4 text-center">
                    Effective Date: 09 October, 2024
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Welcome to www.ipoexpert.io (the &quot;Website&quot;), operated by S K & Associates (&quot;the Company&quot;). By accessing or using this Website, you agree to comply with and be bound by the Terms of Service. By using this Website, you affirm that you have read, understood, and agree to comply with these Terms of Service, including any policies referenced herein (such as our Privacy Policy and Disclaimer).
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

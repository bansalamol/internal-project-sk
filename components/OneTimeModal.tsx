import { useEffect, useState } from 'react';

export default function OneTimeModal() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full mx-4 p-8 md:p-10">
                <h2 className="text-xl font-bold mb-2 text-center text-gray-900">
                    DISCLAIMER
                </h2>
                <p className="text-gray-400 mb-6 text-center text-sm">
                    Effective Date: January 1, 2025
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Welcome to www.ipoexpert.io (the &quot;Website&quot;), operated by S K & Associates (&quot;the Company&quot;). By accessing or using this Website, you agree to comply with and be bound by the Terms of Service. By using this Website, you affirm that you have read, understood, and agree to comply with these Terms of Service, including any policies referenced herein (such as our Privacy Policy and Disclaimer).
                </p>
                <div className="flex justify-center mt-6">
                    <button
                        className="px-8 py-2.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-700 transition-colors"
                        onClick={handleClose}
                    >
                        I Agree
                    </button>
                </div>
            </div>
        </div>
    );
}

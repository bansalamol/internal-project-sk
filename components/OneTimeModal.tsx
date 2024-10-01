import { useEffect, useState } from 'react';

export default function OneTimeModal() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Show modal only on first visit 
        // const modalShown = sessionStorage.getItem('modalShown');
        // if (!modalShown) {
            setShowModal(true);
        //     sessionStorage.setItem('modalShown', 'true');
        // }
    }, []);

    const handleClose = () => {
        setShowModal(false);
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className=" bg-gradient-to-r from-cyan-100 to-blue-50 text-black rounded-lg shadow-lg max-w-lg w-full p-6">
                <h2 className="text-lg font-bold mb-4">
                    DISCLAIMER
                </h2>
                <p className="text-sm text-gray-700">
                    The general information provided on the website is taken from trusted sources and is subject to change without any notice and at the sole discretion of Atul Projects.
                    <br /><br />
                    Atul Projects under no circumstances guarantee or warranty that this website reflects the latest changes/amendments pertaining to the information at all times and at any time.
                    All plans, specifications, designs, features, facilities, and services provided on the site indicate the kind of development proposed for respective projects for representational purposes.
                    No person can copy, use, modify, display or create derivative works or databases, or transmit, exploit, sell, or distribute the same. The viewer holds the responsibility of evaluating
                    the accuracy and/or completeness of the information provided on the website. Atul Projects on the whole holds no control over the content or the availability of Linked websites. Atul
                    Projects shall not be liable for any aspect or information provided on Linked websites.
                    <br /><br />
                    By proceeding to view our website, you acknowledge that you have read, understood as well as accepted these terms. Our terms may be revised time and again by Atul Projects.
                </p>
                <div className="flex justify-center mt-4">
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

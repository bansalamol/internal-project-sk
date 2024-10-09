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
                    www.ipoexpert.io (&quot;Website&quot;) is owned and operated by S K & Associates
                    (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed to protecting the
                    privacy of any individual or entity (&quot;User&quot;) who accesses or uses the
                    Website. This Privacy Policy describes how we collect, use, disclose,
                    and protect Personal Data you provide when accessing or using the
                    Website.
                    <br /><br />
                    1. No Offer or Advice
                    The content provided on this Website is for general information purposes only. Nothing on this Website constitutes an offer, solicitation, or recommendation to buy or sell any securities or financial instruments, or to participate in an IPO or any particular advisory services. The information provided does not constitute financial advice or investment advice, nor does it create any Engagement between the Company and the User.
                    <br /><br />
                    2. No Warranty or Guarantee
                    The Company makes no representation or warranty, express or implied, regarding the accuracy, completeness, timeliness, or reliability of the information on this Website. We do not guarantee the accuracy, quality, or performance of any products, services, or advice mentioned on this Website. The Website is provided &quot;as is&quot; without warranties of any kind. We disclaim all warranties, express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                    <br /><br />
                    3. Limitation of Liability
                    To the fullest extent permitted by law, the Company shall not be liable for any loss or damage arising out of or in connection with the use of the Website or its content. This includes any loss of profits, business interruptions, or any other damages, whether direct, indirect, consequential, or punitive, even if we have been advised of the possibility of such loss or damage. Under no circumstances will we be liable for any loss or damage resulting from your reliance on information obtained through the Website.
                    <br /><br />
                    4. Third-Party Links and Content
                    The Website may contain links to third-party websites, services, or products. These links are provided for your convenience and do not imply endorsement, approval, or responsibility for the content, products, or services of such third parties. We are not responsible for the content, privacy practices, or security of any third-party websites and you access them at your own risk.
                    <br /><br />
                    5. No Advance Payments
                    We do not request or accept any advance payments for any services or transactions. Any individual or third party claiming to act on behalf of the Company requesting advance payments or fees is not authorized, and you are advised to exercise caution. Any payment made to such entities is at your own risk, and the Company disclaims any responsibility for any transactions conducted outside our official channels.
                    <br /><br />
                    6. Confidentiality and Use of the Website
                    While we take steps to ensure the security of the Website, we cannot guarantee the confidentiality of any information transmitted over the Internet. Any data or information submitted by you through the Website is at your own risk, and you are responsible for ensuring that any information you provide is accurate, legal, and does not infringe on the rights of third parties.
                    <br /><br />
                    7. Changes to the Website and Disclaimer
                    The Company reserves the right to make changes to the Website, including its content, design, and functionality, at any time and without notice. We may update this Disclaimer from time to time to reflect changes in our business, legal obligations, or industry standards. We encourage you to review this Disclaimer regularly to stay informed of any updates.
                    <br /><br />
                    8. Governing Law and Jurisdiction
                    This Disclaimer, and your use of the Website, is governed by and construed in accordance with the laws of the Republic of India. Any dispute arising out of or relating to this Disclaimer or your use of the Website shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra, India.
                    <br /><br />
                    9. Contact Information
                    If you have any questions about this Disclaimer or the Website, please contact us at:
                    Email: info@ipoexpert.io
                    <br /><br />
                    By accessing and using www.ipoexpert.io, you acknowledge that you have read, understood, and agree to the terms outlined in this Disclaimer.
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

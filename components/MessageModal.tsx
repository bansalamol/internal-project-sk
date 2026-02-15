import React from 'react';
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

interface MessageModalProps {
    message: string;
    isError: boolean;
    onClose: () => void;
}

const MessageModal: React.FC<MessageModalProps> = ({ message, isError, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm">
            <div className={`bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 ${isError ? 'border-2 border-red-400' : 'border-2 border-green-400'}`}>
                <div className="flex flex-col items-center mb-6">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center border-4 border-white shadow-md -mt-14 mb-4">
                        <Image
                            src={logo}
                            alt={`${config.appName} logo`}
                            priority={true}
                            width={100}
                            height={100}
                            className="w-16 h-10 object-contain"
                        />
                    </div>
                </div>

                <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${isError ? 'bg-red-100' : 'bg-green-100'}`}>
                    {isError ? (
                        <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                </div>

                <h2 className="text-xl font-bold text-center text-gray-900 mb-3">
                    {isError ? 'Something went wrong' : 'Thank you for joining IPO EXPERT!'}
                </h2>
                <p className="text-gray-600 text-center mb-6">{message}</p>

                <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm text-gray-400 flex items-center justify-center gap-2 mb-4">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Your response has been submitted successfully.
                    </p>
                    <button
                        onClick={onClose}
                        className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-700 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MessageModal;

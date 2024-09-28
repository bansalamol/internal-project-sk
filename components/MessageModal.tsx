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
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
            <div className={`bg-white rounded-lg shadow-lg p-6 max-w-md w-full ${isError ? 'border border-red-500' : 'border border-green-500'}`}>
                <div className="flex flex-col items-center mb-4">
                    {/* Logo Container */}
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center border-4 border-white -mt-12 mb-4 z-10">
                        <Image
                            src={logo}
                            alt={`${config.appName} logo`}
                            priority={true}
                            width={48}
                            height={48}
                            className="w-12 h-12 object-contain"
                        />
                    </div>
                </div>
                <h2 className="text-lg font-bold text-center mt-6 mb-4">Thank you for joining IPO CLUB!</h2>
                <p className="text-md text-black mb-4">{message}</p>
                <hr className="border-gray-500 sm:mx-auto dark:border-gray-400" />
                <p className="text-sm px-8 text-gray-800 flex items-center mt-2">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clip-rule="evenodd" />
                    </svg>
                    &nbsp; You successfully submitted your responses.
                </p>

                <button
                    onClick={onClose}
                    className="mt-4 btn bg-slate-900 text-white hover:bg-slate-700 float-right"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default MessageModal;

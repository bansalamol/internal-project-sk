import React from 'react';

interface MessageModalProps {
    message: string;
    isError: boolean;
    onClose: () => void;
}

const MessageModal: React.FC<MessageModalProps> = ({ message, isError, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
            <div className={`bg-white rounded-lg shadow-lg p-6 max-w-md w-full ${isError ? 'border border-red-500' : 'border border-green-500'}`}>
                <h2 className="text-xl font-bold text-center">{isError ? 'Error' : 'Success'}</h2>
                <p className="text-lg text-black">{message}</p>
                <button
                    onClick={onClose}
                    className="mt-4 btn bg-slate-900 text-white hover:bg-slate-700"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default MessageModal;

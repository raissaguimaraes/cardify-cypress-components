import React from 'react';

const Modal = ({ message, onClose }) => {
    return (
        <div className="success-modal fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white rounded-lg shadow-lg p-8 relative z-10 max-w-md mx-auto">
                <h2 className="modal-title text-3xl font-bold text-center mb-4">Registro</h2>
                <p className="modal-message text-center text-gray-700 mb-6">{message}</p>
                <div class="flex justify-center">
                    <button
                        className="modal-button bg-blue-600 justi text-white py-2 px-6 rounded-full hover:bg-blue-500 focus:outline-none transition duration-200"
                        onClick={onClose}
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
import './modal.css'
import '@/app/globals.css'
import React, { FC } from "react";

interface Props {
    showModal: boolean;
    modalTitle: string;
    modalMessage: string;
    confirmModal: () => void;
    closeModal?: () => void;
}

const ModalConfirmation: FC<Props> = ({ showModal, modalTitle, modalMessage, confirmModal, closeModal }) => {
    return (
        <div className={`modal-container ${showModal ? 'modal-container-active' : ''}`}>
            {showModal && (
                <div className='confirm-modal flex flex-col justify-between'>
                    <h1 className='font-bold'>{modalTitle || 'Confirm Title'}</h1>
                    <h2>{modalMessage || 'Confirm something?'}</h2>
                    <div className='btn-container flex justify-end'>
                        {closeModal && (
                            <button className='btn-confirm pl-2' onClick={closeModal}>Cancel</button>
                        )}
                        <button className='btn-confirm pl-2' onClick={confirmModal}>Confirm</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModalConfirmation;
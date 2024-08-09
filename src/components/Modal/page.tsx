import './modal.css'
import '@/app/globals.css'

export default function modalConfirmation( {showModal, modalTitle, modalMessage, confirmModal, closeModal}) {
    function updateModalShow(){
        showModal = false;
    }

    return (
        <div className={showModal?'modal-container-active ':''}>
            {showModal? 
            <div className='confirm-modal flex flex-col justify-between'>
                <h1 className='font-bold'>{ modalTitle != ''? modalTitle :'Confirm Title' }</h1>
                <h2 className=''>{ modalMessage != ''? modalMessage :'Confirm something?' }</h2>
                <div className='btn-container flex justify-end'>
                    <button className='btn-confirm pl-2' onClick={closeModal}>Cancel</button>
                    <button className='btn-confirm pl-2' onClick={confirmModal}>Confirm</button>
                </div>
            </div>: '' }
        </div>
    )
}
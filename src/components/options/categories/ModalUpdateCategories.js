import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
    //   top                   : '50%',
    //   left                  : '50%',
    //   right                 : 'auto',
    //   bottom                : 'auto',
    //   marginRight           : '-50%',
    //   transform             : 'translate(-50%, -50%)'
        width       : '90%',
        height      :  'auto' 
        
    }
};

Modal.setAppElement('#root')

export const ModalUpdate = () => {

    const [state, setstate] = useState(true)

    const closeModal = () => {
        setstate(false)
    }

    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        console.log('Enviando....');
    }

    return (
        <Modal
          isOpen={state}
          closeTimeoutMS={200}
          onRequestClose={closeModal}
          style={customStyles}
          className="modal"
          overlayClassName="modal-fondo"
        >
            <div className="modal_update_categories">
                <div className="modal_update_categories__title">
                    <span>Actualizar Categoría</span>
                </div>
                <hr/>
                <div className="modal_update_categories__wrapper">
                    <form  onSubmit={handleSubmitUpdate} >

                        <div className="modal_update_categories__input">
                            <input type="text" placeholder='Actualizar' autoComplete="off" />
                        </div>

                        <div className="modal_update_categories__button">
                            <button type="submit">
                                Actualizar
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </Modal>
    )
}

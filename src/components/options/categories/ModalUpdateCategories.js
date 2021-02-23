import React from 'react';
import Modal from 'react-modal';
import {useSelector, useDispatch} from 'react-redux';
/****** Actions ******/
import { uiCloseModal } from '../../../actions/ui';
import { Close } from '../globalOption/Close';

const customStyles = {
    content : {
    //   top                   : '50%',
    //   left                  : '50%',
    //   right                 : 'auto',
    //   bottom                : 'auto',
    //   marginRight           : '-50%',
    //   transform             : 'translate(-50%, -50%)'
        width       :   '90%',
        height      :   'auto',
        position    :   'relative'
        
    }
};

Modal.setAppElement('#root')

export const ModalUpdate = () => {

    const {openModal} = useSelector(state => state.ui);
    const dispatch = useDispatch();


    const closeModal = () => {
        dispatch(uiCloseModal());
    }

    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        console.log('Enviando....');
    }

    return (
        <Modal
          isOpen={openModal}
          closeTimeoutMS={200}
          onRequestClose={closeModal}
          style={customStyles}
          className="modal"
          overlayClassName="modal-fondo"
        >   
            <Close />
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

import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useDispatch } from 'react-redux';

/****** Actions ******/
import { uiCloseModal } from '../../../actions/ui';

export const Close = () => {

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(uiCloseModal());
    }

    return (
        <div className="close__wrapper" onClick={handleClose} title="Cerrar">
            <div>
                <FontAwesomeIcon icon="times" />
            </div>
        </div>
    )
}

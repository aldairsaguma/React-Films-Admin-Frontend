import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export const ButtonUpdate = ({handleUpdate,id}) => {
    return (
        <div className="globalOption__buttonUpdate">
            <button type="button" title="Actualizar" data-id={id} onClick={handleUpdate} name={`name${id}`} >
                <FontAwesomeIcon icon="pen" />
            </button>
        </div>
    )
}

ButtonUpdate.propTypes = {
    handleUpdate : PropTypes.func.isRequired,
    id : PropTypes.string.isRequired
}



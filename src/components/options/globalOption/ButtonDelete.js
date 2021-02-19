import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export const ButtonDelete = ({handleDelete, id}) => {
    return (
        <div className="globalOption__buttonDelete" title="Eliminar">
            <button type="button" onClick={handleDelete} data-id={id}>
                <FontAwesomeIcon icon="trash-alt" />
            </button>
        </div>
    )
}

ButtonDelete.propTypes = {
    handleDelete : PropTypes.func.isRequired,
    id : PropTypes.string.isRequired
}
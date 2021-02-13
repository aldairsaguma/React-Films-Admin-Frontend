import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const AddCategories = () => {

    const handleAddCategories = (e) => {
        e.preventDefault();
        console.log('handleAddCategories');
    }

    return (
        <div className="categories">
            <div>
                <span className="categories__title">{`Agregar categorías`}</span>
            </div>
            <div>
                <form className="categories__formAdd" onSubmit={handleAddCategories} >
                    <div>
                        <input type="text" className="categories__input" placeholder="Agregar categoría"  />
                    </div>
                    <div>
                        <button type="submit" className="categories__btnAdd" >
                            <FontAwesomeIcon icon="save" />
                            {` Agregar`}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

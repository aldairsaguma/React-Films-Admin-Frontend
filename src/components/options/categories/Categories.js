import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from '../../../hooks/useForm';
import { ListCategories } from './ListCategories';

export const AddCategories = () => {

    const [values, handleInputChange] = useForm({
        categories : ''
    });
    
    const {categories} = values;

    const handleAddCategories = (e) => {
        e.preventDefault();
        console.log(values);
    }


    return (
        <div className="categories">
            <div>
                <span className="categories__title">{`Agregar categorías`}</span>
            </div>
            <div>
                <form className="categories__formAdd" onSubmit={handleAddCategories} >
                    <div>
                        <input 
                            type="text" 
                            name="categories" 
                            className="categories__input" 
                            placeholder="Agregar categoría"  
                            value={categories}
                            onChange={handleInputChange}  
                            autoComplete="off"  
                        />
                    </div>
                    <div>
                        <button type="submit" className="categories__btnAdd" >
                            <FontAwesomeIcon icon="save" />
                            {` Agregar`}
                        </button>
                    </div>
                </form>
            </div>
            <ListCategories />
        </div>
    )
}

import React from 'react'

export const AddCategories = () => {

    const handleAddCategories = (e) => {
        e.preventDefault();
        console.log('handleAddCategories');
    }

    return (
        <div className="addCategories">
            <div>
                <span className="addCategories__titles">Agregar categorías</span>
            </div>
            <div>
                <form className="form-addCategories" onSubmit={handleAddCategories} >
                    
                    <input type="text" placeholder="Añade una categoría"  />
                    <button type="submit">Agregar</button>

                </form>
            </div>
        </div>
    )
}

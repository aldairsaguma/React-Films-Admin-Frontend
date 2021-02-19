import React, { useState } from 'react'
import { ButtonDelete } from '../globalOption/ButtonDelete'
import { ButtonUpdate } from '../globalOption/ButtonUpdate'
import { Search } from '../globalOption/Search'

export const ListCategories = () => {

    const [state] = useState(
        [ 
            {
                id : '1',
                name : 'Suspenso'
            },
            {
                id : '2',
                name : 'Terror'
            },
            {
                id : '3',
                name : 'Ciencia ficción'
            }
        ]
    );

    const handleUpdate = ({target}) => {
        // console.log(target.getAttribute('data-id'));
        // console.log(target.dataset.id);
        const categoryUpdate = state.filter( res => res.id === target.dataset.id );
        const a = categoryUpdate.map(e  => e.name );
        console.log(a);
    }

    const handleDelete = ({target}) => {
        console.log(target.dataset.id);
    }

    return (
        <div className="listCategories">
            <div className="listCategories__container">
                <div className="listCategories__title">
                    <span>Listado de categorías</span>
                </div>
                <Search />
                    <div className="listCategories__body">
                        {
                            state.map( (list, i) =>  (
                                <div className="listCategories__details" key={i+1} >     
                                    <div className="listCategories__number">
                                        <span>{i+1}</span>
                                    </div>
                                    <div className="listCategories__name">
                                        <span className="listCategories__titleList">{list.name}</span>
                                    </div>
                                    
                                    <div className="listCategories__button">
                                        <ButtonUpdate handleUpdate={handleUpdate} id={list.id} />
                                        <ButtonDelete handleDelete={handleDelete} id={list.id} />
                                    </div>
                                </div>
                            ) )
                        }
                    </div>

            </div>
        </div>
    )
}

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const faChevronRight = <FontAwesomeIcon icon="chevron-right" />


export const Sidebar = () => {
    return (
        <div className="sidebar sidebar-main">
            <div className="sidebar__sidebar-content">
                <ul className="ul-options" >
                    <li className="li-options">
                        <div>
                            <span>Películas</span>
                        </div>
                        <div> { faChevronRight } </div>
                    </li>
                    <li className="li-options">
                        <div>
                            <span>Categorías</span>
                        </div>
                        <div> { faChevronRight } </div>
                    </li>
                    <li className="li-options">
                        <div>
                            <span>Categorías</span>
                        </div>
                        <div> { faChevronRight } </div>
                    </li>
                    <li className="li-options">
                        <div>
                            <span>Categorías</span>
                        </div>
                        <div> { faChevronRight } </div>
                    </li>
                    <li className="li-options">
                        <div>
                            <span>Categorías</span>
                        </div>
                        <div> { faChevronRight } </div>
                    </li>
                    <li className="li-options">
                        <div>
                            <span>Mi configuración</span>
                        </div>
                        <div> { faChevronRight } </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

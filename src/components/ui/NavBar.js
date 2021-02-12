import React from 'react';

/** Font Awesome **/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


export const NavBar = () => {

    const handleLogout = () => {
        console.log('Cerrar sesión');
    }

    return (
        <header className="page-header navbar__navbar">
            <div className="header-content">
               <div>
                    <span className="userName">
                        {`Bienvenido: Aldair Saguma`}
                    </span>
               </div>
                <div className="sections">
                    <nav className="navbar" id="navbar">
                       <ul>
                           <li className="ui-menu-item">
                               <button className="btn-logout" onClick={handleLogout} title="Cerrar Sesión" >
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                    {`Salir`} 
                               </button>
                           </li>
                       </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

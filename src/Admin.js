import React from 'react';

//My components
import { AppRouter } from './components/routes/AppRouter';
import './styles/styles.scss';


/** Font Awesome **/
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt, faChevronRight, faSave } from '@fortawesome/free-solid-svg-icons';
library.add(faSignOutAlt, faChevronRight, faSave);


export const Admin = () => {
    return (
        <div className="page-wrapper">
            <AppRouter />
        </div>
    )
}

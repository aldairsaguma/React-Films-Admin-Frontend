import React from 'react';
import {Provider} from 'react-redux';
//My components
import { store } from './store/store';
import { AppRouter } from './components/routes/AppRouter';
import './styles/styles.scss';

/** Font Awesome **/
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt, faChevronRight, faSave, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faSignOutAlt, faChevronRight, faSave, faPen, faTrashAlt );


export const Admin = () => {
    return (
        <div className="page-wrapper">
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </div>
    )
}

import React from 'react';
import {  
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

//My components 
import { LoginScreen } from '../auth/LoginScreen';
import { NotFound } from '../404/NotFound';
import { AdminScreen } from '../admin/AdminScreen';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact  path="/login"  component={LoginScreen} />
                <Route exact path="/" component={AdminScreen} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

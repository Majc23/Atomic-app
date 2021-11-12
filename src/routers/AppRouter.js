//import React, { useEffect, useState } from 'react';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Redirect
  } from 'react-router-dom';

/*import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';

import { ShelfScreen } from '../components/bookshelf/ShelfScreen';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';
import { Carga } from '../components/bookshelf/Carga';
*/

import { App } from "../components/App";
import { Register } from "../components/Register";
export const AppRouter = () => {


    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/register"
                        component={ Register }
                    />

                    <Route 
                        exact
                        path="/"
                        component={ App }
                    />

                    <Redirect to="/" />


                </Switch>
            </div>
        </Router>
    )
}
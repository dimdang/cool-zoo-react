import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './container/App';
import LoiginPage from './container/LoiginPage';
import Dashboard from './container/DashboardPage';
import FormPage from './container/FormPage';
import TablePage from './container/TablePage';
import NotFoundPage from './container/NotFoundPage';

export default(
    <Route>
        <Route path="login" component={LoiginPage}/>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard}/>
            <Route path="dashboard" component={Dashboard}/>
            <Route path="form" component={FormPage}/>
            <Route path="table" component={TablePage}/>
            <Route path="*" component={NotFoundPage}/>
        </Route>
    </Route>
);
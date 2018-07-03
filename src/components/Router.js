import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import PageNotFound from './PageNotFound';
import TopBarNav from './TopBarNav';

const Router = () => (
    <BrowserRouter>
        <div>
            <TopBarNav />
            <Switch>
                {/* Home Page Route */}
                <Route exact path="/" component={App}/>

                {/* All Recipes Route */}
                {/* <Route path="/recipes" component={Recipes}/> */}

                {/* Recipe Detail Page Route */}
                {/* <Route path="/recipe/:recipeId(\d+)" component={Recipe} /> */}

                {/* 404 Not Found Page Route */}
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default Router;
import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter,Route,Switch} from 'react-router-dom'

// const First = React.lazy(() => import ('./component/First'));
// const Second = React.lazy(() => import ('./component/Second'));
import First from './component/First';
import Second from './component/Second';

ReactDOM.render(
<BrowserRouter>
    <React.Suspense fallback = {<div>Loading...</div>}>
    <Switch>
        <Route exact path='/' component={First}></Route>
        <Route path='/next' component={Second}></Route>
    </Switch>
    </React.Suspense>
</BrowserRouter>,
document.getElementById("container"));
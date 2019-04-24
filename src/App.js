import React, {Component} from 'react';
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import ProductDisplay from './containers/ProductDisplay'

class App extends Component {

    render() {
        return (
            <div className="App container-fluid">
                <Switch>
                    <Route path={'/'} exact component={ProductDisplay} />
                    <Route path={'/product'} exact component={ProductDisplay} />
                </Switch>
            </div>
        )
    }

}

export default App;

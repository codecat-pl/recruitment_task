import React, {Component} from 'react';
import Login from './login';

export default class App extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Login />
            </div>
        );
    }
}


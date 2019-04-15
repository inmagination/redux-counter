// Recursos
import React, { Component } from "react";

// Styles
import "./app.scss";

// Components
import Counter from '../Counter/Counter';


export default class App extends Component {
    render() {   
        return (
            <div className='l-container'>
                <span className='app__icon' role='img' aria-label='app icons'>👆🏻👌🏻👇🏻</span>
                <h1 className='app__title'>Redux counter</h1>
                <p className='app__description'>Siéntete libre de jugar con el contador construído con redux y react</p>
                <Counter />         
            </div>
        );
    }
}
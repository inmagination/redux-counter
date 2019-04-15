// Recursos
import React from "react";
import { connect } from "react-redux";

// Components
import { Button } from '../Button/Button'

// Styles
import "./counter.scss";



//---------------------------------------------------
// Definición componente
//---------------------------------------------------

const Counter = props => {
    return  <div className='counter'>
                <div className='counter__number'>{props.counter}</div>
                <div className='counter__grid'>
                    <Button
                        text='-'
                        onClick={props.decrement} /> 
                    <Button
                        text='+'
                        onClick={props.increment} />  
                    <Button
                        extraClass='c-button--crimson counter__reset'      
                        text='Reset'
                        onClick={props.reset} /> 
                </div>         
            </div>
}



//---------------------------------------------------
// Conexión de redux
//---------------------------------------------------

const mapStateToProps = state => {
    return { counter: state.counter }
}

const mapDispatchToProps = dispatch => {
    return { 
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
        reset: () => dispatch({ type: 'RESET' }),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
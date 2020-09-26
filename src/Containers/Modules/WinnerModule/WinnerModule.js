import classes from './WinnerModule.module.css'
import Backdrop from '../../../Reusables/Backdrop/backdrop'
import React, {  Fragment } from 'react';


const WinnerModule = (props) => {

    return (
        <Fragment>
            <Backdrop />
            <div className={classes.Module} 
            style={{
                backgroundColor: props.winningColor,
                border: '1px solid ' + props.winningColor
            }} >
                <p className={classes.Title}>{props.winner}{props.wins}</p>
                <button 
                className={classes.Button} 
                onClick={props.playAgainClicked}
                
                >New Game?</button>
            </div>
        </Fragment>
           

        
    )
}


export default WinnerModule
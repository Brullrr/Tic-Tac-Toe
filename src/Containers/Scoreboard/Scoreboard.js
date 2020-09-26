import React from 'react';
import classes from './Scoreboard.module.css'

const Scoreboard = (props) => {
    
    let color = ''
    if(props.turn) {
        color = props.playerOneColor
    } else {
        color = props.playerTwoColor
    }
    
    return (
        <div className={classes.Scoreboard}>
            <p className={classes.SignOne}
            style={{
                color: props.playerOneColor
            }}>
                {props.playerOneScore} </p>
            <p className={classes.SignDivider}>{props.playerOneName} - {props.playerTwoName}</p>
            <p className={classes.SignTwo}
            style={{
                color: props.playerTwoColor
            }}>
                {props.playerTwoScore}</p>
            <p className={classes.WhoseTurn}  
            style={{
                color: color
            }}>{props.whoseTurn}'s turn</p>
        </div>
    )
}

export default Scoreboard
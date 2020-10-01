import classes from './playerInfoModule.module.css'
import Backdrop from '../../../Reusables/Backdrop/backdrop'
import React, { useState, Fragment } from 'react';


const PlayerInfoModule = (props) => {

    const [playerOneTitle, setplayerOneTitle] = useState('')
    const [playerTwoTitle, setPlayerTwoTitle] = useState('')

    const [playerOneColor, setplayerOneColor] = useState(props.playerOneColorPreserve)
    const [playerTwoColor, setplayerTwoColor] = useState(props.playerTwoColorPreserve)

    return (
        <Fragment>
            <Backdrop />
            <div className={classes.Module} >
                <div className={classes.Player}>
                    <input  id='playerOne' type='text' placeholder='Player One' maxLength='15'
                        onInput={ event => setplayerOneTitle(event.target.value)} value={playerOneTitle}/>    
                </div>
                    <select className={classes.Select} onChange={ event => setplayerOneColor(event.target.value)} value={playerOneColor}>
                        <option className={classes.Red} value="red">Red</option>
                        <option className={classes.Orange} value="orange">Orange</option>
                        <option className={classes.Yellow} value="yellow">Yellow</option>
                        <option className={classes.Green} value="green">Green</option>
                        <option className={classes.Blue} value="blue">Blue</option>
                        <option className={classes.Purple} value="purple">Purple</option>
                    </select>
                <div className={classes.Player} >
                    <input  id='playerTwo' type='text' placeholder='Player Two' maxLength='15'
                        onInput={ event => setPlayerTwoTitle(event.target.value)} value={playerTwoTitle}/>
                </div>
                    <select className={classes.Select} onChange={ event => {setplayerTwoColor(event.target.value)}} value={playerTwoColor}>
                        <option className={classes.Red} value="red">Red</option>
                        <option className={classes.Orange} value="orange">Orange</option>
                        <option className={classes.Yellow} value="yellow">Yellow</option>
                        <option className={classes.Green} value="green">Green</option>
                        <option className={classes.Blue} value="blue">Blue</option>
                        <option className={classes.Purple} value="purple">Purple</option>
                    </select>
                
                <button className={classes.Button} onClick={() => {
                    
                    props.playButton(playerOneTitle, playerTwoTitle, playerOneColor, playerTwoColor)}}>Play</button>
            </div>
        </Fragment>
           

        
    )
}


export default PlayerInfoModule
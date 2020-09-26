import React, { Fragment } from 'react';
import classes from './Gameboard.module.css'
import Tile from './Tile/Tile'


const Gameboard = (props) => {
    return (
       <Fragment>
           
           <div className={classes.GameboardOuter}>
           <img className={classes.ImageOne} src={require('../../Pictures/capital_x.png')}></img>
                <div className={classes.Gameboard}>
                        <Tile clicked={() => { props.clicked(0) }} claim={props.claimTile[0]} color={props.tileOne}/>
                        <Tile clicked={() => { props.clicked(1) }} claim={props.claimTile[1]} color={props.tileTwo}/>
                        <Tile clicked={() => { props.clicked(2) }} claim={props.claimTile[2]} color={props.tileThree}/>
                        <Tile clicked={() => { props.clicked(3) }} claim={props.claimTile[3]} color={props.tileFour}/>
                        <Tile clicked={() => { props.clicked(4) }} claim={props.claimTile[4]} color={props.tileFive}/>
                        <Tile clicked={() => { props.clicked(5) }} claim={props.claimTile[5]} color={props.tileSix}/>
                        <Tile clicked={() => { props.clicked(6) }} claim={props.claimTile[6]} color={props.tileSeven}/>
                        <Tile clicked={() => { props.clicked(7) }} claim={props.claimTile[7]} color={props.tileEight}/>
                        <Tile clicked={() => { props.clicked(8) }} claim={props.claimTile[8]} color={props.tileNine}/>
                </div>
                <img className={classes.ImageTwo} src={require('../../Pictures/capital_o.png')}></img>    
           </div>
           
           
       </Fragment>
    )
}

export default Gameboard
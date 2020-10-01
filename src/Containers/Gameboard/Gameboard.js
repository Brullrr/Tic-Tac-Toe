import React, { Fragment } from 'react';
import classes from './Gameboard.module.css'
import Tile from './Tile/Tile'


const Gameboard = (props) => {
    return (
       <Fragment>
           
           <div className={classes.GameboardOuter}>
           <img className={classes.ImageOne} src={require('../../Pictures/capital_x.png')} alt='imageOne'></img>
                <div className={classes.Gameboard}>
                        <Tile 
                            clicked={() => { props.clicked(0) }} 
                            claim={props.claimTile[0]} 
                            color={props.tileOne}
                            borderTop='none'
                            borderRight='1px solid black'
                            borderBottom='1px solid black'
                            borderLeft='none'
                            />
                        
                        <Tile 
                            clicked={() => { props.clicked(1) }} 
                            claim={props.claimTile[1]} 
                            color={props.tileTwo}
                            borderTop='none'
                            borderRight='1px solid black'
                            borderBottom='1px solid black'
                            borderLeft='1px solid black'/>

                        <Tile 
                            clicked={() => { props.clicked(2) }} 
                           claim={props.claimTile[2]} 
                            color={props.tileThree}
                            borderTop='none'
                            borderRight='none'
                            borderBottom='1px solid black'
                            borderLeft='1px solid black'
                            />
                        <Tile 
                            clicked={() => { props.clicked(3) }} 
                           claim={props.claimTile[3]} 
                            color={props.tileFour}
                            borderTop='1px solid black'
                            borderRight='1px solid black'
                            borderBottom='1px solid black'
                            borderLeft='none'/>
                        <Tile 
                            clicked={() => { props.clicked(4) }} 
                           claim={props.claimTile[4]} 
                            color={props.tileFive}
                            borderTop='1px solid black'
                            borderRight='1px solid black'
                            borderBottom='1px solid black'
                            borderLeft='1px solid black'/>
                        <Tile 
                            clicked={() => { props.clicked(5) }} 
                            claim={props.claimTile[5]} 
                            color={props.tileSix}
                            borderTop='1px solid black'
                            borderRight='none'
                            borderBottom='1px solid black'
                            borderLeft='1px solid black'/>
                        <Tile 
                            clicked={() => { props.clicked(6) }} 
                           claim={props.claimTile[6]} 
                            color={props.tileSeven}
                            borderTop='1px solid black'
                            borderRight='1px solid black'
                            borderBottom='none'
                            borderLeft='none'
                            />
                        <Tile 
                            clicked={() => { props.clicked(7) }} 
                           claim={props.claimTile[7]} 
                            color={props.tileEight}
                            borderTop='1px solid black'
                            borderRight='1px solid black'
                            borderBottom='none'
                            borderLeft='1px solid black'/>
                        <Tile 
                            clicked={() => { props.clicked(8) }} 
                           claim={props.claimTile[8]} 
                            color={props.tileNine}
                            borderTop='1px solid black'
                            borderRight='none'
                            borderBottom='none'
                            borderLeft='1px solid black'/>
                </div>
                <img className={classes.ImageTwo} src={require('../../Pictures/capital_o.png')} alt="imageTwo"></img>    
                
           </div>
           <button 
                    className={classes.Button}
                    onClick={props.buttonClicked}> Player Info </button>
           
           
       </Fragment>
    )
}

export default Gameboard
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
                            borderRight='16px solid #5D5C61'
                            borderBottom='8px solid #5D5C61'
                            borderLeft='none'
                            />
                        
                        <Tile 
                            clicked={() => { props.clicked(1) }} 
                            claim={props.claimTile[1]} 
                            color={props.tileTwo}
                            borderTop='none'
                            borderRight='16px solid #5D5C61'
                            borderBottom='8px solid #5D5C61'
                            borderLeft='16px solid #5D5C61'/>

                        <Tile 
                            clicked={() => { props.clicked(2) }} 
                           claim={props.claimTile[2]} 
                            color={props.tileThree}
                            borderTop='none'
                            borderRight='none'
                            borderBottom='8px solid #5D5C61'
                            borderLeft='16px solid #5D5C61'
                            />
                        <Tile 
                            clicked={() => { props.clicked(3) }} 
                           claim={props.claimTile[3]} 
                            color={props.tileFour}
                            borderTop='8px solid #5D5C61'
                            borderRight='16px solid #5D5C61'
                            borderBottom='8px solid #5D5C61'
                            borderLeft='none'/>
                        <Tile 
                            clicked={() => { props.clicked(4) }} 
                           claim={props.claimTile[4]} 
                            color={props.tileFive}
                            borderTop='8px solid #5D5C61'
                            borderRight='16px solid #5D5C61'
                            borderBottom='8px solid #5D5C61'
                            borderLeft='16px solid #5D5C61'/>
                        <Tile 
                            clicked={() => { props.clicked(5) }} 
                            claim={props.claimTile[5]} 
                            color={props.tileSix}
                            borderTop='8px solid #5D5C61'
                            borderRight='none'
                            borderBottom='8px solid #5D5C61'
                            borderLeft='16px solid #5D5C61'/>
                        <Tile 
                            clicked={() => { props.clicked(6) }} 
                           claim={props.claimTile[6]} 
                            color={props.tileSeven}
                            borderTop='8px solid #5D5C61'
                            borderRight='16px solid #5D5C61'
                            borderBottom='none'
                            borderLeft='none'
                            />
                        <Tile 
                            clicked={() => { props.clicked(7) }} 
                            claim={props.claimTile[7]} 
                            color={props.tileEight}
                            borderTop='8px solid #5D5C61'
                            borderRight='16px solid #5D5C61'
                            borderBottom='none'
                            borderLeft='16px solid #5D5C61'/>
                        <Tile 
                            clicked={() => { props.clicked(8) }} 
                           claim={props.claimTile[8]} 
                            color={props.tileNine}
                            borderTop='8px solid #5D5C61'
                            borderRight='none'
                            borderBottom='none'
                            borderLeft='16px solid #5D5C61'/>
                </div>
                <img className={classes.ImageTwo} src={require('../../Pictures/capital_o.png')} alt="imageTwo"></img>    
                
           </div>
           <button 
                    className={classes.Button}
                    onClick={props.buttonClicked}> Player<br/>&nbsp;&nbsp;Info &nbsp;</button>
           
           
       </Fragment>
    )
}

export default Gameboard
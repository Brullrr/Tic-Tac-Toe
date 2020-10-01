import React from 'react';
import classes from './Tile.module.css';

const Tile = (props) => {
    return (
        <div className={classes.Tile} onClick={props.clicked} style={{
            backgroundColor: props.color,
            borderTop: props.borderTop,
            borderRight: props.borderRight,
            borderBottom: props.borderBottom,
            borderLeft: props.borderLeft
        }}>{props.claim}</div>
    )
}

export default Tile
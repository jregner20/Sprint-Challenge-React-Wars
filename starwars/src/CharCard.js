import React, { useState } from 'react';

const CharCard = function(props) {
    console.log(props);
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.height}</div>
            <div>{props.mass}</div>
            <div>{props.hair_color}</div>
            <div>{props.skin_color}</div>
        </div>
    )
}

export default CharCard;
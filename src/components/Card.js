import React from 'react';

function Card(props) {
    return (
        <>
            <div className='card'>
                <img className='card-img' src={props.url} alt='gallery'></img>
            </div>
        </>
    )
}

export default Card;
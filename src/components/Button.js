import React from 'react';

function Button(props){
    return (
        <button className={props.isPrimary ? 'button-primary' : 'button-secondary'}>
            {props.name}
        </button>
    );
}

export default Button;
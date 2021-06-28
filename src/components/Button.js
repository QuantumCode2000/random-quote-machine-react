import React from 'react';

const Button = ({title,actionsClick,backgroundColorButton}) => {
    return (
        <React.Fragment>
            <button style={{backgroundColor:backgroundColorButton}}
                onClick={actionsClick}>
                {title}</button>
        </React.Fragment>
    );
};

export default Button;
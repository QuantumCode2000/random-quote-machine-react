import React from 'react';

const Text = ({texto,colorFont,propertyClassName}) => {
    return (
        <React.Fragment>
            <p className={propertyClassName} style={{color:colorFont}}>{texto}</p>
        </React.Fragment>
    );
};

export default Text;
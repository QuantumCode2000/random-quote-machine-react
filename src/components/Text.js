import React from 'react';

const Text = ({texto,colorFont,propertyClassName}) => {
    return (
        <p className={propertyClassName} style={{color:colorFont}}>{texto}</p>
    );
};

export default Text;
import React from 'react';

const Logo = ({logo}) => {
    return (
        <React.Fragment>
            <img src={logo} alt="" />
        </React.Fragment>
    );
};

export default Logo;
import React from 'react';
const Share = ({url,quote,author,title}) => {
    return (
        <React.Fragment>
            <a href={url+quote+" - "+author} target="_blank" rel="noreferrer" >{title}</a>
        </React.Fragment>
    );
};

export default Share;

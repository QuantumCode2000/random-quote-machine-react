import React from 'react';
let url = "https://twitter.com/intent/tweet?text=";
const Share = ({quote,author,title}) => {
    return (
        <React.Fragment>
            <a href={url+quote+" - "+author}>{title}</a>
        </React.Fragment>
    );
};

export default Share;

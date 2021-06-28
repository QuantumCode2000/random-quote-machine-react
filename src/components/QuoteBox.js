import logoTwitter from "../images/twiter.svg";
import Button from './Button';
import Logo from './Logo';
import Text from './Text';
import Share from './Share';
import data from "../quotes.json";
import colors from "../colors.json";
import { useState } from 'react';
let title = "New Quote";
let url = "https://twitter.com/intent/tweet?text=";

function QuoteBox() {
    let pos = Math.floor(Math.random() * 102);
    const [quote,setQuote] = useState(data.quotes[pos].quote);
    const [author,setAuthor] = useState(data.quotes[pos].author);
    const [color,setColor] = useState(colors.colors[Math.floor(Math.random() * 12)].color);

    const change = () => {
    let position = Math.floor(Math.random() * 102);
    setQuote(data.quotes[position].quote);
    setAuthor(data.quotes[position].author);
    setColor(colors.colors[Math.floor(Math.random() * 12)].color);
    };

    return (
    <header className="App-header" style={{backgroundColor:color}}>
        <div className="card">
            <div className="card-quote">
            <Text propertyClassName="quote" texto={quote} colorFont={color}/>
            </div>
            <strong><Text propertyClassName="author" texto={author} colorFont={color}/></strong>
            <div className="card-button">
            <Share url={url} quote={quote} author={author} title={<Logo logo={logoTwitter}/>}/>
            <Button title={title} actionsClick={change} backgroundColorButton={color}/>
            </div>
        </div>
    </header>
    );
}

export default QuoteBox;

import React from 'react';
/* eslint-disable no-unused-vars */
import { FaTwitter, FaQuoteLeft, FaTumblr } from 'react-icons/fa';
/* eslint-enable no-unused-vars */
class GetQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      url: '',
      tumblr: '',
    };
    this.quote = this.quote.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    this.quote();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  quote = () => {
    fetch('https://raw.githubusercontent.com/AtaGowani/daily-motivation/master/src/data/quotes.json')
      .then((response) => response.json())
      .then((data) => {
        if (this.mounted) {
          const item = data[Math.floor(Math.random() * data.length)];
          this.setState({
            quote: item.quote,
            author: item.author,
            url: `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22${encodeURIComponent(item.quote)}%22%20-%20${encodeURIComponent(item.author)}`,
            tumblr: `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(item.author)}&content=${encodeURIComponent(item.quote)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`,
          });
        }
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error(error));
  };

  render() {
    const 
    { quote, author, url, tumblr } = this.state;
    return (
      <div id="wrapper">
        <h2>Random Quote Machine</h2>
        <br />
        <div id="quote-box">
          <div className="quote-text">
            <i><FaQuoteLeft /></i>
            <span id="text">{quote}</span>
          </div>
          <div className="quote-author">
            -
            <span id="author">{author}</span>
          </div>
          <div className="buttons">
            <a className="button" id="tweet-quote" aria-label="Tweet this quote!" target="_blank" rel="noopener noreferrer" href={url}>
              <i><FaTwitter /></i>
            </a>
            <a className="button" id="tumblr-quote" aria-label="Post this quote on tumblr!" target="_blank" rel="noopener noreferrer" href={tumblr}>
              <i><FaTumblr /></i>
            </a>
            <button className="button" id="new-quote" type="button" onClick={this.quote}>New quote</button>
          </div>
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Saqibi4213/random-quote-machine">By Mehria</a>
      </div>
    );
  }
}

export default GetQuote;
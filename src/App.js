import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        'You only live once, but if you do it right, once is enough.',
        'Be the change that you wish to see in the world.',
        'If you tell the truth, you don\'t have to remember anything.',
        'Good friends, good books, and a sleepy conscience: this is the ideal life.',
        'The fool doth think he is wise, but the wise man knows himself to be a fool.'
      ],
      author: [
        'Mae West',
        'Mahatma Gandhi',
        'Mark Twain',
        'Mark Twain',
        'William Shakespeare'
      ],
      colors: [
        '#6927ff',
        '#a4f6a5',
        '#bf81ff',
        '#ffd581',
        '#f68787'

      ],
      randomIndex: 0
    };
    this.changeQuote = this.changeQuote.bind(this);
  }

  changeQuote() {
    this.setState({
      randomIndex: Math.floor(Math.random() * this.state.quotes.length)
    });
  }

  render() {
    let i = this.state.randomIndex;
    let color = this.state.colors[i];

    return (
      <section style={{backgroundColor: color }}>
        <div id="quote-box">
          <div id="text" style={{color: color }}>"{this.state.quotes[i]}</div>
          <div id="author" style={{color: color }}>-{this.state.author[i]}</div>
          <div className="btns">
            <a style={{color: color }} id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${this.state.quotes[i]}--${this.state.author[i]}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
            <button style={{backgroundColor: color}}id="new-quote" onClick={this.changeQuote}>New Quote</button>
          </div>
        </div>
      </section>
    );
  }
}

export default App;

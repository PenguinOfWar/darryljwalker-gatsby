import React from 'react';
import Typed from 'typed.js';

class Typist extends React.Component {
  componentDidMount() {
    const { strings, startDelay } = this.props;

    const options = {
      strings: strings,
      startDelay,
      typeSpeed: 25,
      showCursor: false
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <span
        ref={el => {
          this.el = el;
        }}
      />
    );
  }
}

export default Typist;

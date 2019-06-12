import React from 'react';
import Typed from 'typed.js';

import Layout from '../components/layout';
import SEO from '../components/seo';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elems: [
        {
          key: 'name',
          strings: ['Darryl Walker']
        },
        {
          key: 'job',
          strings: ['Full Stack Developer 🎩']
        }
      ]
    };
  }

  componentDidMount() {
    const { elems } = this.state;

    elems.map((elem, i) => {
      const { key, strings } = elem;
      const startDelay = (i + 1) * 250;

      console.log(startDelay);

      this.typed = new Typed(this[key], {
        strings,
        startDelay,
        typeSpeed: 25,
        showCursor: false
      });
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div id="scene" className="row stage align-items-center">
          <div className="col-lg-12 text-center layer" data-depth="0.20">
            <h1
              className="type-me"
              ref={el => {
                this.name = el;
              }}
            />
            <h2
              className="type-me"
              ref={el => {
                this.job = el;
              }}
            />
            <h3 className="type-me">
              <span className="sr-only">Appalling and Contrary Rascal 🐧</span>
            </h3>
            <ul className="list-unstyled">
              <li className="type-me">
                <span className="sr-only">HTML5, CSS3 🖌</span>
              </li>
              <li className="type-me">
                <span className="sr-only">JavaScript 🖥️</span>
              </li>
              <li className="type-me">
                <span className="sr-only">React ⚛️</span>
              </li>
              <li className="type-me">
                <span className="sr-only">Vue 📓</span>
              </li>
              <li className="type-me">
                <span className="sr-only">PHP 🔮</span>
              </li>
              <li className="type-me">
                <span className="sr-only">Ruby 💎</span>
              </li>
              <li className="type-me">
                <span className="sr-only">Progressive 📈</span>
              </li>
              <li className="type-me">
                <span className="sr-only">Responsive 📱</span>
              </li>
              <li className="type-me">
                <span className="sr-only">Awesome 👌</span>
              </li>
              <li className="social">
                <a href="https://github.com/PenguinOfWar">
                  <i className="fa fa-github" aria-hidden="true"></i>
                  <span className="sr-only">Github</span>
                </a>
                <a href="https://twitter.com/PenguinOfWar">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="mailto:darryl@ctmh.co.uk">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span className="sr-only">Mail</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;

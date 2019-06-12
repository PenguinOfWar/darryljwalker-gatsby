import React from 'react';
import Typed from 'typed.js';
import Parallax from 'parallax-js';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SocialIcon from '../components/social-icon';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elems: [
        {
          key: 'name',
          strings: ['Darryl Walker']
        }
      ]
    };
  }

  componentDidMount() {
    const scene = document.getElementById('scene');

    new Parallax(scene);

    const { elems } = this.state;

    elems.map((elem, i) => {
      const { key, strings } = elem;
      const startDelay = (i + 1) * 250;

      return new Typed(this[key], {
        strings,
        startDelay,
        typeSpeed: 25,
        showCursor: false
      });
    });
  }

  render() {
    const { visible } = this.state;

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
            <ul className="list-unstyled">
              <li className="social">
                <SocialIcon
                  className="social-icon"
                  href="https://github.com/PenguinOfWar"
                >
                  <i className="fa fa-github" aria-hidden="true"></i>
                  <span className="sr-only">Github</span>
                </SocialIcon>
                <SocialIcon
                  className="social-icon"
                  href="https://twitter.com/PenguinOfWar"
                >
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  <span className="sr-only">Twitter</span>
                </SocialIcon>
                <SocialIcon
                  className="social-icon"
                  href="mailto:darryl@ctmh.co.uk"
                >
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span className="sr-only">Mail</span>
                </SocialIcon>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;

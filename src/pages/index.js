import React from 'react';
import { Link } from 'gatsby';
import Parallax from 'parallax-js';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FadeLink from '../components/fade-link';
import Typist from '../components/typist';

class IndexPage extends React.Component {
  componentDidMount() {
    const scene = document.getElementById('scene');
    new Parallax(scene);
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div id="scene" className="row stage align-items-center">
          <div className="col-lg-12 text-center layer" data-depth="0.20">
            <h1 className="type-me">
              <Typist startDelay={250} strings={['Darryl Walker']} />
            </h1>
            <h2 className="type-me">
              <Link to="/mx5">
                <Typist startDelay={500} strings={['Looking for my MX5?']} />
              </Link>
            </h2>
            <ul className="list-unstyled">
              <li className="social">
                <FadeLink
                  className="social-icon"
                  href="https://github.com/PenguinOfWar"
                >
                  <i className="fa fa-github" aria-hidden="true"></i>
                  <span className="sr-only">Github</span>
                </FadeLink>
                <FadeLink
                  className="social-icon"
                  href="https://twitter.com/PenguinOfWar"
                >
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  <span className="sr-only">Twitter</span>
                </FadeLink>
                <FadeLink
                  className="social-icon"
                  href="mailto:darryl@ctmh.co.uk"
                >
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span className="sr-only">Mail</span>
                </FadeLink>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;

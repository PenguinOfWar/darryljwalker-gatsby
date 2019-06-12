import React from 'react';
import { Link } from 'gatsby';
import Parallax from 'parallax-js';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Typist from '../components/typist';
import Image from '../components/image';
import FadeLink from '../components/fade-link';

class MX5 extends React.Component {
  componentDidMount() {
    const scene = document.getElementById('scene');
    new Parallax(scene);
  }

  render() {
    return (
      <Layout>
        <SEO title="Mazda MX-5 2.0 ZSport 2dr" />
        <div id="scene" className="row stage align-items-center">
          <div className="col-lg-12 text-center layer" data-depth="0.20">
            <Image
              className="amy-img rounded-circle"
              alt="Mazda MX-5 2.0 ZSport 2dr"
            />
            <h1 className="type-me">
              <Typist
                startDelay={250}
                strings={['Mazda MX-5 2.0 ZSport 2dr']}
              />
            </h1>
            <h2>
              <Typist
                startDelay={750}
                strings={['Limited edition in beautiful radiant ebony']}
              />
            </h2>
            <ul className="list-unstyled">
              <li className="social mx5">
                <FadeLink
                  className="social-icon"
                  href="https://www.gumtree.com/p/cars-vans-motorbikes/mazda-mx-5-20-zsport-2dr-limited-edition-in-beautiful-radiant-ebony/1342956348?utm_campaign=socialbuttons&utm_campaign=socialbuttons&utm_content=app_ios&utm_medium=social&utm_source=whatsapp"
                >
                  <i className="fa fa-tree" aria-hidden="true"></i>
                  <span className="descriptor">View on Gumtree</span>
                </FadeLink>
                <FadeLink
                  className="social-icon"
                  href="mailto:darrylwalkersmx5@icloud.com"
                >
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span className="descriptor">Email Me</span>
                </FadeLink>
              </li>
            </ul>
            <Link to="/">Go back to the homepage</Link>
          </div>
        </div>
      </Layout>
    );
  }
}

export default MX5;

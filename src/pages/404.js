import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div id="scene" className="row stage align-items-center">
      <div className="col-lg-12 text-center layer" data-depth="0.20">
        <h1>404: Not found</h1>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;

import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <div className="antialiased min-h-screen">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
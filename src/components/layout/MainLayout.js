import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

/**
 * @author
 * @function MainLayout
 **/

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;

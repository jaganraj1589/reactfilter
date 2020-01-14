import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';

class Layout extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <>
        <Header />
          {this.props.children} 
        <Footer />
      </>
    )
  }
}

export default Layout;
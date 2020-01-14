import React, {Component} from 'react';

import "../component/cards.less";

class Header extends Component {
  constructor(props) {
    super(props)
  }
  render () {

    return (
      <header>
        <div className="contentArea">
          <a href="/" className="logo"></a>
        </div>
      </header>
    )
  }
}

export default Header;
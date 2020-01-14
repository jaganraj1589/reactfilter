import React, { Component } from "react";
import "./cards.less";

class Category extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { filter, loading, appfilter, error } = this.props;
    const colors = ["rgb(253, 217, 0)", "rgb(149, 201, 61)", "rgb(4, 178, 226)", "rgb(179, 30, 140)", "rgb(238, 137, 34)"]
    
    if (loading) {
      return <p>loading...</p>;
    }
    if (error) {
      return <p>Not loaded</p>;
    }
    return (
      <>
        {filter.length > 1 &&
          filter.map(data => (
            <li style={{backgroundColor: colors[data.id - 1]}} onClick={e => appfilter(data.id)}>{data.name}</li>
          ))}
      </>
    );
  }
}

export default Category;

import React, {Component} from 'react';
import Events from "../component/cards.js";
import Category from "../component/category.js";
import "../app/App.less";

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    const { categories, isLoading, events, initialEvents, error, appFilter } = this.props;
    
    return (
      <div className="homePage">
          <section className="filtersBlock">
            <div className="filterBox">
              <div className="contentArea">
                <div className="districtFilter">
                  <ul>
                    <Category
                      filter={categories}
                      loading={isLoading}
                      appfilter={appFilter}
                    />
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="eventsBlock">
            <div className="contentArea">
              <div className="eventsWrap">
                <Events events={events} loading={isLoading} error={error} />
              </div>
            </div>
          </section>
        </div>
    )
  }
}

export default Home;
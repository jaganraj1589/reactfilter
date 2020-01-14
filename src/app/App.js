import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.less";
import Events from "../component/cards.js";
import Category from "../component/category.js";
import Layout from "../layout";
import Home from "../home";
import Detail from "../detail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      isLoading: false,
      error: null,
      data: null,
      events: []
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: true
    });
    fetch(
      "https://abu-dhabi-moments-staging.eu-staging.kacdn.net/api/event_districts?lang=en_US"
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          categories: data.message,
          isLoading: false
        });
      })

      .catch(error => {
        this.setState({
          error: true,
          isLoading: false
        });
      });
    //
    fetch(
      "https://abu-dhabi-moments-staging.eu-staging.kacdn.net/api/events?lang=en_US"
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data.events);
        this.setState({
          initialEvents : data.events,
          events: data.events,
          isLoading: false
        });
      })
      .catch(error =>
        this.setState({
          error: true,
          isLoading: false
        })
      );
  }

  render() {
    const { categories, isLoading, events, initialEvents, error } = this.state;
    const appFilter = id => {
      console.log(id);
      let filterEvent = initialEvents.filter( function (data) {
        return data.district_id === id        
       });
       this.setState({
         events : filterEvent
       })
    };
    return (
      <div className="App ">
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/"><Home categories={categories} isLoading={isLoading} events={events} initialEvents={initialEvents} error={error} appFilter={appFilter}/></Route>
              <Route  path="/:slug"><Detail/></Route>
            </Switch>
          </Router>
        </Layout>
        {/*  */}
      </div>
    );
  }
}

export default App;

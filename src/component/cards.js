import React, { Component } from "react";
import "./cards.less";
import App from "../app/App";

class Events extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { events, loading, error, appfilter  } = this.props;
   const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
  //  const eventDate = events.data.start_date.map(e => split(''))
    const colors = ["bisque", "aliceblue", "violet", "aqua", "tomato"]
  const getdateMonth = (date) => {
    console.log(date.split("-"))
    let dateSplit = date.split("-")
    let mon = months[parseInt(dateSplit[1] - 1)]
    return mon;
  }

    if (loading) {
      return <p>Loading ... </p>;
    }
    if (error) {
      return <p>not loaded</p>;
    }

    
    return (
      <>      
        {events.length > 1 &&
          events.map(data => {
            const date = data.start_date.split("-")[2]
            
            const dateMonth = getdateMonth(data.start_date)
            return(
              <div className="eventList">
              <a href="/" className="eventLink"></a>
              <figure
                style={{ backgroundImage: `url(${data.assets[0].src})` }}
              ></figure>
              {/* {console.log(data.start_date)*/}
              {console.log(data)} }
              <div className="detail">
                <div className="startDate">
                  <h2>
                    {dateMonth}
                    <strong>{date}</strong>
                  </h2>
                  
                </div>
                <div className="info">
                  <h3>{data.name}</h3>
                  <span>{data.display_date}</span>
                  <span>
                    {data.start_time} - {data.end_time}
                  </span>
                  <span>{data.district}</span>
                </div>
              </div>
            </div>
            )
            
          })}
      </>
    );
  }
}

export default Events;

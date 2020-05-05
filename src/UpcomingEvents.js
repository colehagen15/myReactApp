import React from 'react';
import './App.css';

var event1 = {name: "Board Meeting", date: "May 7th"};
var event2 = {name: "Board Meeting", date: "June 4th"};
const events = [event1, event2];
const listItems = events.map((event) =>
    <div>
        <h5>{event.name} <p>{event.date}</p></h5>
    </div>
);

class UpcomingEvents extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            brand: "Ford",
            type: "Sedan",
            model: "Mustang Mach E"
        };

    }
    render() {
        return(
          <div>
              <h3>Upcoming Events</h3>
              <hr/>
                  { listItems }
          </div>
        );
    }
}
export default UpcomingEvents;
import React from 'react';
import logo from './townshipLogo.jpg';
import './App.css';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UpcomingEvents from "./UpcomingEvents";


function App() {
  return (
    <div className="App">

        <img src={ logo } alt="logo" />
        <Container>
          <Row>
            <Col>
              <Announcements className="Announcements" heading="Spring Clean up Day" message="Spring Clean up Day has been postponed due to Covid 19" />
            </Col>
            <Col>
              <UpcomingEvents />
            </Col>
          </Row>
        </Container>


    </div>
  );
}

class HelloWorld extends React.Component {
  render() {
    var helloWorldStyle = {
      padding: 10,
      backgroundColor: this.props.color
    }


    return (
      <div class="main" style={helloWorldStyle}>
        <h1 class="helloworld">Hello world</h1>
        <p>This is my first application</p>
      </div>
    )
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increase = this.increase.bind(this);
  }
  
  increase() {
    this.setState({
      count: this.state.count + 1
    });

    
  }
  render(){
    var squareStyle = {
      backgroundColor: "black",
      padding: 10,
    }
    return(
      <div style={squareStyle}>
        <h1>{this.state.count}</h1>
        <button onClick={this.increase}>Plus 1</button>
        <Ticker />
      </div>
    )

  }
}

class Ticker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0
    };

    this.tick = this.tick.bind(this);
  }
  
  tick() {
    this.setState({
      time: this.state.time + 1
    });
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }
  
  render() {
    return (
      <div>
        <h1> {this.state.time}</h1>
      </div>
    )
  }
}

class DisplayList extends React.Component {
  render() {
    return(
      <div>
        {this.props.list}
      </div>
    )
  }
}

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      listItems: [
        "hello",
        "shalom"
      ]
    };
    //this.addItem = this.addItem.bind(this);
  }

  // addItem() {
  //   this.setState({
  //     this.listItems.push("Hola")
  //   })
  // };

  render() {
    return(
      <div>
        <ul>
          <li><DisplayList list={this.state.listItems} /></li>
        </ul>
        <input name="newItem"></input>
        <button onClick={this.addItem}>Submit Item</button>
      </div>

    )
  }
}

class Announcements extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return(
      <div>
        <h3>Announcements:</h3>
        <hr/>
        <h4> { this.props.heading }</h4>
        <p>  { this.props.message }  </p>
      </div>

    )
  }
}

export default App;

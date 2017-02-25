import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  },
  Date: function Date(props){
    return <div>Imagine a {props.color} date here. </div>;
  }
}
function NumberDescriber(props) {
  let description;
  if (props.number % 2 === 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }
  return <div>{props.number} is an {description} number</div>;
}
// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item <strong>{index}</strong> in the list</div>}
    </Repeat>
  );
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <MyComponents.DatePicker color="blue" />
          <MyComponents.Date color="red" />
          <NumberDescriber number="5" />
          <ListOfTenThings />
        </p>
      </div>
    );
  }
}

export default App;

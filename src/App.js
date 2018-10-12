import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Cristal', age: 25, belt: 'pink', id: 3 }
    ]
  }

  AddNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjas
    })
  }

  // Lifecycle phase - mounted
  componentDidMount() {
    console.log('Component mounted');
  }

  // Lifecycle phase - updated
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas ninjas={ this.state.ninjas } deleteNinja={this.deleteNinja} />
        <AddNinja AddNinja={this.AddNinja} />
      </div>
    );
  }
}

export default App;

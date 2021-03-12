import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {message: ''};
  }

  componentDidMount() {
    const url = 'http://localhost:8080/time';
    axios.get(url).then(response => {
        console.log('response : ');
        console.log(response);
        this.setState({message: response.data});
    }).catch(error => {
        console.log('error : ');
        console.log(error);
    });
  }
  render() {
    return (
        <div className="App">
          <h1>Application is up and running...</h1>
          <h1>{this.state.message}</h1>
        </div>
    );
  }
}

export default App;
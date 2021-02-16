import React, { Component } from 'react';
import InputField from './components/Input.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sentence: "",
      words: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      sentence: event.target.value
    })
    console.log(this.state.sentence);
    // this.handleSubmit(this.state.sentence);
  }

  handleSubmit(event) {
    // event.preventDefault()
    // debugger;
    let splitWords = this.state.sentence.replace('\n', ' ').split(' ');

    this.setState({
      words: splitWords
    })
    console.log(this.state.words);




  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <InputField
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
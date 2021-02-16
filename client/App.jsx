import React, { Component } from 'react';
import InputField from './components/Input.jsx';
import Descriptions from './components/Descriptions.jsx';
import Common from './components/CommonWords.jsx';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sentence: "",
      words: [],
      descriptions: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleMultiGet = this.handleMultiGet.bind(this);
  }

  componentDidMount() {
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      sentence: event.target.value
    }, () => {
      console.log(this.state.sentence);
    })
    // this.handleSubmit(this.state.sentence);
  }

  handleClear(event) {
    event.preventDefault();
    this.setState({
      words: [],
      sentence: ''
    })
  }

  handleSubmit(event) {
    // event.preventDefault()
    // debugger;
    let splitWords = this.state.sentence.replace('\n',' ').replace('.',' ').split(' ')
    let filtered = [];
    for (let i = 0; i < splitWords.length; i++) {
      if (Common[splitWords[i]] === undefined) {
        filtered.push(splitWords[i]);
      }
    }
    this.setState({words: filtered}, () => {
      console.log('handleSubmit', this.state.words);
      this.handleMultiGet(this.state.words);
    })
  }

  handleMultiGet (array) {
    let currentWord = array[0];
    axios.get(`/api/${array[0]}`)
      .then((response) => {
        // debugger;
        let lookupList = array.slice(1);
        let newObj = this.state.descriptions;
        newObj[currentWord] = response.data;
        this.setState({descriptions: newObj}, () => {
          if (lookupList.length !== 0) {
            this.handleMultiGet(lookupList)
          }
        })
      })
      .catch((err) => {
        console.log('handleMultiGet', currentWord, err)
      })
      .finally(() => {
        console.log(this.state.descriptions);
      })
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <InputField
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleClear={this.handleClear}
          sentence={this.state.sentence}
        />
        <Descriptions
          descriptions={this.state.descriptions}
        />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import axios from 'axios';

import InputField from './components/Input.jsx';
import Descriptions from './components/Descriptions.jsx';

import Common from './components/CommonWords.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      sentence: '',
      descriptions: {}
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    // debugger;
    this.setState({
      descriptions: {}
    })
    let splitWords = this.state.sentence.replace('\n',' ').replace('?','').replace('!',' ').split(' ')
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
        console.log('description', this.state.descriptions);
      })
  }

  render() {
    return (
      <Container fluid>
        <Row>
        <h1>HRR Glossary!!!</h1>
        </Row>
        <Row>
          <Col>
            <InputField
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleClear={this.handleClear}
              sentence={this.state.sentence}
            />
          </Col>
          <Col>
            <Descriptions
              descriptions={this.state.descriptions}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
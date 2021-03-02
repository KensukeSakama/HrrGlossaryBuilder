import React from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const InputField = (props) => {



  return (
    <Form>
    <Form.Control
      as="textarea"
      rows={5}
      placeholder='your sentence here'
      value={props.sentence}
      onChange={event => props.handleChange(event)}
    >
    </Form.Control>
    <div className="w-100"></div>
    <Button
      block
      size="lg"
      variant="primary"
      type='submit'
      onClick={event => props.handleSubmit(event)}
    >
      submit
    </Button>
    <Button
      block
      size="lg"
      variant="secondary"
      type='submit'
      onClick={event => props.handleClear(event)}
    >
      clear
    </Button>

    </Form>
  )

}

export default InputField;
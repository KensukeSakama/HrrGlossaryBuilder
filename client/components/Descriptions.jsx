import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Fade from 'react-bootstrap/Fade';

const Descriptions = (props) => {
  let desc = [];
  // debugger;
  for (let id in props.descriptions) {
    console.log('props', props.descriptions[id])
    let temp = [];

    props.descriptions[id].forEach((description, i) => {
      console.log("i", i);
      temp.push(
        <Card key={i+1}>
          <Accordion.Toggle as={Card.Header} eventKey={i+1}>
            <a href={description.uri[0]}>{description.label}</a>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={i+1}>
            <Card.Body>
              {description.description}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      )
    })
    desc.push(
        <Accordion defaultActiveKey="1">{temp}</Accordion>)
  }

  return (
    <div>
      {desc}
    </div>
  );
}

export default Descriptions;
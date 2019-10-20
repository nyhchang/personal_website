import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>Test Title</CardTitle>
            <CardSubtitle>Test Subtitle</CardSubtitle>
            <CardText>Test Text</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}
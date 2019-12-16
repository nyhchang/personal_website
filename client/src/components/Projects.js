import React, { Component } from 'react';

import {
    Card,
    CardTitle,
    CardSubtitle,
    CardBody,
} from 'reactstrap';

import classnames from 'classnames';


export default class Projects extends Component {
  constructor(props){
    super(props);
    this.state = { activeCard: 1 }
  }

  changeCard = (number, e) => {
    e.preventDefault();
    let newCard = this.state.activeCard + number;
    if (newCard < 1){
      newCard = 3;
    }
    else if (newCard > 3){
      newCard = 1;
    }
    this.setState({activeCard: newCard});
  };

  render() {
    return (
        <section className='Projects'>
          <title>Projects</title>
          <Card className={`carouselItem ${classnames({hide: this.state.activeCard !== 1})}`}>
            <CardTitle>FGODex</CardTitle>
            <CardSubtitle>2018 - Present</CardSubtitle>
            <CardSubtitle>Technologies: <em>React.js, Node.js, Express, Redux, MongoDB</em></CardSubtitle>​
            <CardBody>
              ​Website that allows users to register
              and track the progress of their in game units, manage their resources, and determine the amount of
              resources necessary to evolve their units
            </CardBody>
          </Card>
          <Card className={`carouselItem ${classnames({hide: this.state.activeCard !== 2})}`}>
            <CardTitle>Stormwater Application</CardTitle>
            <CardSubtitle>2019</CardSubtitle>
            <CardSubtitle>Technologies: <em>Python, PyQT5, QGIS</em></CardSubtitle>​
            <CardBody>
              ​Windows application that allows a user to add
              shapefiles to a base map, then define water flow direction to be exported to a field application that
              will define the flow of water based on a user defined location
            </CardBody>
          </Card>
          <Card className={`carouselItem ${classnames({hide: this.state.activeCard !== 3})}`}>
            <CardTitle>Tester Booking</CardTitle>
            <CardSubtitle>2018</CardSubtitle>
            <CardSubtitle>Technologies: <em>React Native</em></CardSubtitle>​
            <CardBody>
              Front end of an Android application that allows a user to
              schedule their own appointments. The owner can define certain constraints for appointments, such as
              time blocks and tester resource limitations.
            </CardBody>
          </Card>
          <button onClick={(e) => this.changeCard(-1, e)}>&#60;</button>
          <button onClick={(e) => this.changeCard(1, e)}>&#62;</button>
        </section>
    )
  }
}
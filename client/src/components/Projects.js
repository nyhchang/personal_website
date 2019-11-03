import React, { Component } from 'react';
import {
    Card,
    CardTitle,
    CardSubtitle,
    CardBody
} from 'reactstrap';
export default class Projects extends Component {
  render() {
    return (
        <section>
          <title>Projects</title>
          <Card>
            <CardTitle>FGODex</CardTitle>
            <CardSubtitle>2018 - Present</CardSubtitle>
            <CardSubtitle>Technologies: <em>React.js, Node.js, Express, Redux, MongoDB</em></CardSubtitle>​
            <CardBody>
              ​Website that allows users to register
              and track the progress of their in game units, manage their resources, and determine the amount of
              resources necessary to evolve their units
            </CardBody>
          </Card>
          <Card>
            <CardTitle>Stormwater Application</CardTitle>
            <CardSubtitle>2019</CardSubtitle>
            <CardSubtitle>Technologies: <em>Python, PyQT5, QGIS</em></CardSubtitle>​
            <CardBody>
              ​Windows application that allows a user to add
              shapefiles to a base map, then define water flow direction to be exported to a field application that
              will define the flow of water based on a user defined location
            </CardBody>
          </Card>
          <Card>
            <CardTitle>Tester Booking</CardTitle>
            <CardSubtitle>2018</CardSubtitle>
            <CardSubtitle>Technologies: <em>React Native</em></CardSubtitle>​
            <CardBody>
              Front end of an Android application that allows a user to
              schedule their own appointments. The owner can define certain constraints for appointments, such as
              time blocks and tester resource limitations.
            </CardBody>
          </Card>
        </section>
    )
  }
}
import React, { Component } from 'react';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    CardTitle,
    CardSubtitle,
    CardBody
} from 'reactstrap';

import classnames from 'classnames';

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: '1' };
  }

  changeTab = (number) => {
    if (this.state.activeTab !== number)
      this.setState({ activeTab: number });
  };

  render() {
    return (
        <Card>
          <CardTitle>Work History</CardTitle>
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink className={classnames({active: this.state.activeTab === '1'})}
                         onClick={() => {this.changeTab('1')}} >
                  1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({active: this.state.activeTab === '2'})}
                         onClick={() => {this.changeTab('2')}} >
                  2
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({active: this.state.activeTab === '3'})}
                         onClick={() => {this.changeTab('3')}} >
                  3
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId='1'>
                <CardTitle><strong>Martindale-Nolo - Front End Development
                  Intern</strong> </CardTitle>
                <CardSubtitle><strong>September 2019 - Present</strong></CardSubtitle>
                <CardBody>
                  <ul>
                    <li>
                      Developed a windows application that validated an excel sheet
                      with specific conditions. Reports
                      errors and allows user to edit in app.
                    </li>
                    <li>
                      Developing a Trip Ticket Tracker, which allows a user to drag
                      and drop an excel into the application
                      to import and update data in a SQL server.
                    </li>
                    <li>
                      Technologies: HTML5, CSS, LESS, Javascript, PHP
                    </li>
                  </ul>
                </CardBody>
              </TabPane>
              <TabPane tabId='2'>
                <CardTitle><strong>ISE Labs - Software Contractor</strong></CardTitle>
                <CardSubtitle><strong>April 2019 - August 2019</strong></CardSubtitle>
                <CardBody>
                  <p>Developed a windows application that validated an excel sheet
                    with specific conditions. Reports
                    errors and allows user to edit in app. </p>
                  <p>Developing a Trip Ticket Tracker, which allows a user to drag
                    and drop an excel into the application
                    to import and update data in a SQL server. </p>
                  <p>Technologies: C#, .NET, WPF, SQL Server </p>
                </CardBody>
              </TabPane>
              <TabPane tabId='3'>
                <CardTitle><strong>ATUM Bio - Research Associate</strong></CardTitle>
                <CardSubtitle><strong>September 2015 - September 2018</strong></CardSubtitle>
                <CardBody>
                  <p>Analyzed protein expression levels in E.Coli and yeast.
                    Developed and conducted assays for measurement of specific
                    activity in expressed protein. </p>
                </CardBody>
              </TabPane>
            </TabContent>
          </div>
        </Card>
    )
  }
}



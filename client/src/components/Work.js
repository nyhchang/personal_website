import React, { Component } from 'react';

export default class Work extends Component {
  render() {
    return (
        <section>
          <title>Work History</title>
          <ul>
            <li>
              <p><strong>Martindale-Nolo - Front End Development Intern </strong></p>
              <p><strong>September 2019 - Present</strong></p>
              <p>Developed a windows application that validated an excel sheet with specific conditions. Reports
                errors and allows user to edit in app. </p>
              <p>Developing a Trip Ticket Tracker, which allows a user to drag and drop an excel into the application
                to import and update data in a SQL server. </p>
              <p>Technologies: HTML5, CSS, LESS, Javascript, PHP </p>
            </li>
            <li>
              <p><strong>ISE Labs - Software Contractor</strong></p>
              <p><strong>April 2019 - August 2019</strong></p>
              <p>Developed a windows application that validated an excel sheet with specific conditions. Reports
                errors and allows user to edit in app. </p>
              <p>Developing a Trip Ticket Tracker, which allows a user to drag and drop an excel into the application
                to import and update data in a SQL server. </p>
              <p>Technologies: C#, .NET, WPF, SQL Server </p>
            </li>
            <li>
              <p><strong>ATUM Bio - Research Associate</strong></p>
              <p><strong>September 2015 - September 2018</strong></p>
              <p>Analyzed protein expression levels in E.Coli and yeast.
                Developed and conducted assays for measurement of specific activity in expressed protein. </p>
            </li>
          </ul>
        </section>
    )
  }
}
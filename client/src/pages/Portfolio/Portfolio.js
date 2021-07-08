import React from 'react';
import { Table } from 'reactstrap';

const Portfolio = () => {
  return (
    <Table striped bordered dark>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Project Name</th>
          <th scope="col">Github Repo Link</th>
          <th scope="col">Deployed Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Outin</td>
          <td> <a href="https://github.com/DeviantSchemist/Project1">click here</a> </td>
          <td><a href="https://deviantschemist.github.io/Project1/">click here</a></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Weather Forecast</td>
          <td><a href="https://github.com/armin-ch/weatherforecast">click here</a></td>
          <td><a href="https://armin-ch.github.io/weatherforecast/">click here</a></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>day scheduler</td>
          <td><a href="https://github.com/armin-ch/day-scheduler">click here</a></td>
          <td><a href="https://armin-ch.github.io/day-scheduler/">click here</a></td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>code quiz</td>
          <td><a href="https://github.com/armin-ch/code-quiz">click here</a></td>
          <td><a href="https://armin-ch.github.io/code-quiz/">click here</a></td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Password Generator</td>
          <td><a href="https://github.com/armin-ch/PasswordGenerator">click here</a></td>
          <td><a href="https://armin-ch.github.io/PasswordGenerator/">click here</a></td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Study Blog</td>
          <td><a href="https://github.com/armin-ch/studyBlog">click here</a></td>
          <td><a href="https://studyblog.herokuapp.com/">click here</a></td>
        </tr>
      </tbody>
    </Table>
  )
}

export default Portfolio
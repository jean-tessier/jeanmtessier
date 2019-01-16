import React from 'react';
import { Row, Col } from 'antd';

import faceImage from './assets/me.jpg';
import './Home.scss';

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Row id="header">
          <Col span={24}>
            <img id="portrait" src={faceImage}></img>
            <h1>Jean M. Tessier</h1>
          </Col>
        </Row>
        <Row id="bio">
          <Col span={24}>
            <p>
              My name is Jean Tessier. I live in Greenville, SC (yeah, that Greenville).
            </p>
            <p>
              My professional passions are entirely for software development and growth as a Software Engineer; I
              thrive on the challenges of software development, from creating new features to bug-hunting. To
              counteract my daily hours of sitting in front of a computer, my hobbies include weightlifting and running
              to improve both my mental and physical health.
            </p>
            <p>
              In both my professional and personal life, I enjoy seeing the progress of improvement - in both those
              around me and in myself.
            </p>
            <p>
              I am currently a Software Engineer with in-tech, where I take on projects in a team environment, both
              from the ground up and from an established code base, working alongside my team and collaborating with
              the client when necessary to ensure we produce satisfactory code.
            </p>
            <p>
              I'm excited to continue to develop my skills as a Software Engineer alongside other talented programmers
              and team leads!
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home;

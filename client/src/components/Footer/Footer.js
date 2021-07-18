import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'

const Footer = () => {



  return (
    <footer>
      <Container>
        <Row>
          <Col xs="4">
          </Col>
          <Col xs="2 text-center">
            <a href="https://github.com/armin-ch">
              <figure>
                <img style={{ maxHeight: '50px' }} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="github" />
              </figure>
            </a>
          </Col>
          <Col xs="2 text-center">
            <a href="https://www.linkedin.com/in/armin-chaychian-8580a3212">
              <figure>
                <img style={{ maxHeight: '50px' }} src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Symbol.png" alt="Linkedin" />
              </figure>
            </a>
          </Col>
          <Col xs="4">
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
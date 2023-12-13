import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../assets/Css/Footer.css'
// import {Link,Navlink} from 'react-router-dom'
import imgLogo from '../../assets/Images/logo.png'
import { Container } from 'react-bootstrap'
function Footer() {
  return (
    <>
      <section className='footer_wrapper'>
        <Container >
          <Row>
            <Col>
              <div className='footer_content'>
                <img src={imgLogo} alt="logoimg" />
                <div className='footer_para'>
                  <p>G-2, Parivahan Marg, behind </p> <p> hotel rajmahal palace, Shivaji</p> <p>Nagar, C-Scheme, Jaipur,</p> <p> Rajasthan 302001</p>
                </div>
              </div>
            </Col>
            <Col>
            <nav>
              <li>
                
              </li>
            </nav>
            </Col>
          </Row>

        </Container>
      </section>

    </>

  )
}

export default Footer

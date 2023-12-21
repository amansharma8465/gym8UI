import React from 'react'
import '../../assets/Css/Contact.css'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import TeleIcon from '../../assets/Images/Contact_Images/Icons/tel.png'
import MapIcon from '../../assets/Images/Contact_Images/Icons/map.png'
import InstaIcon from '../../assets/Images/Contact_Images/Icons/Instagram.png'
import FbIcon from '../../assets/Images/Contact_Images/Icons/facebook.png'
import YtIcon from '../../assets/Images/Contact_Images/Icons/youtube.png'
import PinIcon from '../../assets/Images/Contact_Images/Icons/Pin.png'
import LinkIcon from '../../assets/Images/Contact_Images/Icons/LinkedIn.png'
import FollowGrid from '../../assets/Images/grid imges/img1.png'
import FollowGrid2 from '../../assets/Images/grid imges/img2.png'
import FollowGrid3 from '../../assets/Images/grid imges/img3.png'
import FollowGrid4 from '../../assets/Images/grid imges/img4.png'
import FollowGrid5 from '../../assets/Images/grid imges/img5.png'
import FollowGrid6 from '../../assets/Images/grid imges/img6.png'
import FollowGrid7 from '../../assets/Images/grid imges/img7.png'
import FollowGrid8 from '../../assets/Images/grid imges/img8.png'
import FollowGrid9 from '../../assets/Images/grid imges/img9.png'
import Vec from '../../assets/Images/Contact_Images/Icons/vec.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Contact() {
  return (
    <>
      <section className='contact_section'>
        <Container>
          <div className='cont'>
            <Row>
              <Col>
                <div className='cont_details'>
                  <h2>Get in Touch</h2>
                  <p>Welcome to 8 Step Studios, the biggest fitness center in Jaipur! At 8 Step Studios, we are dedicated to helping you achieve your health and fitness goals.</p>
                </div>
                <div className='cont_call'>
                  <img src={TeleIcon} alt="" />
                  <p>+91-8003040506</p>
                </div>

                <div className='cont_map'>
                  <img src={MapIcon} alt="" />
                  <p>G-2, Parivahan Marg, behind hotel rajmahal
                    palace, Shivaji Nagar, C-Scheme, Jaipur, Rajasthan 302001</p>
                </div>
              </Col>
              <Col>
                <div className='conta_form'>
                  <form action="#" method='POST'>
                    <input type="text" name='username' placeholder='Name' autoComplete='off' required />
                    <input type="tel" name='username' placeholder='Phone Number' autoComplete='off' required />
                    <textarea name="message" placeholder='Message...' cols="30" rows="6" autoComplete='off' required></textarea>
                  </form>
                </div>
              </Col>
            </Row>
            <div className='lofi'>
              <div className='cont_btn'>
                <button className='submit_button'> Send Message </button>

              </div>
            </div>

          </div>

        </Container>
      </section>

      <section className='socialMedia_section'>
        <Container>
          <div className='social_heading'>
            <h2>Follow our Journey on Social Media</h2>
            <Row>
              <Col>
                < div className='social_crd'>
                  <img src={InstaIcon} alt="" />
                  <p>Instagram</p>
                  <div className='social_para'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quod?</p></div>
                  <Link to="https://instagram.com/8stepstudios?igshid=OGQ5ZDc2ODk2ZA==" target='blank'> Follow us <img src= {Vec} alt="" /> </Link>
                </div>
              </Col>
              <Col>
                <div className='social_crd'>
                  <img src={FbIcon} alt="" />
                  <p>Facebook</p>
                  <div className='social_para'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quod?</p></div>
                  <Link to="https://www.facebook.com/8stepstudios" target='blank'>Follow us <img src= {Vec} alt="" /> </Link>
                </div>
              </Col>
              <Col>
                <div className='social_crd'>
                  <img src={YtIcon} alt="" />
                  <p>Youtube</p>
                  <div className='social_para'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quod?</p></div>
                  <Link to="https://youtube.com/@8StepStudios?si=8VvlgzbrI73zsiWq" target='blank'>Follow us <img src= {Vec} alt="" /> </Link>
                </div>
              </Col>
            </Row>

            <div className='another_socials'>
              <Row>
                <Col>
                  <div className='social_crd'>
                    <img src={PinIcon} alt="" />
                    <p>Pinterest</p>
                    <div className='social_para'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quod?</p></div>
                    <Link to='/'>Follow us <img src= {Vec} alt="" /> </Link>
                  </div>
                </Col>
                <Col>
                  <div className='social_crd'>
                    <img src={LinkIcon} alt="" />
                    <p>LinkedIn</p>
                    <div className='social_para'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quod?</p></div>
                    <Link to='/'> Follow us <img src= {Vec} alt="" /> </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

        </Container>
      </section>

      <section className='frequent_section'>
        <Container fluid>
          <Container>
          <div className='frequently_content'>
            <h2>FAQs</h2>

          <div className='parent_accordion'>
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How they can train online with same effectiveness?</Accordion.Header>
        <Accordion.Body>
        We designed all our courses in the effective way that gives you same result with better result as we assist you 24*7 with help of app timetable and whatsapp chat support all day long  
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How they can train online with same effectiveness?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>How they can train online with same effectiveness?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>How they can train online with same effectiveness?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>How they can train online with same effectiveness?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>  

    
    
    

          </div>

          </div>
          </Container>

        </Container>
      </section>

      <section className='fol_Us_section'>
        <Container>
          <div className='fol_Us_content'>
            <h2><span>Follow us</span> on instagram</h2>

          <div className='follow_grid'>
          <Row>
            <Col>
            <div className='grd_1'>
              <img src={FollowGrid} alt="" />
              <img src={FollowGrid2} alt="" />
              <img src={FollowGrid3} alt="" />
              <img src={FollowGrid4} alt="" />

            </div>
            </Col>
            <Col>
            <div className='grd_2'>
              <img src={FollowGrid5} alt="" />

            </div>
            
            </Col>
            <Col>
            <div className='grd_1'>
              <img src={FollowGrid6} alt="" />
              <img src= {FollowGrid7} alt="" />
              <img src={FollowGrid8} alt="" />
              <img src={FollowGrid9} alt="" />
            </div>
            </Col>
          </Row>
          </div>

          </div>

        </Container>
      </section>
    </>

  )
}

export default Contact

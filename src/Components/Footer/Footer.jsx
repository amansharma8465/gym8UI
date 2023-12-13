import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../assets/Css/Footer.css'
import {Link} from 'react-router-dom'
import imgLogo from '../../assets/Images/logo.png'
import Insta from '../../assets/Images/handles/insta.png'
import Facebook from '../../assets/Images/handles/facebook.png'
import Youtube from '../../assets/Images/handles/yt.png'
import Pinterest from '../../assets/Images/handles/pin.png'
import LinkedIn from '../../assets/Images/handles/likedin.png' 
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
                  <p>G-2, Parivahan Marg, behind  hotel rajmahal palace, Shivaji Nagar, C-Scheme, Jaipur, Rajasthan 302001</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className='parent_div'>
                <div className='service_section'>
                  <p>Services</p>
                  <div className='service_links'>
                     <ul>
                      <li><Link to ="/gym">Gym</Link></li>
                      <li><Link to ="/hiit">Hiit</Link></li>
                      <li><Link to = "/zumba"> Zumba</Link></li>
                      <li><Link to = "/yoga"> Yoga</Link></li>
                      <li><Link to = "/swimming"> Swimming </Link></li>
                      <li><Link to ="/nutrition"> Nutrition</Link></li>
                      <li><Link to= "/sauna">Sauna </Link></li> 
                     </ul>    
                  </div>
                
                </div>
                <div className='quick_links'>
                  <p>Quick Links</p>
                  <ul>
                    <li><Link to ="/"> Get a Coach  </Link></li>
                    <li><Link to ="/programs"> Programs</Link></li>
                    <li><Link to ="/workshops"> Workshops</Link></li>
                    <li><Link to ="/about"> About US</Link></li>
                    
                  </ul>
                </div>
                <div className='our_platforms'>
                  <p>Our Platforms</p>
                  <ul>
                    <li> <img src= {Insta} alt="instagram"/> <Link to = "https://instagram.com/8stepstudios?igshid=OGQ5ZDc2ODk2ZA==" target='_blank' rel ="noopner noreferrer"> Instagram </Link></li>
                    <li> <img src= {Facebook} alt="fb" /><Link to ="https://www.facebook.com/8stepstudios" target='_blank' rel='noopner noreferrer'> Facebook </Link></li>
                    <li> <img src= {Youtube} alt="yt" />  <Link to = "https://youtube.com/@8StepStudios?si=8VvlgzbrI73zsiWq" target='_blank' rel='noopner noreferrer'> Youtube </Link></li>
                    <li><img src= {Pinterest} alt="pin" /><Link to ="/"> Pinterest </Link></li>
                    <li><img src= {LinkedIn} alt="linkedin" /><Link to ="/"> LinkedIn </Link></li>
                  </ul>
                </div>
                </div>
            </Col>
          </Row>
          <div className='last_content'>
            <p>All copyright reserved @8step studios</p>
            <ul>
            <li><Link to= "/"> Learn More</Link></li>
            </ul>

          </div>



        </Container>
      </section>

    </>

  )
}

export default Footer

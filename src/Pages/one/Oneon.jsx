import React from 'react'
import '../../assets/Css/Oneon.css'
import AboutImage from '../../assets/Images/OneonOne_images/img2.png' 
import Arrow from '../../assets/Images/OneonOne_images/Arrow 1.png'
import BeneIcon from '../../assets/Images/OneonOne_images/Icons/1.png'
import BeneIcon1 from '../../assets/Images/OneonOne_images/Icons/2.png'
import BeneIcon2 from '../../assets/Images/OneonOne_images/Icons/3.png'
import BeneIcon3 from '../../assets/Images/OneonOne_images/Icons/4.png'
import BeneIcon4 from '../../assets/Images/OneonOne_images/Icons/5.png'
import BeneIcon5 from '../../assets/Images/OneonOne_images/Icons/6.png'
import RingIcon from '../../assets/Images/OneonOne_images/Icons/Ring_light.png'
import ElaboIcon from '../../assets/Images/OneonOne_images/Icons/elabo.png'
import FitHeroIcon from '../../assets/Images/OneonOne_images/Icons/fit_hero.png'
import DumbIcon from '../../assets/Images/OneonOne_images/Icons/dum.png'
import CalendarIcon from '../../assets/Images/OneonOne_images/Icons/Outline_Icon.png'
import PointIcon from '../../assets/Images/OneonOne_images/Icons/bullet.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Oneon() {
  return (
    <>
      <section className='oneOnone_section'>
        <Container fluid>
          <div className='one_On'>
            <div className='oneOn_Content'>
              <h2>One-On-One Session </h2>
              <h3>Your Fitness, Your Rules</h3>
              <p>Introducing fitness transformation with a tinge of fun? Join</p>
               <p> <span>‘One on One'</span> where we make diet, health, and habits the stars of your fitness</p> <p> journey!</p>
            </div>
          </div>
        </Container>
      </section>

      <section className='oneAbout_section'>
        <Container>
          <div className='oneAbout_content'>
            <h2>About One-on-One</h2>
            <div className='oneAbout_column'>
              <Row>
                <Col>
                <div className='oneAbout_image'>
                  <img src= {AboutImage} alt="Something here" />
                </div>
                </Col>
                <Col>
                <div className='abt_content'>
                  <p>Are you tired of one-size-fits-all fitness solutions that don't quite fit you? It's time to experience the Get a Coach—One-on One sessions, where your health is our top priority and your progress is our punchline. Our talented coaches design your health journey to match your personality, goals, and even your quirkiest habits. We'll turn bland meal plans into a culinary adventure, workouts into laugh-out-loud entertainment, and we guarantee that even jumping jacks will be bearable with a joke or two. With our personalised coaching, you'll enjoy the advantages of fitness as unique as you are.</p>
                </div>
                </Col>
              </Row>
              <div className='trans'>
                <p>So, why not try it out and see your fitness story transform?</p>
              </div>
            </div>

          </div>

        </Container>
      </section>

      <section className='benefits_section'>
        <Container>
          <div className='benefits_content'>
            <h2>Your One-on-One Benefits!</h2>
            <Row>
              <Col>
               <div className='benefit_block'>
                <img src= {BeneIcon} alt="" />
                <p>Personalized guidance for your goals.</p>
               </div>
              </Col>
              <Col>
              <div className='benefit_block'>
                <img src= {BeneIcon1} alt="" />
                <p>Maximum results, minimal wait.</p>
               </div>
              </Col>
              <Col>
              <div className='benefit_block'>
                <img src= {BeneIcon2} alt="" />
                <p>We make fitness all about 'You, You, You!</p>
               </div>
              </Col>
            </Row>
            <Row>
              <Col>
              <div className='benefit_block'>
                <img src= {BeneIcon3} alt="" />
                <p>Flexibility-not just in yoga, but in scheduling too!</p>
               </div>
              </Col>
              <Col>
              <div className='benefit_block'>
                <img src= {BeneIcon4} alt="" />
                <p>Workouts tailor-made for your 'Unique-ness.</p>
               </div>
              </Col>
              <Col>
              <div className='benefit_block'>
                <img src= {BeneIcon5} alt="" />
                <p>Nutrition plans as personalized as your hotstar recommendations.</p>
               </div>
              </Col>
            </Row>

          </div>

        </Container>
      </section>

      <section className='result_section'>
        <Container>
          <div className='result_container'>
          <h3>How will you get the best results?</h3>
          <div className='result_content'>
            
            <div className='steps_chart'>
              
              <img src= {RingIcon} alt="RingIcon" />
              <h2>Ring the trainer</h2>
            </div>
            <div className='arrow'><img src= {Arrow} alt="/" /></div>
          </div>

          <div className='result_content'>
  
            <div className='steps_chart'>
            <img src= {ElaboIcon} alt="Elaborate" />
              <h2>Elaboarate Counselling</h2>
            </div>
            <div className='arrow'><img src= {Arrow} alt="/" /></div>
          </div>

          <div className='result_content'>
  
            <div className='steps_chart'>
            <img src= {FitHeroIcon} alt="hero" />
              <h2>Fitness hero assigned</h2>
            </div>
            <div className='arrow'><img src= {Arrow} alt="/" /></div>
          </div>

          <div className='result_content'>
  
            <div className='steps_chart'>
            <img src= {DumbIcon} alt="dumbell" />
              <h2>Designed personalised workouts</h2>
            </div>
            <div className='arrow'><img src= {Arrow} alt="/" /></div>
          </div>


          <div className='result_content'>
  
            <div className='steps_chart'>
            <img src= {CalendarIcon} alt="" />
              <h2>Tracking Fitness Activity</h2>
            </div>
          
          </div>
          </div>
          
          <div className='result_head'>
            <h3>Ready to take your fitness to the next level with our one-on-one sessions?</h3>
          </div>
          <div className='do_btn'><button className='result_btn'>Enroll Now!</button></div>
        </Container>
      </section>

      <section className='result_faq'>
      <Container>
          <div className='faqs'>
            <h4> FAQs</h4>
            <div className='faqs_one'>
              <div className='faqs_heading'>
                <div className='faqs_image'>
                  <img src={PointIcon} alt="" />
                </div>
                <div className='faqs_question'>
                  <p>How they can train online with same effectiveness?</p>
                </div>
              </div>
              <div className='faqs_answer'>
                <p>We designed all our courses in the effective way that gives you same result with better result as we assist you 24*7 with help of app timetable and whatsapp chat support all day long  </p>
              </div>
            </div>
            <div className='faqs_two'>
              <div className='faqs_heading'>
                <div className='faqs_image'>
                  <img src={PointIcon} alt="" />
                </div>
                <div className='faqs_question'>
                  <p>How they can train online with same effectiveness?</p>
                </div>
              </div>
              <div className='faqs_answer'>
                <p>We designed all our courses in the effective way that gives you same result with better result as we assist you 24*7 with help of app timetable and whatsapp chat support all day long  </p>
              </div>
            </div>

          </div>

        </Container>
          
  


      </section>
    </>
  )
}

export default Oneon

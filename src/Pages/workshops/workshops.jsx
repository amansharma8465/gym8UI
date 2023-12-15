import React from 'react'
import '../../assets/Css/Workshops.css'
import Image from '../../assets/Images/workshop_images/img2.png'
import Image1 from '../../assets/Images/workshop_images/img3.png'
import EnquiryImg from '../../assets/Images/workshop_images/img4.png'
import Dot from '../../assets/Images/workshop_images/dot.png'
import CalendarImg from '../../assets/Images/workshop_images/img5.png'
import Image2 from '../../assets/Images/workshop_images/grid/grid1.png'
import Image3 from '../../assets/Images/workshop_images/grid/grid2.png'
import Image4 from '../../assets/Images/workshop_images/grid/grid3.png'
import Image5 from '../../assets/Images/workshop_images/grid/grid4.png'
import Images from '../../assets/Images/workshop_images/grid/grid5.png'
import Image6 from '../../assets/Images/workshop_images/grid/grid6.png'
import Image7 from '../../assets/Images/workshop_images/grid/grid7.png'
import Image8 from '../../assets/Images/workshop_images/grid/grid8.png'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Workshops() {

  return (
    <>
      <section className='workshop_section'>
        <div className='background'>
          <div className='bg_content'>
            <h2>Beyond the gym grind </h2>
            <h3>Discover our world of workshops and events</h3>
            <p>Dive into a world where fitness meets festivity! From the exhilarating Health and Rally to the scenic Yoga on Hills, we've got your holistic fitness covered. These workshops aren't just events; they're adventures lasting 2-3 days to keep pace with your energetic spirit. Whether you're trekking into new fitness dimensions or grooving at fitness parties, we're here to keep your attention high and your enthusiasm flowing. Embrace the excitement—your fitness journey just became a celebration!</p>
            <button className='bg_btn'> Browse Workshops</button>
          </div>
        </div>
      </section>

      <section className='ourWorkshop_section'>
        <Container>
          <div className='our_workshops'>
            <h2>Our Workshops</h2>
            <Row>
              <Col>
                <div className='cards'>
                  <div><img src={Image} alt="" /></div>
                  <h3>Yoga Breathing</h3>
                  <p>1st Jan 2022</p>
                  <p>Participants: <span>500</span>  </p>
                  <p> Best Student Name: <span>Vaishali</span> </p>


                </div>

              </Col>
              <Col>
                <div className='cards'>
                  <div><img src={Image1} alt="" /></div>
                  <h3>Yoga Breathing</h3>
                  <p>1st Jan 2022</p>
                  <p>Participants: <span>500</span>  </p>
                  <p> Best Student Name: <span>Vaishali</span> </p>

                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className='cards'>
                  <div><img src={Image} alt="" /></div>
                  <h3>Yoga Breathing</h3>
                  <p>1st Jan 2022</p>
                  <p>Participants: <span>500</span>  </p>
                  <p> Best Student Name: <span>Vaishali</span> </p>

                </div>
              </Col>
              <Col>
                <div className='cards'>
                  <div><img src={Image1} alt="" /></div>
                  <h3>Yoga Breathing</h3>
                  <p>1st Jan 2022</p>
                  <p>Participants: <span>500</span>  </p>
                  <p> Best Student Name: <span>Vaishali</span> </p>

                </div>

              </Col>
            </Row>


          </div>
        </Container>
      </section>

      <section className='ourEvents_section'>
        <Container>
          <div className='ourEvents_content'>
            <h2> Our Events </h2>
            <Row>
              <Col>

                <div className='grid_image'>
                  <img src={Image2} alt="" />
                </div>
                <div className='grid_container'>
                  <img src={Image3} alt="" /><img src={Image4} alt="" /><img src={Image5} alt="" />
                </div>

                <div className='grid_content'>
                  <p>Wedding Zumba</p>
                  <div className='grid_para'><p>1st Jan 2022</p></div>
                </div>

              </Col>
              {/**** Column 2*** */}
              <Col>
                <div className='grid_image'>
                  <img src={Images} alt="" />
                </div>
                <div className='grid_container'>
                  <img src={Image6} alt="" /><img src={Image7} alt="" /><img src={Image8} alt="" />
                </div>

                <div className='grid_content'>
                  <p>Wedding Zumba</p>
                  <div className='grid_para'><p>1st Jan 2022</p></div>
                </div>
              </Col>
              <Col>
                <div className='grid_image'>
                  <img src={Image2} alt="" />
                </div>
                <div className='grid_container'>
                  <img src={Image3} alt="" /><img src={Image4} alt="" /><img src={Image5} alt="" />
                </div>

                <div className='grid_content'>
                  <p>Wedding Zumba</p>
                  <div className='grid_para'><p>1st Jan 2022</p></div>

                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className='grid_image'>
                  <img src={Image2} alt="" />
                </div>
                <div className='grid_container'>
                  <img src={Image3} alt="" /><img src={Image4} alt="" /><img src={Image5} alt="" />
                </div>

                <div className='grid_content'>
                  <p>Wedding Zumba</p>
                  <div className='grid_para'><p>1st Jan 2022</p></div>

                </div>
              </Col>
              {/********Column 5*******/}
              <Col>
                <div className='grid_image'>
                  <img src={Images} alt="" />
                </div>
                <div className='grid_container'>
                  <img src={Image6} alt="" /><img src={Image7} alt="" /><img src={Image8} alt="" />
                </div>

                <div className='grid_content'>
                  <p>Wedding Zumba</p>
                  <div className='grid_para'><p>1st Jan 2022</p></div>

                </div>
              </Col>
              <Col>
                <div className='grid_image'>
                  <img src={Image2} alt="" />
                </div>
                <div className='grid_container'>
                  <img src={Image3} alt="" /><img src={Image4} alt="" /><img src={Image5} alt="" />
                </div>

                <div className='grid_content'>
                  <p>Wedding Zumba</p>
                  <div className='grid_para'><p>1st Jan 2022</p></div>

                </div>
              </Col>
            </Row>

          </div>

        </Container>

      </section>

      <section className='event_section'>  
        <Container>
          <div className='enquiry_head'>
            <h2>Event <span>Enquiry</span></h2>
            <Row>
              <Col>
                <div className='contact_container'>
                  <p>Contact us:</p>
                  <div className='contact_form'>
                    <form action="#" method='POST'>
                      <input type="text" name='username' placeholder='Name' autoComplete='off' required />
                      <input type="tel" name='username' placeholder='Whatsapp Number' autoComplete='off' required />
                      <input type="text" name='username' placeholder='Event Name' autoComplete='off' required />
                      <button className='contact_button'>Send</button>
                    </form>

                  </div>
                  
                  </div>
              </Col>
              <Col>
                <div className='enquiry_image'>
                  <img src={EnquiryImg} alt="Something Here" />
                </div>
              </Col>
            </Row>
            <div className='enquiry_content'>
              <p> <span>From sunrise yoga to sunset runs, </span>
                our calendar ensures every moment is a step towards a healthier you!</p>

            </div>

          </div>

        </Container>

      </section>

      <section className='eveCalendar_section'>
        <Container>
          <div className='calendar'>
            <h2> Event Calendar </h2>
            <img src={CalendarImg} alt="" />
            <p>Don't just exercise, celebrate! Click to join our exclusive workshops and events to make fitness a joyful experience.</p>
            <button className='eve_btn'>Join Now!</button>
          </div>
        </Container>

      </section>

      <section className='faq_section'>
        <Container>
          <div className='faq'>
            <h4> FAQs</h4>
            <div className='accor_one'>
              <div className='accor_heading'>
                <div className='accor_img'>
                  <img src={Dot} alt="" />
                </div>
                <div className='accor_que'>
                  <p>Often, following a fitness regime can be difficult, what can I do about it?</p>
                </div>
              </div>
              <div className='accor_ans'>
                <p>Don’t worry, we understand and will take care of it. At 8 Step Studios, we offer a diverse range of classes to break your monotony and have a well-appointed calling team that ensures your consistency in classes. Additionally, we track your fitness milestones, as that extra boost pushes you to be more consistent.</p>
              </div>
            </div>
            <div className='accor_two'>
              <div className='accor_heading'>
                <div className='accor_img'>
                  <img src={Dot} alt="" />
                </div>
                <div className='accor_que'>
                  <p>Do online classes deliver the same effectiveness as offline classes?</p>
                </div>
              </div>
              <div className='accor_ans'>
                <p>Yes, we make it a point to make our fitness experience slay in both modes. For that, we have meticulously designed an online setup with limited participants in a batch encompassing personalised attention and the ritual of appreciation. A little pat on the back gives you the motivation to keep going on your transformation journey.</p>
              </div>
            </div>

          </div>

        </Container>
      </section>
    </>
  )
}

export default Workshops

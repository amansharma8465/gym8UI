import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon1 from '../../assets/Images/Icons/dumbbell.png'
import Icon2 from '../../assets/Images/Icons/people.png'
import Icon3 from '../../assets/Images/Icons/coach.png'
import Icon4 from '../../assets/Images/Icons/smile.png'
import cardImage1 from '../../assets/Images/Icons/zumba.png'
import cardImage2 from '../../assets/Images/Icons/hit.png'
import cardImage3 from '../../assets/Images/Icons/nutri.png'
import cardImage4 from '../../assets/Images/Icons/onlineclass.png'
import cardImage5 from '../../assets/Images/Icons/gym.png'
import cardImage6 from '../../assets/Images/Icons/pool.png'
import cardImage7 from '../../assets/Images/yoga.png'
import cardImage8 from '../../assets/Images/zumba.png'
import cardImage9 from '../../assets/Images/gym.png'
import cardImage10 from '../../assets/Images/strength.png'
import cardImage11 from '../../assets/Images/hiit.png'
import cardImage12 from '../../assets/Images/pilates.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from '../../assets/Images/img2.png'
import Image1 from '../../assets/Images/img3.png'
import Image2 from '../../assets/Images/img5.png'
import Image4 from '../../assets/Images/img6.png'
import Image5 from '../../assets/Images/img8.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/Css/Home.css';
import '../../../src/index.css';

function Home() {
  const backgroundImageUrl = `url(${require("../../assets/Images/img1.png")})`;

  const containerStyle = {
    backgroundImage: backgroundImageUrl,
  };


  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 2,
    speed: 500
  };

  return (
    <>
      <section className='heroSection' style={containerStyle}>
        <Container>
          <div className="hero_content">
            <div className="heading">
              <h4 className='customHeading'>Jump start your holistic</h4>
              <h1 className='Heading' >Fitness-tic <br /> Experience</h1> <br />
              <p style={{ fontFamily: 'poppins' }}>Where fitness is not a Goal , It's a Lifestyle</p>
              <p style={{ fontFamily: 'Nutino-sans' }}>At 8 Step Studios, we'll make you sweat, laugh, and wonder <br /> why you ever skipped leg day-all in the name of holistic  <br />fitness! We're not just shaping bodies; we're sculpting holistic <br /> health one laugh at a time.</p>
              <h4 className='mg'>Are you ready for the fitness party?</h4> <br />

              <button className='btn' onClick={handleButtonClick}> Take your first step! </button>
            </div>
          </div>
        </Container>

      </section>

      <section className='ourVision_wrapper'>
        <Container >
          <div className='headingContent'>
            <h4>“craft your empire of health with <span className='h4_span'>exercise as the king and nutrition as the queen”</span> </h4>
          </div>
          <Row>
            <Col>
              <div className="our_visionContent">
                <p>Ready to dive into the heart of our mission?</p>
                <p> Let's start with the grand vision that fuels our fitness adventure.</p>
                <h1 className='custom' > Our <span>Vision</span></h1>
                <p>To create a world where fitness isn't a chore, but a happy show you never want to miss. We dream of a future where holistic wellness means having a six-pack of laughter, a strong  core of joy, and a heart that beats with good health."</p>
                <p>Feeling the excitement? Let's make our vision your fitness success story!</p>
                <button className='btn'> Yes! I'm Ready</button>
              </div>
            </Col>
            <Col>
              <div className='img'><img src={Image} alt="Something here!" /></div>
            </Col>
          </Row>
          <div className='heading2'>
            <p>“We're Your Gym-azing Happy Place." Curious to know more, <br />  <span> Read On !</span></p>
          </div>
          <div className='welcome_wrapper'>
            <div className='heading3'>
              <h3> Welcome to <span>8step Studios</span> </h3>
              <p>where we've turned the old saying on its head - 'The Only Place Where Pain Leads to Gain.' Our fitness studio boasts a vibrant range of services and classes, encompassing everything from yoga and Pilates to the irresistible beats of Zumba. Join us, and let's laugh our way to better health!"</p>
              <button className='bt'> About Us </button>
              <h6><span>"Looking for the reasons why we're the right fit for you?" Discover Now! </span></h6>
            </div>
          </div>
        </Container>
      </section>

      <section className='whyChooseus_wrapper'>
        <Container>
          <Row>
            <Col>
              <div className='image_content'>
                <img className="" src={Image1} alt="Someting here!" />
              </div>
            </Col>
            <Col>
              <div className='head2'>
                <h2>WHY CHOOSE<span> US? </span></h2>
              </div>
              <Row>
                <Col>
                  <div className='facilities_content'>
                    <div className='icon Icon_1'><img src={Icon1} alt="icon1" /></div>
                    <h6>Facilities</h6>
                    <p>Our state-of-the-art facilities aren't just for workouts;because we believe fitness should be fun and fancy.</p>
                  </div>
                </Col>
                <Col>
                  <div className='facilities_content'>
                    <div className='icon Icon_2'><img src={Icon2} alt="icon2" /></div>
                    <h6>Diverse Membership Plans</h6>
                    <p>With monthly, yearly, and customized options, we've got plans as diverse as our yoga poses!</p>
                  </div>

                </Col>
              </Row>
              <Row>
                <Col>
                  <div className='facilities_content'>
                    <div className=' icon Icon_3'><img src={Icon3} alt="icon3" /></div>
                    <h6>Train-credible Team</h6>
                    <p>Our certified trainers are like personal cheerleaders, here to turn your potential into vitality.</p>
                  </div>

                </Col>
                <Col>
                  <div className='facilities_content'>
                    <div className=' icon Icon_4'><img src={Icon4} alt="icon4" /></div>
                    <h6>Achieve-Humor-ny</h6>
                    <p>It's not just about reaching your full potential; it's about exercising your way to a fit, fantastic future!</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className='heading4'>
            <h>So "Don't Just Netflix and Chill - Join Us and Experience the Ultimate Fitness Thrill!"</h>
            <button className='thrill_button'>I'm ready for the thrill</button>
          </div>
          <div className='head'><h5>"Our services are the perfect recipe for turning your fitness frowns into flexing smiles."</h5></div>
        </Container>
      </section>
      <section>
        <Container>
        </Container>
      </section>

      <section className='serviceSection'>
        <Container >
          <div className='bg_image'>
            <div className='bgImage_content'>
              <h1>Our <span> Services </span></h1>
              <p>At 8 Step Studios, we are dedicated to helping you achieve your health and fitness goals. We offer a</p>
              <p>wide range of fitness services and classes, including yoga, Pilates, Zumba, and much more.</p>
            </div>
            <Row>
              <Col>
                <div className='demo'>
                  <img src={Image2} alt="Something here" />
                  <div className='demo_h4'><h4>Zumba</h4></div>
                </div>


              </Col>
              <Col>
                <div className='demo'>
                  <img src={Image4} alt="Something here" />
                  <div className='demo_h4'><h4>Gym</h4></div>
                </div>


              </Col>
              <Col>
                <div className='demo'>
                  <img src={Image4} alt="Something here" />
                  <div className='demo_h4'><h4>Swimming</h4></div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className='service_head'>
            <p>Unlock the secret level! Explore our extra fitness</p> <p>services that are as exciting as an extra set of squats."</p>
            <div className='service_content'>
              <h3><span>A-Z fitness</span> Assistance</h3>
              <p>In addition to our fitness services, we also offer nutrition and wellness resources to help you </p> <p>live a healthy, balanced lifestyle. We host events and workshops throughout the year,</p> <p>giving you the opportunity to learn from experts and connect with like-minded individuals.</p>
            </div>
          </div>
          <Row>
            <Col>
              <Card className='custom-card'>
                <Card.Body>
                  <Card.Img className='custom-image' variant="top" src={cardImage1} alt="Card Image 1" />
                  <Card.Title>Zumba</Card.Title>
                  <Card.Text>
                    <p> "Shake, shimmy, and dance your way to fitness with our Zumba classes. It's the only workout where spilling your water bottle is part of the choreography!"</p>
                  </Card.Text>
                  <button className='custom-button'>LEARN MORE</button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='custom-card'>
                <Card.Body>
                  <Card.Img className='custom-image' variant="top" src={cardImage2} alt="Card Image 2" />
                  <Card.Title>HIIT</Card.Title>
                  <Card.Text>
                    "If your heart's racing faster than a squirrel on espresso, you're in our HIIT zone. Get ready to sweat and experience a  faster-paced workout drill!"
                  </Card.Text>
                  <button className='custom-button'>LEARN MORE</button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='custom-card'>
                <Card.Body>
                  <Card.Img className='custom-image' variant="top" src={cardImage3} alt="Card Image 3" />
                  <Card.Title>Nurtition</Card.Title>
                  <Card.Text>
                    "They say you are what you eat, but we're turning that into 'You are what you laugh!' Dive into our nutrition section and learn how to fuel your fitness levels.
                  </Card.Text>
                  <button className='custom-button'>LEARN MORE</button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className='custom-card'>
                <Card.Body>
                  <Card.Img className='custom-image' variant="top" src={cardImage4} alt="Card Image 4" />
                  <Card.Title>Online Classes</Card.Title>
                  <Card.Text>
                    "No need to break a sweat finding the nearest gym. Our online classes are like Netflix for fitness – binge-worthy and calorie-burning!"
                  </Card.Text>
                  <button className='custom-button'>LEARN MORE</button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='custom-card'>
                <Card.Body>
                  <Card.Img className='custom-image' variant="top" src={cardImage5} alt="Card Image 5" />
                  <Card.Title>Gym</Card.Title>
                  <Card.Text>
                    "Our gym is where we turn “working out” into “laughing out “! Join us, and you’ll find your dumbbells are the only thing heavy here.
                  </Card.Text>
                  <button className='custom-button'>LEARN MORE</button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='custom-card'>
                <Card.Body>
                  <Card.Img className='custom-image' variant="top" src={cardImage6} alt="Card Image 6" />
                  <Card.Title>Pool</Card.Title>
                  <Card.Text>
                    Make a splash in our pool - it's the only place where you can combine backstrokes with back stories. Dive into fitness and fun with our aquatic adventures!"
                  </Card.Text>
                  <button className='custom-button'>LEARN MORE</button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='oneOn_section'>
        <Container>
          <div className='oneOn_content'>
            <h5>One-on-One</h5>
            <h4>By 8step Studios</h4>
          </div>
          <div className='One_para'>
            <p>Where the spotlight's yours and the gym's your private playground, It's a personal journey to fitness excellence with
              our expert trainers by your side. Here, we provide a whole ecosystem of holistic fitness, with every aspect taken care of.</p>
            <Row>
              <Col>
                <Card className='one-card'>
                  <Card.Body>
                    <Card.Img className='one-image' variant="top" src={cardImage7} alt="Card Image 7" />
                    <Card.Title>Yoga</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className='one-card'>
                  <Card.Body>
                    <Card.Img className='one-image' variant="top" src={cardImage8} alt="Card Image 8" />
                    <Card.Title>Zumba</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className='one-card'>
                  <Card.Body>
                    <Card.Img className='one-image' variant="top" src={cardImage9} alt="Card Image 9" />
                    <Card.Title>Gym</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className='one-card'>
                  <Card.Body>
                    <Card.Img className='one-image' variant="top" src={cardImage10} alt="Card Image 10" />
                    <Card.Title>Strength Training</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className='one-card'>
                  <Card.Body>
                    <Card.Img className='one-image' variant="top" src={cardImage11} alt="Card Image 11" />
                    <Card.Title>HIIT</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className='one-card'>
                  <Card.Body>
                    <Card.Img className='one-image' variant="top" src={cardImage12} alt="Card Image 12" />
                    <Card.Title>Pilates</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className='one_content'>
              <h5>Find the perfect <span> Coach!</span></h5>
              <p>Our team of 8 step fitness studio trainers is dedicated to helping you achieve your fitness goals in a safe, effective, and fun manner. Our trainers have a wealth of knowledge and experience in various areas of fitness, including strength training, cardio, flexibility, and functional movement.</p>
              <button className='one_button' onClick={handleButtonClick}>Get Your Coach Now! </button>
            </div>
          </div>
        </Container>
      </section>

      <section className='slider_section'>
        <Container>
          <div className='fitness_content'>
            <p>Just like a GPS for fitness, our trainers will help you navigate
              the twists and turns of your wellness journey."</p>
            <h4>Meet Your <span>Fitness Heroses</span></h4>
          </div>
          <div>
            <Slider {...settings}>
              <div className='card_body'>
                <img className='card_image' src={Image5} alt="card-image" />
                <div className='card_para'>
                  <h6>Vishal Pareek</h6>
                  <h5>Hiit Expert</h5>
                  <p>Our team of 8 step fitness studio trainers is dedicated to helping you achieve your fitness goals in a safe, effective, and fun manner. Our trainers have a wealth of knowledge and experience in various areas of fitness, including strength training, cardio, flexibility, and functional movement.</p>
                </div>
              </div>
              <div className='card_body'>
                <img className='card_image' src={Image5} alt="card-image" />
                <div className='card_para'>
                  <h6>Vishal Pareek</h6>
                  <h5>Hiit Expert</h5>
                  <p>Our team of 8 step fitness studio trainers is dedicated to helping you achieve your fitness goals in a safe, effective, and fun manner. Our trainers have a wealth of knowledge and experience in various areas of fitness, including strength training, cardio, flexibility, and functional movement.</p>
                </div>
              </div>
              <div className='card_body'>
                <img className='card_image' src={Image5} alt="card-image" />
               <div className='card_para'>
                  <h6>Vishal Pareek</h6>
                  <h5>Hiit Expert</h5>
                  <p>Our team of 8 step fitness studio trainers is dedicated to helping you achieve your fitness goals in a safe, effective, and fun manner. Our trainers have a wealth of knowledge and experience in various areas of fitness, including strength training, cardio, flexibility, and functional movement.</p>
                </div>
              </div>
              <div className='card_body'>
                <img className='card_image' src={Image5} alt="card-image" />
                <div className='card_para'>
                  <h6>Vishal Pareek</h6>
                  <h5>Hiit Expert</h5>
                  <p>Our team of 8 step fitness studio trainers is dedicated to helping you achieve your fitness goals in a safe, effective, and fun manner. Our trainers have a wealth of knowledge and experience in various areas of fitness, including strength training, cardio, flexibility, and functional movement.</p>
                </div>
              </div>
              <div className='card_body'>
                <img className='card_image' src={Image5} alt="card-image" />
                <div className='card_para'>
                  <h6>Vishal Pareek</h6>
                  <h5>Hiit Expert</h5>
                  <p>Our team of 8 step fitness studio trainers is dedicated to helping you achieve your fitness goals in a safe, effective, and fun manner. Our trainers have a wealth of knowledge and experience in various areas of fitness, including strength training, cardio, flexibility, and functional movement.</p>
                </div>
              </div>
              <div className='card_body'>
                <img className='card_image' src={Image5} alt="card-image" />
                <div className='card_para'>
                  <h6>Vishal Pareek</h6>
                  <h5>Hiit Expert</h5>
                  <p>Our team of 8 step fitness studio trainers is dedicated to helping you achieve your fitness goals in a safe, effective, and fun manner. Our trainers have a wealth of knowledge and experience in various areas of fitness, including strength training, cardio, flexibility, and functional movement.</p>
                </div>
              </div>
            </Slider>
          </div>
          <div className='slide_para'>
            <p>Your path to a fitter, healthier you is just a click away? Get started with our expert trainers now!"</p>
            <button className='sl_button'>Connect Now!</button>
          </div>
        </Container>
      </section>



    </>
  )
}

export default Home

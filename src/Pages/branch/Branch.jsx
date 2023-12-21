import React from 'react'
import '../../assets/Css/Branch.css'
import CImage from '../../assets/Images/BranchPage_Images/img1.png'
import Phone from '../../assets/Images/Contact_Images/Icons/tel.png'
import MapIcon from '../../assets/Images/Contact_Images/Icons/map.png'
import BaImage from '../../assets/Images/BranchPage_Images/img2.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Branch() {
  return (
    <>
      <section className='branch_section'>
        <Container fluid>
          <div className='branch_background'>
            <div className='branch_content'>
              <h2>Branching Out For You:</h2>
              <h3>Eight Step Studios Across the Map!</h3>
              <p>Step into the 'Branches' section at 8 Step Studios, because fitness should be as exciting as</p> <p> discovering a new favourite dish! Our branches aren't just places to work out; they're your</p> <p> fitness playgrounds. With a lineup of expert trainers and a variety of workouts that'll have </p> <p> you high-fiving your health goals, From the latest equipment to an energetic atmosphere,</p> <p> it's a fitness party waiting to happen. So, explore the fitness branches below—your soon- </p> <p> to-be favourite fitness destination is just a click away!</p>
            </div>
          </div>
        </Container>
      </section>

      <section className='branchAdd_section'>
        <Container>
          <div className='branchAdd_content'>
            <h2>Our Branches</h2>
            <Row>
              <Col>
                <div className='brnch_image'>
                  <img src={CImage} alt="" />
                </div>
              </Col>
              <Col>
                <div className='brnch_content'>
                  <h2>8 Step Studios, <span>Cscheme</span></h2>
                  <p>Welcome to the C-Sheme branch at 8 Step Studios, where fitness meets holistic wellness! We are here to design the perfect fitness formula, customised just for you. From dynamic workouts to personalised routines, we're not just breaking a sweat; we're breaking fitness boundaries. Ready to transform your routine into a Fitnness- tic adventure? Contact our C-Cheme branch now and let's get your fitness journey started!</p>
                </div>
                <div className='brnch_contact'>
                  <img src={Phone} alt="" />
                  <p>+91-8003040506</p>
                </div>
                <div className='brnch_map'>
                  <img src={MapIcon} alt="" />
                  <p>G-2, Parivahan Marg, behind hotel rajmahal
                    palace, Shivaji Nagar, C Scheme, Jaipur, Rajasthan 302001</p>
                </div>
              </Col>
            </Row>

            <div className='branch_another'>
            <Row>
              <Col>
              <div className='brnch_content2'>
                  <h2>8 Step Studios, <span>Banipark</span></h2>
                  <p>Prep yourself for the energetic world of 8 Step Studios, Bani Park branch, where every workout is fun and every burnt calorie is a fitness-tic gain to your health! We've got a community that’s as pumped as the music. From heart-pounding HIIT sessions to zen-inducing yoga, we've curated a fitness regime that hits all the right notes. Join us at Bani Park for a journey where the weights are heavy but the vibes are light.</p>
                </div>
                <div className='brnch_contact'>
                  <img src={Phone} alt="" />
                  <p>+91-8003040506</p>
                </div>
                <div className='brnch_map'>
                  <img src={MapIcon} alt="" />
                  <p>Ras house, D-230, Tulsi Marg, Sindhi Colony, Bani Park, Jaipur, Rajasthan 302016</p>
                </div>
              </Col>
              <Col>
              <div className='brnch_content2Img'>
                <img src={BaImage} alt="" />
              </div>
              </Col>
            </Row>
            </div>
          </div>
        </Container>

      </section>

      <section className='step_googleMap'>
        <Container fluid>
        <iframe title ="Google Map Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.1235197697406!2d75.7877597753411!3d26.931298376636043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db36809a30b77%3A0x1e490b22bf98d184!2s8%20Step%20Studios%20Bani%20Park!5e0!3m2!1sen!2sin!4v1703048522663!5m2!1sen!2sin" width="100%" height="567px" style= {{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Container>
      </section>

    </>
  )
}

export default Branch

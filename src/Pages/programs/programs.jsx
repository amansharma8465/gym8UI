import React from 'react'
import '../../assets/Css/Program.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Image } from 'react-bootstrap';
import cardone from '../../assets/Images/program_images/cardone.png'
import cardtwo from '../../assets/Images/program_images/cardtwo.png'
import cardthree from '../../assets/Images/program_images/cardthree.png'
import iconimg from '../../assets/Images/program_images/iconimg.png'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import figureone from '../../assets/Images/program_images/figureonr.png'
// import figuretwo from '../../assets/Images/program_images/figuretwo.png'
// import five_star from '../../assets/Images/program_images/five_star.png' 
import figureimg from '../../assets/Images/program_images/figureimg.png'
// import Accordion from 'react-bootstrap/Accordion';
import bulleticon from '../../assets/Images/program_images/bulleticon.png'






function Programs() {
  return (
    <>
    
      <section className='section_one_programe'>
        <div className='section_one_programe-bg'>
          <div className='main_containproggrame'>
            <h2>From sprints to serenity </h2>
            <h3> find your stride with our diverse programs</h3>
            <p>Get started on a transformative journey at 8 Step Studios, where our diverse courses are a combination of overall wellness, carefully designed to integrate nutrition, diet, and holistic health. Picture your goals as pieces of a puzzle – our courses bring them together at a reasonable price, delivering not just fitness but a lifestyle. Because why settle for a piece when you can have the whole puzzle? Join us on the road to holistic wellness – where every step is a stride towards a happier, healthier you!</p>
            <button className='btn_programe'>Know More!
            </button>
          </div>

        </div>


      </section>
      {/* ...............section one end............... */}
      {/* ...........section one start.............. */}
      <section className='section_two_prorame_cards'>
        <div className='section_two_backgroundcolor'>
          <div className='main_cardstwo'>
            <h1>Explore Our <span className='card_spanheading'>Programmes</span></h1>



          </div>
          <div className='cards_div'>
            <div class="card">
              <img src={cardone}/>
                <div class="container cards_content">
                  
                  <h4>30 day transformation</h4>
                  <div className='card_img_contain'>
                  <img src={iconimg}/>
                  <p>Personal Training</p>
                    
                    


                  </div>
                  <div className='card_img_contain'>
                  <img src={iconimg}/>
                  <p>Diet Planning</p>
                  </div>
                  <div className='card_img_contain'>
                  <img src={iconimg}/>
                  <p>100% Guarantee</p>
                  </div>
                  <button>Read more</button>
                 
                </div>
            </div>
            <div class="card">
              <img src={cardtwo}/>
                <div class="container cards_content">
                  <h4>60 day transformation</h4>
                  <div className='card_img_contain'>
                  <img src={iconimg}/>
                  <p>Personal Training</p>
                    
                    


                  </div>
                  <div className='card_img_contain'>
                  <img src={iconimg}/>
                  <p>Diet Planning</p>
                  </div>
                  <div className='card_img_contain'>
                  <img src={iconimg}/>
                  <p>100% Guarantee</p>
                  </div>
                  <button>Read more</button>
                 
                </div>
            </div>
            <div class="card">
              <img src={cardthree}/>
                <div class="container cards_content">
                  <h4>90 day transformation</h4>
                  <div className='card_img_contain'>
                  <img src={iconimg}/>
                  <p>Personal Training</p>
                    
                    


                  </div>
                  <div className='card_img_contain'>
                  <img src={iconimg}/>
                  <p>Diet Planning</p>
                  </div>
                  <div className='card_img_contain'>
                  <img src={iconimg}/>
                  <p>100% Guarantee</p>
                  </div>
                  <button>Read more</button>
                 
                </div>
            </div>

          </div>









        </div>
















    </section >
    {/* .................section two end.......................... */}

      {/* section three start  */}
    <section className='section_three_programe'>
      <div className='section_three_backgroundcolor'>
      <Container>  
      
      <Row>
      <Col sm={6} className='part_onesec3'>
        <div className='heading_one'> 
        <h1>30 Days </h1>
        
        
        
        </div>
        <div className='heading_two'> 
        <h1>Transformation</h1>
        
        
        
        </div>
        <div className='text_content'>
          <p>At 8 Step Studios, we offer a wide range of fitness services and classes to help you reach your health and fitness goals. Our experienced instructors lead classes in yoga, Pilates, Zumba, and more, providing a fun and effective workout for all levels.</p>

  

        </div>
        <div className='text_content_two'>
          <p>Instructors:</p>

  

        </div>
        <div className='figure_img_main'>
          <div className='figure_one'>
           
       


          </div>
          <div className='figure_two'>
         



          </div>
          
        




        </div>
        <div>
       <button className='btn_figure'> KNOW MORE!</button>

        </div>

        
        
        
        
        </Col>
        <Col sm={6} className='part_twosec3'>
        <img src={figureimg} alt="" />
        
        

        
        
        
        
        
        </Col>
      </Row>
        
     
     
        
        
     


        </Container>

      </div>







    </section>
{/*......................... section3 end................................ */}
{/* ........................section 4 start ..............................*/}


<section className='section_four_programe'>
<div className='section_four_backgroundcolor'>
  <Container>
 
  <Row>
        <Col sm={6} className='part_onesec4'>
        <img src={figureimg} alt="" />






        </Col>
        <Col sm={6} className='part_twosec4'>
        <div className='heading_onee'> 
        <h1>30 Days </h1>
        
        
        
        </div>
        <div className='heading_twoo'> 
        <h1>Transformation</h1>
        
        
        
        </div>
        <div className='text_contentt'>
          <p>At 8 Step Studios, we offer a wide range of fitness services and classes to help you reach your health and fitness goals. Our experienced instructors lead classes in yoga, Pilates, Zumba, and more, providing a fun and effective workout for all levels.</p>

  

        </div>
        <div className='text_content_twoo'>
          <p>Instructors:</p>

  

        </div>
        <div className='figure_img_mainn'>
          <div className='figure_onee'>
           
       


          </div>
          <div className='figure_twoo'>
         



          </div>
          
        




        </div>
        <div>
       <button className='btn_figuree'> KNOW MORE!</button>

        </div>

        
        








        </Col>
      </Row>

      </Container>





  








  </div>





</section>
<section className='section_five_programe'>
  <div className='section_five_backgroundcolor'>
    <Container>
    <Row>
      <Col sm={6} className='part_onesec3'>
        <div className='heading_one'> 
        <h1>90 Days </h1>
        
        
        
        </div>
        <div className='heading_two'> 
        <h1>Transformation</h1>
        
        
        
        </div>
        <div className='text_content'>
          <p>At 8 Step Studios, we offer a wide range of fitness services and classes to help you reach your health and fitness goals. Our experienced instructors lead classes in yoga, Pilates, Zumba, and more, providing a fun and effective workout for all levels.</p>

  

        </div>
        <div className='text_content_two'>
          <p>Instructors:</p>

  

        </div>
        <div className='figure_img_main'>
          <div className='figure_one'>
           
       


          </div>
          <div className='figure_two'>
         



          </div>
          
        




        </div>
        <div>
       <button className='btn_figure'> KNOW MORE!</button>

        </div>

        
        
        
        
        </Col>
        <Col sm={6} className='part_twosec3'>
        <img src={figureimg} alt="" />
        </Col>
      </Row>
    </Container>
  </div>

</section>
<section className='section_six_programe'>
<div className='section_six_backgroundcolor'>
  <Container>
  <div className='heading_sec6'>
    <h1>Fitnesstic Course Explorer</h1>

  </div>
  </Container>
  <div className='cards_div'>
            <div class="card">
              <img src={cardone}/>
                <div class="container cards_content">
                  
                  <h4>30 day transformation</h4>
                  <div className='card_img_contain'>
                  <img src={iconimg}/>
                  <p>Personal Training</p>
                    
                    


                  </div>
                  <div className='card_img_contain'>
                  <img src={iconimg}/>
                  <p>Diet Planning</p>
                  </div>
                  <div className='card_img_contain'>
                  <img src={iconimg}/>
                  <p>100% Guarantee</p>
                  </div>
                  <div className=''></div>
                  <button>Read more</button>
                 
                </div>
            </div>
            <div class="card">
              <img src={cardtwo}/>
                <div class="container cards_content">
                  <h4>60 day transformation</h4>
                  <div className='card_img_contain'>
                  <img src={iconimg}/>
                  <p>Personal Training</p>
                    
                    


                  </div>
                  <div className='card_img_contain'>
                  <img src={iconimg}/>
                  <p>Diet Planning</p>
                  </div>
                  <div className='card_img_contain'>
                  <img src={iconimg}/>
                  <p>100% Guarantee</p>
                  </div>
                  <button>Read more</button>
                 
                </div>
            </div>
            <div class="card">
              <img src={cardthree}/>
                <div class="container cards_content">
                  <h4>90 day transformation</h4>
                  <div className='card_img_contain'>
                  <img src={iconimg}/>
                  <p>Personal Training</p>
                    
                    


                  </div>
                  <div className='card_img_contain'>
                  <img src={iconimg}/>
                  <p>Diet Planning</p>
                  </div>
                  <div className='card_img_contain'>
                  <img src={iconimg}/>
                  <p>100% Guarantee</p>
                  </div>

                  <button>Read more</button>
                 
                </div>
            </div>

          </div>
          <Container>
            <div className='contentp_sec6'>
              <p>Commit to Holistic Wellness: Click Here to Join Our Signature Programs!</p>
              <button className='btn_programe_two'>Enrol Now!</button>
              




            </div>
            




          </Container>







  </div>








</section>
<section className='section_seven_programe'>
<div className='section_seven_backgroundcolor'>
  <div className='sec_seven_heading'>
      <h1>FAQs</h1>



  </div>
<Container>
  <div className='accor_one'>
    <div className='accor_heading'>
      <div className='accor_img'>
        <img src={bulleticon} alt="" />

      </div>
      <div className='accor_que'>
        <p>Can I really achieve my fitness goals here?</p>



      </div>


    </div>
    <div className='accor_ans'>
      <p>Yes, without a doubt. At Eight Step Studios, we offer world-class fitness amenities, trained experts, a plethora of courses catering to every field, carefully chalked-out nutrition plans, and much more. In a nutshell, you're in a place where sweatpants are a lifestyle!</p>



    </div>
   


  </div>
  <div className='accor_two'>
    <div className='accor_heading'>
      <div className='accor_img'>
        <img src={bulleticon} alt="" />

      </div>
      <div className='accor_que'>
        <p>Do you offer nutritional guidance?</p>



      </div>


    </div>
    <div className='accor_ans'>
      <p>Yes. We have our in-house nutritionists, who do a preliminary analysis of your health conditions and lifestyle. With your personal goals in mind and an overall analysis, a tailor-made plan is created with a perfect balance of nutrition, taste, and homemade meals. As we believe, Cheat days aren't bad; excessive calories are!</p>



    </div>
   


  </div>
  



  


    </Container>
 

  





</div>
</section>


    </>

  )
}

export default Programs
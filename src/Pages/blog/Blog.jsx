import React from 'react'
import '../../assets/Css/Blog.css'

import BlogImg from '../../assets/Images/blog_images/blogwaightlift.png'
import blogcard1 from '../../assets/Images/blog_images/blogcard1.png'
import blogcard2 from '../../assets/Images/blog_images/blogcard2.png'
import blogcard3 from '../../assets/Images/blog_images/blogcard3.png'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function Blog() {
  return (
    <>
    <section className='section_first_blog'>
       
       <div className='section_first_blog-bg'>
         <div className='sec_one_main_contain'>
           <h2>The beginner’s guide </h2>
           <h2> to weight lifting</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>





         </div>




       </div>

   </section>
   {/* section two started */}
   <section className='section_two_blog'>
    <div className='section_two_blog-bg'>
      <div className='sec_two_main_contain'>
        <h2>HOW TO LIFT WEIGHTS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet egestas dignissim eu nunc. Id pulvinar enim volutpat tellus. Cras tellus ac dui at sed. Suspendisse feugiatscelerisque et, viverra urna imperdiet non malesuada. In massa id tellus natoque augue in et, et. Vitae interdum quis lacus ut viverra. Cras tellus ac dui at sed.</p>

        <ul>
           <li>Enim eu turpis egestas pretium aenean pharetra magna ac placerat.</li>
           <li>Nunc semper velit netus donec commodo. </li>
           <li>Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum.</li>
        </ul>
        <h4>A 30-DAY QUICK START GUIDE TO WEIGHT TRAINING</h4>
        <p className='p_two'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet egestas dignissim eu nunc. Id pulvinar enim <span className='p_two_span'>volutpat tellus.</span> Cras tellus ac dui at sed.


        </p>




      </div>





    </div>





   </section>
   {/* .......section threee...... */}
   <section className='section_three_blog'>
    <div className='section_three_blog-bg'>
      <div className='sec_three_main_contain'>
        <img src={BlogImg} alt="" />
        <h4>3 STEP PROCESS TO WEIGHT LIFTING</h4>
        <p>Tellus at urna condimentum mattis pellentesque. Quis blandit turpis cursus in hac habitasse. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Proin sed libero enim sed faucibus. Ullamcorper morbi ornare massa eget. </p>

        <ol>
           <li>Enim eu turpis egestas pretium aenean pharetra magna ac placerat.</li>
           <li>Nunc semper velit netus donec commodo. </li>
           <li>Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum.</li>
        </ol>
        <p className='pb_three'>Lacus viverra vitae congue eu. Non blandit massa enim nec dui nunc mattis enim. Tellus id interdum velit laoreet. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Ac orci phasellus egestas tellus rutrum tellus. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.</p>
        
        </div>





        </div>





        </section>
        {/* ...............section four blog........... */}
        <section className='section_four_blog'>
    <div className='section_four_blog-bg'>
      <div className='sec_four_main_contain'>
        <h2>More Blogs</h2>
        <button>Browse More!</button>
        
        </div>
        <div className='blog_four_cards_main'>
          <div className='card_one_blog'>
            <img src={blogcard1} alt="" />
            <h3>5 Tips to build  daily</h3> 
            <h3> movement routine</h3>
            <button>Read more!</button>





          </div>
          <div className='card_one_blog'>
            <img src={blogcard2} alt="" />
            <h3>The beginner’s guide </h3>
            <h3>to weight lifting</h3>
            <button>Read more!</button>





          </div>
          <div className='card_one_blog'>
            <img src={blogcard3} alt="" />
            <h3>Why breathwork</h3> 
            <h3>matters in your workout</h3>
            <button>Read more!</button>





          </div>




        </div>
       
        





        </div>





        </section>








   
    </>
  
    
    


    
    








  )
}

export default Blog
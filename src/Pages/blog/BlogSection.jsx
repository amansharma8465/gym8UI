import React from 'react'
import '../../assets/Css/BlogSec.css'
import FeaturedImage from '../../assets/Images/blog_images/blog_main/blogfeatured.png'
import CrdImage1 from '../../assets/Images/blog_images/blog_main/cardImage1.png'
import CrdImage2 from '../../assets/Images/blog_images/blog_main/cardImage2.png'
import CrdImage3 from '../../assets/Images/blog_images/blog_main/cardImage3.png'
import CrdImage4 from '../../assets/Images/blog_images/blog_main/cardImage4.png'
import CrdImage5 from '../../assets/Images/blog_images/blog_main/cardImage5.png'
import CrdImage6 from '../../assets/Images/blog_images/blog_main/cardImage6.png'
import SocialGrid1 from '../../assets/Images/blog_images/blog_main/grid1.png'
import SocialGrid2 from '../../assets/Images/blog_images/blog_main/grid2.png'
import SocialGrid3 from '../../assets/Images/blog_images/blog_main/grid3.png'
import SocialGrid4 from '../../assets/Images/blog_images/blog_main/grid4.png'
import SocialGrid5 from '../../assets/Images/blog_images/blog_main/grid5.png'
import SocialGrid6 from '../../assets/Images/blog_images/blog_main/grid6.png'
import SocialGrid7 from '../../assets/Images/blog_images/blog_main/grid7.png'
import SocialGrid8 from '../../assets/Images/blog_images/blog_main/grid8.png'
import SocialGrid9 from '../../assets/Images/blog_images/blog_main/grid9.png'
import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

function BlogSection() {
    const navigate = useNavigate();
    
    const buttonClick = () => {
        navigate('/blog');
    }
    const cardClick = () => {
        navigate ('/blog')
    }

    return (
        <>
            <section className='blogSec_section'>
                <div className='blogSec_backgroud'>
                    <div className='blogSec_content'>
                        <h2>Fitenss <span>Encyclopedia</span></h2>
                        <p>Dive into the world of fitness insights, tips, and inspiration! Join our blog community for a daily dose of wellness wisdom. Let's make every scroll a step closer to your fitness goals.</p>
                    </div>
                </div>
            </section>

            <section className='blogGuide_section'>
                <Container>
                    <div className='blog_featured'>
                        <Row>
                            <Col>
                                < div className='blog_col1_content'>
                                    <img src={FeaturedImage} alt="" />
                                </div>
                            </Col>
                            <Col>
                                <div className='blog_col2_content'>
                                    <p><span>FEATURED</span></p>
                                    <p>The beginner's guide
                                        to weight lifting</p>
                                    <div className='col_2_para'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
                                    <button className='col_2_btn'>Read More!</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <section className='blogPost_section'>
                <Container>
                    <div className='blogPost_content'>
                        <h2>Recent <span> Posts</span> </h2>
                        <Row>
                            <Col>

                                <Card className='blogPosts' onClick={cardClick}>
                                    <Card.Body>
                                        <Card.Img src={CrdImage1} />
                                        <div className='blogCrd_content'>
                                            <p>5 Tips to build  daily
                                                movement routine</p>
                                            <button className='blogCrd_btn' onClick={buttonClick}> Read More!</button>
                                        </div>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Card className='blogPosts' onClick={cardClick}>
                                    <Card.Body>
                                        <Card.Img src={CrdImage2} />
                                        <div className='blogCrd_content'>
                                            <p>The beginner's guide
                                                to weight lifting</p>
                                            <button className='blogCrd_btn' onClick={buttonClick}> Read More!</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='blogPosts' onClick={cardClick}>
                                    <Card.Body>
                                        <Card.Img src={CrdImage3} />
                                        <div className='blogCrd_content'>
                                            <p>Why breathwork
                                                matters in your workout</p>
                                            <button className='blogCrd_btn' onClick={buttonClick}> Read More!</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className='blogPosts' onClick={cardClick}>
                                    <Card.Body>
                                        <Card.Img src={CrdImage4} />
                                        <div className='blogCrd_content'>
                                            <p>6 basic weight lifting
                                                training for starters</p>
                                            <button className='blogCrd_btn' onClick={buttonClick}> Read More!</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='blogPosts' onClick={cardClick}>
                                    <Card.Body>
                                        <Card.Img src={CrdImage5} />
                                        <div className='blogCrd_content'>
                                            <p>The beginner’s guide
                                                to weight lifting</p>
                                            <button className='blogCrd_btn' onClick={buttonClick}> Read More!</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='blogPosts' onClick={cardClick}>
                                    <Card.Body>
                                        <Card.Img src={CrdImage6} />
                                        <div className='blogCrd_content'>
                                            <p>Using ropes to increase
                                                your core strenght </p>
                                            <button className='blogCrd_btn' onClick={buttonClick}> Read More!</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </div>

                </Container>

            </section>

            <section className='blogSec_socials'>
                <Container>
                    <div className='social_header'>
                        <p>Looking for daily doses of motivation? Our blog is the remedy! Join our community and let's rewrite your fitness story, one blog post at a time.</p>
                        <button className='socialHeader_button'> Join Now!</button>
                    </div>
                </Container>
            </section>

            <section className='blogSocial_section'>
                <Container>
                    <div className='blogSocial'>
                        <h1>Instagram</h1>
                        <h2><span>Follow Us</span> On Instagram </h2>
                        <div className='blogSocial_grid'>
                            <Row>
                                <Col>
                                    <div className='blogSocialGrid'>
                                        <img src= {SocialGrid1} alt="" />
                                        <img src={SocialGrid2} alt="" />
                                        <img src= {SocialGrid3} alt="" />
                                        <img src= {SocialGrid4} alt="" />
                                    </div>
                                </Col>
                                <Col>
                                <div className='blogSocialGrid2'>
                                    <img src= {SocialGrid5} alt="" />
                                </div>
                                </Col>
                                <Col>
                                <div className='blogSocialGrid'>
                                    <img src={SocialGrid6} alt="" />
                                    <img src= {SocialGrid7} alt="" />
                                    <img src= {SocialGrid8} alt="" />
                                    <img src= {SocialGrid9} alt="" />
                                     
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

export default BlogSection

import React from 'react'
import '../../assets/Css/Membership.css'
import Container from 'react-bootstrap/Container'
import Img from '../../assets/Images/line.png'
import Check from '../../assets/Images/tick.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function Membership() {
    return (
        <>
            <section className='memebership_section'>
                <Container>
                    <div className='membership_content'>
                        <h2>Be a Part of our</h2>
                        <h3>Family</h3>
                        <p>Your health is your wealth - invest in yourself</p> <p> with our membership plans.</p>
                    </div>
                    <div className='memberPlans'>
                        <Row>
                            <Col>
                                <div className='plan_crd'>
                                    <Card className='pl_card'>
                                        <Card.Body>
                                            <Container>
                                                <p>1 month Plan</p>
                                                <h3>Rs. 3,500/-</h3>
                                                <div className='pl_para'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, beatae.</p></div>
                                                <img src={Img} alt="" />

                                                <div className='memb'>
                                                    <div className='memb_pl'>
                                                        <img src={Check} alt="" />
                                                        <p>4 classes per Month</p>
                                                    </div>

                                                    <div className='memb_pl'>
                                                        <img src={Check} alt="" />
                                                        <p>24/7 Access to gym</p>
                                                    </div>

                                                    <div className='memb_pl'>
                                                        <img src={Check} alt="" />
                                                        <p>Personal Trainer</p>
                                                    </div>

                                                    <div className='memb_pl'>
                                                        <img src={Check} alt="" />
                                                        <p>Fitness Coach</p>
                                                    </div>
                                                </div>

                                                <button className='memb_btn'>Subscribe !</button>



                                            </Container>

                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col>
                                <div className='plan_crd'>
                                    <Card className='pl_card'>
                                        <Card.Body>
                                            <Container>
                                                <p>1 month Plan</p>
                                                <h3>Rs. 7,500/-</h3>
                                                <div className='pl_para'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, beatae.</p></div>
                                                <img src={Img} alt="" />

                                                <div className='memb'>
                                                    <div className='memb_pl'>
                                                        <img src={Check} alt="" />
                                                        <p>4 classes per Month</p>
                                                    </div>

                                                    <div className='memb_pl'>
                                                        <img src={Check} alt="" />
                                                        <p>24/7 Access to gym</p>
                                                    </div>

                                                    <div className='memb_pl'>
                                                        <img src={Check} alt="" />
                                                        <p>Personal Trainer</p>
                                                    </div>

                                                    <div className='memb_pl'>
                                                        <img src={Check} alt="" />
                                                        <p>Fitness Coach</p>
                                                    </div>
                                                </div>

                                                <button className='memb_btn'>Subscribe !</button>



                                            </Container>

                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col>
                                <div className='plan_crd'>
                                    <Card className='pl_card'>
                                        <Card.Body>
                                            <Container>
                                                <p>1 month Plan</p>
                                                <h3>Rs. 11,000/-</h3>
                                                <div className='pl_para'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, beatae.</p></div>
                                                <img src={Img} alt="" />

                                                <div className='memb'>
                                                    <div className='memb_pl'>
                                                        <img src={Check} alt="" />
                                                        <p>4 classes per Month</p>
                                                    </div>

                                                    <div className='memb_pl'>
                                                        <img src={Check} alt="" />
                                                        <p>24/7 Access to gym</p>
                                                    </div>

                                                    <div className='memb_pl'>
                                                        <img src={Check} alt="" />
                                                        <p>Personal Trainer</p>
                                                    </div>

                                                    <div className='memb_pl'>
                                                        <img src={Check} alt="" />
                                                        <p>Fitness Coach</p>
                                                    </div>
                                                </div>

                                                <button className='memb_btn'>Subscribe !</button>



                                            </Container>

                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                        {/* {next row} */}

                        <div className='next_row'>
                            <Row>
                                <Col>
                                    <div className='plan_crd'>
                                        <Card className='pl_card'>
                                            <Card.Body>
                                                <Container>
                                                    <p>1 month Plan</p>
                                                    <h3>Rs. 16,000/-</h3>
                                                    <div className='pl_para'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, beatae.</p></div>
                                                    <img src={Img} alt="" />

                                                    <div className='memb'>
                                                        <div className='memb_pl'>
                                                            <img src={Check} alt="" />
                                                            <p>4 classes per Month</p>
                                                        </div>

                                                        <div className='memb_pl'>
                                                            <img src={Check} alt="" />
                                                            <p>24/7 Access to gym</p>
                                                        </div>

                                                        <div className='memb_pl'>
                                                            <img src={Check} alt="" />
                                                            <p>Personal Trainer</p>
                                                        </div>

                                                        <div className='memb_pl'>
                                                            <img src={Check} alt="" />
                                                            <p>Fitness Coach</p>
                                                        </div>
                                                    </div>

                                                    <button className='memb_btn'>Subscribe !</button>



                                                </Container>

                                            </Card.Body>
                                        </Card>

                                    </div>

                                </Col>
                                <Col>
                                    <div className='plan_crd'>
                                        <Card className='pl_card'>
                                            <Card.Body>
                                                <Container>
                                                    <p>1 month Plan</p>
                                                    <h3>Rs. 25,000/-</h3>
                                                    <div className='pl_para'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, beatae.</p></div>
                                                    <img src={Img} alt="" />

                                                    <div className='memb'>
                                                        <div className='memb_pl'>
                                                            <img src={Check} alt="" />
                                                            <p>4 classes per Month</p>
                                                        </div>

                                                        <div className='memb_pl'>
                                                            <img src={Check} alt="" />
                                                            <p>24/7 Access to gym</p>
                                                        </div>

                                                        <div className='memb_pl'>
                                                            <img src={Check} alt="" />
                                                            <p>Personal Trainer</p>
                                                        </div>

                                                        <div className='memb_pl'>
                                                            <img src={Check} alt="" />
                                                            <p>Fitness Coach</p>
                                                        </div>
                                                    </div>

                                                    <button className='memb_btn'>Subscribe !</button>



                                                </Container>

                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </div>

                    <div className='plansLast_para'>
                        <p>If you want to avail of other amenities like services, then additional charges</p> 
                        <p>will be applied, and guess what? You will also unlock the game zone.</p>
                            
                    </div>
                </Container>
            </section>

        </>
    )
}

export default Membership

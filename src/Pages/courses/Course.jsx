import React from 'react'
import '../../assets/Css/Course.css'
import Container from 'react-bootstrap/Container'
import StarRating from '../../assets/Images/CoursePage_images/star.png'
import PointedImg from '../../assets/Images/CoursePage_images/Dotted.png'
import CheckIcon from '../../assets/Images/CoursePage_images/Check.png'
import ReviewImg from '../../assets/Images/CoursePage_images/review.png'

function Course() {
    return (
        <>
            <section className='course_section'>
                <Container fluid>
                    <div className='course_bg'>
                        <div className='course_content'>
                            <h2><span>30 Day</span></h2>
                            <h3>Transformation</h3>
                            <p>1 Month Course</p>
                            <div className='course_star'>
                                <img src={StarRating} alt="" /> <p>(89)</p>
                            </div>
                            <div className='course_para'>
                                <p>Trainers - <span>Vishal</span> and <span>Samar singh</span></p>
                            </div>

                            <div className='course_lang'>
                                <p>HinEnglish</p> <img src={PointedImg} alt="" /> <p> All Levels </p> <img src={PointedImg} alt="" />  <p>World wide</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='courseAbout_section'>
                <Container>
                    <div className='courseAbout_content'>
                        <h2>About the <span>Course</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam esse, neque nihil deleniti animi saepe quibusdam voluptas corrupti iste, qui quod obcaecati eligendi exercitationem ducimus hic in distinctio. Dicta esse molestias culpa doloremque magni ullam minima. Ut quisquam, hic cupiditate placeat quis nulla eligendi maiores modi iste, qui nisi odit!</p>
                    </div>

                    <div className='checklist_section'>
                        <div className='check_content'>
                            <img src={CheckIcon} alt="" />
                            <p>Lean Body Workouts </p>
                        </div>
                        <div className='check_content'>
                            <img src={CheckIcon} alt="" />
                            <p>Calculate diet to remain Lean </p>
                        </div>
                        <div className='check_content'>
                            <img src={CheckIcon} alt="" />
                            <p>Visible Muscled ups abs </p>
                        </div>
                        <div className='check_content'>
                            <img src={CheckIcon} alt="" />
                            <p> Future Goals Guidance </p>
                        </div>



                    </div>




                </Container>
            </section>

            <section className='courseSchedule_section'>
                <Container >
                    <div className='courseSchedule_content'>
                        <h2>Course <span>Schedule</span></h2>
                        <div className='courseSchedule_header'>
                            <h3>Monday-Friday</h3>
                            <ul>
                                <li>8:00 AM - 9:00 AM</li>
                                <li>10:00 AM - 11:00</li>
                                <li>2:00 PM - 3:00 PM</li>
                            </ul>

                            <h3>Saturday - Sunday</h3>
                            <ul>
                                <li>8:00 AM - 9:00 AM</li>
                                <li>10:00 AM - 11:00 AM</li>
                                <li>2:00 PM - 3:00 PM</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='customerReview_section'>
                <Container>
                    <div className='customerReview_header'>
                        <h2>What our</h2>
                        <h3><span>customer</span> says</h3>

                    <div><img src= {ReviewImg} alt="" /></div>
                    <div><img src= {ReviewImg} alt="" /></div>
                    <div><img src= {ReviewImg} alt="" /></div>

                    </div>
                </Container>

            </section>
        </>
    )
}

export default Course

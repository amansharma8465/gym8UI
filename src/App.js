import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Header/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx'
import Home from './Pages/home/Home.jsx';
import One from './Pages/one/Oneon.jsx';
import Service from './Pages/services/Service.jsx'
import Programs from './Pages/programs/Programs.jsx';
import Workshops from './Pages/workshops/Workshops';
import About from './Pages/about/About.jsx';
import Contact from './Pages/contact/Contact.jsx';
import GymPage from "./Pages/gym/GymPage.jsx";
import Hiit from "./Pages/hiit/Hiit.jsx"
import Zumba from "./Pages/zumba/Zumba.jsx"
import Yoga from "./Pages/yoga/Yoga.jsx"
import Swimming from "./Pages/swimming/Swimming.jsx"
import Nutrition from "./Pages/nutrition/Nutrition.jsx"
import Sauna from "./Pages/sauna/Sauna.jsx"
import Membership from './Pages/membership/Membership.jsx';
import Branch from './Pages/branch/Branch.jsx';
import Course from './Pages/courses/Course.jsx';
import BlogSection from './Pages/blog/BlogSection.jsx';
import Blog from './Pages/blog/Blog.jsx';



const App = () => {
  return (
    <>
    
      <Router>
        <Navbar />
        
        <Routes>
          <Route index element={<Home />} />
          <Route path="one" element={<One />} />
          <Route path ="services" element={<Service/>} />
          <Route path ="membership" element={<Membership/>}/>
          <Route path="branch" element={<Branch/>}/>
          <Route path= "courses" element= {<Course/>}/>
          <Route path = "blogsection" element ={ <BlogSection/>}/>
          <Route path= "blog" element= {<Blog/>}/>
          <Route path="programs" element={<Programs />} />
          <Route path="workshops" element={<Workshops />} /> 
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>

     
      <Router>
      <Footer/>
      <Routes>
        <Route path="gym" element={<GymPage/>}/> 
        <Route path="hiit" element={<Hiit/>}/>
        <Route path="zumba" element={<Zumba/>}/> 
        <Route path="yoga" element ={<Yoga/>}/>
        <Route path="swimming" element ={<Swimming/>}/>
        <Route path="nutrition" element ={<Nutrition/>}/>
        <Route path="sauna" element ={<Sauna/>}/>
      </Routes>
      </Router>
      

    </>
  );
};

export default App;


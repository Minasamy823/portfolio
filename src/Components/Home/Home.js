import React, {Component} from "react"
import'./Home.css'
import {Animated} from "react-animated-css";
import me from "../images/me.jpg"
import facebook from "../images/facebook.svg"
import whatsup from "../images/whatsapp.svg"
import google from "../images/google-plus.svg"
import call from "../images/call.png"
import email from "../images/email.png"
import Slider from "react-slick";
import baa from "../images/baa.jpg"


export default class Home extends Component{
  render(){
    const settings = {
      speed: 500,
      auto:true,
      slidesToShow: 1,
      arrows:true,
    }

    return(
      <div>
        <div className='bar'>
            <ul>
            <Animated animationIn='bounceInLeft' animationInDuration='5500'>
              <li > <a className='git' href='https://github.com/'>GitHub</a></li>
            </Animated>
            </ul>
          </div>
        <div className='shadow'> </div>
        <Animated animationIn='fadeInUpBig' animationInDuration='1000'>
        <div className='slider'>
        <Slider {...settings}>
            <div className='box'>
                <ul className='first'>
                  <div>
                    <li className='text'>
                      Mina Samy
                    </li>
                    <li className='second_line'>
                      Full stuck developer
                    </li>
                    <li className='third_line'>
                      <p className='email'> <i style={{paddingTop: '3px',paddingRight: '5px'}}><img src={email}/></i>  minasamy823@gmail.com </p>
                      <p className='slach'> </p>
                      <p className='phone'> <i><img src={call}/></i>  +79778257626 </p>
                    </li>
                   </div>
                   <div className="photo">
                      <img src={me}/>
                   </div>
                </ul>
              <p className='line'> </p>
              <div className='para_con'>
                  <p className='para'>
                      I'm Mina Samy, from Egypt, have been living in Russia for 3 years, studying and practicing programming.
                      I adore working with codes and solving challenging programming problems.
                      I can speak three languages (Arabic, English and Russian).
                      I have experience working with Python's framework (Django) for the backend with Django REST API.
                      Regarding the frontend I have experience with Javascript's framework (React) using css or scss with some animation
                      libraries.
                      I Have been working on freelancing projects for a year.
                  </p>
                  <h className='help_line'> I can help.</h>
                            <p className='available'> I’m currently available for freelance work. </p>
                            <p>If you have a project that you want to get started,
                             think you need my help with something or just fancy saying hey,
                              then get in touch.</p>


              </div>
              <p className='sec_line'> </p>
              <div className='icons'>
                <ul className='second'>
                  <li><a href="minasamy823@gmail.com" ><img src={google} /></a></li>
                  <li><a href="https://wa.me/79778257626" ><img src={whatsup} /></a></li>
                  <li><a href="https://www.facebook.com/" ><img src={facebook} /></a></li>
               </ul>
             </div>
         </div>
         <div className='box'>
             <ul className='first'>
               <div>
                 <li className='text'>
                   My Projects
                 </li>
                 <li className='second_line'>
                   Full stuck developer
                 </li>
                 <li className='third_line'>
                   <p className='email'> <i style={{paddingTop: '3px',paddingRight: '5px'}}><img src={email}/></i>  minasamy823@gmail.com </p>
                   <p className='slach'> </p>
                   <p className='phone'> <i><img src={call}/></i>  +79778257626 </p>
                 </li>
                </div>
             </ul>
           <p className='line'> </p>
           <div className='para_con'>
             <p className='slid2_para'>
                <h className='slid2_title'>E-commerce site </h>
                <p className='brief'>  A full stuck project using python and javascript as a back and front end.
                 A payment system, Login and Register, Token Authentication with Django REST framework.  <span><a href='https://django-react-250923.appspot.com/'>Demo</a></span></p>
                <div className='slid2_usages'>
                  <ul>
                    <li>
                      Python(Django)
                    </li>
                    <li>
                      Django REST framework
                    </li>
                    <li>
                      Stripe Online Payment
                    </li>
                    <li>
                      Javascript(React)
                    </li>
                    <li>
                      Semantic react UI
                    </li>
                    <li>
                      Css
                    </li>
                  </ul>
                </div>
             </p>
           </div>
           <p className='sec_line'> </p>
           <div className='icons'>
             <ul className='second'>
               <li><a href="minasamy823@gmail.com" ><img src={google} /></a></li>
               <li><a href="https://wa.me/79778257626" ><img src={whatsup} /></a></li>
               <li><a href="https://www.facebook.com/" ><img src={facebook} /></a></li>
            </ul>
          </div>
      </div>
      <div className='box'>
          <ul className='first'>
            <div>
              <li className='text'>
                My Projects
              </li>
              <li className='second_line'>
                Full stuck developer
              </li>
              <li className='third_line'>
                <p className='email'> <i style={{paddingTop: '3px',paddingRight: '5px'}}><img src={email}/></i>  minasamy823@gmail.com </p>
                <p className='slach'> </p>
                <p className='phone'> <i><img src={call}/></i>  +79778257626 </p>
              </li>
             </div>
          </ul>
        <p className='line'> </p>
        <div className='para_con'>
          <p className='slid2_para'>
             <h className='slid2_title'>Landing Page </h>
             <p className='brief'>  A landing page for giving the visitor a brief about the company business and it's
             projects so far. Used Javascript with some animation libraries for enhancing the user experience.  <span><a href='https://build-255423.appspot.com/'>Demo</a></span></p>

             <div className='slid3_usages'>
               <ul>
                 <li>
                   Javascript(React)
                 </li>
                 <li>
                   Scss
                 </li>
                 <li>
                   Animate.css
                 </li>
                 <li>
                   AOS
                 </li>
                 <li>
                   React Counter
                 </li>
               </ul>
             </div>
          </p>
        </div>
        <p className='sec_line'> </p>
        <div className='icons'>
           <ul className='second'>
              <li><a href="minasamy823@gmail.com" ><img src={google} /></a></li>
              <li><a href="https://wa.me/79778257626" ><img src={whatsup} /></a></li>
              <li><a href="https://www.facebook.com/" ><img src={facebook} /></a></li>
           </ul>
         </div>
       </div>
      </Slider>
    </div>
  </Animated>
</div>


    )
  }
}

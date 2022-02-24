import React from 'react'
import { Link } from 'react-router-dom';
import icon from './images/icons.png'
export default function Body() {
  return (
    <>
      <header className="masthead">
        <div className="position-absolute top-50 start-5 translate-middle">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <div className="logo"> <img src={icon} alt="" /> </div>
              <br /><br /><br />
              <h1 className="h1">FlexiQuiz</h1>
              <br /><br />
              <h1 className="h1">Your Favorite Place for Taking the test</h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline " >
              <h2 className="text-white-75 mb-5">“If you don’t do your revision properly, you know what’ll happen? YOU SHALL NOT PASS!”</h2>
              {!localStorage.getItem('token') ? <Link className="btn btn-light wdth btn-xl" to="/login">Login</Link> : <><span className='bol'><center>Best Of Luck For Your Quiz</center></span>
              </>}
            </div>
          </div>
        </div>
      </header>

      <footer id='aboutus' className="aboutback">
        <h1 className="h1 "> About Us: </h1>
        <div className='sider'>
          <br />
          <br />
          <div className='about-text'>
            FlexiQuiz was founded in 2021. As a distributed team that had built
            software used by some of the world's largest companies, we knew how
            hard it was to foster a team culture when you don't share an office
            or see each other regularly. Thus, FlexiQuiz was born, to adjust to
            the new challenges imposed by the outbreak of the virus worldwide.
            FlexiQuiz was born to be a flexible platform for all types of
            scholars trying to quench their thirst for knowledge. Since then,
            tens of thousands of team ice breaker quizzes have been run using
            FlexiQuiz - bringing teams together all over the world. We're proud
            to be an independent, bootstrapped company that puts its customers
            first.
          </div>

          <br /><br />
          <div className='icons'>
            <Link to="http://facebook.com/" class="fa fa-facebook"></Link>
            <Link to="http://twitter.com/" class="fa fa-twitter"></Link>
            <Link to="http://google.com/" class="fa fa-google"></Link>
            <Link to="http://instagram.com/" class="fa fa-instagram"></Link>
          </div>
        </div>
        <center className='or'>................</center>
      </footer>


    </>
  )
}

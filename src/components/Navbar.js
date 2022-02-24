import React from 'react'
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom';

export default function Navbar(props) {
  const history = useHistory(); 
  const handleLogout = () => {
    if (window.confirm("Are You Sure For Logout?")) {
    localStorage.removeItem('token')
    history.push('./')
    }
  }
  const handleOnclickabout = () => {
    props.showAlert('Please Login To See our About Us section', 'danger')
  }

  const handleOnclick = () => {
    props.showAlert('Please Login To Start The Exam', 'danger')
  }

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">FlexiQuiz</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
        {localStorage.getItem('token') ?
          <Link className="nav-link active dropdown-toggle" to="/exam" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Exam
          </Link> :<div className='nav-link active dropdown-toggle nav'> <span onClick={handleOnclick}>Exam</span>   </div> }
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><hr className="dropdown-divider" /><strong><center>Front End Language</center></strong></li>
            <li><Link className="dropdown-item" to="/instructionHtml">HTML</Link></li>
            <li><Link className="dropdown-item" to="/instructionCss">CSS</Link></li>
            <li><Link className="dropdown-item" to="/instructionjs">JavaScript</Link></li>
            <li><hr className="dropdown-divider" /><strong><center>Back End Language</center></strong></li>
            <li><Link className="dropdown-item" to="/instructionnode">NodeJs</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.javatpoint.com/javascript-mcq" target="_blank">Mock Paper</a>
        </li>
        <li className="nav-item">
          {localStorage.getItem('token') ?
         <Link className="nav-link" to="/contact">Contact US</Link> :<div className='nav-link active nav'> <span onClick={handleOnclickabout}>ContactUs</span>   </div> }
        </li>
        <li className="nav-item">
        {localStorage.getItem('token') ?
        <a href="#aboutus" className="nav-link" ><span>About Us</span></a> :<div className='nav-link active nav'> <span onClick={handleOnclickabout}>AboutUS</span>   </div> }
        </li>
      </ul>
      <form className="d-flex">
        {!localStorage.getItem('token') ? <> <Link className="btn btn-primary btn-xl" to="/register">Register</Link></> : <button className='btn btn-primary' onClick={handleLogout}>Logout</button>}
      </form>
    </div>
  </div>
</nav>
   
  )
}






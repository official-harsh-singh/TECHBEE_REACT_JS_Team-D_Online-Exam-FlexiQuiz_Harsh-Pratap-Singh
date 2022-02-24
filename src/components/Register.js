import React, {useState} from "react"
import { useHistory } from "react-router-dom";
import icon from './images/icons.png'

const Registertrial = (props) => {
  const [credentials, setCredentials] = useState({name:"", email: "", password: "", cpassword:""}) 
  let history = useHistory();
          const handleSubmit = async (e) => {
            e.preventDefault();
            const {name, email, password} = credentials
            const response = await fetch("http://localhost:5000/api/auth/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, email, password})
                });
            const json = await response.json()
            console.log(json);
            if (json.success){
                // authtoken will be saved and it will redirected to home
                localStorage.setItem('token', json.authtoken); 
                history.push("/");
                props.showAlert("Account created successfully", "success")
            }
            else{
               props.showAlert("Invalid username or password", "danger")
            }
        }

        const onChange = (e)=>{
            setCredentials({...credentials, [e.target.name]: e.target.value})
        }



  return (
    <div className="position-absolute top-50 start-5 translate-middle">
            
            <div className="wrapper">
            <div className="logo"> <img src={icon}alt=""/> </div>
            <form className="p-3 mt-3" onSubmit={handleSubmit}>
                <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span>
                <input className="LoginInput" type="text" name="name" id="name"  placeholder="Your Name" onChange={ onChange } required minLength={3}/> </div>
                <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span>
                <input className="LoginInput" type="text" name="email" id="email"  placeholder="Your Email" onChange={ onChange } required/></div>
                <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span>
            <input className="LoginInput" type="password" name="password" id="password"   placeholder="Your Password" onChange={ onChange } required minLength={5}/>
            </div>
            <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span>
             <input className="LoginInput" type="password" name="cpassword" id="cpassword" placeholder="Re-enter Password" onChange={ onChange } required minLength={5}/>
             </div>
             <button type="submit" className="btn mt3">Register</button>
            <div className="or">or</div>
             <div className="btn mt3" onClick={() => history.push("/login")}>Login</div>
            </form>
        </div>
        </div>
  )
}

export default Registertrial

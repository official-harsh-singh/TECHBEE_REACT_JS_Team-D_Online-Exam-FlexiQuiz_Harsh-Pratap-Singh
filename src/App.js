import './App.css'
import Login from "./components/Login1"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import InstructionHtml from './components/InstructionHtml';
import Htmlexam from './components/Htmlexam';
import Cssexam from './components/Cssexam';
import Javascriptexam from './components/Javascriptexam';
import Nodejs from './components/Nodejs';
import Register from './components/Register';
import Alert from './components/Alert';
import Instructioncss from './components/Instructioncss'
import Instructionjs from './components/Instructionjs'
import Contactus from './components/Contactus';
import Instructionnode from './components/Instructionnode';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <div>
  <Router>
    <Navbar showAlert={showAlert}/>
    <Alert alert={alert}/>
      <Switch>
        <Route exact path="/">
          <Body showAlert={showAlert}/>
        </Route>
        <Route exact path="/instructionHtml">
       <InstructionHtml />
        </Route>
        <Route exact path="/htmlexam">
       <Htmlexam/>
        </Route>
        <Route exact path="/instructionCss">
       <Instructioncss/>
        </Route>
        <Route exact path="/cssexam">
       <Cssexam/>
        </Route>
        <Route exact path="/instructionjs">
          <Instructionjs />
        </Route>
        <Route exact path="/javascriptexam">
       <Javascriptexam/>
        </Route>
        <Route exact path="/nodejs">
      <Nodejs/>
        </Route>
        <Route exact path="/instructionnode">
      <Instructionnode/>
        </Route>
        <Route exact path="/contact">
        <Contactus />
        </Route>
        <Route exact path="/login">
          <Login showAlert={showAlert}/>
        </Route>
        <Route exact path="/register">
      <Register showAlert={showAlert}/>
        </Route>
      </Switch>
  </Router>
    </div>
  );  
}

export default App;


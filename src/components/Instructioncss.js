import React from 'react';
import { useHistory } from "react-router-dom";

function Instruction() {
  const history = useHistory();
  return (
    <div>
      <div className='position-absolute top-50 start-50 translate-middle widen'>
      <h1 className="h1">Instruction</h1>
      <h2 className="h2 black">Please Read The Following Instruction before starting the test:</h2>
      <br/ >
      <div className='instruction'>
        <div className="info loginBodyi">1. You will have only <span>15 minutes</span> for the test</div>
        <div className="info loginBodyi">2. Once you select your answer. you can not  reselect it</div>
        <div className="info loginBodyi">3. After Clicking on any option you will be redirected to the next question</div>
        <div className="info loginBodyi">4.You have to finish your test within 15 minutes</div>
        <div className="nfo loginBodyi">5. You can't exit from the quiz while playing</div>
        <div className="info loginBodyi">6. You will get points on the basis of correct answer</div>
      </div>
      <button className="exambutton btn btn-light" onClick={()=>{history.push("/cssexam")}}>Start test</button>
      </div>
    </div>
  )
}

export default Instruction

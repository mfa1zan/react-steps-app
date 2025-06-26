import { useState } from "react";
import Button from "./Button";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


export default  function App(){
  // const step = 1;
  const [step, setStep] =useState(1)
  const [isOpen,setIsOpen] = useState(true)
  function handlePrevious(){
    setStep(getStep(step)-1);
  }
  function handleNext(){
    setStep(getStep(step)+1);
  }
  function getStep(step){
    if(step < 1) return 1
    else if (step >=1 && step <=3) return step
    else return 3;

  }
  return (
  
<>

  <button className="close" onClick={()=>setIsOpen(s =>!s)}>&times;</button>  
  {/* if we want to update state based on current value of state then above is best practice rather than (!isOpen as 
  sometimes we want to skip twice but calling same function will not work )*/}
  {  isOpen && (
    <div className="steps">
          <div className="numbers">
            <div className={getStep(step) ===1 ? 'active' : ''}>1</div>
            <div className={getStep(step) === 2 ? 'active' : ''}>2</div>
            <div className={getStep(step) === 3 ? 'active' : ''}>3</div>
          </div>

          <p className="message">Step {getStep(step)}: {messages[getStep(step)-1]}</p>

          <div className="buttons">
            <Button textColor={"#fff"} bgColor={"#7950f2"} onClick={handlePrevious} text={"Previous" } emoji={"👈🏻"} />
            <Button textColor={"#fff"} bgColor={"#7950f2"} onClick={handleNext} text={"Next"}  emoji={"👉🏻"}/>
          </div>
    </div>  )
  }
  </>)
}

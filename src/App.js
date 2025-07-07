import { useState } from "react";
import Button from "./components/Button";
import  StepMessage  from "./components/StepMessage";

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
   if (step > 1) setStep(s=> s-1)
  }
  function handleNext(){
   if (step < 3) setStep(s=> s+1)
  }

  return (
  
<>

  <button className="close" onClick={()=>setIsOpen(s =>!s)}>&times;</button>  
  {/* if we want to update state based on current value of state then above is best practice rather than (!isOpen as 
  sometimes we want to skip twice but calling same function will not work )*/}
  {  isOpen && (
    <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          
          <StepMessage step={step}>{messages[step -1]}</StepMessage>
 
          <div className="buttons">
            <Button textColor={"#fff"} bgColor={"#7950f2"} onClick={handlePrevious} ><span>👈🏻</span> Previous</Button>
            <Button textColor={"#fff"} bgColor={"#7950f2"} onClick={handleNext} >Next <span>👉🏻</span></Button>
          </div>
    </div>  )
  }
  </>)
}


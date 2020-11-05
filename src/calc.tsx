import React,{useState} from 'react';
import './calc.css';

function Calc(){
    enum Unit {
        oneCMtoInches=2.54,
        oneKGtoPounds=2.205,
        INCHES_IN_FEET=12
    }
    const [weight,setWeight]=useState<string>('');
    const [feet,setHeightFeet]=useState<string>('');
    const [inches,setInches]=useState<string>('');
    const [result,setResult]=useState<string>('');
    const [bmi,setBMI]=useState<number>(0);
    const [green,setGreen]=useState<boolean>(false);
    const [red,setRed]=useState<boolean>(false);

    const handleWeight=(event:React.ChangeEvent<HTMLInputElement>):void=>{
        setWeight( event.target.value);
        
    }
    const handleHeightFeet=(event:React.ChangeEvent<HTMLInputElement>):void=>{
         setHeightFeet( event.target.value);
      
    }
    const handleHeightInches=(event:React.ChangeEvent<HTMLInputElement>):void=>{
        setInches( event.target.value);
    
    }
    const calculateBMI=():void=>{
  
        if (weight!=="" && feet!=="" && inches!=="" ){    
           

            var h:number = Number(feet);   
            h *=Unit.INCHES_IN_FEET;
            h += Number(inches);
            let w:number = Number(weight);
            w=w*Unit.oneKGtoPounds;
    
          var bmi:number =(w / (h*h)) * 703;
          bmi=bmi/Unit.oneKGtoPounds;
          bmi=Number(bmi.toPrecision(3))
          setBMI(bmi);
          getBMIResults(bmi)
          
        }
        return;
      }
     
      const getBMIResults=(bmi:any):void=>{
          
        
        if (bmi <= 18.5){
          setResult( 'Underweight');
          setGreen(false);
          setRed(true);
                  } 
        else if (bmi <= 24.9) {
            setResult('Normal weight');
            setRed(false);
            setGreen(true);
                  
        }
        else if (bmi <= 29.9){
            setResult('Overweight');
            setRed(true);
            setGreen(false);
          
        }
        else if (bmi >= 30) {
            setResult('Obesity');
            setRed(true);
            setGreen(false);
            
        } else {
            setResult('BMI');
            setRed(false);
            setGreen(false);
            
        }
        return;
      }
     
      
    return (
        <div className="bmi-main-container">
        <div className="bmi-header">
        <h1>BMI Calculator</h1>
            <p>Enter your weight and height below.</p>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <form>
              <div className="form-content">
                <legend className="input-label">Weight</legend>
                <div className="row">
                  <div className="form-input-content">
                    <input id="bmiWeight" type="number"  onChange={handleWeight} />
                    <label  htmlFor="bmiWeight">kg</label>
                  </div>
                </div>
              </div>

              <div className="form-content">
                <legend className="input-label">Height</legend>
                <div className="row">
                  <div className="form-input-content">
                    <input  id="bmiHeight" type="number"  onChange={handleHeightFeet} />
                    <label  htmlFor="bmiHeight">feet</label>
                  </div>
                  <div className="form-input-content">
                    <input  id="bmiHeight" type="number"   onChange={handleHeightInches} />
                    <label  htmlFor="bmiHeight">inches</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <button onClick={()=>calculateBMI()}>Calculate</button>
          <div className="result-display">
            {
            (green)
            ?<div className="green">
              <p>{bmi}kg-{result}</p>
            </div>
            :
            <div></div>
            }
            {
             (red)
             ?<div className="red">
               <p>{bmi}kg-{result}</p>
             </div>
             :
             <div></div>   
            }
          </div>
          

        </div>
      </div>
    );
  }

export default Calc;

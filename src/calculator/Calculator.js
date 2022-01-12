import './Calculator.css'
import {BackspaceOutlined} from '@material-ui/icons'; 
import { useState } from 'react'
export default function Calculator(){
  const [value, setValue] = useState("");
  const handleClick=(event)=>{
   const expre= (event.target.value)
   setValue(value.concat(expre))
  
  }
  function clear(){
    setValue(" ")
  }
  function operation(){
    const result=eval(value)
    setValue(result)
  }
  function Backspace(){
    setValue(value.slice(0,value.length-1))
  }
  function square(){
    setValue(value*value)
  }
  return(
    
    <div className="containerFluid">
      <div className='row' id="blank"></div>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4" id="calculatorBox">
        <input type="text" value={value} placeholder='0'></input><br></br>
        <button className='btn btn-danger col-lg-2'  onClick={clear}>C</button>
        <button className='btn btn-warning col-lg-2'  onClick={Backspace}><BackspaceOutlined/></button>
        <button className='btn btn-warning col-lg-2' value="+" onClick={handleClick}>+</button>
        <button className='btn btn-warning col-lg-2' value="-" onClick={handleClick}>-</button>
        <br></br>
        <button className='btn btn-info col-lg-2' value="7" onClick={handleClick}>7</button>
        <button className='btn btn-info col-lg-2' value="8" onClick={handleClick}>8</button>
        <button className='btn btn-info col-lg-2' value="9" onClick={handleClick}>9</button>
        <button className='btn btn-warning col-lg-2' value="*" onClick={handleClick}>*</button>
        <br></br>
        <button className='btn btn-info col-lg-2' value="4" onClick={handleClick}>4</button>
        <button className='btn btn-info col-lg-2' value="5" onClick={handleClick}>5</button>
        <button className='btn btn-info col-lg-2' value="6" onClick={handleClick}>6</button>
        <button className='btn btn-warning col-lg-2' value="/" onClick={handleClick}>/</button>
        <br>
        </br>
        <button className='btn btn-info col-lg-2' value="1" onClick={handleClick}>1</button>
        <button className='btn btn-info col-lg-2' value="2" onClick={handleClick}>2</button>
        <button className='btn btn-info col-lg-2' value="3" onClick={handleClick}>2</button>
        <button className='btn btn-warning col-lg-2' value="" onClick={square}>x<sup>2</sup></button>
        <br>
        </br>
        <button className='btn btn-info col-lg-2' value="0" onClick={handleClick}>0</button>
        <button className='btn btn-warning col-lg-2' value="." onClick={handleClick}>.</button>
        <button className='btn btn-success col-lg-6'id="equals" value="1" onClick={operation}>=</button>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  )
}
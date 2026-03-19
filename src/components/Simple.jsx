import { useState,useRef } from "react"

export default function Simple() {
  let inputRef=useRef([]);
  const [otp,setOtp]=useState(new Array(6).fill(""));
  const handleChange=(e,index)=>{
    let value=e.target.value;
    if(isNaN(value)) return;
    let newOtp=[...otp];
  newOtp[index]=value.slice(-1);
  setOtp(newOtp);
  if(value && index<5) inputRef.current[index+1].focus();
  }
  const handleKeyDown=(e,index)=>{

    if(e.key ==="Backspace" && !otp[index] && index>0){
      inputRef.current[index-1].focus();
    }else if(e.key>="0" && e.key<="9" && otp[index] && index<5){
      inputRef.current[index+1].focus();
    }

  }
  return (
    <div style={{ padding: '20px' }}>
      <h1>Simple Component</h1>
      <p>This is a simple component.</p>
      {
        otp && otp.map((item,index)=>(
          <input
          key={index}
          ref={(data)=>inputRef.current[index]=data}
          type="text"
          value={item}
          onKeyDown={(e)=>{handleKeyDown(e,index)}}
          onChange={(e)=>{handleChange(e,index)}}
          />
        ))
      }
    </div>
  )
}



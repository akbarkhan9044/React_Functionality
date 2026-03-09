import React, { useState, useRef } from "react";

export default function Otp(){
  const [otp,setOtp]=useState(new Array(6).fill(""))
  const inputRefs=useRef([])

  const handleOtpChange=(index,e)=>{
    let val=e.target.value;
    if(isNaN(val)) return
    const newOtp=[...otp];
    newOtp[index]=val.slice(-1);
    setOtp(newOtp);
  }

  const handleKeyDown=(index,e)=>{
    console.log(e.key);
    if(e.key==="Backspace" && !otp[index] && index>0){
      inputRefs.current[index-1].focus()
    }
    if(e.key>="0" && e.key<="9" && otp[index] && index<5){
      inputRefs.current[index+1].focus()
    }
  }

  return(
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'50px'}}>
      <h2>Enter OTP</h2>
      <div style={{display:'flex',gap:'10px',marginTop:'20px'}}>
      {
        otp && otp.map((item,index)=>(
          <input
          key={index}
          ref={(el)=>inputRefs.current[index]=el}
          type="text"
          value={item}
          onChange={(e)=>handleOtpChange(index,e)}
          onKeyDown={(e)=>handleKeyDown(index,e)}
          style={{
            width:'45px',
            height:'45px',
            textAlign:'center',
            fontSize:'20px',
            fontWeight:'bold',
            border:'2px solid #ccc',
            borderRadius:'8px',
            outline:'none',
            appearance:'textfield',
            MozAppearance:'textfield',
            WebkitAppearance:'none',
          }}
           />
        ))
      }
      </div>
      <p style={{marginTop:'20px',fontSize:'16px'}}>OTP: {otp.join('')}</p>
    </div>
  )
}

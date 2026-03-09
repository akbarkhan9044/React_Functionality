import React, { useState,useRef } from 'react'

export default function NewOtp() {
  const [otp,setOtp]=useState(new Array(6).fill(''));
  const inputRef=useRef([]);
  const handleChange=(e,index)=>{
    let val=e.target.value;
    if(isNaN(val)) return;
    const newOtp=[...otp];
    newOtp[index]=val.slice(-1);
    setOtp(newOtp);

  }

  const handleKeyDown=(e,index)=>{

    if(e.key ==="Backspace" && !otp[index] && index>0){
       inputRef.current[index-1].focus();
    } 
    if(e.key>="0" && e.key<="9" && otp[index] && index<5){
      inputRef.current[index+1].focus();
    }

  }
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px',marginTop:'50px'}}>
    {
      otp && otp.map((item,index)=>(
        <input
        ref={(el)=>inputRef.current[index]=el}
        type="text"
        value={item}
        onChange={(e)=>{handleChange(e,index)}}
        onKeyDown={(e)=>{handleKeyDown(e,index)}}
        style={{
          height:"70px",
          width:"70px",
          padding:"20px",
          textAlign:"center",
          fontSize:"24px",
        }}
        
        />
      ))
    }    
    </div>
  )
}

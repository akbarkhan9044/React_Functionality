import { useState } from "react"
import  "../App.css";
import { Activity } from "react";
export default function Tab() {
  const [tabs,setTabs]=useState([
   {
    name:"Form",
    id:"form"
   },{
    name:"About",
    id:"about"
   },
   {
    name:"Setting",
    id:"setting"
   }
  ]);
  const [selectedTab,setSelectedTab]=useState("setting");
  const handleClick=(item)=>{
    setSelectedTab(item.id);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    let data=new FormData(e.target);
    console.log(Object.fromEntries(data));
  }
  return (
    <div>
      {tabs && tabs.map((item)=>(
       
        <button
      
        onClick={()=>{handleClick(item)}}
        className={item.id=== selectedTab?"selected":""}
        key={item.id}>{item.name}</button>

      ))}


      <Activity
      key="setting"
      mode={selectedTab === "setting"?"visible":"hidden"}>
        <div>
          <h1>Setting</h1>
          <p>Welcome to the Setting.</p>
        </div>
      </Activity>
      <Activity
      setting="about"
      mode={selectedTab ==="about"?"visible":"hidden"}>
        <div>
          <h1>About</h1>
          <p>Welcome to About Page.</p>
        </div>
      </Activity>
      <Activity
      setting="form"
      mode={selectedTab === "form"?"visible":"hidden"}>
        <form onSubmit={handleSubmit}>
          <div>
            <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Username"
            />
          </div>
          <div>
            <input
            type="text"
            id="password"
            name="password"
            placeholder="Enter Password"
            />
          </div>
          <button
          type="submit"
          >Submit</button>
        </form>
      </Activity>
    </div>
  )
}

import React, { useEffect } from 'react'

export default function CheckboxExample() {
  const [checkedItems, setCheckedItems] = React.useState([]);
  const [allChecked, setAllChecked] = React.useState(false);
  const  items=[
    {
      id:1,
      name:"HTML",
      value:"html"
    },
    {
      id:2,
      name:"CSS",
      value:"css" 
    },
    {
      id:3,
      name:"JavaScript",
      value:"javascript"
    },{
      id:4,
      name:"React",
      value:"react"
    }
  ]
  const handleChange=(e)=>{
    let value=e.target.value;
    if(!checkedItems.includes(value)){
      setCheckedItems((prev)=>[...prev,value]);
    }else{
   setCheckedItems((prev)=>{
    return prev.filter((item)=>{
      return item !== value
    })
   }); 
    }
    console.log(checkedItems);
  }
  const handleAllChange=(e)=>{
    let value=e.target.value;
    if(!allChecked){
      setCheckedItems(items.map((item)=>item.value));
      setAllChecked(true);
    }else{
      setCheckedItems([]);
      setAllChecked(false);
    }
  }

  const isAllChecked=items.length === checkedItems.length;
  useEffect(()=>{
    setAllChecked(isAllChecked)
  },[checkedItems]);
  return (
    <div>
      <h1>Checkbox Example</h1>
      <p>Select your favorite technologies:</p>
      <input 
      type="checkbox"
      id="selectAll"
      value="selectAll"
      checked={allChecked}
      onChange={handleAllChange}

      />
      <label htmlFor="selectAll">Select All</label>
      {items && items.map((item)=>(
        <div key={item.id}>
          <input
          type="checkbox"
          id={item.value}
          value={item.value}
          checked={checkedItems.includes(item.value)?true:false}
          onChange={handleChange}
          />
          <label htmlFor={item.value}>{item.name}</label>
          </div>
      ))}

      {checkedItems.length>0 && <p>Checked Items: {checkedItems.join(", ")}</p>}
    </div>
  )
}

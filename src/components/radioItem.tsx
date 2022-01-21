import { useState } from 'react';
import '../App.css';
import RadioItemDetails from './details';

function RadioItem() {
  const [clicked,setClick] = useState(false);

  const handleClick = ()=>{
    setClick(!clicked);
  } 
  return (
     <>
     {clicked?<RadioItemDetails/>:""}
     <div onClick={()=>{handleClick()}} className="station-item">
      <div className='station-name'>Station name</div>
      <div className='station-number'>Station freequency</div>
    </div>

    </>
  );
}

export default RadioItem;

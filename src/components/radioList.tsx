import { useState } from 'react';
import '../App.css';
import RadioItem from './radioItem';

function RadioList() {
  const [v, setV] = useState(false);
  const handleClick = ()=>{
    console.log('hira hasan');
    
  }
  return (
     <div className="station-container">
       <RadioItem/>
       <hr />
       {/* <RadioItem /> */}
       {/* <RadioItem data ={2} />
       <hr />
       <RadioItem data ={3}/>
       <hr />
       <RadioItem data ={4} />
        <hr />
       <RadioItem data ={5} />  <hr />
       <RadioItem data ={6} />  <hr />
       <RadioItem data ={7}/>  <hr />
       <RadioItem data ={8} />  <hr />
       <RadioItem data ={9}/> */}
     </div>
  );
}

export default RadioList;

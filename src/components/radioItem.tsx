import '../App.css';
import RadioItemDetails from './details';

function RadioItem() {
  return (
     <>
     <RadioItemDetails/>
     <div className="station-item">
      <div className='station-name'>Station name</div>
      <div className='station-number'>Station freequency</div>
    </div>

    </>
  );
}

export default RadioItem;

import React, {useState} from "react";
import { numbers } from './../../../data';
import NumbersButton from './NumberButton';
//import any components needed

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numbersState, setNumbersState] = useState(numbers);
  // console.log('numbers',{numbersState});
  return (
    <div>
      {numbersState.map((numbers, index) =>(
        <numbersButton number={numbers} key={index} />
      ) )}
    </div>
  );
};
  
  

export default Numbers
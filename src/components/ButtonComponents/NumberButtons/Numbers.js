import React, {useState} from "react";
import { numbers } from './../../../data';
import NumberButton from './NumberButton';
//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbersState, setNumbersState] = useState(numbers);
  // console.log('numbers',{numbersState});
  return (
    <div>
      {numbersState.map((numbers, index) =>(
        <NumberButton number={numbers} key={index} />
      ) )}
    </div>
  );
};
  
  

export default Numbers
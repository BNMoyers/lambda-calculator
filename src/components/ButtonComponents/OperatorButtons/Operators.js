import React, {useState} from "react";
import { operators } from './../../../data'
import OperatorButton from './OperatorButton'

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  return (
    <div>
       {operatorState.map((operators, index) =>(
        <OperatorButton operator={operators.char} key={index} />
      ) )}
    
    </div>
  );
};
export default Operators;
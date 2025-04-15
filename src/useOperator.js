import {calculatorDisplay} from "./selectors.js";
import calculate from "./calculate.js";

import {
    getAwaitingNextValue, 
    getOperatorValue, 
    getFirstValue, 
    setAwaitingNextValue, 
    setOperatorValue, 
    setFirstValue} from "./values.js"

function useOperator(operator){
    const currentValue = Number(calculatorDisplay.textContent);

    if(getOperatorValue() && getAwaitingNextValue()){
        setOperatorValue(operator);
        return;
    }
    if(!getFirstValue()){
        setFirstValue (currentValue);
    } else {
        const calculation = calculate[getOperatorValue()](getFirstValue(), currentValue);
        calculatorDisplay.textContent = calculation;
        setFirstValue(calculation);
    }
    setAwaitingNextValue(true);
    setOperatorValue(operator);
}

export default useOperator;
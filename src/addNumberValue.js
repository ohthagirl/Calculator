import{calculatorDisplay} from "./selectors.js";
import{getAwaitingNextValue, setAwaitingNextValue} from "./values.js"

function addNumberValue(number){
    if(getAwaitingNextValue()){
        calculatorDisplay.textContent = number;
        setAwaitingNextValue (false);
    } else {
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === "0" ? number : displayValue + number;
    }
    
}

export default addNumberValue;
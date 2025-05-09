import { useState } from 'react';

const useInput = (validateValue) => {
   const [enteredValue, setEnteredValue] = useState('');
   const [isTouched, setIsTouched] = useState(null);

   const valueIsValid = validateValue(enteredValue);
   const hasError = !valueIsValid && isTouched;

   const valueChangeHandler = (event) => {
      setEnteredValue(event.target.value);
   };

   const inputBlurHandler = () => {
      setIsTouched(true);
   };

   const reset = () => {
      setEnteredValue('');
      setIsTouched(null);
   };

   return {
      value: enteredValue,
      isValid: valueIsValid,
      hasError,
      valueChangeHandler,
      inputBlurHandler,
      reset,
   };
};

export default useInput;
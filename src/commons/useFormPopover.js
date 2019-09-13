import { useState } from 'react';


const useFormPopover = (asyncFunc, initialValue) => {

  const [inputValue, setInputValue] = useState('');

  const [clicked, setClicked] = useState(false);


  function handleChange(event) {
    event.persist();
    setInputValue(event.target.value);
  }

  function handleClickChange(visible) {
    setClicked(visible);
    if (visible) {
      setInputValue(initialValue);
    } else {
      setInputValue('');
    }
  }

  // for the Cancel Button
  function onCancel() {
    handleClickChange(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    asyncFunc(inputValue).then(() => onCancel());
  }

  return {
    inputValue,
    clicked,
    handleChange,
    handleClickChange,
    handleSubmit,
    onCancel
  };
}


export default useFormPopover;

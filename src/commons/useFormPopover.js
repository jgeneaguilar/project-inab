import { useState } from 'react';


const useFormPopover = (onSubmit) => {

  const [inputValue, setInputValue] = useState('');

  const [clicked, setClicked] = useState(false);

  function handleChange(event) {
    event.persist();
    setInputValue(event.target.value);
  }

  function handleClickChange(visible) {
    setClicked(visible);
    setInputValue('');
  }

  // for the Cancel Button
  function onCancel() {
    handleClickChange(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
      onSubmit();
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

import { useState } from 'react';

const useFormPopover = (asyncFunc, deleteFunc, initialValue) => {
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

  // for the Delete Button
  function onDelete(event) {
    event.preventDefault();
    if (!deleteFunc) {
      return;
    }
    deleteFunc().then(() => onCancel());
  }

  function handleSubmit(event) {
    event.preventDefault();
    asyncFunc(inputValue).then();
    onCancel();
  }

  return {
    inputValue,
    clicked,
    handleChange,
    handleClickChange,
    handleSubmit,
    onCancel,
    onDelete,
  };
};

export default useFormPopover;

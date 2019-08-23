import { useState } from 'react';


const useFormPopover = (onSubmit) => {

  const [values, setValues] = useState({});

  const [clicked, setClicked] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    event.persist();
    setValues(values => ({
      ...values,
      [name]: value 
    }))
  }

  function handleClickChange(visible) {
    setClicked(visible);
    setValues({});
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
    values,
    clicked,
    handleChange,
    handleClickChange,
    handleSubmit,
    onCancel
  };
}


export default useFormPopover;

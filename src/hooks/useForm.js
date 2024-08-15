import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = callback => event => {
    event.preventDefault();
    callback(values);
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
}

export default useForm;

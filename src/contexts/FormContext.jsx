import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormContextProvider = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    comment: ""
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {props.children}
    </FormContext.Provider>
  );
}

export default FormContextProvider;
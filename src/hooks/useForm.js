import { useState } from 'react';

export default function useForm(valoresIniciais){
    const [values, setValues] = useState(valoresIniciais);
  
    function setValue(key, value) {
      setValues({
        ...values,
        [key]: value,
      });
    }
  
    function handleChange(infosDoEvento) {
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value,
      );
    }
  
    function clearForm(){
      setValues(valoresIniciais);
    }
  
    return{
      values,
      handleChange,
      clearForm
    }
}
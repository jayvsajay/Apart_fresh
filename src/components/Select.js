import { ErrorMessage, Field } from 'formik';
import React from 'react'
import TextError from './TextError';

function Select(props) {
    const {label,options,name,...rest}=props;
  return (
    <div>
        <label htmlFor='Select'>{label}</label>
        <Field as='select' id={name} name={name} {...rest}>
            {options.map(option=>{
                return(
                    <option key={option.value} value={option.value}>
                        {option.key}
                    </option>
                )
            })

            }
        </Field>
        <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Select
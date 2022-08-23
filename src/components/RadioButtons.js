import { ErrorMessage, Field } from 'formik';
import React from 'react'
import TextError from './TextError';

function RadioButtons(props) {
    const {label,options,name,...rest}=props;
  return (
    <div>
        <label>{label}</label>
        <Field  {...rest} name={name}>
            {({field})=>{
                return options.map(option=>{
                    return(
                        <React.Fragment key={option.key}>
                            <input type='radio' id={option.value}
                            {...field}
                            value={option.value}
                            checked={field.value===option.value}
                            />
                            <label htmlFor={option.value}></label>{option.key}
                        </React.Fragment>
                    )
                })

            }}
        </Field>
        <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default RadioButtons
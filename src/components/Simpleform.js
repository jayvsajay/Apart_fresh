import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function Simpleform() {

    // const validate=values=>{
    //     let error={}
    //     if(!values.Name){
    //         error.Name='Required'
    //     }
    //     if(!values.email){
    //         error.email='Required'
    //     }
    //     if(!values.age){
    //         error.age='Required'
    //     }else if(values.age<=18){
    //         error.age="Age must be greater than 18 years"
    //     }
    //     return error
    // }

    const validationSchema =  Yup.object({
        Name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email:Yup.string().email('invalid email').required('Required!'),
        age:Yup.number().required('Required!')
    })
    const onSubmit=values=>{
        console.log(values)
    }
    const initialValues={
        Name:'',
        email:'',
        age:''
    }
  const formik=useFormik({
      initialValues,
    //   initialValues:{
    //     Name:'',
    //     email:'',
    //     age:''
    // },
      onSubmit,
    //   onSubmit:values=>{
    //     console.log(values)
    //   },
validationSchema
  })

    return (
    <div>
        <h1>Simple form in formik</h1>
        <form onSubmit={formik.handleSubmit}>
            <div>
            <label htmlFor='Name'>Name</label>
                <input type='text' 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // {...formik.getFieldProps}
                 value={formik.values.Name} id='Name' name='Name'/>
            
                     {formik.touched.Name && formik.errors.Name?(<div style={{color:'red'}}>{formik.errors.Name}</div>):null}
            </div>
            <div>
            <label htmlFor='Email'>Email</label>
                <input type='email' id='email' name='email' onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                value={formik.values.email}/>
                  { formik.touched.email && formik.errors.email?(<div  style={{color:'red'}}>{formik.errors.email}</div>):null} 
          
            </div>
            <div>
            <label htmlFor='age'>Age </label>
                <input type='text' id='age' name='age' onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age}/>
                  {formik.touched.age && formik.errors.age?(<div  style={{color:'red'}}> {formik.errors.age}</div>):null}
           </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

import React, { useState } from 'react'
import { ErrorMessage, FastField, Field, FieldArray, Form, Formik} from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';
export default function Youtubeform() {
    const [formValues,setFormvalues]=useState(null)

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
    const onSubmit=(values)=>{
        console.log(values)
        // console.log(onSubmitProps)
        // onSubmitProps.setSubmitting(false)
    }
    const initialValues={
        Name:'',
        email:'',
        age:'',
        comment:'',
        address:'',
        social:{
            facebook:'',
            twitter:''
        },
        phonenumber:['',''],
        phNumber:['']
    }
    const savedValues={
        Name:'VInay',
        email:'ajsh2@gmail.com',
        age:'23',
        comment:'zxjrng',
        address:'cv.lsgjTO:H',
        social:{
            facebook:'',
            twitter:''
        },
        phonenumber:['',''],
        phNumber:['']
    }

    return (
    <Formik
    initialValues={formValues || initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    enableReinitialize
    // validateOnChange={false}
    // validateOnBlur={false}
    // validateOnMount
    >
        {formik=>{
            console.log('form props',formik)
            return(
        
        <Form>
            <h1>Formik components form</h1>
            <div>
            <label htmlFor='Name'>Name</label>
                <Field type='text' id='Name' name='Name'/>
                <ErrorMessage name='Name' component={TextError}/>
            </div>
            <div>
            <label htmlFor='Email'>Email</label>
                <Field type='email' id='email' name='email' />
                 <ErrorMessage name='email'>
                     {errorMsg=><div style={{color:'red'}}>{errorMsg}</div>}
                 </ErrorMessage>
            </div>
            <div>
            <label htmlFor='age'>Age </label>
                <Field type='text' id='age' name='age' />
                 <ErrorMessage name='age'/>
           </div>
           <div>
               <lable htmlFor='comment'>Comments</lable>
               <Field as='textarea' name='comment'/>
           </div>
           <div>
               <label htmlFor='address'>Address</label>
               <FastField  name='address'/>
               {
                   props=>{
                   const {field,meta}=props;
                   return(
                    <div>
                        <input type='text' id='address' {...field}/>
                        {meta.touch && meta.error?<div>{meta.error}</div>:null}
                        </div>
                   )
                   
                }
               }
           </div>
           <div>
               <label htmlFor='facebook'>Facebook Profile</label>
               <Field name='social.facebook' id='facebook'/>
           </div>
           <div>
               <label htmlFor='twitter'>Twitter Profile</label>
               <Field name='social.twitter' id='twitter'/>
           </div>
           <div>
               <label htmlFor='primaryph'>Primary phone</label>
               <Field name='phonenumber[0]' id='primaryph'/>
           </div>
           <div>
               <label htmlFor='secondaryph'>Secondary phone</label>
               <Field name='phonenumber[1]' id='secondaryph'/>
           </div>
           <div>
               <label htmlFor='phNumber'>List of phonenumbers</label>
               <FieldArray name='phNumber'>
                   {fieldArrayProps=>{
                       const {push,remove,form}=fieldArrayProps;
                       const {values}=form;
                       const {phNumber}=values
                       return(
                           <div>
                               {phNumber.map((phN,index)=>(
                                   <div key={index}>
                                   <Field name={`phNumber[${index}]`}/>
                                   {index>0 && (
                                       <button type='button' onClick={()=>remove(index)}>
                                           {' '}
                                           -{' '}
                                       </button>
                                         )}
                                       <button type='button' onClick={()=>push('')}>
                                        {' '}
                                        + {' '}
                                       </button>
                                 
                                   </div>
                               ))}
                           </div>
                       )
                   }}
               </FieldArray>
           </div>
            {/* <button type='submit'>Submit</button>
            <button onClick={()=>formik.validateField('comments')}>Validate Comments</button>
            <button onClick={()=>formik.validateForm()}>Validate All</button>
            <button onClick={()=>formik.setFieldTouched('comments')}>Visit Comments</button>
            <button onClick={()=>formik.setTouched({
                Name:true,
                email:true,
                age:true
        })}>Vist fields</button> */}
        <button type='submit' onClick={()=>setFormvalues(savedValues)}>Submit</button>
        <button type='submit' disabled={!formik.dirty && formik.isValid}>Submit</button>

        <button type='submit' disabled={ formik.isSubmitting}>Submit button</button>
        </Form>
        )
    }}
    </Formik>
  )
}

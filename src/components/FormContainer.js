import { Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup'
import FormControler from './FormControler';

function FormContainer(props) {
    const dropdownoptions=[
        {key:'Selection on option',value:''},
        {key:'Option 1',value:'OPtion1'},
        {key:'Option 2',value:'OPtion2'},
        {key:'Option 3',value:'OPtion3'},
        
    ]
    const radiooptions=[
        {key:'Option 1',value:'OPtion1'},
        {key:'Option 2',value:'OPtion2'},
        {key:'Option 3',value:'OPtion3'},
        
    ]
    const Checkoptions=[
        {key:'Option 1',value:'Coption1'},
        {key:'Option 2',value:'Coption2'},
        {key:'Option 3',value:'Coption3'},
        
    ]
    const initialValues={
        email:'',
        description:'',
        selectoption:'',
        radiooption:'',
        Checkoption:[],
        birthDate:null
    };
    const validateSChema=Yup.object({
        email:Yup.string().required('Required'),
        description:Yup.string().required('Required'),
        selectoption:Yup.string().required('Required'),
        radiooption:Yup.string().required('Required'),
        Checkoption:Yup.string().required('Required'),
        birthDate:Yup.date().required('Required').nullable()
    })
    const onSubmit=values=>console.log(values)
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validateSChema}
    onSubmit={onSubmit}>
        {
            formik=><Form>
                <FormControler control='input' type='email' label="Email" name='email'/>
                <FormControler control='textarea' label='Description' name='description'/>
                <FormControler control='select' label='Select an OPtions' name='selectoption'
                options={dropdownoptions}/>

                <FormControler control='radio' label='Radio options' name='radiooption'
                options={radiooptions}/>
                <FormControler control='checkbox' label='Check options' name='Checkoption'
                options={Checkoptions}/>
                <div>
                <FormControler control='date' label="Pick date" name='birthDate'/>
                </div>
                <button type='submit'>Submit</button>
            </Form>
        }
    </Formik>
  )
}

export default FormContainer
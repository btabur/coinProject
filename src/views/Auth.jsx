import { useFormik } from 'formik'
import React from 'react'
import InputField from './InputField'
import { inputs } from '../constans'
import { schema } from '../schema'


const Auth = () => {
    
    const formik = useFormik({
        //formda tutulacak verilerin ilk değerlerini ver
        initialValues:{
            email:'',
            age:'',
            password: '',
            confirmPassword:''
        },
        //form gönderildiğinde çalışan fonksiyon
        onSubmit:(values,actions)=> {
            localStorage('user',JSON.stringify(values))
            actions.resetForm()
        },
        validationSchema:schema
    })
  
  return (
    <div className='auth-page'>
        <div className="container">
            <h2 className='d-flex gap-3 justify-content-center align-items-center  text-center py-5 '>
                <img height={60} src="/c-logo.png" alt="coin-logo" />
                <span>Coin Market</span>
            </h2>
      
        {/* form alanı */}
        <form onSubmit={formik.handleSubmit}>
           {inputs.map((data,i)=> <InputField key={i} formik={formik} data={data}/>)}
           <button type='submit'>Kaydol</button>
        </form>
        </div>
      
    </div>
  )
}

export default Auth

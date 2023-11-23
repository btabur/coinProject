import { useFormik } from 'formik'
import React from 'react'
import InputField from '../components/InputField'
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
             console.log(values)
        },
        // todo : doğrulama şeması

        validationSchema:schema
    })

    console.log(formik)
  
  return (
    <div>
        <div className="container">
            <h2 className='text-center py-5 '>Coinmania</h2>
      
        {/* form alanı */}
        <form>
           {inputs.map((data)=> <InputField formik={formik} data={data}/>)}
           <button type='submit'>Kaydol</button>
        </form>
        </div>
      
    </div>
  )
}

export default Auth

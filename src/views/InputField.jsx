import React from 'react'

const InputField = ({data,formik}) => {
    const {label,name,type} = data;
    
  return (
    <div>
        <label>{label}</label>
        <input onBlur={ formik.handleBlur} value={formik.values[name]}
        onChange={formik.handleChange} type={type} name={name} />

        {formik.errors[name] && formik.touched[name] && (
            <span>{formik.errors[name]}</span>)}
      
    </div>
  )
}

export default InputField

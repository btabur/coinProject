import React from 'react'

const InputField = ({data,formik}) => {
    const {label,name,type} = data;
  return (
    <div>
        <label>{label}</label>
        <input onChange={formik.handleChange} type={type} name={name} />
      
    </div>
  )
}

export default InputField

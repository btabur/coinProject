import * as yup from 'yup'

export const schema = yup.object().shape({
    email:yup
    .string()
    .email('Lütfen geçerli bir email giriniz')
    .required('Email alanı zorunludur'),

    age:yup
    .number()
    .min(18,'Yaş değeri 18 den büyük olmalı')
    .max(100,'Yaş yüzden büyük olamaz')
    .integer('Lütfen Tam sayı giriniz'),

    password:'',
    confirmPassword:''
})
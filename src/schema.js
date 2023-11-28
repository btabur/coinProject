import * as yup from 'yup'

// 1 küçük harf
// 1 büyük harf
// 1 sayı
// 1 özel karakter
// minimum 5 karakter
const regex =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';
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

    password:yup
            .string()
            .min(5,'Şifre En az 5 karakterli olmalıdır')
            .matches(regex,'Şifreniz Yeterince güçlü değil')
            .required('Şifre alanı zorunludur'),
    confirmPassword:yup.string()
                        .oneOf([yup.ref('password')],'Şifre aynı değil')// pasword inputuna yazılan değer ile aynı olup olmadığını kontrol ediyor
                        .required('Lütfen şifrenizi onaylayın') 
})
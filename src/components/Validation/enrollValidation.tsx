import * as yup from 'yup'

export const enrollValidation = yup.object({
  childName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
    .required('* required'),
  date: yup.date().max(new Date).required('* required'),
  address: yup
  .string()
  .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
  .required('* required'),
  parentName: yup
  .string()
  .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
  .required('* required'),
  mobileNumber: yup
    .number()
    .typeError('* Only Number')
    .positive('* Positive Number')
    .required('* required'),
  email: yup.string().email('* email format').required('* required'),
  grade: yup
  .string()
  .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
  .required('* required'),
  comment: yup
  .string()
  .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
  
})

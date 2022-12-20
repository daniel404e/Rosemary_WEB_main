import * as yup from 'yup'

export const enrollValidation = yup.object({
  childName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  date: yup.date().required(),
  address: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  parentName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  mobileNumber: yup
    .number()
    .typeError('Enter Number')
    .positive('Positive Number')
    .required('Enter Post Code'),
  email: yup.string().email().required(),
  grade: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  comment: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required()
})

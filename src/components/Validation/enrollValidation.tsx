import * as yup from 'yup'

export const enrollValidation = yup.object({
  childName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Invalid format ')
    .required('* Name required'),
  date: yup.date().max(new Date()).required('* Invalid date'),
  address: yup.string().required('* Address required'),
  parentName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Invalid format ')
    .required('* Parent Name required'),
  mobileNumber: yup
    .number()
    .typeError('* Only Number')
    .positive('* Invalid Number')
    .required('* Mobile Number required'),
  email: yup.string().email().required('* Invalid email'),
  grade: yup.string().required('* Grade Required'),
  comment: yup.string().matches(/^[aA-zZ\s]+$/, 'Invalid format ')
})

import * as yup from 'yup'

export const schduleValidation = yup.object({
  studentName: yup
  .string()
  .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
  .required('* required'),
  email: yup.string().email().required('* required'),
  mobileNumber: yup
    .number()
    .typeError('* Only Number')
    .positive('* Positive Number')
    .required('* required'),
  schedulevisit: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
    .required('* required'),
  additionComment: yup
    .string().matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
   
})

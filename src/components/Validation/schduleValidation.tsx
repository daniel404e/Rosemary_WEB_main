import * as yup from 'yup'

export const schduleValidation = yup.object({
  studentName: yup
    .string()
    .min(10, 'Enter minimum lenght 10')
    .required('Enter Street Address'),
  email: yup.string().email().required(),
  mobileNumber: yup
    .number()
    .typeError('Enter Number')
    .positive('Positive Number')
    .required('Enter Post Code'),
  schedulevisit: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required('Enter country'),
  additionComment: yup
    .string()
    .min(2, 'Enter name')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required('Enter name')
})

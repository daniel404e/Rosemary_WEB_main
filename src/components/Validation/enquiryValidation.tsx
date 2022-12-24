import * as yup from 'yup'

export const EnquiryValidation = yup.object({
  studentName: yup
    .string()
    .min(5, 'Enter minimum lenght 10')
    .required(),
  fatherName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required('Enter City'),
  mobileNumber: yup
    .number()
    .typeError('Enter Number')
    .positive('Positive Number')
    .required(),
  otherDetail: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  seekAdmisssion: yup
    .string()
    .min(2, 'Enter name')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required()
})

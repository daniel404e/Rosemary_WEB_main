import * as yup from 'yup'

export const EnquiryValidation = yup.object({
  studentName:yup
  .string()
  .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
  .required('* required'),
  fatherName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
    .required('* required'),
  mobileNumber: yup
    .number()
    .typeError('* Only Number')
    .positive(' Positive Number')
    .required(`* required`),
  otherDetail: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
    ,
  seekAdmisssion: yup
  .string()
  .required(`* required`),
})

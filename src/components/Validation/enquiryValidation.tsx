import * as yup from 'yup'

export const EnquiryValidation = yup.object({
  studentName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Invalid format ')
    .required('* Student Name required'),
  fatherName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Invalid format ')
    .required('* Father Name required'),
  mobileNumber: yup
    .number()
    .typeError('* valid Number')
    .positive('* Invalid Number')
    .required(`* Mobile Number required`),
  otherDetail: yup.string().matches(/^[aA-zZ\s]+$/, '* Invalid format '),
  seekAdmisssion: yup.string().required(`* Admission  required`)
})

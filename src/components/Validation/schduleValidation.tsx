import * as yup from 'yup'

export const schduleValidation = yup.object({
  studentName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Invalid formt ')
    .required('* student Name required'),
  email: yup.string().email().required('* Invalid email'),
  mobileNumber: yup
    .number()
    .typeError('* valid Number')
    .positive('* Invalid Number')
    .required('* Mobile Number required'),
  schedulevisit: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Invalid formt ')
    .required('* Schedule visit required'),
  additionComment: yup.string().matches(/^[aA-zZ\s]+$/, '* Invalid formt ')
})

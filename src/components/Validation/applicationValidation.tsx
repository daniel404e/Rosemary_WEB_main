import * as yup from 'yup'

export const ApplicationValidation = yup.object({
  studentName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Invalid format ')
    .required('* Student Name required'),
  dateOfBirth: yup.date().max(new Date()).required('* Date Of Birth required'),
  age: yup
    .number()
    .typeError('Invalid ')
    .positive('Invalid age')
    .required('* Age required'),
  gradeApply: yup.string().required('* Grade required'),
  sex: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Invalid format ')
    .required('* required'),
  email: yup.string().email().required('* Invalid email'),
  fatherName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Invalid format ')
    .required('*Father Name required'),
  fatherOccupation: yup.string().matches(/^[aA-zZ\s]+$/, '* Invalid format '),
  fatherContact: yup
    .number()
    .typeError('* valid Number')
    .positive('* Invalid Number')
    .required('* Father contact required'),
  motherName: yup.string().matches(/^[aA-zZ\s]+$/, '* Invalid format'),
  motherOccupation: yup.string().matches(/^[aA-zZ\s]+$/, '* Invalid format '),
  motherContact: yup
    .number()
    .typeError('* valid Number')
    .positive('* Invalid Number'),
  residentAddress: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Invalid format ')
    .required('* Resident address required'),
  parentIncome: yup.string().required('*parent Income required'),
  familyAppliction: yup.string().matches(/^[aA-zZ\s]+$/, '* Invalid format '),
  perviousSchool: yup.string().matches(/^[aA-zZ\s]+$/, '* Invalid format '),
  lastStudy: yup.string().matches(/^[aA-zZ\s]+$/, '* Invalid format '),
  boardSpecify: yup.string().matches(/^[aA-zZ\s]+$/, '* Invalid format '),
  changeSchool: yup.string().matches(/^[aA-zZ\s]+$/, '* Invalid format '),
  markPerviousExam: yup.string().matches(/^[aA-zZ\s]+$/, '* Invalid format '),
  intrestCurricular: yup.string().matches(/^[aA-zZ\s]+$/, '* Invalid format '),
  healthIssue: yup.string().matches(/^[aA-zZ\s]+$/, '* Invalid format '),
  checked: yup
    .bool()
    .oneOf([true], '* You need to accept the terms and conditions')
    .required('* You need to accept the terms and conditions')
})

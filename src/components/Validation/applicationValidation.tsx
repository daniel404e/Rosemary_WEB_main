import * as yup from 'yup'

export const ApplicationValidation = yup.object({
  studentName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
    .required("* required"),
  dateOfBirth: yup.date().max(new Date()).required('* required'),
  age: yup
    .number()
    .typeError('only Number')
    .positive('Positive Number')
    .required('* required'),
  gradeApply: yup.string().required('* required'),
  sex: yup.string().matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
    .required('* required'),
  email: yup.string().email().required('* required'),
  fatherName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
    .required('* required'),
  fatherOccupation: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
    ,
  fatherContact: yup
    .number()
    .typeError('* Only Number')
    .positive('* Positive Number')
    .required('* required'),
  motherName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
    ,
  motherOccupation: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
   ,
  motherContact: yup
    .number()
    .typeError('* Only Number')
    .positive('* Positive Number')
   ,
  residentAddress: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
    .required('* required'),
  parentIncome: yup
    .number()
    .typeError('* Only Number')
    .positive('* Positive Number')
    .required('* required'),
  familyAppliction: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
   ,
  perviousSchool: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
    ,
  lastStudy: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
    ,
  boardSpecify: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
    ,
  changeSchool: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
    ,
  markPerviousExam: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
    ,
  intrestCurricular: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
    ,
  healthIssue: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, '* Only alphabets ')
   ,
  checked: yup
    .bool()
    .oneOf([true], '* You need to accept the terms and conditions').required('* You need to accept the terms and conditions'),
})

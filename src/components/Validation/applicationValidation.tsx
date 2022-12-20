import * as yup from 'yup'

export const ApplicationValidation = yup.object({
  studentName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  dateOfBirth: yup.date().required(),
  age: yup
    .number()
    .typeError('Enter Number')
    .positive('Positive Number')
    .required(),
  gradeApply: yup.string().required(),
  sex: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  email: yup.string().email().required(),
  fatherName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  fatherOccupation: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  fatherContact: yup
    .number()
    .typeError('Enter Number')
    .positive('Positive Number')
    .required(),
  motherName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  motherOccupation: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  motherContact: yup
    .number()
    .typeError('Enter Number')
    .positive('Positive Number')
    .required(),
  residentAddress: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  parentIncome: yup
    .number()
    .typeError('Enter Income')
    .positive('Positive Number')
    .required(),
  familyAppliction: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  perviousSchool: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  lastStudy: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  boardSpecify: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  changeSchool: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  markPerviousExam: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  intrestCurricular: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  healthIssue: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets ')
    .required(),
  checked: yup
    .bool()
    .oneOf([true], 'You need to accept the terms and conditions')
})

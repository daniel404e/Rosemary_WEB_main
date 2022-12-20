import React from 'react'
import Heading from '../../components/Heading'
import { Formik, Form, Field, ErrorMessage, getIn } from 'formik'
import { FlexColCenter } from '@/components/twin'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ApplicationValidation } from '../../components/Validation/applicationValidation'
import { InputSet, InputLabel, SubmitButton } from '@/components/twin/index'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
const Application = () => {
  function getStyles(errors: any, fieldName: string) {
    if (getIn(errors, fieldName)) {
      return {
        border: '1px solid red'
      }
    }
    return
  }
  const intialValued = {
    studentName: '',
    dateOfBirth: 0,
    age: 0,
    gradeApply: '',
    sex: '',
    email: '',
    fatherName: '',
    fatherOccupation: '',
    fatherContact: 0,
    motherName: '',
    motherOccupation: '',
    motherContact: 0,
    residentAddress: '',
    parentIncome: '',
    familyAppliction: '',
    perviousSchool: '',
    lastStudy: '',
    boardSpecify: '',
    changeSchool: '',
    markPerviousExam: '',
    intrestCurricular: '',
    healthIssue: '',
    checked: ''
  }
  const styles =
    'block w-full px-4 py-3 mb-3 shadow-md leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white'
  return (
    <div className="max-w-7xl mx-auto">
      <Heading first={'Admission'} second={'Application '} third={' Form'} />

      <div className="flex flex-col-reverse items-center ">
        <div>
          <FlexColCenter className="mt-16">
            <Formik
              enableReinitialize
              initialValues={intialValued}
              validationSchema={ApplicationValidation}
              onSubmit={(values, actions) => {
                axios({
                  method: 'POST',
                  url: 'https://formspree.io/f/mjvdbkae',
                  data: values
                })
                  .then((response: any) => {
                    actions.setSubmitting(false)
                    actions.resetForm()
                    if (response) {
                      toast.success('Form Submit', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light'
                      })
                    }
                  })
                  .catch((error: any) => {
                    if (error) {
                      actions.setSubmitting(false)
                      toast.error('Server Error', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light'
                      })
                    }
                  })
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                errors,
                touched
              }) => (
                <Form onSubmit={handleSubmit} className="w-full">
                  <InputSet>
                    <InputLabel>Student&apos;s Name</InputLabel>

                    <Field
                      name="studentName"
                      className={styles}
                      style={
                        getStyles(errors, `studentName`) &&
                        getStyles(touched, `studentName`)
                      }
                    />

                    {/* <ErrorMessage
                      name="studentName"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <InputLabel>Date of Birth </InputLabel>

                    <Field
                      name="dateOfBirth"
                      type="date"
                      className={styles}
                      style={
                        getStyles(errors, `dateOfBirth`) &&
                        getStyles(touched, `dateOfBirth`)
                      }
                    />

                    {/* <ErrorMessage
                      name="dateOfBirth"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <InputLabel>age </InputLabel>

                    <Field
                      name="age"
                      className={styles}
                      style={
                        getStyles(errors, `age`) && getStyles(touched, `age`)
                      }
                    />

                    {/* <ErrorMessage
                      name="age"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <InputLabel>Grade Applying For</InputLabel>

                    <select
                      name="gradeApply"
                      className={`${styles} w-full`}
                      // value={values.color}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={
                        getStyles(errors, `gradeApply`) &&
                        getStyles(touched, `gradeApply`)
                      }
                    >
                      <option value="" label="Click Here">
                        Click Here{' '}
                      </option>
                      <option value="Pakistan" label="Pre KG">
                        {' '}
                        PRE KG
                      </option>
                      <option value="LKG" label="LKG"></option>
                      <option value="UKG" label="UKG"></option>
                      <option value="STD 1" label="STD 1"></option>
                      <option value="STD 2" label="STD 2"></option>
                      <option value="STD 3" label="STD 3"></option>
                      <option value="STD 4" label="STD 4"></option>
                      <option value="STD 5" label="STD 5"></option>
                      <option value="STD 6" label="STD 6"></option>
                      <option value="STD 7" label="STD 7"></option>
                      <option value="STD 8" label="STD 8"></option>
                      <option value="STD 9" label="STD 9"></option>
                      <option value="STD 10" label="STD 10"></option>
                      <option value="STD 11" label="STD 11"></option>
                      <option value="STD 12" label="STD 12"></option>
                    </select>
                    {/* <ErrorMessage
                      name="gradeApply"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <InputLabel id="my-radio-group">sex</InputLabel>
                    <div
                      role="group"
                      className="flex "
                      aria-labelledby="my-radio-group"
                    >
                      <label className={' mr-5'}>
                        <Field
                          type="radio"
                          className={' mr-3'}
                          name="sex"
                          value="male"
                          style={
                            getStyles(errors, `sex`) &&
                            getStyles(touched, `sex`)
                          }
                        />
                        Male
                      </label>
                      <label className={' mr-5'}>
                        <Field
                          type="radio"
                          className={' mr-3'}
                          name="sex"
                          value="female"
                          style={
                            getStyles(errors, `sex`) &&
                            getStyles(touched, `sex`)
                          }
                        />
                        Female
                      </label>
                    </div>
                  </InputSet>
                  <InputSet>
                    <InputLabel>Email </InputLabel>

                    <Field
                      name="email"
                      className={`${styles} `}
                      style={
                        getStyles(errors, `email`) &&
                        getStyles(touched, `email`)
                      }
                    />

                    {/* <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <InputLabel>Father Name </InputLabel>

                    <Field
                      name="fatherName"
                      className={`${styles} `}
                      style={
                        getStyles(errors, `fatherName`) &&
                        getStyles(touched, `fatherName`)
                      }
                    />

                    {/* <ErrorMessage
                      name="fatherName"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <InputLabel>
                      Father Occupation & Educational Qualification
                    </InputLabel>

                    <Field
                      name="fatherOccupation"
                      className={`${styles} `}
                      style={
                        getStyles(errors, `fatherOccupation`) &&
                        getStyles(touched, `fatherOccupation`)
                      }
                    />

                    {/* <ErrorMessage
                      name="fatherOccupation"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <InputLabel>Father Contact Number</InputLabel>

                    <Field
                      name="fatherContact"
                      className={`${styles} `}
                      style={
                        getStyles(errors, `fatherContact`) &&
                        getStyles(touched, `fatherContact`)
                      }
                    />

                    {/* <ErrorMessage
                      name="fatherContact"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <InputLabel>Mother Name </InputLabel>

                    <Field
                      name="motherName"
                      className={`${styles} `}
                      style={
                        getStyles(errors, `motherName`) &&
                        getStyles(touched, `motherName`)
                      }
                    />

                    {/* <ErrorMessage
                      name="motherName"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <InputLabel>
                      Mother Occupation & Educational Qualification
                    </InputLabel>

                    <Field
                      name="motherOccupation"
                      className={`${styles} `}
                      style={
                        getStyles(errors, `motherOccupation`) &&
                        getStyles(touched, `motherOccupation`)
                      }
                    />

                    {/* <ErrorMessage
                      name="motherOccupation"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <InputLabel>Mother Contact Number</InputLabel>

                    <Field
                      name="motherContact"
                      className={`${styles} `}
                      style={
                        getStyles(errors, `motherContact`) &&
                        getStyles(touched, `motherContact`)
                      }
                    />

                    {/* <ErrorMessage
                      name="motherContact"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <InputLabel>
                      Residential Address of Parent / Guardian
                    </InputLabel>

                    <Field
                      name="residentAddress"
                      type="textarea"
                      className={`${styles} h-24`}
                      style={
                        getStyles(errors, `residentAddress`) &&
                        getStyles(touched, `residentAddress`)
                      }
                    />

                    {/* <ErrorMessage
                      name="residentAddress"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <InputLabel>
                      Annual income of Parents (in words )
                    </InputLabel>

                    <Field
                      name="parentIncome"
                      type="textarea"
                      className={`${styles}`}
                      style={
                        getStyles(errors, `parentIncome`) &&
                        getStyles(touched, `parentIncome`)
                      }
                    />

                    {/* <ErrorMessage
                      name="parentIncome"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <InputLabel>
                      Does the applicant have any brother / sister studying in
                      RMSE/RMMS? Name, Class & School
                    </InputLabel>

                    <Field
                      name="familyAppliction"
                      type="textarea"
                      component="textarea"
                      className={`${styles} h-36`}
                      style={
                        getStyles(errors, `familyAppliction`) &&
                        getStyles(touched, `familyAppliction`)
                      }
                    />

                    {/* <ErrorMessage
                      name="familyAppliction"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <InputLabel>Previous School Name & Address</InputLabel>

                    <Field
                      name="perviousSchool"
                      type="textarea"
                      component="textarea"
                      className={`${styles} h-24`}
                      style={
                        getStyles(errors, `perviousSchool`) &&
                        getStyles(touched, `perviousSchool`)
                      }
                    />

                    {/* <ErrorMessage
                      name="perviousSchool"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <InputLabel>Specify The Board</InputLabel>

                    <select
                      name="boardSpecify"
                      className={`${styles} w-full`}
                      // value={values.color}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={
                        getStyles(errors, `boardSpecify`) &&
                        getStyles(touched, `boardSpecify`)
                      }
                    >
                      <option value="" label="Click Here">
                        Click Here{' '}
                      </option>
                      <option value="Pakistan" label="Pre KG">
                        {' '}
                        PRE KG
                      </option>
                      <option value="CBSE" label="CBSE"></option>
                      <option value="ICSE" label="ICSE"></option>
                      <option value="STATE BOARD" label="STATE BOARD"></option>
                      <option value="IGCSE" label="IGCSE"></option>
                      <option value="Other" label="Other"></option>
                    </select>
                    {/* <ErrorMessage
                      name="boardSpecify"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <InputLabel>Class Last Studied</InputLabel>

                    <Field
                      name="lastStudy"
                      type="textarea"
                      className={`${styles} `}
                      style={
                        getStyles(errors, `lastStudy`) &&
                        getStyles(touched, `lastStudy`)
                      }
                    />

                    {/* <ErrorMessage
                      name="lastStudy"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <InputLabel id="my-radio-group">
                      Reason for Change of School
                    </InputLabel>
                    <div
                      role="group"
                      className="flex"
                      aria-labelledby="my-radio-group"
                    >
                      <label className={' mr-5 pb-2'}>
                        <Field
                          type="radio"
                          className={' mr-3'}
                          name="changeSchool"
                          value="Transfer"
                          style={
                            getStyles(errors, `changeSchool`) &&
                            getStyles(touched, `changeSchool`)
                          }
                        />
                        Transfer
                      </label>
                      <label className={' mr-5 pb-2'}>
                        <Field
                          type="radio"
                          className={' mr-3'}
                          name="changeSchool"
                          value="Parent Choice"
                          style={
                            getStyles(errors, `changeSchool`) &&
                            getStyles(touched, `changeSchool`)
                          }
                        />
                        Parent Choice
                      </label>
                    </div>
                  </InputSet>
                  <InputSet>
                    <InputLabel>
                      Marks in the Previous Exams-English/Tamil/Maths/Science
                      Science/Hindi
                    </InputLabel>

                    <Field
                      name="markPerviousExam"
                      component="textarea"
                      className={`${styles} h-36`}
                      style={
                        getStyles(errors, `markPerviousExam`) &&
                        getStyles(touched, `markPerviousExam`)
                      }
                    />

                    {/* <ErrorMessage
                      name="markPerviousExam"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <InputLabel>
                      Interest in Co Curricular / Extra Curricular Activities
                      (Mention the Activities )
                    </InputLabel>

                    <Field
                      name="intrestCurricular"
                      type="textarea"
                      component="textarea"
                      className={`${styles} h-36`}
                      style={
                        getStyles(errors, `intrestCurricular`) &&
                        getStyles(touched, `intrestCurricular`)
                      }
                    />

                    {/* <ErrorMessage
                      name="intrestCurricular"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <InputLabel>
                      Any specific health issues for special care
                    </InputLabel>

                    <Field
                      name="healthIssue"
                      type="textarea"
                      component="textarea"
                      className={`${styles} h-36`}
                      style={
                        getStyles(errors, `healthIssue`) &&
                        getStyles(touched, `healthIssue`)
                      }
                    />

                    {/* <ErrorMessage
                      name="healthIssue"
                      component="div"
                      className="text-red-600"
                    /> */}
                  </InputSet>
                  <InputSet>
                    <Field
                      name="checked"
                      className={'w-5'}
                      type="checkbox"
                      style={
                        getStyles(errors, `checked`) &&
                        getStyles(touched, `checked`)
                      }
                    />
                    <span>
                      <InputLabel>
                        I agree that once Fees paid to the School is non
                        refundable.{' '}
                      </InputLabel>
                    </span>
                    <ErrorMessage
                      name="checked"
                      component="div"
                      className="text-red-600"
                    />
                  </InputSet>
                  <SubmitButton
                    // add group class
                    className="group "
                    onClick={() => handleSubmit()}
                  >
                    Submit
                    <ArrowRightIcon
                      className="ml-3 -mr-1 h-5 w-5 group-hover:translate-x-2 transition-all ease-in duration-200 "
                      aria-hidden="true"
                    />
                  </SubmitButton>{' '}
                </Form>
              )}
            </Formik>
          </FlexColCenter>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  )
}

export default Application

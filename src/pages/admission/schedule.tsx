import React from 'react'
import Heading from '../../components/Heading'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { schduleValidation } from '../../components/Validation/schduleValidation'
import { Formik, Form, Field, getIn } from 'formik'
import {
  FlexColCenter,
  InputSet,
  InputLabel,
  SubmitButton
} from '@/components/twin'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const Schedule = () => {
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
    email: '',
    schedulevisit: '',
    mobileNumber: 0,
    additionComment: ''
  }

  const styles =
    'block w-full md:w-96 px-4 shadow-md  py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white'
  return (
    <div className="max-w-7xl mx-auto ">
      <Heading first={'Schedule a Visit'} second={''} third={''} />
      <div className="flex md:flex-row md:justify-around justify-center flex-col-reverse items-center">
        <div>
          <img
            src="https://tailwindcomponents.com/svg/blank-canvas-animate.svg"
            className="w-96"
            alt="image"
          />
        </div>
        <div>
          <FlexColCenter className="mt-16 ">
            <Formik
              enableReinitialize
              initialValues={intialValued}
              validationSchema={schduleValidation}
              onSubmit={(values, actions) => {
                axios({
                  method: 'POST',
                  url: 'https://formspree.io/f/xayzwnpl',
                  data: values
                })
                  .then((response: any) => {
                    actions.setSubmitting(false)
                    actions.resetForm()
                    if (response) {
                      toast.success('Form Submit', {
                        position: 'top-center',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light'
                      })
                    }
                    return
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
                <Form onSubmit={handleSubmit}>
                  <InputSet>
                    <InputLabel>Name</InputLabel>

                    <Field
                      name="studentName"
                      className={styles}
                      style={
                        getStyles(errors, `studentName`) &&
                        getStyles(touched, `studentName`)
                      }
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>Email</InputLabel>

                    <Field
                      name="email"
                      className={styles}
                      style={
                        getStyles(errors, `email`) &&
                        getStyles(touched, `email`)
                      }
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>Schedule Visist For</InputLabel>

                    <select
                      name="schedulevisit"
                      className={`${styles} w-full`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={
                        getStyles(errors, `schedulevisit`) &&
                        getStyles(touched, `schedulevisit`)
                      }
                    >
                      <option value="" label="Information">
                        Information
                      </option>
                      <option value="admission" label="Admission">
                        Admission
                      </option>
                      <option value="sr" label="Student Report"></option>
                      <option value="rc" label="Result Card"></option>

                      <option value="pd" label="Pay Dues"></option>

                      <option value="other" label="Other"></option>
                    </select>
                  </InputSet>

                  <InputSet>
                    <InputLabel>Mobile Number </InputLabel>

                    <Field
                      name="mobileNumber"
                      className={styles}
                      style={
                        getStyles(errors, `mobileNumber`) &&
                        getStyles(touched, `mobileNumber`)
                      }
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>Additional Comments</InputLabel>

                    <Field
                      type={'text-area'}
                      name="additionComment"
                      className={`${styles} h-28`}
                      component="textarea"
                      style={
                        getStyles(errors, `additionComment`) &&
                        getStyles(touched, `additionComment`)
                      }
                    />
                  </InputSet>

                  <SubmitButton className="group ">
                    Submit
                    <ArrowRightIcon
                      className="ml-3 -mr-1 h-5 w-5 group-hover:translate-x-2 transition-all ease-in duration-200 "
                      aria-hidden="true"
                    />
                  </SubmitButton>
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

export default Schedule

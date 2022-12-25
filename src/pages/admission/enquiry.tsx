import React from 'react'
import Heading from '../../components/Heading'
import { EnquiryValidation } from '../../components/Validation/enquiryValidation'
import { Formik, Form, Field, getIn, ErrorMessage } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import {
  FlexColCenter,
  InputSet,
  InputLabel,
  SubmitButton
} from '@/components/twin'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const Enquiry = () => {
  const intialValued = {
    studentName: '',
    fatherName: '',
    mobileNumber: 0,
    otherDetail: '',
    seekAdmisssion: ''
  }

  function getStyles(errors: any, fieldName: string) {
    if (getIn(errors, fieldName)) {
      return {
        border: '1px solid red'
      }
    }
    return
  }
  const styles =
    'block w-full md:w-96 px-4 shadow-md py-3   leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white'
  return (
    <div className="max-w-7xl mx-auto ">
      <Heading first={'Admission '} second={'Enquiry '} third={' Form'} />
      <div className="flex md:flex-row md:justify-around justify-center flex-col-reverse items-center">
        <div>
          <FlexColCenter className="mt-16 ">
            <Formik
              enableReinitialize
              initialValues={intialValued}
              validationSchema={EnquiryValidation}
              onSubmit={(values, actions) => {
                axios({
                  method: 'POST',
                  url: 'https://formspree.io/f/xdovnkww',
                  data: values
                })
                  .then((response: any) => {
                    actions.setSubmitting(false)
                    actions.resetForm()
                    if (response) {
                      toast.success(
                        'thank you for choosing Rosemary, we will get in touch with  you soon',
                        {
                          position: 'top-right',
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: 'light'
                        }
                      )
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
                <Form onSubmit={handleSubmit}>
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

                    <ErrorMessage
                      name="studentName"
                      component="div"
                      className="text-red-600 text-xs font-normal "
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>Seeking Admission For</InputLabel>

                    <select
                      name="seekAdmisssion"
                      className={`${styles} w-full`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={
                        getStyles(errors, `seekAdmisssion`) &&
                        getStyles(touched, `seekAdmisssion`)
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
                    <ErrorMessage
                      name="seekAdmisssion"
                      component="div"
                      className="text-red-600 text-xs font-normal"
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>Father&apos;s Name</InputLabel>
                    <Field
                      name="fatherName"
                      className={styles}
                      style={
                        getStyles(errors, `fatherName`) &&
                        getStyles(touched, `fatherName`)
                      }
                    />

                    <ErrorMessage
                      name="fatherName"
                      component="div"
                      className="text-red-600 text-xs font-normal"
                    />
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

                    <ErrorMessage
                      name="mobileNumber"
                      component="div"
                      className="text-red-600 text-xs font-normal"
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>Any Other Details of Enquiry</InputLabel>

                    <Field
                      type={'text-area'}
                      name="otherDetail"
                      className={`${styles} h-28`}
                      component="textarea"
                      style={
                        getStyles(errors, `otherDetail`) &&
                        getStyles(touched, `otherDetail`)
                      }
                    />

                    <ErrorMessage
                      name="otherDetail"
                      component="div"
                      className="text-red-600 text-xs font-normal"
                    />
                  </InputSet>
                  <SubmitButton
                    // add group class
                    className="group "
                    // onClick={() => handleSubmit()}
                  >
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
        <div>
          <img
            src="https://tailwindcomponents.com/svg/blank-canvas-animate.svg"
            className="w-96"
            alt="image"
          />
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

export default Enquiry

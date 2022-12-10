import React from 'react'
import Heading from '../../components/Heading'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {
  FlexColCenter,
  InputSet,
  InputLabel,
  SubmitButton
} from '@/components/twin'
import {
  ArrowLeftCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const Schedule = () => {
  const intialValued = {
    studentName: '',
    fatherName: '',
    mobileNumber: '',
    otherDetail: '',
    seekAdmisssion: ''
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
              // validationSchema={SinupValdation}
              onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2))
              }}
            >
              {({ handleChange, handleBlur, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <InputSet>
                    <InputLabel>Name</InputLabel>

                    <Field name="studentName" className={styles} />

                    <ErrorMessage
                      name="studentName"
                      component="div"
                      className="text-red-600"
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>Email</InputLabel>

                    <Field name="studentName" className={styles} />

                    <ErrorMessage
                      name="studentName"
                      component="div"
                      className="text-red-600"
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>Schedule Visist For</InputLabel>

                    <select
                      name="seekAdmisssion"
                      className={`${styles} w-full`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ display: 'block' }}
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
                    <ErrorMessage
                      name="seekAdmisssion"
                      component="div"
                      className="text-red-600"
                    />
                  </InputSet>

                  <InputSet>
                    <InputLabel>Mobile Number </InputLabel>

                    <Field name="mobileNumber" className={styles} />

                    <ErrorMessage
                      name="mobileNumber"
                      component="div"
                      className="text-red-600"
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>Additional Comments</InputLabel>

                    <Field
                      type={'text-area'}
                      name="otherDetail"
                      className={`${styles} h-28`}
                      component="textarea"
                    />

                    <ErrorMessage
                      name="otherDetail"
                      component="div"
                      className="text-red-600"
                    />
                  </InputSet>

                  {/* <SubmitButton type="submit">Submit</SubmitButton> */}
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
                  </SubmitButton>
                </Form>
              )}
            </Formik>
          </FlexColCenter>
        </div>
      </div>
    </div>
  )
}

export default Schedule

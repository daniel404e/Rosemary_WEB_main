import React from 'react'
import Heading from '../../components/Heading'
import { Formik, Form, Field, ErrorMessage } from 'formik'
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
    mobileNumber: '',
    otherDetail: '',
    seekAdmisssion: ''
  }

  const styles =
    'block w-full md:w-96 px-4 shadow-md py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white'
  return (
    <div className="max-w-7xl mx-auto ">
      <Heading first={'Admission '} second={'Enquiry '} third={' Form'} />
      <div className="flex md:flex-row md:justify-around justify-center flex-col-reverse items-center">
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
                    <InputLabel>Student&apos;s Name</InputLabel>

                    <Field name="studentName" className={styles} />

                    <ErrorMessage
                      name="studentName"
                      component="div"
                      className="text-red-600"
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>Seeking Admission For</InputLabel>

                    <select
                      name="seekAdmisssion"
                      className={`${styles} w-full`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ display: 'block' }}
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
                      className="text-red-600"
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>Father&apos;s Name</InputLabel>

                    <Field name="fatherName" className={styles} />

                    <ErrorMessage
                      name="fatherName"
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
                    <InputLabel>Any Other Details of Enquiry</InputLabel>

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
        <div>
          <img
            src="https://tailwindcomponents.com/svg/blank-canvas-animate.svg"
            className="w-96"
            alt="image"
          />
        </div>
      </div>
    </div>
  )
}

export default Enquiry

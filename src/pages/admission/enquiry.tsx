import React from 'react'
import Heading from '../../components/Heading'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { FlexColCenter } from '@/components/twin'

const Enquiry = () => {
  const intialValued = {
    studentName: '',
    fatherName: '',
    mobileNumber: '',
    otherDetail: '',
    seekAdmisssion: ''
  }
  const styles =
    'h-9 mt-1 mr-12  w-full pl-4 text-base  border-[#adadad] border-solid border-[1px] hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA]'
  return (
    <>
      <Heading first={'Admission'} second={'Enquiry'} third={'Form'} />
      <FlexColCenter className="mt-16">
        <Formik
          enableReinitialize
          initialValues={intialValued}
          // validationSchema={SinupValdation}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values, null, 2))
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
            <Form onSubmit={handleSubmit}>
              <div className="flex ">
                <p className="text-[#333] w-80 py-3 mr-3">Student's Name :</p>

                <Field name="studentName" className={styles} />

                <ErrorMessage
                  name="studentName"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex    items-center">
                <p className="text-[#333] w-80 py-3 mr-3">
                  Seeking Admission For:
                </p>

                <select
                  name="seekAdmisssion"
                  className={`${styles} w-full`}
                  // value={values.color}
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
                </select>
                <ErrorMessage
                  name="seekAdmisssion"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div className="flex ">
                <p className="text-[#333] w-80 py-3 mr-3">Father's Name :</p>

                <Field name="fatherName" className={styles} />

                <ErrorMessage
                  name="fatherName"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex ">
                <p className="text-[#333] w-80 py-3 mr-3">Mobile Number :</p>

                <Field name="mobileNumber" className={styles} />

                <ErrorMessage
                  name="mobileNumber"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex ">
                <p className="text-[#333] w-80 py-3 mr-3">
                  Any Other Details of Enquiry :
                </p>

                <Field name="otherDetail" className={`${styles} h-28`} />

                <ErrorMessage
                  name="otherDetail"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div className="flex justify-start ml-32 mt-10">
                <button
                  type="submit"
                  className="bg-[#0179b5] mt-3 text-white border-1  py-2 rounded-md border-[#1979c3] px-6 "
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </FlexColCenter>
    </>
  )
}

export default Enquiry

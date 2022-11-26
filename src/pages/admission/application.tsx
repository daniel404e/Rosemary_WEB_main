import React from 'react'
import Heading from '../../components/Heading'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { FlexColCenter } from '@/components/twin'

const Application = () => {
  const intialValued = {
    studentName: '',
    dateOfBirth: '',
    age: '',
    gradeApply: '',
    sex: '',
    eamil: '',
    fatherName: '',
    fatherOccupation: '',
    fatherContact: '',
    motherName: '',
    motherOccupation: '',
    motherContact: '',
    residentAddress: '',
    parentIncome: '',
    familyAppliction: '',
    perviousSchool: '',
    lastStudy: '',
    boardSpecify: '',
    changeSchool: '',
    markPerviousExam: '',
    intrestCurricular: '',
    healthIssue: ''
  }
  const styles =
    'h-9 mt-1 mr-12  w-full pl-4 text-base  border-[#adadad] border-solid border-[1px] hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA]'
  return (
    <>
      <Heading first={'Admission'} second={'Application'} third={'Form'} />
      <FlexColCenter className="mt-16">
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
              <div className="flex ">
                <p className="text-[#333] w-80 py-3 mr-3">
                  Student&apos;s Name :
                </p>

                <Field name="studentName" className={styles} />

                <ErrorMessage
                  name="studentName"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div className="flex ">
                <p className="text-[#333] w-80 py-3 mr-3">Date of Birth :</p>

                <Field name="dateOfBirth" type="date" className={styles} />

                <ErrorMessage
                  name="dateOfBirth"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex ">
                <p className="text-[#333] w-80 py-3 mr-3">age :</p>

                <Field name="age" className={styles} />

                <ErrorMessage
                  name="age"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex items-center">
                <p className="text-[#333] w-80 py-3 mr-3">
                  Grade Applying For :
                </p>

                <select
                  name="gradeApply"
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
                  name="gradeApply"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex">
                <div id="my-radio-group" className="text-[#333] w-52 py-3 mr-3">
                  sex
                </div>
                <div
                  role="group"
                  className="flex flex-col justify-start"
                  aria-labelledby="my-radio-group"
                >
                  <label>
                    <Field
                      type="radio"
                      className={'mt-5 mr-3'}
                      name="sex"
                      value="male"
                    />
                    Male
                  </label>
                  <label>
                    <Field
                      type="radio"
                      className={'mt-5 mr-3'}
                      name="sex"
                      value="female"
                    />
                    Female
                  </label>
                </div>
              </div>
              <div className="flex ">
                <p className="text-[#333] w-80 py-3 mr-3">Email :</p>

                <Field name="email" className={`${styles} `} />

                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex ">
                <p className="text-[#333] w-80 py-3 mr-3">Email :</p>

                <Field name="email" className={`${styles} `} />

                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex ">
                <p className="text-[#333] w-80 py-3 mr-3">Father Name :</p>

                <Field name="fatherName" className={`${styles} `} />

                <ErrorMessage
                  name="fatherName"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex ">
                <p className="text-[#333] w-80 py-3 mr-3">
                  Father Occupation & Educational Qualification :
                </p>

                <Field name="fatherOccupation" className={`${styles} `} />

                <ErrorMessage
                  name="fatherOccupation"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex ">
                <p className="text-[#333] w-80 py-3 mr-3">
                  Father Contact Number :
                </p>

                <Field name="fatherContact" className={`${styles} `} />

                <ErrorMessage
                  name="fatherContact"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex ">
                <p className="text-[#333] w-80 py-3 mr-3">Mother Name : </p>

                <Field name="motherName" className={`${styles} `} />

                <ErrorMessage
                  name="motherName"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex ">
                <p className="text-[#333] w-80 py-3 mr-3">
                  Mother Occupation & Educational Qualification :
                </p>

                <Field name="motherOccupation" className={`${styles} `} />

                <ErrorMessage
                  name="motherOccupation"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex ">
                <p className="text-[#333] w-80 py-3 mr-3">
                  Mother Contact Number :
                </p>

                <Field name="motherContact" className={`${styles} `} />

                <ErrorMessage
                  name="motherContact"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex ">
                <p className="text-[#333] w-80 py-3 mr-3">
                  Residential Address of Parent / Guardian :
                </p>

                <Field
                  name="residentAddress"
                  type="textarea"
                  className={`${styles} h-24`}
                />

                <ErrorMessage
                  name="residentAddress"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex mt-5">
                <p className="text-[#333] w-80 py-3 mr-3">
                  Annual income of Parents (in words ) :
                </p>

                <Field
                  name="parentIncome"
                  type="textarea"
                  className={`${styles}`}
                />

                <ErrorMessage
                  name="parentIncome"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div className="flex ">
                <p className="text-[#333] w-80 py-3 mr-3">
                  Does the applicant have any brother / sister studying in
                  RMSE/RMMS? Name, Class & School:
                </p>

                <Field
                  name="familyAppliction"
                  type="textarea"
                  className={`${styles} h-36`}
                />

                <ErrorMessage
                  name="familyAppliction"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex mt-5">
                <p className="text-[#333] w-80 py-3 mr-3">
                  Previous School Name & Address :
                </p>

                <Field
                  name="perviousSchool"
                  type="textarea"
                  className={`${styles} h-24`}
                />

                <ErrorMessage
                  name="perviousSchool"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex    items-center">
                <p className="text-[#333] w-80 py-3 mr-3">
                  Specify The Board :
                </p>

                <select
                  name="boardSpecify"
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
                  <option value="CBSE" label="CBSE"></option>
                  <option value="ICSE" label="ICSE"></option>
                  <option value="STATE BOARD" label="STATE BOARD"></option>
                  <option value="IGCSE" label="IGCSE"></option>
                  <option value="Other" label="Other"></option>
                </select>
                <ErrorMessage
                  name="boardSpecify"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex mt-5">
                <p className="text-[#333] w-80 py-3 mr-3">
                  Class Last Studied :
                </p>

                <Field
                  name="lastStudy"
                  type="textarea"
                  className={`${styles} `}
                />

                <ErrorMessage
                  name="lastStudy"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex items-center">
                <div id="my-radio-group" className="text-[#333] w-52 py-3 mr-3">
                  Reason for Change of School
                </div>
                <div
                  role="group"
                  className="flex flex-col justify-start"
                  aria-labelledby="my-radio-group"
                >
                  <label>
                    <Field
                      type="radio"
                      className={'mt-5 mr-3'}
                      name="changeSchool"
                      value="male"
                    />
                    Transfer
                  </label>
                  <label>
                    <Field
                      type="radio"
                      className={'mt-5 mr-3'}
                      name="changeSchool"
                      value="female"
                    />
                    Parent Choice
                  </label>
                </div>
              </div>

              <div className="flex mt-5">
                <p className="text-[#333] w-96 py-3 mr-3">
                  Marks in the Previous Exams-English/Tamil/Maths/Science
                  Science/Hindi :
                </p>

                <Field
                  name="markPerviousExam"
                  type="textarea"
                  className={`${styles} h-36`}
                />

                <ErrorMessage
                  name="markPerviousExam"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex mt-5">
                <p className="text-[#333] w-80 py-3 mr-3">
                  Interest in Co Curricular / Extra Curricular Activities
                  (Mention the Activities )
                </p>

                <Field
                  name="intrestCurricular"
                  type="textarea"
                  className={`${styles} h-36`}
                />

                <ErrorMessage
                  name="intrestCurricular"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex mt-5">
                <p className="text-[#333] w-80 py-3 mr-3">
                  Any specific health issues for special care :
                </p>

                <Field
                  name="healthIssue"
                  type="textarea"
                  className={`${styles} h-36`}
                />

                <ErrorMessage
                  name="healthIssue"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex justify-start flex-col ml-32 mt-10">
                <div className="w-96 flex my-5">
                  <Field name="checked" className={'w-5'} type="checkbox" />
                  <p className="ml-2">
                    {' '}
                    I agree that once Fees paid to the School is non refundable.{' '}
                  </p>

                  <ErrorMessage
                    name="checked"
                    component="div"
                    className="text-red-600"
                  />
                </div>
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

export default Application

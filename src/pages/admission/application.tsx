import React from 'react'
import Heading from '../../components/Heading'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { FlexColCenter } from '@/components/twin'
import { InputSet, InputLabel, SubmitButton } from '@/components/twin/index'
import { AiOutlineArrowDown } from 'react-icons/ai'
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
    'block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white'
  return (
    <>
      <Heading first={'Admission'} second={'Application'} third={'Form'} />

      <div className="flex flex-col-reverse items-center ">
        <div>
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
                    <InputLabel>Date of Birth </InputLabel>

                    <Field name="dateOfBirth" type="date" className={styles} />

                    <ErrorMessage
                      name="dateOfBirth"
                      component="div"
                      className="text-red-600"
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>age </InputLabel>

                    <Field name="age" className={styles} />

                    <ErrorMessage
                      name="age"
                      component="div"
                      className="text-red-600"
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>Grade Applying For</InputLabel>

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
                        />
                        Male
                      </label>
                      <label className={' mr-5'}>
                        <Field
                          type="radio"
                          className={' mr-3'}
                          name="sex"
                          value="female"
                        />
                        Female
                      </label>
                    </div>
                  </InputSet>
                  <InputSet>
                    <InputLabel>Email </InputLabel>

                    <Field name="email" className={`${styles} `} />

                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600"
                    />
                  </InputSet>

                  <InputSet>
                    <InputLabel>Father Name </InputLabel>

                    <Field name="fatherName" className={`${styles} `} />

                    <ErrorMessage
                      name="fatherName"
                      component="div"
                      className="text-red-600"
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>
                      Father Occupation & Educational Qualification
                    </InputLabel>

                    <Field name="fatherOccupation" className={`${styles} `} />

                    <ErrorMessage
                      name="fatherOccupation"
                      component="div"
                      className="text-red-600"
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>Father Contact Number</InputLabel>

                    <Field name="fatherContact" className={`${styles} `} />

                    <ErrorMessage
                      name="fatherContact"
                      component="div"
                      className="text-red-600"
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>Mother Name </InputLabel>

                    <Field name="motherName" className={`${styles} `} />

                    <ErrorMessage
                      name="motherName"
                      component="div"
                      className="text-red-600"
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>
                      Mother Occupation & Educational Qualification
                    </InputLabel>

                    <Field name="motherOccupation" className={`${styles} `} />

                    <ErrorMessage
                      name="motherOccupation"
                      component="div"
                      className="text-red-600"
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>Mother Contact Number</InputLabel>

                    <Field name="motherContact" className={`${styles} `} />

                    <ErrorMessage
                      name="motherContact"
                      component="div"
                      className="text-red-600"
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>
                      Residential Address of Parent / Guardian
                    </InputLabel>

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
                  </InputSet>
                  <InputSet>
                    <InputLabel>
                      Annual income of Parents (in words )
                    </InputLabel>

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
                  </InputSet>

                  <InputSet>
                    <InputLabel>
                      Does the applicant have any brother / sister studying in
                      RMSE/RMMS? Name, Class & School
                    </InputLabel>

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
                  </InputSet>
                  <InputSet>
                    <InputLabel>Previous School Name & Address</InputLabel>

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
                  </InputSet>
                  <InputSet>
                    <InputLabel>Specify The Board</InputLabel>

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
                  </InputSet>
                  <InputSet>
                    <InputLabel>Class Last Studied</InputLabel>

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
                        />
                        Transfer
                      </label>
                      <label className={' mr-5 pb-2'}>
                        <Field
                          type="radio"
                          className={' mr-3'}
                          name="changeSchool"
                          value="Parent Choice"
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
                      type="textarea"
                      className={`${styles} h-36`}
                    />

                    <ErrorMessage
                      name="markPerviousExam"
                      component="div"
                      className="text-red-600"
                    />
                  </InputSet>
                  <InputSet>
                    <InputLabel>
                      Interest in Co Curricular / Extra Curricular Activities
                      (Mention the Activities )
                    </InputLabel>

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
                  </InputSet>
                  <InputSet>
                    <InputLabel>
                      Any specific health issues for special care
                    </InputLabel>

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
                  </InputSet>
                  <InputSet>
                    <Field name="checked" className={'w-5'} type="checkbox" />
                    <InputLabel>
                      {' '}
                      I agree that once Fees paid to the School is non
                      refundable.{' '}
                    </InputLabel>

                    <ErrorMessage
                      name="checked"
                      component="div"
                      className="text-red-600"
                    />
                  </InputSet>
                  <InputSet>
                    <SubmitButton type="submit">Submit</SubmitButton>
                  </InputSet>
                </Form>
              )}
            </Formik>
          </FlexColCenter>
        </div>
        <FlexColCenter>
          <h1 className="text-primary text-3xl font-bold mt-5">Application</h1>
          <h1>
            <AiOutlineArrowDown className="text-secondary text-5xl animate-bounce font-bold mt-5" />
          </h1>
        </FlexColCenter>
        <div>
          <img
            src={
              'https://img.freepik.com/free-vector/brain-chemistry-concept-illustration_114360-10136.jpg?w=740&t=st=1669476214~exp=1669476814~hmac=c55c03a15a377bbf0bcd3e48af64aa5cb2b5787498447cce8af98bd2453e5d02'
            }
            alt="image"
          />
        </div>
      </div>
    </>
  )
}

export default Application

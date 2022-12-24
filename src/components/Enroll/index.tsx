import React from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { enrollValidation } from '../../components/Validation/enrollValidation'
import { Formik, Form, Field, getIn,ErrorMessage } from 'formik'

const index = () => {
  function getStyles(errors: any, fieldName: string) {
    if (getIn(errors, fieldName)) {
      return {
        border: '1px solid red'
      }
    }
    return
  }
  const enrolIntial = {
    childName: '',
    date: '',
    address: '',
    parentName: '',
    mobileNumber: '',
    email: '',
    grade: '',
    comment: ''
  }
  const styled =
    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
  return (
    <>
      <Formik
        initialValues={enrolIntial}
        validationSchema={enrollValidation}
        onSubmit={(values, actions) => {
          axios({
            method: 'POST',
            url: 'https://formspree.io/f/xvonpgwz',
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
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <div className="flex mx-auto justify-center mt-10">
              <div className=" w-2/3 h-1/4 lg:max-w-6xl">
                <h1 className=" fontText my-4 text-4xl text-center font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl ">
                  Enroll Now
                </h1>
                <div className="grid overflow-hidden grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-1.5">
                  <div className="box p-1 ">
                    <Field
                      type="text"
                      name="childName"
                      style={
                        getStyles(errors, `childName`) &&
                        getStyles(touched, `childName`)
                      }
                      className={styled}
                      placeholder="Name of a Child"
                    />
                    
                    <ErrorMessage
                    
                      name="childName"
                      component="div"
                      className="text-red-600 "
                    />
                  </div>
                  <div className="box p-1">
                    <Field
                      type="date"
                      name="date"
                      style={
                        getStyles(errors, `date`) && getStyles(touched, `date`)
                      }
                      className={styled}
                      placeholder="DD/MM/YY"
                    />
                    
                    <ErrorMessage
                    
                      name="date"
                      component="div"
                      className="text-red-600 "
                    />
                  </div>
                  <div className="box p-1">
                    <Field
                      type="text"
                      name="address"
                      style={
                        getStyles(errors, `address`) &&
                        getStyles(touched, `address`)
                      }
                      className={styled}
                      placeholder="Address"
                    />
                    
                    <ErrorMessage
                    
                      name="address"
                      component="div"
                      className="text-red-600 "
                    />
                  </div>
                  <div className="box p-1">
                    <Field
                      type="text"
                      name="parentName"
                      style={
                        getStyles(errors, `parentName`) &&
                        getStyles(touched, `parentName`)
                      }
                      className={styled}
                      placeholder="Parent (Father / Mother)"
                    />
                    
                    <ErrorMessage
                    
                      name="parentName"
                      component="div"
                      className="text-red-600 "
                    />
                  </div>
                  <div className="box p-1">
                    <Field
                      type="text"
                      name="mobileNumber"
                      style={
                        getStyles(errors, `mobileNumber`) &&
                        getStyles(touched, `mobileNumber`)
                      }
                      className={styled}
                      placeholder="Mobile Number"
                    />
                    
                    <ErrorMessage
                    
                      name="mobileNumber"
                      component="div"
                      className="text-red-600 "
                    />
                  </div>
                  <div className="box p-1">
                    <Field
                      type="text"
                      name="email"
                      style={
                        getStyles(errors, `email`) &&
                        getStyles(touched, `email`)
                      }
                      className={styled}
                      placeholder="Email ID"
                    />
                    
                    <ErrorMessage
                    
                      name="email"
                      component="div"
                      className="text-red-600 "
                    />
                  </div>
                  <div className="box p-1">
                    <Field
                      type="text"
                      name="grade"
                      style={
                        getStyles(errors, `grade`) &&
                        getStyles(touched, `grade`)
                      }
                      className={styled}
                      placeholder="Grade"
                    />
                    
                    <ErrorMessage
                    
                      name="grade"
                      component="div"
                      className="text-red-600 "
                    />
                  </div>
                  <div className="box p-1">
                    <Field
                      type="text"
                      name="comment"
                      style={
                        getStyles(errors, `comment`) &&
                        getStyles(touched, `comment`)
                      }
                      className={styled}
                      placeholder="Comments"
                    />
                    
                    <ErrorMessage
                    
                      name="comment"
                      component="div"
                      className="text-red-600 "
                    />
                  </div>
                  <button
                    // onClick={() => handleSubmit()}
                    className="w-fit h-10 rounded-md bg-secondary px-5 text-white mt-4 ml-2 "
                  >
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>

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
    </>
  )
}

export default index

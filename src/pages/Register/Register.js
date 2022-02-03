import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import ReactiveButton from 'reactive-button'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Register as RegisterApi } from '../../api'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
})

const alertmessage = (data, message) => {
  if (data) {
    toast.success(message)
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  } else toast.error(message)
}

export const Register = () => {
  const [isloading, setIsloading] = useState(false)
  const handlSubmit = (values) => {
    setIsloading((prev) => true)
    const T = setTimeout(() => {
      RegisterApi(values).then(({ data, message }) =>
        alertmessage(data, message),
      )
      setIsloading((prev) => false)
      window.clearTimeout(T)
    }, 3000)
  }
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="top-header">
          <h3>Welcome</h3>
          <p>Enter your information to create your account</p>
        </div>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => handlSubmit(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="user">
                <box-icon type="solid" name="user-circle"></box-icon>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="off"
                />
                {errors.name && touched.name ? (
                  <div className="message-error">{errors.name}</div>
                ) : null}
              </div>
              <div className="email">
                <box-icon name="at"></box-icon>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="off"
                />
                {errors.email && touched.email ? (
                  <div className="message-error">{errors.email}</div>
                ) : null}
              </div>
              <div className="pass">
                <box-icon type="solid" name="lock-alt"></box-icon>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  autoComplete="true"
                />
                {errors.password && touched.password ? (
                  <div className="message-error">{errors.password}</div>
                ) : null}
              </div>
              <div className="btn">
                <ReactiveButton
                  buttonState={isloading ? 'loading' : 'idle'}
                  type="submit"
                  idleText="Sign up"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <p className="last">
        you have an account <Link to="/signin"> Sign in </Link>
      </p>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  )
}

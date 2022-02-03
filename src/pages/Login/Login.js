import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import ReactiveButton from 'reactive-button'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'
import { Login as LoginApi } from '../../api'
const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
})

const alertmessage = (data) => {
  if (data) window.location.reload()
  else toast.error('Bad Email or Password ')
}
export const Login = () => {
  const [isloading, setIsloading] = useState(false)
  const handlSubmit = (values) => {
    setIsloading((prev) => true)
    const T = setTimeout(() => {
      LoginApi(values).then((data) => alertmessage(data))
      setIsloading((prev) => false)
      window.clearTimeout(T)
    }, 3000)
  }
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="top-header">
          <h3>Welcome back</h3>
          <p>Enter your credentials to access your account</p>
        </div>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SigninSchema}
          onSubmit={(values) => handlSubmit(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="user">
                <box-icon type="solid" name="user-circle"></box-icon>
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter your email"
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
                  placeholder="Enter your password"
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
                  idleText="Sign in"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <p className="last">
        You don't have an account <Link to="/signup"> Sign up </Link>
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

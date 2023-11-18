import React from 'react';
import './Signup.css';
import SignUp from '../../Photo/SignUp.avif';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  const navigate = useNavigate();

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    userName: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
   
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/user/signup', values);
        // Handle success response here
        console.log(response.data.message);
        navigate('/login');
      } catch (error) {
        // Handle error response here
        console.error(error.response.data.message);
      }
    },
  });
  console.log(formik);

  return (
    <div className="signupMain">
      <div className="signUpflex">
        <div className="signUpImg">
          <img src={SignUp} alt="" />
        </div>
        <div className="signUpPage">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                id="userName"
                name="userName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
              />
              {formik.touched.userName && formik.errors.userName ? (
                <div className="errorMessage">{formik.errors.userName}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="errorMessage">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="errorMessage">{formik.errors.password}</div>
              ) : null}
            </div>
            <button className="loginBtn" type="submit">
              Sign-Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

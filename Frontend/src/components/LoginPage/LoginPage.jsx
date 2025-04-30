import { useState } from 'react';
import "./LoginPage.css";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';

const LoginPage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const loginForm = useForm();

  const loginValidation = {
    username: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Invalid email address"
      }
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };

  const onHandleLoginSubmit = async (data) => {
    setIsLoading(true);
    try {
      console.log(data)
      // const response = await axios.post(url + '/api/user/login', data)
      // if (response.data.success) {
      //   toast.success("Welcome")
      //   setToken(response.data.token)
      //   localStorage.setItem("token", response.data.token)
      //   setTimeout(() => {
      //     navigate('/dashboard')
      //   }, 1000);
      // }
      // else {
      //   toast.error(response.data.message)
      // }
    } catch (error) {
      console.log("Error occured: ", error);
      toast.error("Error occured")
    }
    finally {
      setIsLoading(false)
      loginForm.reset()
    }


  };
  return (

    <div className="form-section">

      <div className='login-heading'>
        <h1>Welcome </h1>
        <p>Please log in </p>
      </div>

      <form onSubmit={loginForm.handleSubmit(onHandleLoginSubmit)}>
        <div className="input-group">
          <div className='input-group-title'>
            <label htmlFor="username">Email</label>
          </div>
          <input
            type="email"
            id="username"
            {...loginForm.register('username', loginValidation.username)}
            placeholder="Enter your Email"
          />
          {loginForm.formState.errors.username && (
            <p className="error-message">{loginForm.formState.errors.username.message}</p>
          )}
        </div>

        <div className="input-group">
          <div className='input-group-title'>
            <label htmlFor="password">Password</label>
          </div>
          <input
            type="password"
            id="password"
            {...loginForm.register('password', loginValidation.password)}
            placeholder="Enter your password"
          />
          {loginForm.formState.errors.password && (
            <p className="error-message">{loginForm.formState.errors.password.message}</p>
          )}
        </div>

        <div className="btn-login">
          <button type="submit" disabled={isLoading || loginForm.formState.isSubmitting}>
            {isLoading ? (
              <div className="loading-spinner">

              </div>
            ) : (
              <>Login to Dashboard</>
            )}
          </button>
        </div>
      </form>

      <p className="signup-link">
        Don't have an account? <a onClick={() => navigate('/signup')}>Sign Up</a>
      </p>
    </div>
  );
};

export default LoginPage;

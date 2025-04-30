import './SignupPage.css'
import { useForm } from "react-hook-form";
import axios from "axios"
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"
import { StoreContext } from '../../Context/StoreContext';

const SignupPage = ({ setCurrState }) => {

    const [isLoading, setIsLoading] = useState(false);
    const signupForm = useForm();
    const navigate = useNavigate()
    const { url } = useContext(StoreContext)

    const signupValidation = {
        name: {

        },
        email: {
            required: "Email or phone number is required",
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
            }
        },
    };

    const onHandleSignupSubmit = async (data) => {
        setIsLoading(true);
        try {
            const response = await axios.post(url + '/user/register', data)

            if (response.data.success) {
                toast.success(response.data.message)
                navigate('/home')
            }
            else {
                toast.error(response.data.message)
            }
        }
        catch (error) {
            console.log("Error occured: ", error);
        }
        finally {
            setIsLoading(false)
            signupForm.reset()
        }
    };

    return (

        <div>
            <div className="signup-form-section">
                <div className="signup-header">
                    <h2>Create An Account</h2>
                    <p>Enter your details below</p>
                </div>
                <form onSubmit={signupForm.handleSubmit(onHandleSignupSubmit)}>

                    <div className="input-group">
                        <input
                            type="text"
                            id="name"
                            {...signupForm.register('name', signupValidation.name)}
                            placeholder="Name"
                        />

                        {signupForm.formState.errors.name && (
                            <p className="error-message">
                                {signupForm.formState.errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="input-group" >
                        <input
                            type="text"
                            id="email"
                            {...signupForm.register('email', signupValidation.email)}
                            placeholder="Email or Phone Number"
                        />

                        {signupForm.formState.errors.email && (
                            <p className="error-message">
                                {signupForm.formState.errors.email.message}
                            </p>
                        )}

                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            id="signup-password"
                            {...signupForm.register('password', signupValidation.password)}
                            placeholder="Password"
                        />

                        {signupForm.formState.errors.password && (
                            <p className="error-message">
                                {signupForm.formState.errors.password.message}
                            </p>
                        )}
                    </div>



                    <div className='btn-signup'>
                        <button
                            type="submit"
                            disabled={isLoading || signupForm.formState.isSubmitting}
                        >
                            {isLoading ? (
                                <div
                                >
                                    Please wait...
                                </div>
                            ) : (
                                <>Create Account</>
                            )}
                        </button>
                    </div>
                </form>
                <p className="signup-link">
                    Don't have an account? <a onClick={() => setCurrState('login')}>Log In</a>
                </p>
            </div >

        </div >
    )
}

export default SignupPage
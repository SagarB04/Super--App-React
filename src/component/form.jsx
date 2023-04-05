import React, { useState } from 'react'
import './form.css'

export default function Form() {

    const [formValues, setFormValues] = useState({
        name: "",
        username: "",
        email: "",
        mobile: ""
    });

    const [check, setcheck] = useState(false);

    const [formError, setFormError] = useState({});


    const handleChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
    };

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleCheck = (e) => {
        if (e.target.checked) {
            setcheck(true);
        }
        else {
            setcheck(false)
        }
    }

    const handleClick = () => {

        if (check &&
            formValues.name &&
            formValues.username &&
            isValidEmail(formValues.email) &&
            formValues.mobile.length === 10) {

            localStorage.setItem("name", formValues.name)
            localStorage.setItem("username", formValues.username)
            localStorage.setItem("email", formValues.email)
            localStorage.setItem("mobile", formValues.mobile)
            setFormValues({
                name: "",
                username: "",
                email: "",
                mobile: ""
            })
        }

        let error = {};

        if (!formValues.name) {
            error.name = "* Name is required"
        }
        if (!formValues.username) {
            error.username = "* username is required"
        }
        if (!formValues.email) {
            error.email = "* Email is required"
        } else if (!isValidEmail(formValues.email)) {
            error.email = "* Email must be in format (example@gmail.com)"
        }

        if (!formValues.mobile) {
            error.mobile = "* Mobile No. is required"
        } else if (formValues.mobile.length !== 10) {
            error.mobile = "* There must be 10 numbers"
        }
        if (!check) {
            error.check = "* You must accept this!"
        }

        setFormError(error);
    }

    return (
        <div className='form'>
            <h1>Super app</h1>

            <p>Create your new account</p>

            <div className='emailGgl'>Email <span>|</span> Google</div>

            <input
                className='input'
                name='name'
                type="text"
                placeholder='Name'
                onChange={handleChange}
                value={formValues.name}
            />
            <div className='error'>
                <p>{formError.name}</p>
            </div>

            <input
                className='input'
                name='username'
                type="text"
                placeholder='UserName'
                onChange={handleChange}
                value={formValues.username}
            />
            <div className='error'>
                <p>{formError.username}</p>
            </div>

            <input
                className='input'
                name='email'
                type="email"
                placeholder='Email'
                onChange={handleChange}
                value={formValues.email}
            />
            <div className='error'>
                <p>{formError.email}</p>
            </div>

            <input
                className='input'
                name='mobile'
                type="number"
                placeholder='Mobile'
                onChange={handleChange}
                value={formValues.mobile}
            />
            <div className='error'>
                <p>{formError.mobile}</p>
            </div>

            <div className='check'>
                <input type="checkbox" id='checkbox' onChange={handleCheck} />
                <label htmlFor="checkbox">Share my registration data with Superapp</label>
            </div>
            <div className='error'>
                <p>{formError.check}</p>
            </div>

            <button onClick={handleClick} >SIGN UP</button>

            <div className='termsCondition'>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></div>

            <div className='termsCondition'>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></div>

        </div>
    )
}

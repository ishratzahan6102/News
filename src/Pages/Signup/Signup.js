import React, { useContext, useState } from 'react';
import Form from '/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaInstagram, FaPhone, FaGit } from 'react-icons/fa';

import './Signup.css'

const Signup = () => {

    const [error, setError] = useState(null)
    const [accepted, setAccepted] = useState(false)
    const { createUser, signInWithGoogle, signInWithGithub, updateProfile } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value
        console.log(name, photoURL, email, password, confirm)



        if(password < 6){
            setError('Password can not be less than 6 character')
            return
        }
        if(password !== confirm){
            setError('Password did not match')
            return
        }


        createUser(email, password)
        .then((result) => {
            const user = result.user
            console.log(user)
            form.reset('')
            setError('')
            handleUpdateProfile(name, photoURL)
        })
        .catch((error) => {
            console.error(error)
            setError(error.message)
        })
    }


    const handleGoogle = () => {
        signInWithGoogle()
        .then((result) =>{
            const user  = result.user
            console.log(user)
        })
        .catch(error =>{
            console.error("errors: ", error)
        })
    }
    const handleGithub = () => {
        signInWithGithub()
        .then((result) =>{
            const user  = result.user
            console.log(user)
        })
        .catch(error =>{
            console.error("errors: ", error)
        })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    
    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateProfile(profile)
        .then(() =>{})
        .catch(error =>{
            console.error("errors: ", error)
        })
    }
    return (
        <div className='signup-form mt-5'>
            <h2>Please, Signup!</h2>
            <div className='mt-5'>
            <Form onSubmit={handleSubmit} className='form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="url" name='photoURL' placeholder="Enter photo url" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name='confirm'  placeholder="Password" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" onClick={handleAccepted}  label="Accept Terms and Conditions" />
            </Form.Group>
            <input className='btn btn-primary w-100 mb-2' type='submit' value='Sign Up' disabled={!accepted}/>


            <div className='text-start'>
            <p className='text-danger '>{error}</p>
            <p className='text-primary'>Already have an account? <Link to='/login'>Log In</Link></p>
            <button onClick={handleGoogle} className='btn btn-warning w-100 mb-2'><FaGoogle></FaGoogle></button>
            <button onClick={handleGithub} className='btn btn-dark mb-2 w-100'><FaGithub></FaGithub></button>
            </div>


            </Form>
            </div>
        </div>
    );
};

export default Signup;
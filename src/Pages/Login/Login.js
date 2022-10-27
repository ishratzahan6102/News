import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';


const Login = () => {
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext)

    const navigate = useNavigate()
    const location  = useLocation()
    const from = location.state?.from?.pathname || '/courses'
    const [error, setErrors] = useState(' ')

    const handleLogin =  (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        navigate(from, {replace : true} )
        form.reset('')
        

        signIn(email, password)
        .then((result) => {
            const user = result.user
            console.log(user)
            form.reset('')
            setErrors('')
            
        })
        .catch((error) => {
            console.error(error)
            setErrors(error.message)
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
        navigate(from, {replace : true} )
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
        navigate(from, {replace : true} )
    }
    return (
        <div className='signup-form mt-5'>
            <h2>Please, Login!</h2>
            <div className='mt-5'>
            <Form onSubmit={handleLogin} className='form'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email"  required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password"  required/>
                </Form.Group>

                <input className='btn btn-primary w-100 mb-2' type='submit' value='Log In'/>
                <p className='text-danger '>{error}</p>
                <p>New to this app? <Link to='/signup'>Create a new account.</Link></p>
                <button onClick={handleGoogle}  className='btn btn-warning w-100 mb-2'><FaGoogle></FaGoogle></button>
                <button onClick={handleGithub} className='btn btn-dark mb-2 w-100'><FaGithub></FaGithub></button>
            </Form>
            </div>
        </div>
    );
};

export default Login;
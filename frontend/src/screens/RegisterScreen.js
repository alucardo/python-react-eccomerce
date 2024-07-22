import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate, useLocation} from "react-router-dom"
import { Button, Form, Row, Col } from "react-bootstrap"
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader"
import Message from "../components/Message"
import { register } from "../actions/userActions"

function RegisterScreen() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const searchLocation = useLocation().search
    const red = searchLocation ? searchLocation.split('=')[1] : '/'

    const userRegister = useSelector( state => state.userRegister )
    const { error, loading, userInfo } = userRegister

    useEffect(() => {
        if(userInfo) {
            navigate(red)
        }
    }, [navigate, userInfo, red])

    const submitHandler = (e) => {
        e.preventDefault();
        if(password != confirmPassword) {
            setMessage('Password do not match')
        } else {
            dispatch(register(name, email, password))
        }
    }

     return (
         <FormContainer>
            <h1>Register</h1>
            { message && <Message variant='danger'>{message}</Message> }
            { error && <Message variant='danger'>{error}</Message> }
            { loading && <Loader/> }
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>User name</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        required
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group className='my-2'>
                    <Button
                        type='submit'
                        variant='primary'
                    >Register</Button>
                </Form.Group>

            </Form>
            <Row className='py-3'>
                <Col>
                    Have an account? <Link to={red ? `/login?redirect=${red}` : '/login'}>Sign In</Link>
                </Col>
            </Row>
        </FormContainer>
     )
}

export default RegisterScreen

import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate, useLocation} from "react-router-dom"
import { Button, Form, Row, Col } from "react-bootstrap"
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader"
import Message from "../components/Message"
import { login } from "../actions/userActions"

function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const searchLocation = useLocation().search
    const red = searchLocation ? `/${searchLocation.split('=')[1]}` : '/'

    const userLogin = useSelector( state => state.userLogin )
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if(userInfo) {
            navigate(red)
        }
    }, [navigate, userInfo, red])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <h1>Sign In</h1>
            { error && <Message variant='danger'>{error}</Message> }
            { loading && <Loader/> }
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>

                <Form.Group className='my-2'>
                    <Button
                        type='submit'
                        variant='primary'
                    >Sign In</Button>
                </Form.Group>

            </Form>
            <Row className='py-3'>
                <Col>
                    New customer? <Link to={red ? `/register?redirect=${red}` : '/register'}>Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen

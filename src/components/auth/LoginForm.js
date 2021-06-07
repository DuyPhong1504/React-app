import React, { useState } from 'react'
import Buttton from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'


const LoginForm = () => {
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    const history = useHistory()


    const login = async event => {
        event.preventDefault()
        try {
            const res = await axios.post(
                `http://localhost:8080/account/login`,
                {
                    "name": loginForm.username,
                    "password": loginForm.password,
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",

                    }
                }
            );
            if (res.data === true) {
                history.push('/dashboard')
            }
        } catch (error) {
            console.log("error")
            console.log(error);
        }
    }


    const onChangeLoginForm = event => setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
    return (
        <div>
            <Form className='container col-5' onSubmit={login}>
                <Form.Group>
                    <Form.Control type='text' placeholder='username' name='username' required onChange={onChangeLoginForm}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password" placeholder="password" name="password" required onChange={onChangeLoginForm} >
                    </Form.Control>
                </Form.Group>
                <Buttton type='submit' variant='success'>Login</Buttton>
                <p>Click for register</p>
                <Link to='register'>Regis</Link>
            </Form>

        </div>
    )

}

export default LoginForm

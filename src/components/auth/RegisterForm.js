import React, { useState } from 'react'
import Buttton from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {  useHistory } from 'react-router-dom'
import axios from 'axios'

const RegisterForm = () => {
        const [regisForm, setRegisForm] = useState({
            username: '',
            password: ''
        })
    
        const history = useHistory()
    
    
        const login = async event => {
            event.preventDefault()
            try {
                const res = await axios.post(
                    `http://localhost:8080/account/regis`,
                    {
                        "name": regisForm.username,
                        "password": regisForm.password,
                        mode: "cors",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
    
                        }
                    }
                );
                if (res.data === true) {
                    history.push('/login')
                }
            } catch (error) {
                console.log("error")
                console.log(error);
            }
        }
    
    
        const onChangeregisForm = event => setRegisForm({ ...regisForm, [event.target.name]: event.target.value })
        return (
            <div>
                <Form className='container col-5' onSubmit={login}>
                    <Form.Group>
                        <Form.Control type='text' placeholder='username' name='username' required onChange={onChangeregisForm}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" placeholder="password" name="password" required onChange={onChangeregisForm} >
                        </Form.Control>
                    </Form.Group>
                    <Buttton type='submit' variant='success'>Regis</Buttton>
                </Form>
    
            </div>
        )
    
    
}

export default RegisterForm

import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Useauth from '../Hooks/Useauth';

const Register = () => {
    const{handlegooglesignin} = Useauth();
    return (
        <div className="w-50 mx-auto">
            
                <h2 className="text-center">Register: Create Account</h2>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="email" placeholder="name@example.com" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                </Form>
                <p className="text-center">New to MediCare? <Link to="/register">Create new</Link></p>
                <div className="text-center">----------or----------</div>
                <Button className="btn btn-success mb-3"
                    onClick={handlegooglesignin}
                    style={{
                        marginLeft:'30%'
                    }}
                >Google Sign In</Button>
        </div>
    );
};

export default Register;
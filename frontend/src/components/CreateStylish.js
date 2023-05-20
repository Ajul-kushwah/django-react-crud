import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';


function Create() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [registrationNo, setRegistrationNo] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/students/', {
            FirstName: firstName,
            LastName: lastName,
            RegistrationNo: registrationNo,
            Email: email,
            Course: course
        }).then(() => {
            navigate('/');
        }).catch((err) => {
            console.log(err)
        });
    }

    return (
        <>
            <div class="container">
                <br/>
                <br/>
                <br/>
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-4">
                        <h1 class="text-center mt-2">Create</h1>
                        <div class="mt-4">
                            <form class="" onSubmit={handleSubmit}>
                                <div class="form-group">
                                    <input type='text' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}  className='form-control'/>
                                </div>
                                <div class="form-group">
                                    <input type='text' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}  className='form-control'/>
                                </div>
                                <div class="form-group">
                                    <input type='text' placeholder='Registration No.' onChange={(e) => setRegistrationNo(e.target.value)} className='form-control' />
                                </div>
                                <div class="form-group">
                                    <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='form-control' />
                                </div>
                                <div class="form-group">
                                    <input type='text' placeholder='Course' onChange={(e) => setCourse(e.target.value)} className='form-control' />
                                </div>
                                
                                <br/>
                                {/* Neither is this */}
                                <div class="form-group ">
                                    <input type="submit" class="btn btn-secondary btn-block" value="Submit"/>
                                </div>
                                
                                <div class="form-group">
                                    <Link to='/'>
                                        <a href="" class="text-center text-secondary">want to read data?</a>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Create
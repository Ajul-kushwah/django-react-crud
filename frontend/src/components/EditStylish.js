import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Edit() {

    const [id, setId] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [registrationNo, setRegistrationNo] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      setId(localStorage.getItem('studentId'));
      setFirstName(localStorage.getItem('firstName'));
      setLastName(localStorage.getItem('lastName'));
      setRegistrationNo(localStorage.getItem('registrationNo'));
      setEmail(localStorage.getItem('email'));
      setCourse(localStorage.getItem('course'));
    }, [])
    
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://127.0.0.1:8000/students/${id}`,{
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
                    <h1 class="text-center mt-2">Update</h1>
                    <div class="mt-4">
                        <form class="" onSubmit={handleUpdate}>
                            <div class="form-group">
                                <input type='text' value={firstName} placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}  className='form-control'/>
                            </div>
                            <div class="form-group">
                                <input type='text' value={lastName} placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}  className='form-control'/>
                            </div>
                            <div class="form-group">
                                <input type='text' value={registrationNo} placeholder='Registration No.' onChange={(e) => setRegistrationNo(e.target.value)} className='form-control' />
                            </div>
                            <div class="form-group">
                                <input type='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='form-control' />
                            </div>
                            <div class="form-group">
                                <input type='text' value={course} placeholder='Course' onChange={(e) => setCourse(e.target.value)} className='form-control' />
                            </div>
                            <br/>
                            {/* Neither is this */}
                            <div class="form-group ">
                                <input type="submit" value='Update' class="btn btn-secondary btn-block"/>
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

export default Edit
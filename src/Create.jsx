import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './UserReducer';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDOB] = useState('');
    const [age, setAge] = useState('');
    const [bg, setBG] = useState('');
    const [dept, setDept] = useState('');
    const [year, setYear] = useState('');
    const [mobile, setMobile] = useState('');
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, email, dob, age, bg, dept, year, mobile }));
        navigate('/');
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input
                            type='text'
                            name='name'
                            className='form-control'
                            placeholder='enter name'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            name='email'
                            className='form-control'
                            placeholder='enter email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='dob'>DOB:</label>
                        <input
                            type='dob'
                            name='dob'
                            className='form-control'
                            placeholder='enter dob'
                            onChange={(e) => setDOB(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='age'>Age:</label>
                        <input
                            type='age'
                            name='age'
                            className='form-control'
                            placeholder='enter age'
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='bg'>Blood Group:</label>
                        <input
                            type='bg'
                            name='bg'
                            className='form-control'
                            placeholder='enter bg'
                            onChange={(e) => setBG(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='dept'>Dept:</label>
                        <input
                            type='dept'
                            name='dept'
                            className='form-control'
                            placeholder='enter dept'
                            onChange={(e) => setDept(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='year'>Year:</label>
                        <input
                            type='year'
                            name='year'
                            className='form-control'
                            placeholder='enter year'
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='mobile'>Mobile:</label>
                        <input
                            type='mobile'
                            name='mobile'
                            className='form-control'
                            placeholder='enter mobile'
                            onChange={(e) => setMobile(e.target.value)}
                        />
                    </div>

                    <br />
                    <button type='submit' className='btn btn-info'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Create;

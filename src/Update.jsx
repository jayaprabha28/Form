import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './UserReducer';

function Update() {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.find(user => user.id === parseInt(id));
    const { name, email, dob, age, bg, dept, year, mobile } = existingUser;
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);
    const [udob, setDOB] = useState(dob);
    const [uage, setAge] = useState(age);
    const [ubg, setBG] = useState(bg);
    const [udept, setDept] = useState(dept);
    const [uyear, setYear] = useState(year);
    const [umobile, setMobile] = useState(mobile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: parseInt(id),
            name: uname,
            email: uemail,
            dob: udob,
            age: uage,
            bg: ubg,
            dept: udept,
            year: uyear,
            mobile: umobile
        }));
        navigate('/');
    };

    return (
        <div>
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
                <div className='w-50 border bg-secondary text-white p-5'>
                    <h3>Update User</h3>
                    <form onSubmit={handleUpdate}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                name='name'
                                className="form-control"
                                placeholder='Enter name'
                                value={uname}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name='email'
                                className='form-control'
                                placeholder='Enter email'
                                value={uemail}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="dob">Date of Birth:</label>
                            <input
                                type="date"
                                name='dob'
                                className='form-control'
                                value={udob}
                                onChange={e => setDOB(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="age">Age:</label>
                            <input
                                type="number"
                                name='age'
                                className='form-control'
                                placeholder='Enter age'
                                value={uage}
                                onChange={e => setAge(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="bg">Blood Group:</label>
                            <input
                                type="text"
                                name='bg'
                                className='form-control'
                                placeholder='Enter blood group'
                                value={ubg}
                                onChange={e => setBG(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="dept">Dept:</label>
                            <input
                                type="text"
                                name='dept'
                                className='form-control'
                                placeholder='Enter dept'
                                value={udept}
                                onChange={e => setDept(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="year">Year:</label>
                            <input
                                type="text"
                                name='year'
                                className='form-control'
                                placeholder='Enter Year'
                                value={uyear}
                                onChange={e => setYear(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="mobile">Mobile:</label>
                            <input
                                type="text"
                                name='mobile'
                                className='form-control'
                                placeholder='Enter mobile'
                                value={umobile}
                                onChange={e => setMobile(e.target.value)}
                            />
                        </div>
                        <br />
                        <button className='btn btn-info'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Update;

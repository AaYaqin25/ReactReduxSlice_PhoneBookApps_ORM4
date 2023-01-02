import React, { useCallback, useState } from "react";
import { useDispatch } from 'react-redux'
import { create } from "./userSlice";

export default function UserFormAdd(props) {

    const dispatch = useDispatch()
    const [user, setUser] = useState({
        name: '',
        phone: ''
    })

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setUser({
            ...user,
            [name]: value
        });
    }


    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        dispatch(create(user.name, user.phone))
        setUser({ name: '', phone: '' })
    }, [dispatch, user])

    return (
        <form onSubmit={handleSubmit}>
            <div className="row g-1 align-items-center">
                <div className="col-auto">
                    <label htmlFor="name" className="col-form-label">Name</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="name" name='name' className="form-control" placeholder='name' onChange={handleInputChange} value={user.name} />
                </div>

                <div className="col-auto">
                    <label htmlFor="phone" className="col-form-label">Phone</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="phone" name='phone' className="form-control" placeholder='phone' onChange={handleInputChange} value={user.phone} />
                </div>
                <div className="col-auto">
                    <button id='btnsave' className='btn btn-light' ><i className="fa-regular fa-circle-check"></i> save</button>
                    <button id='btncancel' className='btn btn-light' onClick={props.cancel}><i className="fa-solid fa-ban"></i> cancel</button>
                </div>
            </div>
        </form>
    )
}


import '../../styling/all.css'
import React, { useState } from 'react'
import UserList from './UserList';
import UserFormSearch from './UserFormSearch';
import UserFormAdd from './UserFormAdd';

export default function UserBox(props) {

    const [user, setUser] = useState({
        isAdd: false
    })

    const handleClickAdd = () => {
        setUser({
            isAdd: true
        })
    }

    const handleCancelClick = () => {
        setUser({
            isAdd: false
        });
    }


    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <div className="head">
                        <h1>Phone Book Apps</h1>
                    </div>
                </div>
            </div>
            <br />
            <div>
                {
                    user.isAdd ?
                        <div className="card">
                            <div className="card-header">
                                <h5 id='texthead'>Adding Form</h5>
                            </div>
                            <div className="card-body">
                                <UserFormAdd cancel={handleCancelClick} />

                            </div>
                        </div>
                        :
                        <button id='btnadd' className='btn btn-light' onClick={handleClickAdd} ><i className="fas fa-plus"></i> add </button>
                }
            </div>
            <br />

            <div className="card">
                <div className="card-header">
                    <h5 id='texthead'>Search Form</h5>
                </div>
                <div className="card-body">
                    <UserFormSearch />
                </div>
            </div>
            <br />
            <UserList />

        </div>
    )
}



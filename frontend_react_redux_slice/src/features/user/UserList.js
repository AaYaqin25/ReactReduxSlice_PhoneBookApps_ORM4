import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from "react"
import UserItem from "../../components/UserItem"
import { loadUserAsync, loadPagination, addUserAsync, removeUserAsync, updateUserAsync, selectUser } from './userSlice'

export default function UserList(props) {

    const users = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUserAsync())
    }, [dispatch])

    const scrolling = (event) => {
        var element = event.target;
        if (element.scrollHeight - element.scrollTop - element.clientHeight <= 1) {
            dispatch(loadPagination())
        }

    }

    return (
        <div onScroll={scrolling} style={{ overflowY: "scroll", height: 200 }}>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index) => (
                            <UserItem
                                key={item.id}
                                no={index + 1}
                                name={item.name}
                                phone={item.phone}
                                sent={item.sent}
                                remove={() => dispatch(removeUserAsync(item.id))}
                                resending={() => dispatch(addUserAsync({ id: item.id, name: item.name, phone: item.phone }))}
                                update={(name, phone) => dispatch(updateUserAsync({ id: item.id, name: name, phone: phone }))} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

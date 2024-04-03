import React, { useEffect, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
function Test() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3100/get', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.log("error"));
    }, []);
    return (
        <div className="container-fluid nav-bg">
            <div className="row">
                <div className="col-10 mx-auto pt-5">
                    <div className="row">
                        <div className="col-lg-6 my-6 d-flex justify-content-center flex-column order-1">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Company Email</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user.id}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{ user.cemail}</td>
                                            <td>{user.role}</td>
                                            <td><Link className="btn btn-success" to ={`/update/${user.cemail}`}>edit</Link></td>
                                            <td><Link className='btn btn-danger' to={`/delete/${user.cemail}`}>delete</Link></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Test;

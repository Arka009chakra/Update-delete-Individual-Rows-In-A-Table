import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Update() {
    const [values, setValues] = useState('');
    const [cemail1, setCemail1] = useState('');
    const [role, setRole] = useState('');
    const { cemail } = useParams();

    useEffect(() => {
        fetch('http://localhost:3100/getdata/' + cemail, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res1 => {
            setValues(res1);
            setCemail1(res1.cemail);
            setRole(res1.role);
        })
        .catch(err => console.log("error"))
    }, []);

    function test(e) {
        e.preventDefault();
        fetch('http://localhost:3100/pop',{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                cemail1: cemail1,
                role: role
            })
        })
        .then(res=>res.json())
        .then(data=>console.log('success'))
        .catch(err=>console.log('error'))
    }

    return (
        <div className="container" style={{marginTop: "100px"}}>
            <div className="row justify-content-center">
                <div className="col-md-6 col-10">
                    <form onSubmit={test}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label" style={{color: "blue", fontWeight: "bold"}}>Company Email address</label>
                            <input type="text" value={cemail1} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setCemail1(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputRole" className="form-label" style={{color: "blue", fontWeight: "bold"}}>Role</label>
                            <input type="text" value={role} className="form-control" id="exampleInputRole" aria-describedby="roleHelp" onChange={e => setRole(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Update;

import React, { useState } from 'react'
import {NavLink, useHistory} from 'react-router-dom'

const Login = () => {
	const history = useHistory()
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const loginUser = async (e) =>{
		e.preventDefault();
		const res = await fetch('/signin',{
			method: "POST",
			headers : {
				"Content-Type" : "application/json"
			},
			body: JSON.stringify ({
				email,
				password
			})
		});
		const data = res.json();

		if(res.status === 400 || !data){
			window.alert('invalid data')
		} else {
			window.alert("login success")
			history.push("/");
		}
	}

	return (
        <div>
            
            <div className="form-parent-center">
	    <form method="POST">
		    <div className="wrapper">
			<div className="this">
			<div className="h5 font-weight-bold text-center mb-3">Sign In</div>
			<div className="form-group d-flex align-items-center">
				<div className="icon">
					<span className="far fa-envelope" />
				</div>{' '}
				<input type="email" className="form-control" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="Email" />
			</div>            
			<div className="form-group d-flex align-items-center">
				<div className="icon">
					<span className="fas fa-key" />
				</div>{' '}
				<input className="form-control" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="Password" />    
                
				<div className="icon btn">
					<span className="fas fa-eye-slash" />
				</div>
				    
                <div className="icon btn">
					<span className="fas fa-eye-slash" />
				</div>
			</div>
            <div className="login">
			<button type="submit" onClick={loginUser} className="btn btn-primary mb-3 login">Log In</button></div>
			<div className="connect border-bottom mt-4 mb-4" />
            <NavLink className="link" to='/signup'>Create an account</NavLink>
			</div>
		    </div>
        
	    </form>
		</div>

        </div>
    )
}

export default Login

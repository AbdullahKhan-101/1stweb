import React, { useState } from 'react';
import {NavLink, useHistory} from 'react-router-dom'

const Signup = () => {

	const history = useHistory()

	const [user, setUser] = useState({
		name: "", email: "", phone: "", work: "", password: "", cpassword: ""
	})

	let name, value;
	const handleInputs = (e) =>{
		// console.log(e);
		name = e.target.name;
		value = e.target.value;

		setUser({...user, [name]:value})
	}

	const postData = async (e) =>{
		e.preventDefault();
		const {name, email, phone, work, password, cpassword} = user;
		const res = await fetch ("/register", {
			method: "POST",
			headers: {
				"Content-Type" : "application/json"
			},
			body: JSON.stringify({
				name, email, phone, work, password, cpassword
			})
		});
		const data = await res.json();
 
		if(res.status === 422 || !data){
			window.alert("invalid registration")
			console.log('invalid registeration')
		} else {
			window.alert("registration successful")
			console.log('successful registration');

			history.push("/login");
		}
	}

	return (
		<div className="form-parent-center">
	    <form method="POST">
		<div className="this">
		<div className="wrapper">
		<div className="h5 font-weight-bold text-center mb-3">Sign up</div>
		<div className="form-group d-flex align-items-center">
			<div className="icon">
				<span className="fas fa-user" />
			</div>{' '}
			<input type="text" name="name" id="name" className="form-control"  value={user.name} onChange={handleInputs} placeholder="Name" />
		</div>
		<div className="form-group d-flex align-items-center">
			<div className="icon">
				<span className="fas fa-envelope" />
			</div>{' '}
			<input type="email" className="form-control" name="email" value={user.email} onChange={handleInputs} placeholder="Email" />
			</div>
			<div className="form-group d-flex align-items-center">
				<div className="icon">
					<span className="fas fa-phone" />
				</div>{' '}
				<input  type="number" className="form-control" name="phone" value={user.phone} onChange={handleInputs} placeholder="Phone" />
			</div>
			<div className="form-group d-flex align-items-center">                
				<input type="text" className="form-control" name="work" value={user.work} onChange={handleInputs} placeholder="profession" />
			</div>
            
			<div className="form-group d-flex align-items-center">
				<div className="icon">
					<span className="fas fa-key" />
				</div>{' '}
				<input  className="form-control" name="password" value={user.password} onChange={handleInputs} placeholder="Password" />    
                
				<div className="icon btn">
					<span className="fas fa-eye-slash" />
				</div>
				<input className="form-control" name="cpassword" value={user.cpassword} onChange={handleInputs} placeholder="C password" />    
                <div className="icon btn">
					<span className="fas fa-eye-slash" />
				</div>

			</div>
			<button type="submit" value="register" name="signup" onClick={postData} className="btn btn-primary mb-3">Register</button>
			<div className="connect border-bottom mt-4 mb-4" />
            <NavLink className="link" to='/login'>Already have an account</NavLink>
			</div>
		    </div>
        
	    </form>
		</div>
	);
};

export default Signup;

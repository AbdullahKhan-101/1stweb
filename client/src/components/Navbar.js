import React from 'react';
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import react from '../images/reactname.png'

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light ">
			<NavLink  className="navbar-brand navbarr" to="/">
					<p className="navimg"><img  className="navimg" src={react} alt="five"></img></p>
				</NavLink>
				
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse hannn" id="navbarSupportedContent">
					<ul className="navbar-nav hannn">
						<li className="nav-item active hann ">
							<NavLink className="nav-link" to="/">
								Home <span className="sr-only" />
							</NavLink>
						</li>
						<li className="nav-item hann">
							<NavLink className="nav-link " to="/about">
								About
							</NavLink>
						</li>
						<li className="nav-item hann">
							<NavLink className="nav-link" to="/contact">
								Contact
							</NavLink>
						</li>
						<li className="nav-item hann">
							<NavLink className="nav-link" to="/login">
								Login
							</NavLink>
						</li>
						<li className="nav-item hann">
							<NavLink className="nav-link" to="/Signup">
								Registration
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

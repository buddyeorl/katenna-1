import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import "./NavBar.css";

const NavBar = () =>
	<nav className="navbar navbar-dark navbar-expand-lg">
		<div className="container">
			<Link className="navbar-brand" to="/">
				<img src='/img/katennaWhite.svg' alt="KATENNA" id="logo" />
			</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" id="navMenuIcon">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse justify-content-end" id="navbarText">
				<ul className="navbar-nav ">
					<li className="nav-item">
						<NavLink smooth to="/#features">FEATURES</NavLink>
					</li>
					<li className="nav-item">
						<NavLink smooth to="/#downloadsContFlu">DOWNLOAD</NavLink>
					</li>
					<li className="nav-item">
						<NavLink smooth to="/#priceContFlu">PRICING</NavLink>
					</li>
					<li className="nav-item">
						<NavLink smooth to="/#contact">CONTACT</NavLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>;

export default NavBar;

import React, { useContext } from "react";
import "./Stylesheets/MyNav.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Client from "./components/Cust_DashBoard/client";
import { AuthContext } from "./components/auth/Auth";
import Stylist_Quiz_List from "./components/Stylist_DashBoard/notification";
import Home from "./components/auth/Home";
import List from "./components/consultation_form/cons_list";
import MakingApts from "./components/Cust_DashBoard/makingapts";
import Cut from "./components/terminology/Cut";
import Dye from "./components/terminology/Dye";
import Style from "./components/terminology/Style";
import PastAnAppts from "./components/Cust_DashBoard/PastAppts";
import PastUpComing from "./components/Cust_DashBoard/PastUpComing";
import HairProfile from "./components/Cust_DashBoard/hairprofile";

// Icons
import favicon from "./images/logofavicon.png";
import navlogo from "./images/topnav2.svg";

const App = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<Router>
			<div className="app">
				<div>
					<nav className="navbar navbar-expand-lg navbar-light fixed-top navBar-color">
						<div className="nav-box">
							<a className="navbar-brand">
								<div className="favicon-logo">
									<img
										src={favicon}
										alt="icon-logo"
										className="favicon"
									/>
									<h3>HairCode</h3>
								</div>
							</a>
						</div>
						<button
							className="navbar-toggler topnav-menu"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="topnav-menu">
								<img
									src={navlogo}
									alt="menu"
									height="22"
									width="22"
								/>
							</span>
						</button>
						<div
							className="collapse navbar-collapse navbar-right"
							id="navbarNav">
							<ul className="navbar-nav">
								{!!currentUser ? (
									<>
										<li className="nav-item">
											<Link
												className="nav-link"
												to="kyramellema.com">
												KyraMellema.com
											</Link>
										</li>
										<li className="nav-item nav-up">
											<Link
												className="nav-link"
												component={Home}>
												Sign Out
											</Link>
										</li>
									</>
								) : (
									<>
										<li className="nav-item">
											<Link
												className="nav-link"
												to="https://www.kyramellema.com">
												KyraMellema.com
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className="nav-link"
												to="/signup">
												Sign Up
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className="nav-link"
												to="/login">
												Member Login
											</Link>
										</li>
									</>
								)}
							</ul>
						</div>
					</nav>
					{!!currentUser ? (
						<nav className="menu menu-hiddme" tabIndex="0">
							<ul>
								<>
									{/* This is the hair quiz, uncomment to access in navbar */}
									{/* <li class="icon-me">
										<span>
											<Link
												className="nav-link"
												to="/quiz">
												Quiz
											</Link>
										</span>
									</li> */}
									<li class="icon-pastappointment">
										<span>
											<Link className="nav-link" to="/">
												Dashboard
											</Link>
										</span>
									</li>
									<li class="icon-appointment">
										<span>
											<Link
												class="nav-link"
												to="/make-appointment">
												Make Appointment
											</Link>
										</span>
									</li>
									<li className="nav-icon" class="icon-terms">
										<div class="dropdown">
											<span>
												<Link class="dropbtn nav-link">
													Terminology
												</Link>
											</span>
											<div class="dropdown-content">
												<a href="/cut">Cut</a>
												<a href="/dye">Dye</a>
												<a href="/style">Style</a>
											</div>
										</div>
									</li>
								</>
							</ul>
						</nav>
					) : (
						<></>
					)}
				</div>
				<div className="container" className="content-container">
					{!!currentUser && (
						<Route exact path="/profile" component={Client} />
					)}
					{!!currentUser && (
						<Route
							exact
							path="/make-appointment"
							component={MakingApts}
						/>
					)}
					{!!currentUser && (
						<Route
							exact
							path="/pastAppts"
							component={PastAnAppts}
						/>
					)}
					{!!currentUser && (
						<Route exact path="/" component={PastUpComing} />
					)}
					<Route exact path="/login" component={Login} />
					<Route exact path="/quiz" component={List} />
					<Route exact path="/signup" component={SignUp} />
					<Route
						exact
						path="/stylist"
						component={Stylist_Quiz_List}
					/>
					{!!currentUser && (
						<Route exact path="/cut" component={Cut} />
					)}
					{!!currentUser && (
						<Route exact path="/dye" component={Dye} />
					)}
					{!!currentUser && (
						<Route exact path="/style" component={Style} />
					)}
				</div>
			</div>
		</Router>
	);
};
export default App;

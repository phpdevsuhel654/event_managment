import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

/* Front Panel Pages */
import FrontHome from "./pages/front/Home";
import FrontAbout from "./pages/front/About";
import FrontLogin from "./pages/front/Login";
import FrontRegister from "./pages/front/Register";

/* Backend Panel Pages */

const App = () => {
    return (
		<div>
			<Router>
				{/* <FrontHome/> */}
				<Routes>
						{/* Front Panel Routes */}
						<Route path="/" exact element={FrontHome} />
						<Route path="/about" component={FrontAbout} />
						<Route path="/login" element={FrontLogin} />
						<Route path="/register" element={FrontRegister} />

						{/* Admin Panel Routes */}
						{/* 
						<Route path="/admin" exact component={AdminDashboard} />
						<Route path="/admin/settings" component={AdminSettingsPage} />
						*/}
				</Routes>
			</Router>
		</div>
    );
};

/*
const App = () => {
    return (
		<div>
			<Router>
			<FrontHeader/>
			{window.location.pathname !== '/login' && (
				<>
					<Home/>
				</>
        	)}
			<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
			</Routes>
				
			<FrontFooter/>
			</Router>
		</div>
    );
};
*/

export default App;

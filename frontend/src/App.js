import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

/* Front Panel Pages */
import FrontHeader from "./components/front/Header";
import FrontFooter from "./components/front/Footer";

import FrontHome from "./pages/front/Home";
import FrontEvent from "./pages/front/Event";
import FrontAbout from "./pages/front/About";
import FrontContact from "./pages/front/Contact";
import FrontLogin from "./pages/front/Login";
import FrontRegister from "./pages/front/Register";

/* Backend Panel Pages */

const App = () => {
	return (
		<div>
			<Router>
				<FrontHeader />
				<Routes>
					{/* Front Panel Routes */}
					<Route path="/" exact element={<FrontHome />} />
					<Route path="/event" element={<FrontEvent />} />
					<Route path="/about" element={<FrontAbout />} />
					<Route path="/contact" element={<FrontContact />} />
					<Route path="/login" element={<FrontLogin />} />
					<Route path="/register" element={<FrontRegister />} />

					{/* Admin Panel Routes */}
					{/* 
						<Route path="/admin" exact component={AdminDashboard} />
						<Route path="/admin/settings" component={AdminSettingsPage} />
						*/}
				</Routes>
				<FrontFooter />
			</Router>
		</div>
	);
};

export default App;

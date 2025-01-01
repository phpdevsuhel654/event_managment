import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./pages/Header";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
    return (
		<div>
			<Router>
			<Header/>
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
				
		<Footer/>
			</Router>
		</div>
    );
};

export default App;

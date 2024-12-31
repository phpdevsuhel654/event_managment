import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./pages/Header";
import Home from "./pages/Home";
import Footer from "./pages/Footer";

const App = () => {
    return (
		<div>
			<Header/>
			<Home/>
			<Footer/>
		</div>
    );
};

export default App;

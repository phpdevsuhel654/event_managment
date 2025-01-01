import React, { useState } from "react";
import axios from "axios";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            localStorage.setItem("token", data.token);
            alert("Login successful");
        } catch (err) {
            alert("Login failed");
        }
    };

    return (
		<div className="App">
        <section class="page-title bg-2">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block">
          <h1>Login</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quibusdam.</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* contact form start */}
<section className="login-form">
  <div className="container">
    <form className="row" id="contact-form">
      <div className="col-md-6 col-sm-12">
        <div className="block">
          <div className="form-group">
            <input name="user_name" type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <input name="user_email" type="text" className="form-control" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input name="user_subject" type="text" className="form-control" placeholder="Subject" />
          </div>
        </div>
      </div>
	  
      <div className="col-md-6 col-sm-12">
        <div className="block">
          <div className="form-group-2">
            <textarea name="user_message" className="form-control" rows={4} placeholder="Your Message" defaultValue={""} />
          </div>
          <button className="btn btn-default" type="submit">Send Message</button>
        </div>
      </div>
      <div className="error" id="error">Sorry Msg dose not sent</div>
      <div className="success" id="success">Message Sent</div>
    </form>
	
    {/* <div className="contact-box row">
      <div className="col-md-6 col-sm-12">
        <div className="block">
          <h2>Stop By For A visit</h2>
          <ul className="address-block">
            <li>
              <i className="ion-ios-location-outline" />North Main Street,Brooklyn Australia
            </li>
            <li>
              <i className="ion-ios-email-outline" />Email: contact@mail.com
            </li>
            <li>
              <i className="ion-ios-telephone-outline" />Phone:+88 01672 506 744
            </li>
          </ul>
          <ul className="social-icons">
            <li>
              <a href="http://www.themefisher.com"><i className="ion-social-googleplus-outline" /></a>
            </li>
            <li>
              <a href="http://www.themefisher.com"><i className="ion-social-linkedin-outline" /></a>
            </li>
            <li>
              <a href="http://www.themefisher.com"><i className="ion-social-pinterest-outline" /></a>
            </li>
            <li>
              <a href="http://www.themefisher.com"><i className="ion-social-dribbble-outline" /></a>
            </li>
            <li>
              <a href="http://www.themefisher.com"><i className="ion-social-twitter-outline" /></a>
            </li>
            <li>
              <a href="http://www.themefisher.com"><i className="ion-social-facebook-outline" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-6 mt-5 mt-md-0">
        <div className="block">
          <div className="google-map">
            <div className="map" id="map_canvas" data-latitude="51.5223477" data-longitude="-0.1622023" data-marker="images/marker.png" />
          </div>
        </div>
      </div>
    </div> */}
  </div>
</section>

        {/* <form onSubmit={handleLogin}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email} onChange={(e) => setEmail(e.target.value)} required 
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password} onChange={(e) => setPassword(e.target.value)} required
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="javascript:void()">password?</a>
        </p>
      </form> */}
        

		</div>
    );
};

export default Login;
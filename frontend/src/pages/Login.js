import React, { useState } from "react";
import axios from "axios";



const Login = () => {

  const [name, setName] = useState(""); // for name
  const [email, setEmail] = useState(""); // for email
  const [password, setPassword] = useState(""); // for password
  const [role, setRole] = useState(""); // for role

  const handleChange = (e) => {
    setRole(e.target.value);  // Update the role state when the user selects an option
  };

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

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/register", { name, email, password });
            alert("Registration successful");
        } catch (err) {
            console.log(err);
            alert("Registration failed");
        }
    };

    return (
		<div className="App">
        <section class="page-title bg-2">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block">
          <h1>Authentication</h1>
          <p>User Login / Register Form </p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* contact form start */}
<section className="login-form">
  <div className="container">
  <div className="row">
 <div class="col">
  <fieldset class="border p-4">
    <legend class="w-auto">Login</legend>
    <form id="contact-form1" onSubmit={handleLogin}>
      <div class="block">
        <div class="form-group">
          <label htmlfor="exampleInputEmail1" class="float-left">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please Enter email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <small id="emailHelp" class="form-text text-muted ">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group mt-2">
          <label htmlfor="exampleInputPassword1" class="float-left">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Please Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div class="form-check float-left">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" htmlfor="exampleCheck1">Check me out</label>
        </div>
        <div class="form-group">
        <button type="submit" class="btn btn-primary mt-4">Sign In</button>
        </div>
      </div>
    </form>
  </fieldset>
</div>

    <div class="col">
    <fieldset class="border p-4">
    <legend class="w-auto">Registration</legend>
    <form id="contact-form1" onSubmit={handleRegister}>
      <div class="block">
        <div class="form-group">
          <label htmlfor="firstname" class="float-left">Name</label>
          <input type="text" className="form-control" placeholder="Please Enter First name" value={name} onChange={(e) => setName(e.target.value)} required />
          <small id="emailHelp" class="form-text text-muted ">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label htmlfor="regemail" class="float-left">Email</label>
          <input type="text" className="form-control" placeholder="Please Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div class="form-group">
          <label htmlfor="regpassword" class="float-left">Password</label>
          <input type="password" className="form-control" placeholder="Please Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div class="form-group">
          <label htmlfor="regrole" class="float-left">Role</label>
          <select class="form-control" value={role} onChange={handleChange} required>
            <option>Please select</option>
            <option value="attendee">attendee</option>
            <option value="organizer">organizer</option>
            <option value="admin">admin</option>
          </select>
        </div>
        <div class="form-check float-left">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" htmlfor="exampleCheck1">Check me out</label>
        </div>
        <div class="form-group">
        <button type="submit" class="btn btn-primary mt-4">Sign Up</button>
        </div>
      </div>
    </form>
  </fieldset>
    </div>
  </div>
  {/* <div className="row">
    <form className="row1" id="contact-form1">
      <div className="col-md-12 col-sm-12">
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
      </form>
      <form className="row1" id="contact-form2">
      <div className="col-md-12 col-sm-12">
        <div className="block">
          <div className="form-group-2">
            <textarea name="user_message" className="form-control" rows={4} placeholder="Your Message" defaultValue={""} />
          </div>
          <button className="btn btn-default" type="submit">Send Message</button>
        </div>
      </div>
      </form>
      <div className="error" id="error">Sorry Msg dose not sent</div>
      <div className="success" id="success">Message Sent</div>
    
    </div> */}
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
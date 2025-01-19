import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="navigation">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg p-0">
                <a className="navbar-brand" href="index.html">
                  <img src="images/logo.png" alt="Logo" />
                </a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="ion-android-menu" />
                </button>
                <div className="collapse navbar-collapse ml-auto" id="navbarsExample09">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item @@service"><a className="nav-link" href="service.html">Events</a></li>
                    <li className="nav-item @@service"><a className="nav-link" href="service.html">About Us</a></li>
                    <li className="nav-item @@contact"><a className="nav-link" href="contact.html">Contact</a></li>
                    <li className="nav-item @@contact"><a className="nav-link btn btn-solid-border" href="/login">Login</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>{/* header close */}

    </div>
  )
}

export default Header;
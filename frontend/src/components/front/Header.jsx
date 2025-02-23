import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="navigation">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg p-0">
                <a className="navbar-brand" href="/">
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
                    <li className="nav-item"><a className="nav-link" href="/event">Events</a></li>
                    <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                    { /*<li className="nav-item"><a className="nav-link btn btn-solid-border" href="/login">Login</a></li>*/ }
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
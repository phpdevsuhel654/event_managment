import React from 'react'

export default function Header() {
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
                <a className="nav-link" href="index.html">Home</a>
              </li>
              <li className="nav-item dropdown @@portfolio">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio <span className="ion-ios-arrow-down" /></a>
                <ul className="dropdown-menu" aria-labelledby="dropdown03">
                  <li><a className="dropdown-item @@portfolioFilter" href="portfolio.html">Portfolio Filter</a></li>
                  <li><a className="dropdown-item @@portfolioSingle" href="portfolio-single.html">Portfolio Single</a></li>
                  <li className="dropdown dropdown-submenu dropright">
                    <a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0301" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown0301">
                      <li><a className="dropdown-item" href="index.html">Submenu 01</a></li>
                      <li><a className="dropdown-item" href="index.html">Submenu 02</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item @@service"><a className="nav-link" href="service.html">Service</a></li>
              <li className="nav-item dropdown @@blog">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <span className="ion-ios-arrow-down" /></a>
                <ul className="dropdown-menu" aria-labelledby="dropdown05">
                  <li><a className="dropdown-item @@blogGrid" href="blog-grid.html">Blog Grid</a></li>
                  <li><a className="dropdown-item @@blogSingle" href="blog-single.html">Blog Single</a></li>
                  <li><a className="dropdown-item @@blogRS" href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                  <li><a className="dropdown-item @@blogLS" href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                  <li><a className="dropdown-item @@blogFW" href="blog-full-width.html">Blog Full Width</a></li>
                  <li className="dropdown dropdown-submenu dropleft">
                    <a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0501" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown0501">
                      <li><a className="dropdown-item" href="index.html">Submenu 01</a></li>
                      <li><a className="dropdown-item" href="index.html">Submenu 02</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown @@pages">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages <span className="ion-ios-arrow-down" /></a>
                <ul className="dropdown-menu" aria-labelledby="dropdown05">
                  <li><a className="dropdown-item @@about" href="about.html">About Us</a></li>
                  <li><a className="dropdown-item @@comingSoon" href="coming-soon.html">Coming Soon</a></li>
                  <li><a className="dropdown-item @@404" href="404.html">404 Page</a></li>
                  <li><a className="dropdown-item @@faq" href="faq.html">FAQ</a></li>
                  <li><a className="dropdown-item @@pricing" href="pricing.html">Pricing Table</a></li>
                </ul>
              </li>
              <li className="nav-item @@contact"><a className="nav-link" href="contact.html">Contact</a></li>
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

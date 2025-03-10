// src/pages/front/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div>
      <div>
        <section className="about section">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="block">
                  <div className="section-title">
                    <h2>Contact Us</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                      blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id </p>
                </div>
              </div>{/* .col-md-7 close */}
              <div className="col-md-5">
                <div className="block">
                  <img src="images/wrapper-img.png" alt="Img" />
                </div>
              </div>{/* .col-md-5 close */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
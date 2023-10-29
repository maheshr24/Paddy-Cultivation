import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          Kanyarasi
        </h3>

        <p className="footer-links">
          <a href="/" className="link-1">
            Home
          </a>

          <a href="/crop">Crop</a>

          <a href="/soil">Soil</a>

          <a href="/about">About</a>

          <a href="/schemes">Schemes</a>

          <a href="/community">Community</a>
        </p>

        <p className="footer-company-name">Kanyarasi © 2021</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            VNR VJIET
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+14246257905</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:help.annadata@gmail.com">help@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Complete Farming support for the backbone of out nation, our Annadata
        </p>

        <div className="footer-icons">
          <a href="/">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="/">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

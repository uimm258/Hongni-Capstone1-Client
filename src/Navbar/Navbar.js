import React, { Component } from 'react';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <ul id="nav">
            <li><a href="/">Home</a></li>
            <li><a href="#AboutUs">About Us</a></li>
            <li><a href="#ContactUs">Contact Us</a></li>
          </ul>
        </div>

        <div id="AboutUs">
          <AboutUs />
        </div>

        <div id="ContactUs">
          <ContactUs />
        </div>
      </div>
    );
  }
}
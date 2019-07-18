import React, { Component } from 'react';
import '../../App.css';
import './Footer.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {MDBIcon} from 'mdbreact';

class Footer extends Component {
  
    render() {
    
    return (
        <footer id="myFooter">
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <h5>Get started</h5>
                    <ul>
                        <li><a href="/announcement">Home</a></li>
                        <li><a href="/myaccount">My Acount</a></li>
                    </ul>
                </div>
                <div class="col-sm">
                    <h5>About us</h5>
                    <ul>
                        <li><a href="/about">Company Information</a></li>
                        <li><a href="https://www.google.com/maps/place/Big+Trouble/@43.6533666,-79.3986777,17z/data=!3m1!4b1!4m5!3m4!1s0x882b35129cc628c9:0x872f6d27e89059de!8m2!3d43.6533666!4d-79.396489">Contact us</a></li>
                        <li><a href="https://www.google.com/maps/place/Big+Trouble/@43.6533666,-79.3986777,17z/data=!3m1!4b1!4m5!3m4!1s0x882b35129cc628c9:0x872f6d27e89059de!8m2!3d43.6533666!4d-79.396489">Reviews</a></li>
                    </ul>
                </div>
                <div class="col-sm">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="/about">FAQ</a></li>
                        <li><a href="/about">Help desk</a></li>
                        <li><a href="/about">Forums</a></li>
                    </ul>
                </div>
                
            </div>
           
            <iframe id="map-container" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJySjGnBI1K4gR3lmQ6CdtL4c&key=AIzaSyDKuzBwcuS7J_QElTUNhx342USsFB5Ejf4"></iframe>
        </div>
        <div class="social-networks">
            <a href="https://www.instagram.com/bigtroublebar/?hl=en" class="twitter"><MDBIcon fab icon="instagram" /></a>
            <a href="https://www.facebook.com/BigTroubleBar/" class="facebook"><MDBIcon fab icon="facebook-square" /></a>
            <a href="https://www.blogto.com/bars/big-trouble-bar-toronto/" class="google"><MDBIcon icon="rss" /></a>
        </div>
        <div class="footer-copyright">
            <p>© 2019 Copyright  </p>
        </div>
    </footer>
      
    );
  }
}

export default Footer;

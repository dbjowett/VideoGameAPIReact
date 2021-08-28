import React from 'react';

const Footer = ()=>{
    return(
        <footer>
            <div className="infoContainer">
                <ul className="product">
                    <h4>Product</h4>
                    <li>Employees</li>
                    <li>Payroll</li>
                    <li>Absences</li>
                    <li>Time Tracking</li>
                    <li>Shift Planner</li>
                    <li>Recruiting</li>
                </ul>
                <ul className="info">
                    <h4> Information</h4>
                    <li>FAQ</li>
                    <li>Blog</li>
                    <li>Support</li>
                </ul>
                <ul className="company">
                    <h4>Company</h4>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                    <li>VG Media</li>
                </ul>
                <div className="subscribe">
                    <h4>Subscribe</h4>
                    <div className="input">
                        <input type="email" name="email" id="" placeholder="Email address"/>
                        <i className="fa fa-search fa-lg"></i>
                    </div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cupiditate optio atque tenetur libero fuga! Maxime debitis veniam, facere, eaque, omnis atque ipsam eveniet voluptas alias minus molestias unde voluptates!</div>
                </div>
            </div>

            <hr className="line"/>

            <div className="footContainer">
                <h4 className="footerLogo">Daniel Jowett</h4>
                <ul className="footerDetails">
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                </ul>
                <ul className="footerSocials">
                    <i className="fa fa-twitter fa-2x"></i>
                    <i className="fa fa-facebook fa-2x"></i>
                    <i className="fa fa-instagram fa-2x"></i>
                </ul>

            </div>
        </footer>
    )
}

export default Footer;

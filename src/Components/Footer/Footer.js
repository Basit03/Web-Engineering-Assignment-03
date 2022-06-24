import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-02">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 col-lg-6">
                        <div className="subscribe mb-5">
                            <form action="#" className="subscribe-form" id="newsletter" noValidate>
                                <div className="form-group d-flex">
                                    <input type="email" id="email" className="form-control rounded-left" placeholder="Enter email address" required></input>
                                    <input type="submit" id="submitBtn" value="Subscribe" className="form-control submit px-3"></input>
                                </div>
                            </form>
                            <div id="feedback1">
                                <i className='bx bx-error'></i> &nbsp;This field is required
                            </div>
                            <div id="feedback2">
                                <i className='bx bx-error'></i> &nbsp;Please provide a valid email address
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-5">
                        <div className="row">
                            <div className="col-md-12 col-lg-8 mb-md-0 mb-4">
                                <h2 className="footer-heading"><a href="#" className="logo">adidas</a></h2>
                                <p>Through sports, we have the power to change lives. Sports keep us fit. They keep us
                                    mindful. They bring us together. They help us to get up and get moving. And sporting
                                    goods featuring the latest technologies help us beat our personal best. The 3-Stripes
                                    are everywhere and anywhere.</p>
                                <a href="#">read more <span className="ion-ios-arrow-round-forward"></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-7">
                        <div className="row">
                            <div className="col-md-3 mb-md-0 mb-4 border-left">
                                <h2 className="footer-heading">Discover</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="py-1 d-block">Buy &amp; Sell</a></li>
                                    <li><a href="#" className="py-1 d-block">Merchant</a></li>
                                    <li><a href="#" className="py-1 d-block">Giving back</a></li>
                                    <li><a href="#" className="py-1 d-block">Help &amp; Support</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 mb-md-0 mb-4 border-left">
                                <h2 className="footer-heading">About</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="py-1 d-block">Staff</a></li>
                                    <li><a href="#" className="py-1 d-block">Team</a></li>
                                    <li><a href="#" className="py-1 d-block">Careers</a></li>
                                    <li><a href="#" className="py-1 d-block">Blog</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 mb-md-0 mb-4 border-left">
                                <h2 className="footer-heading">Resources</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="py-1 d-block">Security</a></li>
                                    <li><a href="#" className="py-1 d-block">Global</a></li>
                                    <li><a href="#" className="py-1 d-block">Charts</a></li>
                                    <li><a href="#" className="py-1 d-block">Privacy</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 mb-md-0 mb-4 border-left">
                                <h2 className="footer-heading">Social</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="py-1 d-block">Facebook</a></li>
                                    <li><a href="#" className="py-1 d-block">Twitter</a></li>
                                    <li><a href="#" className="py-1 d-block">Instagram</a></li>
                                    <li><a href="#" className="py-1 d-block">Googleplus</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row partner-wrap mt-5"></div>
                <div className="row mt-5">
                    <div className="col-md-6 col-lg-8">

                        <p className="copyright">
                            Copyright &copy;
                            <script>document.write(new Date().getFullYear());</script> All rights reserved | <a
                                href="https://www.adidas.com" target="_blank">adidas.com</a>
                        </p>
                    </div>
                    <div className="col-md-6 col-lg-4 text-md-right">
                        <p className="mb-0 list-unstyled">
                            <a className="mr-md-3 aaa" href="#">Terms&nbsp;&nbsp;</a>
                            <a className="mr-md-3" href="#">Privacy&nbsp;&nbsp;</a>
                            <a className="mr-md-3" href="#">Compliances</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

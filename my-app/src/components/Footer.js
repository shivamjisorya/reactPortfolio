import React from 'react';
import staticImg from '../assets/images/picture2.jpg' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    return (
        <section id="contact" className="section contactus-section "style={{backgroundColor: 'rgb(15 23 42)'}} >
            <div className="container">
                <div className="d-flex justify-content-around align-items-center">
                    <div className="">
                        <div className="contact-form-wrapper bg-white p-6 md:p-8">
                            <h6 className="text-2xl font-semibold text-black mb-2">Get in touch</h6>
                            <p className="text-lg mb-6">Your friendly me would love to hear from you.</p>
                            <form id="contact-form" method="POST">
                                <div className=" gap-3">
                                    <div className="col-span-12 md:col-span-6">
                                        <div className="form-group">
                                            <label className="form-label">First name</label>
                                            <input name="Name" id="name" placeholder="Name *" className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <div className="form-group">
                                            <label className="form-label">Your Email</label>
                                            <input name="Email" id="email" placeholder="Email *" className="form-control" type="email" />
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <div className="form-group">
                                            <label className="form-label">Subject</label>
                                            <input name="Subject" id="subject" placeholder="Subject *" className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <div className="form-group">
                                            <label className="form-label">Your message</label>
                                            <textarea name="message" id="message" placeholder="Your message *" rows="4" className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <div className="send">
                                            <button className="px-btn px-btn-theme2" type="button" value="Send">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="">
                        <div className="lg:max-w-lg w-full lg:ml-auto pt-12 lg:pt-0">
                            <div className="pb-10">
                                <img className="w-full" src={staticImg} alt="Contact" />
                            </div>
                            <ul className="contact-infos">
                                <li>
                                <div className="icon bg-1"><FontAwesomeIcon icon={faEnvelope} /></div>
                                    <div className="col">
                                        <h5>Phone</h5>
                                        <p>+91 828 771 9787</p>
                                    </div>
                                </li>
                                <li>
                                <div className="icon bg-2"><FontAwesomeIcon icon={faPhoneAlt} /></div>
                                    <div className="col">
                                        <h5>Mail</h5>
                                        <p>jisoryas26@gmail.com</p>
                                    </div>
                                </li>
                                <li>
                                <div className="icon bg-3"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                                    <div className="col">
                                        <h5>Visit My Studio</h5>
                                        <p>Surat Nagar Ph-1 <br />Sec-104 Gurugram City</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;

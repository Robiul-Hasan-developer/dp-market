import React, { useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const ContactUsForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
    // Please se documentation for more information
  
      emailjs
        .sendForm(
            'service_5opdqb8', // YOUR_SERVICE_ID
            'template_tel2xio', // YOUR_TEMPLATE_ID
            form.current, {
            publicKey: 'TkEXMnREcdrQyndFz', // YOUR_PUBLIC_KEY
        })
        .then(
          () => {
            form.current.reset();
            toast.success("Congratulations! You Have Submitted Successfully.", {
                theme: "colored",
            });
            console.log('SUCCESS!');
          },
          (error) => {
            toast.error("Something went wrong! Your message didn't sent.", {
                theme: "colored",
            });
            console.log('FAILED...', error.text);
          },
        );
    };
    
    return (
        <>
            <ToastContainer/>
            <div className="contact-form__form">
                <form ref={form} onSubmit={sendEmail} className="contact-form__form">
                    <div className="row gy-4">
                        <div className="col-sm-6 col-xs-6">
                        <label htmlFor="name" className="form-label mb-2 font-18 font-heading fw-600">Full Name</label>
                            <input type="text" className="common-input common-input--grayBg border" name='user_name' id="name" placeholder="Your name here"/>
                        </div>
                        <div className="col-sm-6 col-xs-6">
                            <label htmlFor="email" className="form-label mb-2 font-18 font-heading fw-600">Your Mail</label>
                            <input type="email" className="common-input common-input--grayBg border" name='user_email' id="email" placeholder="Your email here "/>
                        </div>
                        <div className="col-sm-6 col-xs-6">
                            <label htmlFor="phone" className="form-label mb-2 font-18 font-heading fw-600">Phone Number</label>
                            <input type="tel" className="common-input" name='user_phone' id='phone' placeholder="Phone Number"/>
                        </div>
                        <div className="col-sm-6 col-xs-6">
                            <label htmlFor="subject" className="form-label mb-2 font-18 font-heading fw-600">Subject</label>
                            <input type="text" className="common-input" name='user_subject' id='subject' placeholder="Subject"/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="message" className="form-label mb-2 font-18 font-heading fw-600">Your Message</label>
                            <textarea className="common-input common-input--grayBg border" name='message' id="message" placeholder="Write Your Message Here"></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-main btn-lg pill w-100">Submit Now</button>
                        </div>
                    </div>
                </form>
            </div> 
        </>
    );
};

export default ContactUsForm;
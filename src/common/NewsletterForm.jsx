import React from 'react';
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';

const NewsletterForm = (props) => {

    const formik = useFormik({
        initialValues: {
          email: "",
        },
        // Validate by Yup
        validationSchema: yup.object({
            email: yup.string().email("Your Email is not valid! Provide valid email").required(),
        }),
    
        onSubmit: (values, { resetForm }) => {
          resetForm({ values: "" });
          toast.success("Congratulations! You Have Subscribed Successfully.", {
            theme: "colored",
          });
        },
    });

    // Render Errors Code Start 
    const renderEmailError = formik.touched.email && formik.errors.email && (
        <span className="text-danger text-start d-block">{formik.errors.email}</span>
    );
    // Render Errors Code End
    
    return (
        <>
            <ToastContainer/>
            {
                props.newsLetterForm && (
                    <>
                        <form action="#" onSubmit={formik.handleSubmit} className={`mt-4 newsletter-box position-relative`}>
                            <div className="position-relative w-100">
                                <input 
                                    type="email" 
                                    placeholder="Your Email"
                                    name='email'
                                    id='email'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    className={`form-control common-input common-input--lg pill text-white ${props.inputClass}  ${
                                        formik.touched.email && formik.errors.email ? "is-invalid" : ""
                                    }`}
                                />
                            </div>
                            <button type="submit" className="btn btn-main btn-lg pill flx-align gap-1 flex-shrink-0">
                                Subscribe
                                <span className="text d-sm-flex d-none">Now</span> 
                            </button>
                        </form>   
                        {renderEmailError}
                    </>
                )
            }
            {
                props.footerForm && (
                    <>
                        <form action="#" onSubmit={formik.handleSubmit} className={`mt-4 subscribe-box d-flex align-items-center flex-column gap-2`}>

                            <div className="position-relative w-100">
                                <input 
                                    type="email" 
                                    placeholder="Your Email"
                                    name='email'
                                    id='email'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    className={`form-control common-input pill text-white ${props.inputClass}  ${
                                        formik.touched.email && formik.errors.email ? "is-invalid" : ""
                                    }`}
                                />
                                {renderEmailError}
                            </div>
                            <button type="submit" className="btn btn-main btn-lg w-100 pill">
                                Subscribe Now
                            </button>
                        </form>   
                    </>
                )
            }
        </>
    );
};

export default NewsletterForm;
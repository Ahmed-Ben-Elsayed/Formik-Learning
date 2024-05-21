import React, { useEffect } from 'react'
import '../components/form.css'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useFormik } from "formik"
export const Form = () => {
    const formik = useFormik({

        initialValues:
        {
            name: '',
            email: '',
            telephone: '',
            message: '',
        },

        onSubmit: values => {
            console.log(" the user information is:  " , formik.values )
        },

        validate: values => {
            const errors = {};
            if (!values.name) {
                errors.name = 'Your name is Required';
            }
            if (!values.telephone) {
                errors.telephone = 'Your phone number is Required';
            }
            if (!values.message) {
                errors.message = 'Your message is Required';
            }

            if (!values.email) {
                errors.email = 'Your email is Required'
            }
            else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }



            return errors;
        }
    })
    return (
        <div className='form'>
            <h1>Speak to Our Team</h1>
            <h3>Working Hours : 9 Am - 5 Pm Mon - Fri </h3>
            <form action="data.jsx" onSubmit={formik.handleSubmit} method="post">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder=' Your Name' onChange={formik.handleChange} value={formik.values.name} />
                {formik.errors.name ? <p className='error'>{formik.errors.name}</p> : null}
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder=' Your Email' id="email" onChange={formik.handleChange} value={formik.values.email} />
                {formik.errors.email ? <p className='error'>{formik.errors.email}</p> : null}
                <label htmlFor="tel">Phone Number</label>
                <input type="tel" name='telephone' placeholder='Phone Number' id='tel' onChange={formik.handleChange} value={formik.values.telephone} />
                {formik.errors.telephone ? <p className='error'>{formik.errors.telephone}</p> : null}
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" placeholder='Your Message' onChange={formik.handleChange} value={formik.values.message} ></textarea>
                {formik.errors.message ? <p className='error'>{formik.errors.message}</p> : null}
                <p>GDPR Agreement *</p>
                <div>
                    <input type="checkbox" name="check" id="" />
                    <p>I Consent To have This Website Store My submitted Information So They Can Respond MY Enquery.</p>
                </div>
                <input className='sub' type="submit" value="Send Message" name="submit" id="" />
            </form>
            <div className='Contact'>

                <div className='contact'>
                    <FaPhone className='icon' />
                    <div>
                        <p>Phone</p>
                        <p>+31(0)30-227 19 90</p>
                    </div>
                </div>
                <div className='contact'>
                    <IoPhonePortrait className='icon' />
                    <div>
                        <p>Mobile</p>
                        <p>+31(0)62-484 65 97</p>
                    </div>
                </div>
                <div className='contact'>
                    <MdEmail className='icon' />
                    <div>
                        <p>Email</p>
                        <p>engagments@jbmakelaars.nl</p>
                    </div>
                </div>
                <div className='contact'>
                    <FaMapMarkerAlt className='icon' />
                    <div>
                        <p>Address</p>
                        <p>Jaap Bijzerweg 19, 3446 CR Woerden</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

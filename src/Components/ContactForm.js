import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';



//styles
import './ContactForm.css'

export const ContactForm = () => {

    const [ state, handleSubmit ] = useForm('xoqrkbny');

    function resetForm () {
        state.reset();
    }

    function handleSubmitForm (e) {
        handleSubmit(e)
            .then(resetForm)
            .catch(errors => {
                console.log(errors);
            });
    }
    

    return (
        <div className="contact-form-container">
            <div className='contact-form-wrapper'>
            <div className="contact-form-banner">
                <div className="contact-form-banner-content">
                    <h1>Contact Me</h1>
                    <p>I am always open to discussing new projects and opportunities.<br /> Feel free to reach out to me via the form below.</p>
                    <div className="contact-form-email icon-div">
                        <FontAwesomeIcon icon={faEnvelope} /><span >stephenchriscodes@gmail.com</span>
                    </div>
                    <div className="contact-form-phone icon-div">
                    <FontAwesomeIcon icon={faPhone} /> <span>(+234) 08083669100</span>
                    </div>
                    <div className="contact-form-address icon-div">
                    <FontAwesomeIcon icon={faGlobe} /> <span>Lagos, Nigeria</span>
                    </div>
                </div>
            </div>
            <div className="contact-form-content">
                <form action="https://formspree.io/f/xoqrkbny" method="POST" onSubmit={handleSubmitForm}>
                    <div className="contact-form-inputs">
                        <div className="contact-form-input-container">
                            <input type="text" name="name" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="contact-form-input-container">
                            <input type="email" name="email" id="email" placeholder="Your Email" required />
                        </div>
                        <div className="contact-form-input-container">
                            <textarea name="message" id="message" placeholder="Your Message" required></textarea>
                        </div>
                        {state.succeeded ? (
                        <p className='success-message'>Thanks for reaching out! I'll get back to you as soon as possible.</p>
                    ) : <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />}
                    </div>
                        <button className='contact-form-btn' type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                </form>
            </div>
            </div>
        </div>
    )
}
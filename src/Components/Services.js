
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faMobile, faUser, faCode } from '@fortawesome/free-solid-svg-icons'


//styles
import './Services.css';

export const Services = () => {
    

    return (
        <div className="services-container">
            <div className='services-banner'>
                <div className='services-banner-content'>
                    <h1>Services</h1>
                    <p>I provide cutting-edge digital solutions that help businesses grow by building clean, maintainable and scalable Web and Mobile applications</p>
                </div>
                <div className="services-card">
                    <div className="services-card-content">
                        <span className="services-item"><FontAwesomeIcon icon={faCode} /></span>
                        <h3>Web Development</h3>
                    </div>
                    <div className="services-card-content">
                        <span className="services-item"><FontAwesomeIcon icon={faMobile} /></span>
                        <h3>Mobile Apps</h3>
                    </div>
                    <div className="services-card-content">
                        <span className="services-item"><FontAwesomeIcon icon={faUser} /></span>
                        <h3>User Interface</h3>
                    </div>
                    <div className="services-card-content">
                        <span className="services-item"><FontAwesomeIcon icon={faLaptop} /></span>
                        <h3>Wordpress</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
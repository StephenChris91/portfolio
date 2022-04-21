import { Button } from "../Components/Button";
import Lottie from "react-lottie";
import animationData from '../Images/Lottie/Computer.json';
import { FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';


export const Header = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <div id='header-banner'>
            <div className='header-banner'>
            <div className='header-banner-content'>
                <div className='header-banner-content-text'>
                    <h1>Hi, I'm <span className='header-banner-content-text-name'>Stephen Chris</span></h1>
                    <h2>I'm a <span className='header-banner-content-text-job'>FullStack Web Developer</span></h2>
                    <p className='header-banner-content-sub-text'>I provide and solve digital solutions that help businesses grow by building clean, maintainable and scalable Web and Mobile applications</p>
                    <div className='header-banner-content-buttons'>
                        <Button text='About Me' link='/about' style="primary-btn"/>
                        <Button text='Download CV' style="dark-btn"/>
                    </div>
                    <div className='social-media-icons'>
                        <a href='https://twitter.com/iamstephenchris' target='_blank' rel="noopener noreferrer"><FaTwitterSquare /></a>
                        <a href='https://www.instagram.com/iamstephenchris_/' target='_blank' rel="noopener noreferrer"><FaInstagramSquare /></a>
                        <a href='https://www.linkedin.com/in/stephen-chris-158438153/' target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href='https://www.github.com/stephenChris91' target='_blank' rel="noopener noreferrer"><FaGithubSquare /></a>
                    </div>
                </div>
                <div className='header-banner-content-image'>
                    <Lottie options={defaultOptions}
                        height={400}
                        width={400}
                    />
                    
                </div>
            </div>
        </div>
        </div>
    )
}
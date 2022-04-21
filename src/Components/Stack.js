import css from '../Images/Lottie/css.json'
import html from '../Images/Lottie/html.json'
import javascript from '../Images/Lottie/javascript.json'
import react from '../Images/Lottie/react.json'
import mongodb from '../Images/Lottie/mongodb.json'
import git from '../Images/Lottie/git.json'
import Lottie from 'react-lottie'



//styles
import './Stack.css'

const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: html,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}
const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: css,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}
const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: javascript,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}
const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: react,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}
const defaultOptions5 = {
    loop: true,
    autoplay: true,
    animationData: mongodb,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}
const defaultOptions6 = {
    loop: true,
    autoplay: true,
    animationData: git,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}


export const Stack = () => {

    return (
        <div className="stack-container">
            <div className="stack-content">
                <div className="stack-content-item">
                    <Lottie options={defaultOptions1}
                        height={100}
                        width={100}
                    />
                    <h3>HTML</h3>
                </div>
                <div className="stack-content-item">
                    <Lottie options={defaultOptions2}
                        height={100}
                        width={100}
                    />
                    <h3>CSS</h3>
                </div>
                <div className="stack-content-item">
                    <Lottie options={defaultOptions3}
                        height={100}
                        width={100}
                    />
                    <h3>JavaScript</h3>
                </div>
                <div className="stack-content-item">
                    <Lottie options={defaultOptions4}
                        height={100}
                        width={100}
                    />
                    <h3>React</h3>
                </div>
                <div className="stack-content-item">
                    <Lottie options={defaultOptions5}
                        height={100}
                        width={100}
                    />
                    <h3>MongoDB</h3>
                </div>
                <div className="stack-content-item">
                    <Lottie options={defaultOptions6}
                        height={100}
                        width={100}
                    />
                    <h3>Git</h3>
                </div>
            </div>
        </div>
    )
}
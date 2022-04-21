import { Row, Col, Container } from 'react-bootstrap';
import movie from '../Images/Others/movie.PNG';
import verifly from '../Images/Others/verifly.PNG';
import quote from '../Images/Others/quote.PNG';
import projectopia from '../Images/Others/projectopia.PNG';

import './PortfolioList.css';
import { Button } from './Button';


export const PortfolioList = () => {

    const portfolios = [
        {
            id: 1,
            title: 'Movie App',
            description: 'A movie app that allows users to search for movies and view their details.',
            image: movie,
            link: 'https://stephenchris91.github.io/movie-fight',
            github: 'https://github.com/stephenChris91',
            tech: ['React', 'Redux', 'Bootstrap', 'Axios', 'Node', 'Express', 'MongoDB', 'Mongoose', 'Passport', 'JWT', 'Bcrypt', 'Jest', 'Enzyme', 'React Testing Library']
        },
        {
            id: 2,
            title: 'Verifly',
            description: 'A web app that allows users to create, edit, and delete their own accounts.',
            image: verifly,
            link: 'https://stephenchris91.github.io/verifly',
            github: 'https://github.com/stephenChris91',
            tech: ['React', 'Redux', 'Bootstrap', 'Axios', 'Node', 'Express', 'MongoDB', 'Mongoose', 'Passport', 'JWT', 'Bcrypt', 'Jest', 'Enzyme', 'React Testing Library']
        },
        {
            id: 3,
            title: 'Quote Generator',
            description: 'A web app that generates random quotes.',
            image: quote,
            link: 'https://stephenchris91.github.io/quote-generator',
            github: 'https://github.com/stephenChris91',
            tech: ['React', 'Redux', 'Bootstrap', 'Axios', 'Node', 'Express', 'MongoDB', 'Mongoose', 'Passport', 'JWT', 'Bcrypt', 'Jest', 'Enzyme', 'React Testing Library']
        },
        {
            id: 4,
            title: 'Projectopia',
            description: 'A web app that allows users to create, edit, and delete their own projects.',
            image: projectopia,
            link: 'https://stephenchris91.github.io/projectopia',
            github: 'https://github.com/stephenChris91',
            tech: ['React', 'Redux', 'Bootstrap', 'Axios', 'Node', 'Express', 'MongoDB', 'Mongoose', 'Passport', 'JWT', 'Bcrypt', 'Jest', 'Enzyme', 'React Testing Library']
        }
    ]

    return (
        <Container>
            <Row className="portfolio-list-wrapper">
                <h2 className="portfolio-title">My Works</h2>
                {portfolios.map(portfolio => (
                    <Col className="portfolio-list-item" key={portfolio.id}>
                        <div className="portfolio-list-item-image">
                            <img src={portfolio.image} alt={portfolio.title} />
                        </div>
                        <div className="portfolio-list-item-text">
                                <h1>{portfolio.title}</h1>
                                <p>{portfolio.description}</p>
                                <Row>
                                    <Col>
                                        <Button style="primary-btn" text="View Website" href={portfolio.link}/>
                                    </Col>
                                    <Col>
                                        <Button style="dark-btn" text="View Repo" href={portfolio.github}/>
                                    </Col>
                            </Row>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
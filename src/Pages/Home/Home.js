import { CtaBanner } from "../../Components/cta-banner";
import { Services } from "../../Components/Services";
import { Footer } from "../../Components/Footer";
import { Testimonial } from "../../Components/Testimonials";
import { Header } from "../../Components/Header";
import { Stack } from "../../Components/Stack";
import { ContactForm } from "../../Components/ContactForm";


//styles
import '../../css/style.css'
import '../Home/Home.css'
import { PortfolioList } from "../../Components/PortFolioList";

export const Home = () => {

    return (
        <>
            <Header />
            <Stack />
            <Services />
            <CtaBanner />
            <PortfolioList />
            <Testimonial />
            <ContactForm />
            <Footer />
        </>
    )
}
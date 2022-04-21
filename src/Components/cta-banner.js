import { Button } from "./Button"
import { motion } from "framer-motion"



export const CtaBanner = () => {


    return (
        <motion.div 
        animate={{ scale: 1 }}
        transition={{ duration: 2 }} 
        className="cta-banner">
            <div className="cta-banner-content">
                <p>Love What You See?</p>
                <h1>HIRE ME</h1>
                <Button text='Hire Me' style="dark-btn"/>
            </div>
        </motion.div>
    )
}
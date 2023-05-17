import './about.css'
import { motion } from 'framer-motion';

const blockAnimationAbout1 = {
    hidden:{
        y:-100,
        opacity: 0,
    },
    visible: custom => ({
        animation: "move 5s",
        y:0,
        opacity: 1,
        transition: { delay: custom * 0.13 },
    }),
}
function About() {
    return (
    <div className="about-container">
        <div className="about-title">О нас</div>
            <motion.section className="advantages"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}>
                <motion.div custom={1} variants={blockAnimationAbout1} className="advantages-card">
                    <div className="advantages-title">Гарантия до 10 лет</div>
                    <img src="src/utils/quantity.svg" alt="" className="advantages-pic"/>
                </motion.div>
                <motion.div custom={2}  variants={blockAnimationAbout1} className="advantages-card">
                    <div className="advantages-title">Предоставляем строительную экспертизу</div>
                    <img src="src/utils/checklist.svg" alt="" className="advantages-pic"/>
                </motion.div>
                <motion.div custom={3}  variants={blockAnimationAbout1} className="advantages-card">
                    <img src="" alt="" className="advantages-pic"/>
                    <div className="advantages-title"></div>
                </motion.div>
                <motion.div custom={4}  variants={blockAnimationAbout1} className="advantages-card">
                    <img src="" alt="" className="advantages-pic"/>
                    <div className="advantages-title"></div>
                </motion.div>
            </motion.section>
    </div>
    );
}

export default About;
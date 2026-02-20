import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Impact from '../components/Impact'
import WhatWeDo from '../pages/WhatWeDo'
import Contact from '../pages/Contact'
import Footer from '../components/Footer'

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
};

export default function Landing() {
    return (
        <div className="snap-container relative">
            {/* Cosmic Horizon Background via CSS */}
            <div className="fixed inset-0 z-0 bg-space-base pointer-events-none">
                {/* Deep Space Base */}
                <div className="absolute inset-0 bg-[#020205]" />

                {/* Bright Horizon Glow (Sunrise from bottom center) */}
                <div className="absolute inset-x-0 bottom-0 h-[70vh] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-500/20 via-space-base to-space-base" />
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[120vw] h-[50vh] bg-accent-cyan/30 blur-[100px] rounded-[100%]" />
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-white/40 blur-[80px] rounded-[100%]" />
            </div>

            {/* Section 1: Hero */}
            <div id="home" className="snap-section flex items-center justify-center relative z-10">
                <Hero />
            </div>

            {/* Section 2: What We Do */}
            <motion.div
                id="what-we-do"
                className="snap-section flex items-center z-20"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <WhatWeDo isSection={true} />
            </motion.div>

            {/* Section 3: Impact */}
            <motion.div
                id="impact"
                className="snap-section flex items-center justify-center z-30"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <Impact />
            </motion.div>

            {/* Section 4: Contact */}
            <motion.div
                id="contact"
                className="snap-section flex flex-col justify-center z-40"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <Contact isSection={true} />
            </motion.div>

            {/* Footer */}
            <div className="snap-section h-auto min-h-0 relative z-50">
                <Footer />
            </div>
        </div>
    )
}

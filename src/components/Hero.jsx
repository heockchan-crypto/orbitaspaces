import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SystemDiagram from './SystemDiagram';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">

            {/* Background Texture */}


            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h1
                        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight break-keep tracking-tight"
                        style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 700 }}
                    >
                        가능성을 자산으로
                    </h1>
                    <h2
                        className="text-5xl md:text-7xl lg:text-8xl font-merriweather italic font-bold mb-6 pb-4 leading-normal"
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontStyle: 'italic',
                            background: 'linear-gradient(90deg, #00F0FF, #7000FF)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}
                    >
                        Creator incubating
                    </h2>
                </motion.div>

                {/* System Visualization */}
                <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-16"
                >
                    <SystemDiagram />
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link to="/what-we-do" className="btn-primary">
                        교육 모델 자세히 보기
                    </Link>
                    <Link to="/contact" className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
                        협력 문의하기
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

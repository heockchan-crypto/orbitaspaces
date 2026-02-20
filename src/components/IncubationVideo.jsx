import { motion } from 'framer-motion';
import { Scan, TrendingUp, Rocket, Database, Activity, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function IncubationVideo() {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setStage((prev) => (prev + 1) % 3);
        }, 3000); // Change stage every 3 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full h-full relative overflow-hidden bg-space-base flex items-center justify-center">
            {/* Background Grid & Particles */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(112,0,255,0.1)_0%,transparent_70%)]"
            />

            {/* Stage 1: DISCOVERY (Scanning) */}
            {stage === 0 && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    className="relative z-10 flex flex-col items-center"
                >
                    <div className="relative w-32 h-32 mb-6">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-2 border-accent-cyan/30 rounded-full border-t-accent-cyan"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-2 border border-accent-purple/30 rounded-full border-b-accent-purple"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Scan className="w-12 h-12 text-accent-cyan animate-pulse" />
                        </div>
                        {/* Scanning Bar */}
                        <motion.div
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-0.5 bg-accent-cyan box-shadow-[0_0_10px_#00F0FF]"
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center"
                    >
                        <h3 className="text-2xl font-bold text-white mb-1">DATA ANALYSIS</h3>
                        <p className="text-accent-cyan font-mono text-sm">SCANNING POTENTIAL...</p>
                        <div className="flex gap-2 justify-center mt-3">
                            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-silver-400">VOICE: 98%</span>
                            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-silver-400">STYLE: A+</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* Stage 2: BOOST (Growth) */}
            {stage === 1 && (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="relative z-10 w-64"
                >
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <Activity className="w-5 h-5 text-accent-purple" />
                            <span className="text-white font-bold">GROWTH RATE</span>
                        </div>
                        <span className="text-accent-cyan font-mono">+1,240%</span>
                    </div>

                    {/* Graph Bars */}
                    <div className="flex items-end gap-1 h-32 border-b border-white/20 pb-1 mb-4">
                        {[30, 45, 25, 60, 50, 80, 70, 95, 100].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`flex-1 rounded-t-sm ${i > 6 ? 'bg-accent-cyan' : 'bg-white/20'}`}
                            />
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white/5 p-2 rounded border border-white/10">
                            <div className="text-[10px] text-silver-500 mb-1">REACH</div>
                            <div className="text-white font-mono font-bold">2.5M</div>
                        </div>
                        <div className="bg-accent-purple/20 p-2 rounded border border-accent-purple/30">
                            <div className="text-[10px] text-accent-purple mb-1">VALUATION</div>
                            <div className="text-white font-mono font-bold">$500K</div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Stage 3: LAUNCH (Asset) */}
            {stage === 2 && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.5 }}
                    className="relative z-10 flex flex-col items-center"
                >
                    <div className="relative mb-6">
                        <div className="absolute inset-0 bg-accent-purple blur-xl opacity-50 animate-pulse" />
                        <Rocket className="w-16 h-16 text-white relative z-10" />
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="absolute inset-0 bg-white rounded-full z-0"
                        />
                    </div>

                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-accent-cyan mb-2">
                        ASSET LAUNCHED
                    </h3>
                    <div className="bg-space-base/50 backdrop-blur border border-accent-cyan/30 px-4 py-2 rounded-full flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-white font-mono text-sm">MARKET READY</span>
                    </div>

                    <div className="absolute -bottom-12 flex gap-4 opacity-50">
                        <div className="text-[10px] font-mono text-silver-500">IPO TARGET</div>
                        <div className="text-[10px] font-mono text-silver-500">SERIES A</div>
                    </div>
                </motion.div>
            )}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-space-base via-transparent to-space-base pointer-events-none" />

            {/* Progress Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        animate={{
                            width: stage === i ? 24 : 6,
                            backgroundColor: stage === i ? '#00F0FF' : '#333'
                        }}
                        className="h-1.5 rounded-full"
                    />
                ))}
            </div>
        </div>
    );
}

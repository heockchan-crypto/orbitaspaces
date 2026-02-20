import { motion } from 'framer-motion';

export default function SectionHorizon({ className = "" }) {
    return (
        <div className={`absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none ${className}`}>
            {/* Glow Container */}
            <div className="relative w-full h-32 md:h-48 transform translate-y-1/2">
                {/* Main Horizon Curve */}
                <div className="absolute left-1/2 -translate-x-1/2 w-[150%] h-full bg-space-base rounded-[100%] border-t border-accent-cyan/30 shadow-[0_-10px_40px_rgba(0,240,255,0.1)] z-10" />

                {/* Outer Glow */}
                <div className="absolute left-1/2 -translate-x-1/2 w-[140%] h-full bg-accent-cyan/10 blur-[60px] rounded-[100%] -top-4 z-0" />

                {/* Secondary Highlight */}
                <div className="absolute left-1/2 -translate-x-1/2 w-[60%] h-full bg-accent-purple/20 blur-[80px] rounded-[100%] -top-8 z-0" />
            </div>
        </div>
    );
}

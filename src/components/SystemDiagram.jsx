import { motion } from 'framer-motion';

export default function SystemDiagram() {
    // All coordinates defined once — triangle vertices
    const top = { x: 300, y: 60 };
    const bl = { x: 80, y: 420 };
    const br = { x: 520, y: 420 };

    const r = 42; // circle radius

    return (
        <div className="w-full max-w-2xl mx-auto px-4">
            <svg viewBox="0 0 600 520" className="w-full h-auto">
                <defs>
                    <linearGradient id="triGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.5" />
                        <stop offset="50%" stopColor="#7000FF" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.5" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Triangle */}
                <motion.polygon
                    points={`${top.x},${top.y} ${br.x},${br.y} ${bl.x},${bl.y}`}
                    fill="none"
                    stroke="url(#triGrad)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    filter="url(#glow)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                />

                {/* ===== TOP NODE: 크리에이터 ===== */}
                <motion.g initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
                    {/* Outer glow */}
                    <circle cx={top.x} cy={top.y} r={r + 6} fill="none" stroke="#00F0FF" strokeOpacity="0.15" strokeWidth="1" />
                    {/* Circle bg */}
                    <circle cx={top.x} cy={top.y} r={r} fill="#000" stroke="#00F0FF" strokeOpacity="0.6" strokeWidth="1.2" />
                    {/* Icon: person group ≈ Users */}
                    <g transform={`translate(${top.x - 16}, ${top.y - 14}) scale(1.3)`}>
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="#00F0FF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="9" cy="7" r="4" stroke="#00F0FF" strokeWidth="1.5" fill="none" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="#00F0FF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#00F0FF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    {/* Label */}
                    <text x={top.x} y={top.y + r + 28} textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="system-ui, sans-serif">크리에이터</text>
                    <text x={top.x} y={top.y + r + 48} textAnchor="middle" fill="#A0AEC0" fontSize="12" fontFamily="monospace">Aspiring Talent</text>
                </motion.g>

                {/* ===== BOTTOM-LEFT NODE: 전문가 멘토단 ===== */}
                <motion.g initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.55, duration: 0.6 }}>
                    <circle cx={bl.x} cy={bl.y} r={r + 6} fill="none" stroke="#7000FF" strokeOpacity="0.15" strokeWidth="1" />
                    <circle cx={bl.x} cy={bl.y} r={r} fill="#000" stroke="#7000FF" strokeOpacity="0.6" strokeWidth="1.2" />
                    {/* Icon: graduation cap */}
                    <g transform={`translate(${bl.x - 14}, ${bl.y - 14}) scale(1.2)`}>
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="#7000FF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="#7000FF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <text x={bl.x} y={bl.y + r + 28} textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="system-ui, sans-serif">전문가 멘토단</text>
                    <text x={bl.x} y={bl.y + r + 48} textAnchor="middle" fill="#A0AEC0" fontSize="12" fontFamily="monospace">Expert Mentors</text>
                </motion.g>

                {/* ===== BOTTOM-RIGHT NODE: 비즈니스 파트너 ===== */}
                <motion.g initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.6 }}>
                    <circle cx={br.x} cy={br.y} r={r + 6} fill="none" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
                    <circle cx={br.x} cy={br.y} r={r} fill="#000" stroke="white" strokeOpacity="0.4" strokeWidth="1.2" />
                    {/* Icon: briefcase */}
                    <g transform={`translate(${br.x - 14}, ${br.y - 14}) scale(1.2)`}>
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="white" strokeOpacity="0.7" strokeWidth="1.5" fill="none" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="white" strokeOpacity="0.7" strokeWidth="1.5" fill="none" />
                    </g>
                    <text x={br.x} y={br.y + r + 28} textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="system-ui, sans-serif">비즈니스 파트너</text>
                    <text x={br.x} y={br.y + r + 48} textAnchor="middle" fill="#A0AEC0" fontSize="12" fontFamily="monospace">Business Partners</text>
                </motion.g>

                {/* ===== CENTER LABEL ===== */}
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>
                    <text x="300" y="260" textAnchor="middle" fill="#718096" fontSize="11" fontFamily="monospace" letterSpacing="3">VIRTUOUS CYCLE</text>
                    <text x="300" y="290" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" fontFamily="Merriweather, serif" fontStyle="italic">Growth &amp; Sharing</text>
                </motion.g>
            </svg>
        </div>
    );
}

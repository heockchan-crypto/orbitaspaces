import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, HelpCircle, Rocket, Target, Users } from 'lucide-react';
import ParticleNetwork from '../components/ParticleNetwork';

const tracks = [
    {
        id: 'voyager',
        title: 'Voyager Track',
        subtitle: '잠재력을 가진 예비 크리에이터',
        description: '자신만의 숨겨진 재능을 발견하고 첫 팬덤을 확보합니다.',
        features: ['재능 발굴 및 진단', '콘텐츠 전략 수립', '0 to 10k 팔로워 달성'],
        icon: <Target className="w-8 h-8 text-accent-cyan" />,
        color: 'border-accent-cyan/30 hover:border-accent-cyan',
        glow: 'group-hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]',
    },
    {
        id: 'accelerator',
        title: 'Accelerator Track',
        subtitle: '비즈니스 확장을 원하는 현역 크리에이터',
        description: '채널을 넘어선 비즈니스로 확장합니다. 브랜드 및 프로덕트 런칭.',
        features: ['비즈니스 모델 설계', '팀 빌딩 지원', '시드 투자 기회 (Seed Investment)'],
        icon: <Rocket className="w-8 h-8 text-accent-purple" />,
        color: 'border-accent-purple/30 hover:border-accent-purple',
        glow: 'group-hover:shadow-[0_0_30px_rgba(112,0,255,0.2)]',
    },
];

const faqs = [
    {
        q: "선발 기준이 무엇인가요?",
        a: "우리는 '몰입(Obsession)'과 '그릿(Grit)'을 봅니다. 팔로워 수보다는 무언가를 만들어내고자 하는 강렬한 열망이 중요합니다."
    },
    {
        q: "지분(Equity)을 가져가나요?",
        a: "Accelerator 트랙의 경우, 법인 설립 시 투자 집행에 따른 지분 계약이 진행될 수 있습니다. Voyager 트랙은 지분을 취하지 않습니다 (Equity-free)."
    },
    {
        q: "프로그램은 원격으로 진행되나요?",
        a: "네, 100% 원격으로 진행됩니다. 다만 서울에서 열리는 오프라인 서밋/네트워킹 행사는 선택적으로 참여 가능합니다."
    },
];

export default function Apply() {
    return (
        <div className="min-h-screen bg-space-base text-white selection:bg-accent-cyan selection:text-space-base font-sans relative overflow-x-hidden">
            {/* Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <ParticleNetwork />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
                {/* Header */}
                <Link to="/" className="inline-flex items-center text-silver-500 hover:text-white mb-12 transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> Back to Orbit
                </Link>

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block bg-accent-purple/10 border border-accent-purple/30 rounded-full px-4 py-1.5 mb-6"
                    >
                        <span className="text-accent-purple font-mono text-sm tracking-wider">BATCH #04 APPLICATIONS OPEN</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        Apply to <span className="text-gradient">Orbita</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-silver-400 text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        차세대 크리에이터-기업가 그룹에 합류하세요. <br />
                        단순 콘텐츠가 아닌, 자산을 만듭니다.
                    </motion.p>
                </div>

                {/* Track Selection */}
                <div className="grid md:grid-cols-2 gap-6 mb-20">
                    {tracks.map((track, i) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className={`glass-card p-8 group border transition-all duration-300 ${track.color} ${track.glow}`}
                        >
                            <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                {track.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-1">{track.title}</h3>
                            <p className="text-silver-500 text-sm mb-6 font-mono">{track.subtitle}</p>
                            <p className="text-silver-300 mb-8 leading-relaxed h-12">
                                {track.description}
                            </p>
                            <ul className="space-y-3 mb-8">
                                {track.features.map((feat, j) => (
                                    <li key={j} className="flex items-center text-silver-400 text-sm">
                                        <CheckCircle2 size={16} className="text-white mr-3 shrink-0" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to={`/signup?track=${track.id}`}
                                className="block w-full text-center py-4 rounded-lg bg-white text-space-base font-bold hover:bg-accent-cyan transition-colors"
                            >
                                {track.title.split(' ')[0]} 지원하기
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ */}
                <div className="max-w-2xl mx-auto mb-20">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <HelpCircle className="text-accent-cyan" />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="border-b border-white/10 pb-6"
                            >
                                <h3 className="text-lg font-medium text-white mb-2">{faq.q}</h3>
                                <p className="text-silver-500 leading-relaxed font-light">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <div className="text-center">
                    <div className="text-silver-600 text-sm mb-4">BATCH #04 DEADLINE: OCT 31, 2026</div>
                    <Link to="/signup" className="text-accent-cyan hover:text-white underline underline-offset-4 decoration-accent-cyan/30 hover:decoration-white transition-all">
                        문의사항이 있으신가요? admissions@orbita.inc
                    </Link>
                </div>
            </div>
        </div>
    );
}

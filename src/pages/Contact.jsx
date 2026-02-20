import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

export default function Contact({ isSection = false }) {
    return (
        <div className={`w-full ${isSection ? 'h-full flex flex-col justify-center py-0' : 'pt-24 pb-20 min-h-screen'} bg-space-base relative`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-display italic">
                            Contact
                        </h1>
                        <p className="text-xl text-silver-400 mb-12 font-light">
                            오르비타와 함께할 혁신적인 아이디어를 기다립니다.<br />
                            파트너십 제안이나 프로그램 문의는 언제든 환영합니다.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                    <MapPin className="w-5 h-5 text-accent-cyan" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Office</h3>
                                    <p className="text-silver-400">서울특별시 성동구 왕십리로 115, 헤이그라운드</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                    <Mail className="w-5 h-5 text-accent-purple" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Email</h3>
                                    <p className="text-silver-400">contact@orbita.inc</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                    <Phone className="w-5 h-5 text-accent-glow" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Phone</h3>
                                    <p className="text-silver-400">02-1234-5678 (Mon-Fri, 10:00-18:00)</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-8 md:p-10"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Inquiry Form</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-silver-500 mb-2">Name</label>
                                    <input type="text" className="w-full bg-space-base/50 border border-white/10 rounded-md px-4 py-3 text-white focus:border-accent-cyan outline-none transition-colors" placeholder="홍길동" />
                                </div>
                                <div>
                                    <label className="block text-sm text-silver-500 mb-2">Organization</label>
                                    <input type="text" className="w-full bg-space-base/50 border border-white/10 rounded-md px-4 py-3 text-white focus:border-accent-cyan outline-none transition-colors" placeholder="소속 (학교/기업)" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm text-silver-500 mb-2">Email</label>
                                <input type="email" className="w-full bg-space-base/50 border border-white/10 rounded-md px-4 py-3 text-white focus:border-accent-cyan outline-none transition-colors" placeholder="example@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm text-silver-500 mb-2">Category</label>
                                <select className="w-full bg-space-base/50 border border-white/10 rounded-md px-4 py-3 text-white focus:border-accent-cyan outline-none transition-colors">
                                    <option>프로그램 지원 문의</option>
                                    <option>파트너십 제안</option>
                                    <option>기업 후원 문의</option>
                                    <option>기타</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm text-silver-500 mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-space-base/50 border border-white/10 rounded-md px-4 py-3 text-white focus:border-accent-cyan outline-none transition-colors" placeholder="문의하실 내용을 적어주세요." />
                            </div>
                            <button className="w-full btn-primary py-4">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

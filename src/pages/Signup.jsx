import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function Signup() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                <div className="glass-card p-8 md:p-10 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-purple to-accent-cyan" />

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">Join the Orbit</h2>
                        <p className="text-silver-500 text-sm">Begin your creator journey today</p>
                    </div>

                    <form className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs font-mono text-silver-400 uppercase tracking-wider ml-1">Creator Name</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-3.5 w-4 h-4 text-silver-600 group-focus-within:text-accent-purple transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-space-base/50 border border-white/10 rounded-lg py-3 pl-11 pr-4 text-white placeholder:text-silver-700 focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 transition-all font-mono text-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-mono text-silver-400 uppercase tracking-wider ml-1">Email Coordinates</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-3.5 w-4 h-4 text-silver-600 group-focus-within:text-accent-purple transition-colors" />
                                <input
                                    type="email"
                                    placeholder="name@orbita.io"
                                    className="w-full bg-space-base/50 border border-white/10 rounded-lg py-3 pl-11 pr-4 text-white placeholder:text-silver-700 focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 transition-all font-mono text-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-mono text-silver-400 uppercase tracking-wider ml-1">Password Key</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-3.5 w-4 h-4 text-silver-600 group-focus-within:text-accent-purple transition-colors" />
                                <input
                                    type="password"
                                    placeholder="Create password"
                                    className="w-full bg-space-base/50 border border-white/10 rounded-lg py-3 pl-11 pr-4 text-white placeholder:text-silver-700 focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 transition-all font-mono text-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-mono text-silver-400 uppercase tracking-wider ml-1">Confirm Key</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-3.5 w-4 h-4 text-silver-600 group-focus-within:text-accent-purple transition-colors" />
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    className="w-full bg-space-base/50 border border-white/10 rounded-lg py-3 pl-11 pr-4 text-white placeholder:text-silver-700 focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 transition-all font-mono text-sm"
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 group mt-6 bg-gradient-to-r from-accent-purple to-accent-cyan">
                            <span>Launch Profile</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm text-silver-500">
                        Already in orbit?{' '}
                        <Link to="/login" className="text-accent-purple hover:underline font-mono">Access Console</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

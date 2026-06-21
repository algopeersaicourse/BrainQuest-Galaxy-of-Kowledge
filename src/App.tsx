/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  BookOpen, 
  FlaskConical, 
  Calculator, 
  Globe, 
  Trophy, 
  Star, 
  Coins, 
  ChevronRight, 
  Play, 
  Settings, 
  User,
  Zap,
  ShieldCheck,
  Gamepad2,
  Sparkles
} from 'lucide-react';

// --- Types ---
type Subject = 'Math' | 'Science' | 'English' | 'General Knowledge';

interface GameState {
  points: number;
  coins: number;
  level: number;
  badges: string[];
}

// --- Components ---

const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
    <motion.div 
      className="bg-yellow-400 h-full"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  </div>
);

const Badge = ({ name, icon: Icon, color }: { name: string, icon: any, color: string }) => (
  <motion.div 
    whileHover={{ scale: 1.1, rotate: 5 }}
    className={`flex flex-col items-center justify-center p-3 rounded-2xl ${color} shadow-lg border-2 border-white/20`}
  >
    <div className="bg-white/30 p-2 rounded-full mb-2">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <span className="text-[10px] font-bold text-white uppercase tracking-wider text-center">{name}</span>
  </motion.div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'games' | 'rewards' | 'profile'>('home');
  const [stats, setStats] = useState<GameState>({
    points: 1250,
    coins: 450,
    level: 12,
    badges: ['Fast Learner', 'Math Whiz', 'Science Star']
  });

  const subjects: { name: Subject; icon: any; color: string; desc: string }[] = [
    { name: 'Math', icon: Calculator, color: 'bg-rose-500', desc: 'Asteroid Arithmetic' },
    { name: 'Science', icon: FlaskConical, color: 'bg-emerald-500', desc: 'Element Explorer' },
    { name: 'English', icon: BookOpen, color: 'bg-indigo-500', desc: 'Word Wizard' },
    { name: 'General Knowledge', icon: Globe, color: 'bg-amber-500', desc: 'Trivia Trek' },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans selection:bg-yellow-400 selection:text-black overflow-hidden flex flex-col">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-600/20 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-amber-600/10 blur-[80px] rounded-full" />
      </div>

      {/* Header / Top Bar */}
      <header className="relative z-10 px-6 pt-8 pb-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20 transform -rotate-6">
            <Rocket className="w-7 h-7 text-white fill-white/20" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight leading-none">BRAINQUEST</h1>
            <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">Galaxy of Knowledge</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2">
          <div className="flex items-center gap-2">
            <Coins className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-bold">{stats.coins}</span>
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-bold">{stats.points}</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 px-6 py-4 overflow-y-auto custom-scrollbar pb-24">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Hero Section */}
              <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 to-violet-700 p-8 shadow-2xl shadow-indigo-500/20">
                <div className="relative z-10 max-w-[60%]">
                  <h2 className="text-3xl font-black leading-tight mb-2">Welcome back, Explorer!</h2>
                  <p className="text-indigo-100 text-sm mb-6 opacity-80">You're only 250 points away from Level 13. Ready for your daily quest?</p>
                  <button className="bg-white text-indigo-600 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-yellow-400 hover:text-black transition-colors shadow-lg">
                    <Play className="w-4 h-4 fill-current" />
                    Continue Quest
                  </button>
                </div>
                {/* Mascot Placeholder */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute right-4 bottom-4 w-40 h-40 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20"
                >
                  <div className="relative">
                    <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-inner relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-2 bg-indigo-400" />
                      <div className="flex gap-4">
                        <div className="w-3 h-3 bg-indigo-600 rounded-full animate-pulse" />
                        <div className="w-3 h-3 bg-indigo-600 rounded-full animate-pulse" />
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-indigo-600">
                      <Zap className="w-4 h-4 text-black fill-current" />
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Subjects Grid */}
              <section>
                <div className="flex justify-between items-end mb-6">
                  <h3 className="text-xl font-black uppercase tracking-wider">Choose Subject</h3>
                  <span className="text-xs font-bold text-white/40 uppercase tracking-widest">4 Active Worlds</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {subjects.map((s) => (
                    <motion.button
                      key={s.name}
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveTab('games')}
                      className={`${s.color} p-6 rounded-[2rem] text-left relative overflow-hidden group shadow-lg`}
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <s.icon className="w-24 h-24" />
                      </div>
                      <div className="bg-white/20 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                        <s.icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-black text-lg mb-1">{s.name}</h4>
                      <p className="text-[10px] font-bold text-white/70 uppercase tracking-wider">{s.desc}</p>
                    </motion.button>
                  ))}
                </div>
              </section>

              {/* Progress Section */}
              <section className="bg-white/5 border border-white/10 rounded-[2rem] p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-xl flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-wider">Level {stats.level}</h4>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Explorer Rank</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-yellow-400">75%</span>
                </div>
                <ProgressBar progress={75} />
              </section>
            </motion.div>
          )}

          {activeTab === 'games' && (
            <motion.div 
              key="games"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-8">
                <button onClick={() => setActiveTab('home')} className="p-2 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <ChevronRight className="w-6 h-6 rotate-180" />
                </button>
                <h2 className="text-3xl font-black uppercase tracking-tighter">Mini-Games</h2>
              </div>

              {/* Game Cards */}
              <div className="space-y-4">
                <div className="bg-rose-500 rounded-[2.5rem] p-8 relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Math</span>
                      <span className="bg-black/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Level 5+</span>
                    </div>
                    <h3 className="text-3xl font-black mb-2">Asteroid Arithmetic</h3>
                    <p className="text-rose-100 text-sm mb-6 max-w-[70%]">Solve quick equations to blast incoming asteroids and protect your spaceship!</p>
                    <button className="bg-white text-rose-600 px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-yellow-400 hover:text-black transition-all shadow-xl">
                      <Play className="w-5 h-5 fill-current" />
                      PLAY NOW
                    </button>
                  </div>
                  <div className="absolute right-[-20px] top-[-20px] opacity-20 group-hover:scale-110 transition-transform duration-700">
                    <Calculator className="w-64 h-64" />
                  </div>
                </div>

                <div className="bg-emerald-500 rounded-[2.5rem] p-8 relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Science</span>
                      <span className="bg-black/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Level 8+</span>
                    </div>
                    <h3 className="text-3xl font-black mb-2">Element Explorer</h3>
                    <p className="text-emerald-100 text-sm mb-6 max-w-[70%]">Combine chemical elements to create compounds and unlock new lab equipment.</p>
                    <button className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-yellow-400 hover:text-black transition-all shadow-xl">
                      <Play className="w-5 h-5 fill-current" />
                      PLAY NOW
                    </button>
                  </div>
                  <div className="absolute right-[-20px] top-[-20px] opacity-20 group-hover:scale-110 transition-transform duration-700">
                    <FlaskConical className="w-64 h-64" />
                  </div>
                </div>

                <div className="bg-indigo-500 rounded-[2.5rem] p-8 relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">English</span>
                      <span className="bg-black/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Level 3+</span>
                    </div>
                    <h3 className="text-3xl font-black mb-2">Word Wizard</h3>
                    <p className="text-indigo-100 text-sm mb-6 max-w-[70%]">Spell magical words to cast spells and defeat the Shadow of Ignorance!</p>
                    <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-yellow-400 hover:text-black transition-all shadow-xl">
                      <Play className="w-5 h-5 fill-current" />
                      PLAY NOW
                    </button>
                  </div>
                  <div className="absolute right-[-20px] top-[-20px] opacity-20 group-hover:scale-110 transition-transform duration-700">
                    <BookOpen className="w-64 h-64" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'rewards' && (
            <motion.div 
              key="rewards"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Rewards Center</h2>
              
              <div className="grid grid-cols-3 gap-4">
                <Badge name="Math Whiz" icon={Calculator} color="bg-rose-500" />
                <Badge name="Science Star" icon={FlaskConical} color="bg-emerald-500" />
                <Badge name="Word Master" icon={BookOpen} color="bg-indigo-500" />
                <Badge name="Explorer" icon={Globe} color="bg-amber-500" />
                <Badge name="Champion" icon={Trophy} color="bg-yellow-500" />
                <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border-2 border-dashed border-white/20">
                  <div className="bg-white/10 p-2 rounded-full mb-2">
                    <Sparkles className="w-6 h-6 text-white/30" />
                  </div>
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-wider text-center">Locked</span>
                </div>
              </div>

              <section className="bg-white/5 border border-white/10 rounded-[2rem] p-8">
                <h3 className="text-xl font-black mb-6 uppercase tracking-wider flex items-center gap-2">
                  <Coins className="w-6 h-6 text-yellow-400" />
                  Coin Shop
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'Neon Spacesuit', price: 200, icon: ShieldCheck },
                    { name: 'Turbo Booster', price: 150, icon: Zap },
                    { name: 'Golden Avatar', price: 500, icon: User },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-indigo-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">{item.name}</h4>
                          <p className="text-[10px] font-bold text-white/40 uppercase">Accessory</p>
                        </div>
                      </div>
                      <button className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-colors">
                        <Coins className="w-3 h-3" />
                        {item.price}
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'profile' && (
            <motion.div 
              key="profile"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-rose-500 rounded-[2.5rem] flex items-center justify-center shadow-2xl p-1">
                    <div className="w-full h-full bg-[#0F172A] rounded-[2.2rem] flex items-center justify-center overflow-hidden">
                      <User className="w-16 h-16 text-white/20" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black w-10 h-10 rounded-2xl flex items-center justify-center font-black border-4 border-[#0F172A] shadow-lg">
                    {stats.level}
                  </div>
                </div>
                <h2 className="text-3xl font-black mb-1">StarExplorer_99</h2>
                <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-xs">Joined March 2026</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] text-center">
                  <h4 className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-2">Total Points</h4>
                  <p className="text-2xl font-black text-orange-400">{stats.points.toLocaleString()}</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] text-center">
                  <h4 className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-2">Games Played</h4>
                  <p className="text-2xl font-black text-indigo-400">42</p>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 p-5 rounded-2xl flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-4">
                    <Settings className="w-5 h-5 text-white/60" />
                    <span className="font-bold">App Settings</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/20" />
                </button>
                <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 p-5 rounded-2xl flex items-center justify-between transition-colors text-rose-400">
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="font-bold">Parental Controls</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/20" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-8 pt-4">
        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-2 flex justify-between items-center shadow-2xl">
          {[
            { id: 'home', icon: Rocket, label: 'Home' },
            { id: 'games', icon: Gamepad2, label: 'Games' },
            { id: 'rewards', icon: Trophy, label: 'Rewards' },
            { id: 'profile', icon: User, label: 'Profile' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`relative flex flex-col items-center justify-center w-16 h-16 rounded-3xl transition-all duration-300 ${
                activeTab === tab.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/40' : 'text-white/40 hover:text-white/60'
              }`}
            >
              <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? 'animate-bounce' : ''}`} />
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="nav-pill"
                  className="absolute -bottom-1 w-1 h-1 bg-white rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
        }
        .custom-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}} />
    </div>
  );
}

import React, { useState } from 'react';
import { BookOpen, BarChart3, GraduationCap, Scale, CalendarClock, Menu, Home, History, Infinity, Timer, Rewind, PlayCircle, ShieldAlert, BrainCircuit, BookA, BookKey } from 'lucide-react';
import CountableUncountable from './CountableUncountable';
import FrequencyAdverbs from './FrequencyAdverbs';
import ComparativesSuperlatives from './ComparativesSuperlatives';
import FutureForms from './FutureForms';
import SimplePast from './SimplePast';
import PastContinuous from './PastContinuous';
import PastPerfect from './PastPerfect';
import PresentPerfect from './PresentPerfect';
import PresentPerfectContinuous from './PresentPerfectContinuous';
import ModalVerbs from './ModalVerbs';
import RegularVerbs from './RegularVerbs';
import IrregularVerbs from './IrregularVerbs';
import Quiz from './Quiz';

const App = () => {
  const [activeTab, setActiveTab] = useState('welcome');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const leftMenuItems = [
    { id: 'welcome', label: 'Início', icon: <Home size={20} /> },
    { id: 'simplepast', label: 'Simple Past', icon: <History size={20} /> },
    { id: 'pastcontinuous', label: 'Past Continuous', icon: <PlayCircle size={20} /> },
    { id: 'pastperfect', label: 'Past Perfect', icon: <Rewind size={20} /> },
    { id: 'presentperfect', label: 'Present Perfect', icon: <Infinity size={20} /> },
    { id: 'presentperfectcontinuous', label: 'Pres. Perf. Cont.', icon: <Timer size={20} /> },
    { id: 'modals', label: 'Modal Verbs', icon: <ShieldAlert size={20} /> },
    { id: 'countable', label: 'Nouns & Quantifiers', icon: <Scale size={20} /> },
    { id: 'frequency', label: 'Frequency Adverbs', icon: <BarChart3 size={20} /> },
    { id: 'comparative', label: 'Comparatives', icon: <BookOpen size={20} /> },
    { id: 'future', label: 'Future Forms', icon: <CalendarClock size={20} /> },
  ];

  const rightMenuItems = [
    { id: 'quiz', label: 'Quiz Game', icon: <BrainCircuit size={20} />, color: 'text-fuchsia-400' },
    { id: 'regularverbs', label: 'Regular Verbs', icon: <BookA size={20} />, color: 'text-emerald-400' },
    { id: 'irregularverbs', label: 'Irregular Verbs', icon: <BookKey size={20} />, color: 'text-rose-400' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      // Left Sidebar Content
      case 'simplepast': return <SimplePast />;
      case 'pastcontinuous': return <PastContinuous />;
      case 'pastperfect': return <PastPerfect />;
      case 'presentperfect': return <PresentPerfect />;
      case 'presentperfectcontinuous': return <PresentPerfectContinuous />;
      case 'modals': return <ModalVerbs />;
      case 'countable': return <CountableUncountable />;
      case 'frequency': return <FrequencyAdverbs />;
      case 'comparative': return <ComparativesSuperlatives />;
      case 'future': return <FutureForms />;
      
      // Right Sidebar Content
      case 'quiz': return <Quiz />;
      case 'regularverbs': return <RegularVerbs />;
      case 'irregularverbs': return <IrregularVerbs />;
      
      default: return <Welcome onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
      {/* Mobile Sidebar Overlay (Left) */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* LEFT Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-slate-900 text-slate-300 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 flex items-center gap-3 border-b border-slate-800 shrink-0">
          <GraduationCap className="text-indigo-400" size={28} />
          <div>
            <h1 className="text-white font-bold text-lg leading-tight">Exam Reviewer</h1>
            <p className="text-xs text-slate-500">Book 2 Simulation</p>
          </div>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto flex-1 custom-scrollbar">
          <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 mt-2">Grammar Guide</p>
          {leftMenuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all focus:outline-none ${
                activeTab === item.id 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/20' 
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
          
          {/* Mobile Only: Show Right Menu items here too since right sidebar is hidden on mobile */}
          <div className="md:hidden mt-6 border-t border-slate-800 pt-4">
            <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Practice & Tools</p>
            {rightMenuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all focus:outline-none ${
                  activeTab === item.id 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/20' 
                    : 'hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className={item.color}>{item.icon}</div>
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className="p-6 border-t border-slate-800 bg-slate-900 shrink-0">
          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-xs text-slate-400 mb-2">Progresso</p>
            <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-3/4"></div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Mobile Header */}
        <header className="bg-white p-4 flex items-center justify-between md:hidden shadow-sm z-10 shrink-0">
          <span className="font-bold text-slate-800">English Reviewer</span>
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-slate-600 focus:outline-none">
            <Menu size={24} />
          </button>
        </header>

        {/* Scrollable Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth bg-slate-50">
          <div className="max-w-4xl mx-auto animate-fade-in pb-20">
            {renderContent()}
          </div>
        </main>
      </div>

      {/* RIGHT Sidebar (Desktop Only) */}
      <aside className="hidden md:flex w-64 bg-slate-900 text-slate-300 border-l border-slate-800 flex-col shrink-0">
        <div className="p-6 border-b border-slate-800 shrink-0">
          <h2 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
            <BrainCircuit size={18} className="text-fuchsia-400"/> Practice Center
          </h2>
        </div>

        <nav className="p-4 space-y-2 flex-1">
          {rightMenuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl transition-all focus:outline-none border border-transparent group ${
                activeTab === item.id 
                  ? 'bg-slate-800 border-slate-700 text-white shadow-lg' 
                  : 'hover:bg-slate-800/50 hover:border-slate-800'
              }`}
            >
              <div className={`p-2 rounded-lg bg-slate-950 ${item.color} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <div className="text-left">
                <span className="font-bold text-sm block text-slate-200">{item.label}</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wide">
                  {item.id === 'quiz' ? 'Test Yourself' : 'Dictionary'}
                </span>
              </div>
            </button>
          ))}
          
          <div className="mt-8 px-4">
            <div className="p-4 bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl border border-indigo-500/30">
              <h3 className="text-indigo-300 font-bold text-sm mb-2">Did you know?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Irregular verbs are the most common verbs in English. Mastering the top 50 will improve your fluency significantly!
              </p>
            </div>
          </div>
        </nav>
      </aside>

    </div>
  );
};

const Welcome = ({ onNavigate }) => {
  const cards = [
    { id: 'quiz', title: 'Quiz Game', desc: 'Test your knowledge now!', color: 'bg-fuchsia-100 text-fuchsia-800', icon: <BrainCircuit size={24} /> },
    { id: 'regularverbs', title: 'Regular Verbs', desc: 'Dictionary: -ED forms', color: 'bg-emerald-100 text-emerald-800', icon: <BookA size={24} /> },
    { id: 'irregularverbs', title: 'Irregular Verbs', desc: 'Dictionary: Changing forms', color: 'bg-rose-100 text-rose-800', icon: <BookKey size={24} /> },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-indigo-200">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Bem-vindo ao Simulador!</h2>
        <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed">
          Utilize o menu lateral esquerdo para estudar a gramática e o menu lateral direito (ou abaixo) para praticar com Quizzes e Listas de Verbos.
        </p>
        <button 
          onClick={() => onNavigate('quiz')}
          className="mt-6 bg-white text-indigo-700 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-50 transition-colors flex items-center gap-2"
        >
          <PlayCircle size={20} /> Começar Quiz
        </button>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-4">Acesso Rápido</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => onNavigate(card.id)}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-left group focus:outline-none border border-slate-100"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${card.color}`}>
                {card.icon}
              </div>
              <h4 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{card.title}</h4>
              <p className="text-sm text-slate-500 mt-1">{card.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
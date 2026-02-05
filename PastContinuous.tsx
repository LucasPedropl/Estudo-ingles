import React from 'react';
import { PlayCircle, PauseCircle, Layers, Zap, ArrowRight, User } from 'lucide-react';

const PastContinuous = () => {
  return (
    <div className="space-y-8 pb-12">
      <header>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">The Past Continuous Tense</h2>
        <p className="text-slate-600">Used to describe an action that was <strong>in progress</strong> at a specific moment in the past.</p>
      </header>

      {/* The Formula */}
      <section className="bg-white rounded-2xl p-6 shadow-md border-t-4 border-orange-500">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
          <PlayCircle className="text-orange-500" /> The Formula
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-2 text-lg font-mono bg-orange-50 p-6 rounded-xl text-slate-800">
          <span className="font-bold">Subject</span>
          <span className="text-slate-400">+</span>
          <div className="flex flex-col text-center mx-2">
            <span className="font-bold text-orange-600">WAS</span>
            <span className="text-xs text-slate-500">I, He, She, It</span>
          </div>
          <span className="text-slate-400 font-bold text-sm">OR</span>
          <div className="flex flex-col text-center mx-2">
            <span className="font-bold text-orange-600">WERE</span>
            <span className="text-xs text-slate-500">You, We, They</span>
          </div>
          <span className="text-slate-400">+</span>
          <span className="font-bold bg-white px-2 py-1 rounded shadow-sm border">Verb-ING</span>
        </div>
      </section>

      {/* The Interruption Scenario */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Zap className="text-yellow-400" /> The Interruption
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl">
            Most common use in tests: A long action (Continuous) is interrupted by a short action (Simple Past).
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Visual */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-orange-300 font-mono mb-1">
                <PlayCircle size={14} /> Long Action (Background)
              </div>
              <div className="h-4 bg-orange-500/20 rounded-full w-full relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full bg-orange-500 opacity-50 animate-pulse"></div>
                <div className="absolute top-1/2 left-2/3 w-1 h-8 bg-white -translate-y-1/2 z-10"></div>
                <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-white rounded-full -translate-y-1/2 -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
              </div>
              <div className="flex justify-end text-sm text-white font-mono mt-1 w-2/3 ml-auto pr-4 relative">
                <ArrowRight className="absolute -top-6 right-8 text-white rotate-90" size={16} />
                Short Action (Interrupts)
              </div>
            </div>

            {/* Example */}
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
              <p className="text-lg leading-relaxed">
                "I <strong className="text-orange-400">was sleeping</strong> when the phone <strong className="text-white underline decoration-wavy">rang</strong>."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When vs While */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-indigo-50 p-6 rounded-2xl shadow-sm border border-indigo-100">
          <h3 className="text-lg font-bold text-indigo-900 mb-2">WHEN</h3>
          <p className="text-indigo-800 text-sm mb-4">
            Usually introduces the <strong>short action</strong> (Simple Past).
          </p>
          <div className="bg-white p-3 rounded-lg text-sm text-slate-700 shadow-sm">
            "... <strong>when</strong> you called."
            <br/>
            "... <strong>when</strong> the lights went out."
          </div>
        </div>

        <div className="bg-orange-50 p-6 rounded-2xl shadow-sm border border-orange-100">
          <h3 className="text-lg font-bold text-orange-900 mb-2">WHILE</h3>
          <p className="text-orange-800 text-sm mb-4">
            Usually introduces the <strong>long action</strong> (Past Continuous).
          </p>
          <div className="bg-white p-3 rounded-lg text-sm text-slate-700 shadow-sm">
            "<strong>While</strong> I was studying..."
            <br/>
            "<strong>While</strong> she was driving..."
          </div>
        </div>
      </div>

      {/* Parallel Actions */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Layers size={20} className="text-indigo-500" /> Parallel Actions
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          Two things happening at the same time in the past. No one interrupts anyone.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-50 p-4 rounded-xl">
          <div className="flex-1 text-center">
            <User className="mx-auto mb-2 text-indigo-400" />
            <p className="text-sm font-bold text-slate-700">I was cooking</p>
          </div>
          <div className="text-slate-400 font-bold px-2">+</div>
          <div className="flex-1 text-center">
            <User className="mx-auto mb-2 text-orange-400" />
            <p className="text-sm font-bold text-slate-700">He was watching TV</p>
          </div>
        </div>
        <p className="text-center mt-4 text-slate-700 font-medium italic">
          "While I <strong>was cooking</strong>, he <strong>was watching</strong> TV."
        </p>
      </section>

    </div>
  );
};

export default PastContinuous;
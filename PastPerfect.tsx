import React from 'react';
import { Rewind, ArrowLeft, CheckCircle2, Clock, GitCommit } from 'lucide-react';

const PastPerfect = () => {
  return (
    <div className="space-y-8 pb-12">
      <header>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">The Past Perfect Tense</h2>
        <p className="text-slate-600">Conhecido como "O Passado do Passado". Usamos para falar de uma ação que aconteceu <strong>antes</strong> de outra ação no passado.</p>
      </header>

      {/* Visual Timeline */}
      <section className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 overflow-hidden relative">
        <h3 className="text-center text-slate-500 uppercase tracking-widest text-xs font-bold mb-8">Linha do Tempo</h3>
        
        <div className="relative flex items-center justify-between max-w-3xl mx-auto pt-4 pb-8">
          {/* Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-0"></div>
          
          {/* Event 1 (Past Perfect) */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-violet-600 ring-4 ring-white shadow-sm mb-3"></div>
            <div className="bg-violet-100 text-violet-800 px-4 py-2 rounded-lg text-sm font-bold text-center shadow-sm max-w-[150px]">
              The train HAD left
            </div>
            <p className="absolute -bottom-8 text-xs text-slate-400 font-mono">07:50 PM</p>
          </div>

          {/* Arrow */}
          <ArrowLeft className="text-slate-300" />

          {/* Event 2 (Simple Past) */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-slate-400 ring-4 ring-white shadow-sm mb-3"></div>
            <div className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-sm font-bold text-center shadow-sm max-w-[150px]">
              I arrived
            </div>
            <p className="absolute -bottom-8 text-xs text-slate-400 font-mono">08:00 PM</p>
          </div>

          {/* Now */}
          <div className="relative z-10 flex flex-col items-center opacity-50">
            <div className="w-3 h-3 rounded-full bg-slate-300 mb-3"></div>
            <span className="text-xs uppercase font-bold text-slate-400">Now</span>
          </div>
        </div>

        <div className="mt-8 text-center bg-violet-50 p-4 rounded-xl border border-violet-100">
          <p className="text-violet-900 text-lg font-medium italic">
            "When I <strong>arrived</strong> at the station, the train <strong>had already left</strong>."
          </p>
        </div>
      </section>

      {/* The Formula */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
          <Rewind /> Estrutura
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg md:text-xl font-mono bg-white/10 p-6 rounded-xl border border-white/20">
          <div className="flex flex-col items-center">
            <span className="text-sm text-violet-200 font-sans mb-1">Subject</span>
            <strong>I / She / They</strong>
          </div>
          <span className="text-2xl opacity-50">+</span>
          <div className="flex flex-col items-center">
            <span className="text-sm text-violet-200 font-sans mb-1">Auxiliar</span>
            <strong>HAD</strong>
          </div>
          <span className="text-2xl opacity-50">+</span>
          <div className="flex flex-col items-center">
            <span className="text-sm text-violet-200 font-sans mb-1">Verbo Principal</span>
            <strong>Past Participle (V3)</strong>
          </div>
        </div>
        <div className="text-center mt-4 text-violet-200 text-sm">
          * O auxiliar <strong>HAD</strong> é igual para todas as pessoas.
        </div>
      </section>

      {/* Usage Logic */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-violet-500">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Clock size={20} className="text-violet-600" /> Palavras-Chave (Connectors)
          </h3>
          <p className="text-sm text-slate-600 mb-4">
            O Past Perfect quase sempre aparece junto com o Simple Past, conectados por:
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded">Before</span>
              <span className="text-slate-700">Antes que algo acontecesse.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded">After</span>
              <span className="text-slate-700">Depois que algo já tinha acontecido.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded">By the time</span>
              <span className="text-slate-700">"No momento em que..."</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded">Already</span>
              <span className="text-slate-700">Para enfatizar que já estava feito.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-slate-500">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <GitCommit size={20} className="text-slate-600" /> Comparação Prática
          </h3>
          <div className="space-y-4 text-sm">
            
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="font-bold text-slate-700 mb-1">Simple Past (Sequência)</p>
              <p className="text-slate-600 italic">"When I got home, my mom <strong>cooked</strong> dinner."</p>
              <p className="text-xs text-slate-500 mt-1">1º Cheguei. 2º Ela cozinhou. (Eu vi ela cozinhando)</p>
            </div>

            <div className="p-3 bg-violet-50 rounded-lg border border-violet-100">
              <p className="font-bold text-violet-800 mb-1">Past Perfect (Ordem Inversa)</p>
              <p className="text-slate-700 italic">"When I got home, my mom <strong>had cooked</strong> dinner."</p>
              <p className="text-xs text-violet-600 mt-1">1º Ela cozinhou. 2º Eu cheguei. (O jantar já estava pronto)</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default PastPerfect;
import React from 'react';
import { Clock, Activity, HelpCircle, AlertOctagon } from 'lucide-react';

const FrequencyAdverbs = () => {
  return (
    <div className="space-y-8 pb-12">
      <header>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Frequency Adverbs</h2>
        <p className="text-slate-600">Aprenda a expressar rotina e a posição correta das palavras na frase.</p>
      </header>

      {/* Visual Scale */}
      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-md">
        <h3 className="text-lg font-bold text-slate-800 mb-6 text-center">Escala de Frequência</h3>
        <div className="space-y-4">
          {[
            { word: 'Always', pct: '100%', color: 'bg-indigo-600', text: 'Sempre' },
            { word: 'Usually', pct: '90%', color: 'bg-indigo-500', text: 'Geralmente' },
            { word: 'Often', pct: '70%', color: 'bg-indigo-400', text: 'Frequentemente' },
            { word: 'Sometimes', pct: '50%', color: 'bg-amber-400', text: 'Às vezes' },
            { word: 'Hardly ever', pct: '10%', color: 'bg-orange-500', text: 'Quase nunca' },
            { word: 'Never', pct: '0%', color: 'bg-red-500', text: 'Nunca' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-24 font-bold text-slate-700 text-right text-sm sm:text-base">{item.word}</div>
              <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full ${item.color} rounded-full`} style={{ width: item.pct }}></div>
              </div>
              <div className="w-12 text-xs font-mono text-slate-400">{item.pct}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Rules Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        
        {/* Rule 1: Action Verbs */}
        <div className="bg-blue-50 p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
            <Activity size={20} /> Regra Fundamental 1
          </h3>
          <p className="text-blue-800 mb-4 text-sm">
            Para a maioria dos verbos (study, work, eat, play), o advérbio vem <strong>ANTES</strong>.
          </p>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center mb-4 text-slate-700">
             Subject + <span className="text-blue-600 font-bold">Adverb</span> + Verb
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-center gap-2">✅ I <strong className="text-blue-600">always</strong> drink coffee.</li>
            <li className="flex items-center gap-2">✅ She <strong className="text-blue-600">never</strong> eats sushi.</li>
            <li className="flex items-center gap-2 opacity-50">❌ I drink <span className="line-through">always</span> coffee.</li>
          </ul>
        </div>

        {/* Rule 2: To Be */}
        <div className="bg-indigo-50 p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold text-indigo-900 mb-4 flex items-center gap-2">
            <Activity size={20} /> Regra Fundamental 2
          </h3>
          <p className="text-indigo-800 mb-4 text-sm">
            Para o verbo <strong>TO BE</strong> (am, is, are), o advérbio vem <strong>DEPOIS</strong>.
          </p>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center mb-4 text-slate-700">
             Subject + To Be + <span className="text-indigo-600 font-bold">Adverb</span>
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-center gap-2">✅ You are <strong className="text-indigo-600">always</strong> late.</li>
            <li className="flex items-center gap-2">✅ He is <strong className="text-indigo-600">never</strong> sad.</li>
            <li className="flex items-center gap-2 opacity-50">❌ He <span className="line-through">never</span> is sad.</li>
          </ul>
        </div>
      </div>

      {/* Advanced Structures: Questions & Negatives */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="bg-slate-900 text-white p-4 flex items-center gap-2">
          <HelpCircle size={20} className="text-amber-400" />
          <h3 className="font-bold">Atenção: Perguntas e Negativas</h3>
        </div>
        <div className="p-6 grid md:grid-cols-2 gap-8">
          
          <div>
            <h4 className="font-bold text-slate-800 mb-2 border-b border-slate-100 pb-2">Frases Negativas</h4>
            <p className="text-sm text-slate-600 mb-3">O advérbio fica entre o auxiliar negativo (don't/doesn't) e o verbo principal.</p>
            <div className="bg-slate-50 p-3 rounded-lg text-sm border-l-4 border-red-400">
              <p className="mb-1 text-slate-500 text-xs uppercase font-bold">Estrutura</p>
              <p>Subject + Don't/Doesn't + <span className="text-red-500 font-bold">Adverb</span> + Verb</p>
            </div>
            <p className="mt-3 text-sm italic text-slate-700">"I don't <strong className="text-red-500">usually</strong> have breakfast."</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-2 border-b border-slate-100 pb-2">Frases Interrogativas</h4>
            <p className="text-sm text-slate-600 mb-3">O advérbio fica logo depois do sujeito.</p>
            <div className="bg-slate-50 p-3 rounded-lg text-sm border-l-4 border-amber-400">
              <p className="mb-1 text-slate-500 text-xs uppercase font-bold">Estrutura</p>
              <p>Do/Does + Subject + <span className="text-amber-600 font-bold">Adverb</span> + Verb?</p>
            </div>
            <p className="mt-3 text-sm italic text-slate-700">"Do you <strong className="text-amber-600">often</strong> go to the cinema?"</p>
          </div>

        </div>
      </div>

      {/* Special Cases */}
      <div className="bg-amber-50 p-6 rounded-2xl shadow-sm">
        <h3 className="text-lg font-bold text-amber-900 mb-2 flex items-center gap-2">
          <AlertOctagon size={20} /> Exceções de Posição
        </h3>
        <p className="text-slate-700 text-sm">
          <strong>Sometimes</strong> e <strong>Usually</strong> são flexíveis. Eles podem ir no começo da frase para dar ênfase.
        </p>
        <div className="mt-3 flex flex-wrap gap-4 text-sm font-medium text-amber-900">
          <span className="bg-white px-3 py-1 rounded shadow-sm">"Sometimes I watch TV."</span>
          <span className="bg-white px-3 py-1 rounded shadow-sm">"I watch TV sometimes."</span>
          <span className="bg-white px-3 py-1 rounded shadow-sm">"I sometimes watch TV."</span>
        </div>
        <p className="mt-3 text-slate-700 text-sm">
          Mas <strong className="text-red-600">Never</strong> e <strong className="text-red-600">Always</strong> não gostam de ir no começo!
        </p>
      </div>

    </div>
  );
};

export default FrequencyAdverbs;
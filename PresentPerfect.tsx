import React from 'react';
import { Infinity, Clock, CheckCircle2, AlertTriangle, ArrowRight, HelpCircle } from 'lucide-react';

const PresentPerfect = () => {
  return (
    <div className="space-y-8 pb-12">
      <header>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">The Present Perfect Tense</h2>
        <p className="text-slate-600">O tempo verbal que conecta o passado ao presente. Foca no resultado ou na experiência, não em "quando" aconteceu.</p>
      </header>

      {/* The Formula */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 text-white shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">A Fórmula Mágica</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg md:text-xl font-mono bg-white/10 p-6 rounded-xl border border-white/20">
          <div className="flex flex-col items-center">
            <span className="text-sm text-teal-200 font-sans mb-1">Sujeito</span>
            <strong>Subject</strong>
          </div>
          <span className="text-2xl">+</span>
          <div className="flex flex-col items-center">
            <span className="text-sm text-teal-200 font-sans mb-1">Auxiliar</span>
            <strong>Have / Has</strong>
          </div>
          <span className="text-2xl">+</span>
          <div className="flex flex-col items-center">
            <span className="text-sm text-teal-200 font-sans mb-1">Verbo Principal</span>
            <strong>Past Participle (V3)</strong>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-4 text-center text-sm md:text-base">
          <div className="bg-white/10 p-3 rounded-lg">
            <span className="block text-teal-200 text-xs mb-1">I, You, We, They</span>
            <strong>HAVE</strong>
          </div>
          <div className="bg-white/10 p-3 rounded-lg">
            <span className="block text-teal-200 text-xs mb-1">He, She, It</span>
            <strong>HAS</strong>
          </div>
        </div>
      </section>

      {/* When to use it */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-teal-500">
          <div className="mb-4 bg-teal-50 w-12 h-12 rounded-full flex items-center justify-center text-teal-600">
            <Infinity size={24} />
          </div>
          <h4 className="font-bold text-slate-800 mb-2">Experiência de Vida</h4>
          <p className="text-sm text-slate-600 mb-3">Coisas que você fez (ou nunca fez) na vida. O tempo não importa.</p>
          <p className="text-sm font-medium text-teal-700">"I <strong>have been</strong> to Paris."</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-500">
          <div className="mb-4 bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center text-blue-600">
            <Clock size={24} />
          </div>
          <h4 className="font-bold text-slate-800 mb-2">Tempo Não Acabado</h4>
          <p className="text-sm text-slate-600 mb-3">Ações que começaram no passado e continuam até hoje.</p>
          <p className="text-sm font-medium text-blue-700">"I <strong>have lived</strong> here for 10 years."</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-amber-500">
          <div className="mb-4 bg-amber-50 w-12 h-12 rounded-full flex items-center justify-center text-amber-600">
            <AlertTriangle size={24} />
          </div>
          <h4 className="font-bold text-slate-800 mb-2">Passado Recente</h4>
          <p className="text-sm text-slate-600 mb-3">Aconteceu há pouco tempo e tem um resultado agora.</p>
          <p className="text-sm font-medium text-amber-700">"I <strong>have lost</strong> my keys." (Não consigo entrar agora)</p>
        </div>
      </div>

      {/* Signal Words Table */}
      <section className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="bg-slate-900 text-white p-4">
          <h3 className="font-bold flex items-center gap-2">Palavras-Chave (Signal Words)</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="p-4">Palavra</th>
                <th className="p-4">Significado / Uso</th>
                <th className="p-4">Exemplo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-4 font-bold text-indigo-600">Just</td>
                <td className="p-4">"Acabou de" acontecer. (Muito recente)</td>
                <td className="p-4 italic">"I have <strong>just</strong> eaten."</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-indigo-600">Already</td>
                <td className="p-4">"Já" (Mais cedo do que o esperado). Frases afirmativas.</td>
                <td className="p-4 italic">"I have <strong>already</strong> finished."</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-indigo-600">Yet</td>
                <td className="p-4">"Ainda" ou "Já". Final de negativas e perguntas.</td>
                <td className="p-4 italic">"Have you finished <strong>yet</strong>?" / "No, not <strong>yet</strong>."</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-indigo-600">Ever</td>
                <td className="p-4">"Alguma vez na vida". Usado em perguntas.</td>
                <td className="p-4 italic">"Have you <strong>ever</strong> eaten sushi?"</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-indigo-600">Never</td>
                <td className="p-4">"Nunca". Tem sentido negativo.</td>
                <td className="p-4 italic">"I have <strong>never</strong> been to Mars."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* For vs Since */}
      <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
        <h3 className="text-xl font-bold text-indigo-900 mb-6 text-center">A Batalha do Tempo: FOR vs SINCE</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm relative">
            <div className="absolute -top-3 -left-3 bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm font-bold shadow-sm">FOR</div>
            <p className="text-slate-600 mb-4 mt-2">Usado para <strong>DURAÇÃO</strong> (Um período de tempo).</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-400"/> For 2 hours</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-400"/> For 3 days</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-400"/> For a long time</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-400"/> For 10 years</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm relative">
            <div className="absolute -top-3 -left-3 bg-emerald-600 text-white px-3 py-1 rounded-lg text-sm font-bold shadow-sm">SINCE</div>
            <p className="text-slate-600 mb-4 mt-2">Usado para <strong>PONTO DE PARTIDA</strong> (Quando começou).</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400"/> Since 8:00 AM</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400"/> Since Monday</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400"/> Since 2010</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400"/> Since I was a child</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Present Perfect vs Simple Past */}
      <section className="bg-slate-800 text-slate-300 rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="text-amber-400" size={24} />
          <h3 className="text-xl font-bold text-white">Present Perfect vs Simple Past</h3>
        </div>
        
        <p className="mb-6">A diferença principal está no <strong>TEMPO</strong>.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-slate-600 rounded-xl p-5">
            <h4 className="text-rose-400 font-bold mb-2">Simple Past</h4>
            <p className="text-sm mb-3">O tempo acabou. Sabemos quando foi.</p>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between">
                <span>I <strong>lost</strong> my keys.</span>
                <span className="text-slate-500">(Yesterday)</span>
              </li>
              <li className="flex justify-between">
                <span>I <strong>lived</strong> in London.</span>
                <span className="text-slate-500">(In 2010)</span>
              </li>
            </ul>
          </div>

          <div className="border border-slate-600 rounded-xl p-5">
            <h4 className="text-teal-400 font-bold mb-2">Present Perfect</h4>
            <p className="text-sm mb-3">O tempo não importa ou ainda não acabou.</p>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between">
                <span>I <strong>have lost</strong> my keys.</span>
                <span className="text-slate-500">(Where are they?)</span>
              </li>
              <li className="flex justify-between">
                <span>I <strong>have lived</strong> in London.</span>
                <span className="text-slate-500">(Life experience)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PresentPerfect;
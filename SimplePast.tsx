import React from 'react';
import { History, PenTool, AlertTriangle, CheckCircle2, XCircle, Calendar, ArrowRight } from 'lucide-react';

const SimplePast = () => {
  return (
    <div className="space-y-8 pb-12">
      <header>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">The Simple Past Tense</h2>
        <p className="text-slate-600">Ações completas que aconteceram e terminaram no passado. Não há conexão com o agora.</p>
      </header>

      {/* Regular vs Irregular Intro */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg text-indigo-700 font-bold">ED</div>
            <h3 className="text-xl font-bold text-slate-800">Regular Verbs</h3>
          </div>
          <p className="text-slate-600 text-sm mb-4">
            A maioria dos verbos segue a regra padrão: basta adicionar <strong>-ED</strong> ao final.
          </p>
          <div className="space-y-2">
            <div className="flex justify-between p-2 bg-indigo-50 rounded-lg text-sm">
              <span>Work</span> <ArrowRight size={16} className="text-indigo-400" /> <span className="font-bold text-indigo-800">Worked</span>
            </div>
            <div className="flex justify-between p-2 bg-indigo-50 rounded-lg text-sm">
              <span>Play</span> <ArrowRight size={16} className="text-indigo-400" /> <span className="font-bold text-indigo-800">Played</span>
            </div>
            <div className="flex justify-between p-2 bg-indigo-50 rounded-lg text-sm">
              <span>Watch</span> <ArrowRight size={16} className="text-indigo-400" /> <span className="font-bold text-indigo-800">Watched</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-rose-100 rounded-lg text-rose-700 font-bold">?!</div>
            <h3 className="text-xl font-bold text-slate-800">Irregular Verbs</h3>
          </div>
          <p className="text-slate-600 text-sm mb-4">
            Estes verbos são rebeldes! Eles mudam de forma completamente ou não mudam nada. Você precisa memorizá-los.
          </p>
          <div className="space-y-2">
            <div className="flex justify-between p-2 bg-rose-50 rounded-lg text-sm">
              <span>Go</span> <ArrowRight size={16} className="text-rose-400" /> <span className="font-bold text-rose-800">Went</span>
            </div>
            <div className="flex justify-between p-2 bg-rose-50 rounded-lg text-sm">
              <span>See</span> <ArrowRight size={16} className="text-rose-400" /> <span className="font-bold text-rose-800">Saw</span>
            </div>
            <div className="flex justify-between p-2 bg-rose-50 rounded-lg text-sm">
              <span>Buy</span> <ArrowRight size={16} className="text-rose-400" /> <span className="font-bold text-rose-800">Bought</span>
            </div>
          </div>
        </div>
      </div>

      {/* Spelling Rules */}
      <section className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center gap-2">
          <PenTool size={20} className="text-slate-500" />
          <h3 className="font-bold text-slate-800">Regras de Ortografia (Regular Verbs)</h3>
        </div>
        <div className="p-6 grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-indigo-600 mb-2">Terminados em E</h4>
            <p className="text-xs text-slate-500 mb-2">Só adicione o D.</p>
            <ul className="text-sm space-y-1 text-slate-700">
              <li>Like → <strong>Liked</strong></li>
              <li>Love → <strong>Loved</strong></li>
              <li>Arrive → <strong>Arrived</strong></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-indigo-600 mb-2">Consoante + Y</h4>
            <p className="text-xs text-slate-500 mb-2">Tira o Y, coloca IED.</p>
            <ul className="text-sm space-y-1 text-slate-700">
              <li>Study → <strong>Studied</strong></li>
              <li>Cry → <strong>Cried</strong></li>
              <li>Try → <strong>Tried</strong></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-indigo-600 mb-2">CVC (Sanduíche)</h4>
            <p className="text-xs text-slate-500 mb-2">Dobra a última letra + ED.</p>
            <ul className="text-sm space-y-1 text-slate-700">
              <li>Stop → <strong>Stopped</strong></li>
              <li>Plan → <strong>Planned</strong></li>
              <li>Travel → <strong>Travelled</strong> (UK)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* The DID Section (Crucial) */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="text-amber-400" size={32} />
          <h3 className="text-2xl font-bold">A Regra de Ouro do "DID"</h3>
        </div>
        
        <p className="text-slate-300 mb-8 text-lg leading-relaxed">
          Quando usamos o auxiliar <strong>DID</strong> (em negativas e perguntas), ele "rouba" o passado do verbo principal. 
          O verbo volta para a forma normal (Base Form).
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Negatives */}
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
            <h4 className="text-rose-400 font-bold text-lg mb-4 flex items-center gap-2">
              <XCircle size={20} /> Negativas
            </h4>
            <div className="text-center mb-4 font-mono bg-black/30 p-3 rounded-lg text-sm">
              Subject + <strong>didn't</strong> + Base Verb
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle2 size={16} /> "I <strong>didn't go</strong> to the party."
              </div>
              <div className="flex items-center gap-2 text-red-400 opacity-70">
                <XCircle size={16} /> "I <span className="line-through">didn't went</span> to the party."
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle2 size={16} /> "She <strong>didn't study</strong>."
              </div>
              <div className="flex items-center gap-2 text-red-400 opacity-70">
                <XCircle size={16} /> "She <span className="line-through">didn't studied</span>."
              </div>
            </div>
          </div>

          {/* Questions */}
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
            <h4 className="text-amber-400 font-bold text-lg mb-4 flex items-center gap-2">
              <History size={20} /> Perguntas
            </h4>
            <div className="text-center mb-4 font-mono bg-black/30 p-3 rounded-lg text-sm">
              <strong>Did</strong> + Subject + Base Verb?
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle2 size={16} /> "<strong>Did</strong> you <strong>see</strong> the movie?"
              </div>
              <div className="flex items-center gap-2 text-red-400 opacity-70">
                <XCircle size={16} /> "Did you <span className="line-through">saw</span> the movie?"
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle2 size={16} /> "<strong>Did</strong> they <strong>finish</strong>?"
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Was / Were Exception */}
      <div className="bg-blue-50 p-6 md:p-8 rounded-2xl shadow-sm">
        <h3 className="text-xl font-bold text-blue-900 mb-4">A Exceção: O Verbo "To Be" (Ser/Estar)</h3>
        <p className="text-blue-800 mb-6 text-sm">
          O verbo To Be é especial. Ele <strong>NÃO</strong> usa "Did" para negativas ou perguntas. Ele se resolve sozinho.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h4 className="font-bold text-blue-600 mb-3 border-b border-blue-100 pb-2">Was (Singular)</h4>
            <p className="text-xs text-slate-500 mb-2">I, He, She, It</p>
            <ul className="text-sm space-y-2 text-slate-700">
              <li>(+) "She <strong>was</strong> happy yesterday."</li>
              <li>(-) "He <strong>wasn't</strong> (was not) at home."</li>
              <li>(?) "<strong>Was</strong> it expensive?"</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h4 className="font-bold text-blue-600 mb-3 border-b border-blue-100 pb-2">Were (Plural + You)</h4>
            <p className="text-xs text-slate-500 mb-2">You, We, They</p>
            <ul className="text-sm space-y-2 text-slate-700">
              <li>(+) "They <strong>were</strong> friends."</li>
              <li>(-) "We <strong>weren't</strong> (were not) ready."</li>
              <li>(?) "<strong>Were</strong> you sick?"</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Time Expressions */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Calendar size={20} className="text-indigo-600" /> Marcadores de Tempo
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          Estas palavras geralmente aparecem no final da frase e indicam que devemos usar o Past Simple.
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">Yesterday</span>
          <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">Last night</span>
          <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">Last week</span>
          <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">Two days ago</span>
          <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">In 2010</span>
          <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">When I was a child</span>
        </div>
      </section>

    </div>
  );
};

export default SimplePast;

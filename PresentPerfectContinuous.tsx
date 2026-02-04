import React from 'react';
import { Timer, Activity, CheckCircle2, XCircle, AlertTriangle, ArrowRight, Zap } from 'lucide-react';

const PresentPerfectContinuous = () => {
  return (
    <div className="space-y-8 pb-12">
      <header>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Present Perfect Continuous</h2>
        <p className="text-slate-600">Ações que começaram no passado e continuam até agora, com ênfase na <strong>duração</strong> ou no <strong>processo</strong>.</p>
      </header>

      {/* The Formula */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <Timer size={200} />
        </div>
        <h3 className="text-2xl font-bold mb-6 text-center relative z-10">A Estrutura do Processo</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-lg md:text-xl font-mono bg-white/10 p-6 rounded-xl border border-white/20 relative z-10">
          <div className="flex flex-col items-center">
            <span className="text-sm text-cyan-200 font-sans mb-1">Subject</span>
            <strong>I / She</strong>
          </div>
          <span className="text-2xl opacity-50">+</span>
          <div className="flex flex-col items-center">
            <span className="text-sm text-cyan-200 font-sans mb-1">Have/Has</span>
            <strong>have / has</strong>
          </div>
          <span className="text-2xl opacity-50">+</span>
          <div className="flex flex-col items-center">
            <span className="text-sm text-cyan-200 font-sans mb-1">Constant</span>
            <strong className="bg-white/20 px-2 rounded">BEEN</strong>
          </div>
          <span className="text-2xl opacity-50">+</span>
          <div className="flex flex-col items-center">
            <span className="text-sm text-cyan-200 font-sans mb-1">Action</span>
            <strong>Verb-ING</strong>
          </div>
        </div>
        <p className="text-center mt-6 text-cyan-100 italic">"I <strong>have been waiting</strong> for you all day."</p>
      </section>

      {/* Usage Contexts */}
      <div className="grid md:grid-cols-2 gap-6">
        
        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-cyan-500">
          <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
            <Timer className="text-cyan-600" size={24} /> 1. Duração até o Agora
          </h3>
          <p className="text-slate-600 text-sm mb-4">
            Uma ação que começou no passado e <strong>ainda está acontecendo</strong> neste exato momento.
          </p>
          <div className="bg-cyan-50 p-4 rounded-xl text-cyan-900 font-medium text-sm space-y-2">
            <p>✅ "We <strong>have been studying</strong> English for 2 hours." (Ainda estamos estudando)</p>
            <p>✅ "It <strong>has been raining</strong> since this morning." (Ainda chove)</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-blue-500">
          <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
            <Activity className="text-blue-600" size={24} /> 2. Efeitos Recentes Visíveis
          </h3>
          <p className="text-slate-600 text-sm mb-4">
            A ação acabou de parar, mas você pode ver o <strong>resultado físico</strong> agora.
          </p>
          <div className="bg-blue-50 p-4 rounded-xl text-blue-900 font-medium text-sm space-y-2">
            <p>✅ "I'm tired because I <strong>have been running</strong>." (Estou suado/cansado agora)</p>
            <p>✅ "The ground is wet. It <strong>has been raining</strong>."</p>
          </div>
        </div>
      </div>

      {/* Comparison Table: Simple vs Continuous */}
      <section className="bg-slate-900 text-slate-300 rounded-2xl p-6 md:p-8 shadow-xl">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Zap className="text-yellow-400" /> Batalha: Simple vs. Continuous
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <h4 className="text-teal-400 font-bold mb-2">Present Perfect Simple</h4>
              <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">Foco no Resultado / Quantidade</p>
              <p className="text-white text-lg font-medium">"I have written 3 emails."</p>
              <p className="text-sm text-slate-400 mt-2">A ação acabou. O foco é que os emails estão prontos.</p>
            </div>
            <ul className="text-sm space-y-1 text-slate-400">
              <li>• Quantas vezes? (How many)</li>
              <li>• Coisas permanentes</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <h4 className="text-cyan-400 font-bold mb-2">Present Perfect Continuous</h4>
              <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">Foco na Atividade / Tempo</p>
              <p className="text-white text-lg font-medium">"I have been writing emails."</p>
              <p className="text-sm text-slate-400 mt-2">A ação é o foco. Talvez eu não tenha terminado ainda.</p>
            </div>
            <ul className="text-sm space-y-1 text-slate-400">
              <li>• Quanto tempo? (How long)</li>
              <li>• Coisas temporárias</li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Danger Zone: Stative Verbs */}
      <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="bg-rose-100 p-3 rounded-full text-rose-600">
            <AlertTriangle size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-rose-800 mb-2">Cuidado: Verbos de Estado (Stative Verbs)</h3>
            <p className="text-rose-700 mb-4">
              Verbos que indicam sentimentos, posse ou conhecimento <strong>NÃO</strong> costumam ser usados no Continuous (com -ING).
              <br/>Use o <strong>Present Perfect Simple</strong> com eles.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-xs text-slate-500 uppercase font-bold mb-2">Know (Conhecer)</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <CheckCircle2 size={16} /> "I <strong>have known</strong> him for years."
                  </div>
                  <div className="flex items-center gap-2 text-red-400 text-sm opacity-75">
                    <XCircle size={16} /> "I <span className="line-through">have been knowing</span> him..."
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-xs text-slate-500 uppercase font-bold mb-2">Like (Gostar)</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <CheckCircle2 size={16} /> "I <strong>have always liked</strong> pizza."
                  </div>
                  <div className="flex items-center gap-2 text-red-400 text-sm opacity-75">
                    <XCircle size={16} /> "I <span className="line-through">have been liking</span> pizza..."
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-rose-800 italic bg-rose-100/50 p-3 rounded-lg">
              Outros verbos perigosos: Believe, Belong, Hate, Understand, Want, Need.
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PresentPerfectContinuous;

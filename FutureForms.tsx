import React from 'react';
import { Zap, Map, Lightbulb, Clock } from 'lucide-react';

const FutureForms = () => {
  return (
    <div className="space-y-8 pb-12">
      <header>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Future: Will vs Going To</h2>
        <p className="text-slate-600">A batalha dos futuros: Decisão do momento vs. Planos premeditados.</p>
      </header>

      {/* Main Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* WILL Card */}
        <div className="bg-white rounded-2xl shadow-lg shadow-blue-900/10 overflow-hidden flex flex-col">
          <div className="p-8 bg-blue-50">
            <h3 className="text-3xl font-extrabold text-blue-600">WILL</h3>
            <p className="text-blue-800 font-medium">O Futuro Espontâneo</p>
          </div>
          <div className="p-8 flex-1 space-y-6">
            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 rounded-xl h-fit text-blue-600"><Zap size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Decisão Rápida</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-2">
                  Você decidiu AGORA, enquanto fala. Não estava na sua agenda.
                </p>
                <div className="bg-slate-50 p-3 rounded-lg text-sm border-l-4 border-blue-300 italic text-slate-700">
                  "Oh, we don't have milk? I <strong>will</strong> go to the supermarket."
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 rounded-xl h-fit text-blue-600"><Lightbulb size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Opinião / Previsão s/ Prova</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-2">
                  O que você <em>acha</em> que vai acontecer.
                </p>
                <div className="bg-slate-50 p-3 rounded-lg text-sm border-l-4 border-blue-300 italic text-slate-700">
                  "I think Brazil <strong>will</strong> win the World Cup." (Eu acho, mas não tenho certeza)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GOING TO Card */}
        <div className="bg-white rounded-2xl shadow-lg shadow-purple-900/10 overflow-hidden flex flex-col">
          <div className="p-8 bg-purple-50">
            <h3 className="text-3xl font-extrabold text-purple-600">GOING TO</h3>
            <p className="text-purple-800 font-medium">O Futuro Planejado</p>
          </div>
          <div className="p-8 flex-1 space-y-6">
            <div className="flex gap-4">
              <div className="bg-purple-100 p-3 rounded-xl h-fit text-purple-600"><Map size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Planos e Intenções</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-2">
                  Você decidiu ANTES de falar. Já está na sua mente.
                </p>
                <div className="bg-slate-50 p-3 rounded-lg text-sm border-l-4 border-purple-300 italic text-slate-700">
                  "I <strong>am going to</strong> visit my mom this weekend." (Já planejei isso ontem)
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-purple-100 p-3 rounded-xl h-fit text-purple-600"><Lightbulb size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Previsão com Evidência</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-2">
                  Você está vendo algo acontecer agora. É quase certo.
                </p>
                <div className="bg-slate-50 p-3 rounded-lg text-sm border-l-4 border-purple-300 italic text-slate-700">
                  "Look at those clouds! It <strong>is going to</strong> rain." (A nuvem é a evidência)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signal Words Section */}
      <section className="bg-slate-800 text-slate-200 rounded-2xl p-6 md:p-8 shadow-xl">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Clock className="text-amber-400" /> Palavras-Chave (Signal Words)
        </h3>
        <p className="mb-6 text-slate-400">Em testes, procure por estas palavras para te ajudar a escolher.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-700/50 p-5 rounded-xl border border-slate-600">
            <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-wider">Use WILL com:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400"></span> Maybe (Talvez)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400"></span> Probably (Provavelmente)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400"></span> I think... (Eu acho)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400"></span> I hope... (Eu espero)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400"></span> I promise... (Promessa)</li>
            </ul>
          </div>

          <div className="bg-slate-700/50 p-5 rounded-xl border border-slate-600">
            <h4 className="text-purple-400 font-bold mb-3 uppercase tracking-wider">Contextos para GOING TO:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-400"></span> "Have you decided?" (Se já decidiu &rarr; Going to)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-400"></span> "Look at..." (Evidência visual)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-400"></span> Datas específicas com planos confirmados</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FutureForms;
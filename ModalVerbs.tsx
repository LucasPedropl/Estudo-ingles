import React from 'react';
import { ShieldAlert, ThumbsUp, CheckCircle2, AlertTriangle, XCircle, Unlock } from 'lucide-react';

const ModalVerbs = () => {
  return (
    <div className="space-y-8 pb-12">
      <header>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Modal Verbs</h2>
        <p className="text-slate-600">Verbos auxiliares que expressam habilidade, obrigação, conselho ou possibilidade.</p>
      </header>

      {/* The Golden Rules */}
      <section className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl p-6 md:p-8 text-white shadow-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <ShieldAlert /> As Regras de Ouro
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm md:text-base">
            <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <strong className="block text-yellow-200 mb-1">Sem "S"</strong>
                <p>Nunca adicione S na 3ª pessoa.</p>
                <p className="opacity-75 text-xs mt-1">Right: She can swim.</p>
                <p className="text-red-300 text-xs line-through">Wrong: She cans swim.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <strong className="block text-yellow-200 mb-1">Sem "TO"</strong>
                <p>O verbo seguinte vem puro (exceto "Have to").</p>
                <p className="opacity-75 text-xs mt-1">Right: I must go.</p>
                <p className="text-red-300 text-xs line-through">Wrong: I must to go.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <strong className="block text-yellow-200 mb-1">Sem "DO/DOES"</strong>
                <p>Eles mesmos fazem perguntas e negativas.</p>
                <p className="opacity-75 text-xs mt-1">Right: Can you?</p>
                <p className="text-red-300 text-xs line-through">Wrong: Do you can?</p>
            </div>
        </div>
      </section>

      {/* Main Categories */}
      <div className="space-y-6">

        {/* Advice */}
        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-emerald-500">
            <div className="flex items-center gap-3 mb-4">
                <ThumbsUp className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold text-slate-800">Advice (Conselho)</h3>
            </div>
            <p className="text-slate-600 mb-4 text-sm">Usamos para dizer o que é bom ou ruim de se fazer.</p>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-4 rounded-xl">
                    <span className="font-bold text-emerald-800 block mb-1">SHOULD (Deveria)</span>
                    <p className="text-slate-700 italic text-sm">"You <strong>should</strong> study more."</p>
                    <p className="text-slate-700 italic text-sm mt-1">"You <strong>shouldn't</strong> eat fast food."</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-xl">
                    <span className="font-bold text-emerald-800 block mb-1">OUGHT TO (Deveria)</span>
                    <p className="text-slate-700 italic text-sm">"You <strong>ought to</strong> sleep early."</p>
                    <p className="text-xs text-slate-500 mt-2">* Mais formal e menos comum.</p>
                </div>
            </div>
        </div>

        {/* Ability */}
        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-blue-500">
             <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold text-slate-800">Ability & Possibility</h3>
            </div>
             <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                    <span className="font-bold text-blue-800 block mb-1">CAN (Pode/Consegue)</span>
                    <p className="text-xs text-slate-500 mb-2">Habilidade no presente.</p>
                    <p className="text-slate-700 italic text-sm">"I <strong>can</strong> speak English."</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                    <span className="font-bold text-blue-800 block mb-1">COULD (Podia)</span>
                    <p className="text-xs text-slate-500 mb-2">Habilidade no passado ou polidez.</p>
                    <p className="text-slate-700 italic text-sm">"I <strong>could</strong> run fast when I was young."</p>
                    <p className="text-slate-700 italic text-sm mt-1">"<strong>Could</strong> you help me?" (Polite)</p>
                </div>
            </div>
        </div>

        {/* Obligation */}
        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-red-500">
             <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-red-500" size={24} />
                <h3 className="text-xl font-bold text-slate-800">Obligation & Prohibition</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-xl">
                    <span className="font-bold text-red-800 block mb-1">MUST (Deve)</span>
                    <p className="text-xs text-slate-500 mb-2">Obrigação pessoal forte ou dedução.</p>
                    <p className="text-slate-700 italic text-sm">"I <strong>must</strong> call my mom."</p>
                </div>
                <div className="bg-red-50 p-4 rounded-xl">
                    <span className="font-bold text-red-800 block mb-1">HAVE TO (Tem que)</span>
                    <p className="text-xs text-slate-500 mb-2">Regra externa, lei ou fato.</p>
                    <p className="text-slate-700 italic text-sm">"You <strong>have to</strong> wear a uniform."</p>
                </div>
                 <div className="bg-red-100 border border-red-200 p-4 rounded-xl">
                    <span className="font-bold text-red-900 block mb-1 flex items-center gap-1"><XCircle size={14}/> MUSTN'T</span>
                    <p className="text-xs text-red-800 mb-2 font-bold">PROIBIÇÃO!</p>
                    <p className="text-slate-700 italic text-sm">"You <strong>mustn't</strong> smoke here."</p>
                </div>
            </div>
        </div>
        
        {/* Lack of Obligation */}
        <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200">
             <div className="flex items-center gap-3 mb-2">
                <Unlock className="text-slate-500" size={24} />
                <h3 className="text-lg font-bold text-slate-700">Lack of Obligation (Não é necessário)</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">Cuidado! O negativo de "Have to" não é proibição, é opcionalidade.</p>
            <div className="bg-white p-4 rounded-xl flex items-center gap-4">
                 <span className="font-bold text-slate-800">Don't have to</span>
                 <span className="text-slate-600 text-sm">You <strong>don't have to</strong> come if you don't want to. (É opcional)</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ModalVerbs;

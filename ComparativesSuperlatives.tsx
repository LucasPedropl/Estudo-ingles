import React from 'react';
import { ArrowUpRight, Trophy, PenTool, ArrowDownRight } from 'lucide-react';

const ComparativesSuperlatives = () => {
  return (
    <div className="space-y-8 pb-12">
      <header>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Comparatives & Superlatives</h2>
        <p className="text-slate-600">Como comparar coisas em inglês: regras de ortografia e exceções.</p>
      </header>

      {/* Main Table */}
      <section className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-900 text-slate-300">
                <th className="p-5 font-semibold">Regra</th>
                <th className="p-5 font-semibold">Adjetivo</th>
                <th className="p-5 font-semibold bg-amber-600 text-white">Comparative <br/><span className="text-xs font-normal opacity-75">(Entre 2 coisas)</span></th>
                <th className="p-5 font-semibold bg-indigo-600 text-white">Superlative <br/><span className="text-xs font-normal opacity-75">(O nº 1 do grupo)</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm md:text-base">
              {/* Short */}
              <tr className="bg-white hover:bg-slate-50">
                <td className="p-5 font-bold text-slate-700">1 Sílaba</td>
                <td className="p-5">Tall</td>
                <td className="p-5 text-amber-800 font-medium">Taller than</td>
                <td className="p-5 text-indigo-800 font-medium">The tallest</td>
              </tr>
              {/* CVC */}
              <tr className="bg-white hover:bg-slate-50">
                <td className="p-5 font-bold text-slate-700">CVC <span className="text-xs font-normal text-slate-500 block">(Consoante-Vogal-Consoante)</span></td>
                <td className="p-5">Big</td>
                <td className="p-5 text-amber-800 font-medium">Bi<span className="underline decoration-wavy decoration-red-400">gg</span>er than</td>
                <td className="p-5 text-indigo-800 font-medium">The bi<span className="underline decoration-wavy decoration-red-400">gg</span>est</td>
              </tr>
              {/* Y ending */}
              <tr className="bg-white hover:bg-slate-50">
                <td className="p-5 font-bold text-slate-700">Termina em Y <span className="text-xs font-normal text-slate-500 block">(Tira o Y, põe I)</span></td>
                <td className="p-5">Heavy</td>
                <td className="p-5 text-amber-800 font-medium">Heav<span className="underline decoration-wavy decoration-red-400">ier</span> than</td>
                <td className="p-5 text-indigo-800 font-medium">The heav<span className="underline decoration-wavy decoration-red-400">iest</span></td>
              </tr>
              {/* Long */}
              <tr className="bg-white hover:bg-slate-50">
                <td className="p-5 font-bold text-slate-700">Longos <span className="text-xs font-normal text-slate-500 block">(2+ sílabas)</span></td>
                <td className="p-5">Expensive</td>
                <td className="p-5 text-amber-800 font-medium">More expensive than</td>
                <td className="p-5 text-indigo-800 font-medium">The most expensive</td>
              </tr>
              {/* Irregular */}
              <tr className="bg-yellow-50 border-l-4 border-yellow-400">
                <td className="p-5 font-bold text-yellow-800">Irregulares <span className="text-xs font-normal text-yellow-700 block">(Muda tudo!)</span></td>
                <td className="p-5 space-y-2">
                  <div className="font-semibold">Good</div>
                  <div className="font-semibold">Bad</div>
                  <div className="font-semibold">Far</div>
                </td>
                <td className="p-5 space-y-2 text-amber-900">
                  <div>Better than</div>
                  <div>Worse than</div>
                  <div>Farther than</div>
                </td>
                <td className="p-5 space-y-2 text-indigo-900">
                  <div>The best</div>
                  <div>The worst</div>
                  <div>The farthest</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Detail Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Spelling Rules */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <PenTool size={20} className="text-slate-500" /> Regras de Escrita
          </h3>
          <ul className="space-y-4 text-sm text-slate-600">
            <li className="bg-slate-50 p-3 rounded-lg">
              <strong className="block text-slate-900 mb-1">Regra do CVC (Sanduíche)</strong>
              Se o adjetivo termina em Consoante-Vogal-Consoante, dobre a última letra!
              <br/><span className="text-xs text-slate-500">Fat → Fatter | Thin → Thinner</span>
            </li>
            <li className="bg-slate-50 p-3 rounded-lg">
              <strong className="block text-slate-900 mb-1">Regra do Y</strong>
              Se termina em consoante + Y, o Y vira I.
              <br/><span className="text-xs text-slate-500">Busy → Busier | Funny → Funnier</span>
            </li>
            <li className="bg-slate-50 p-3 rounded-lg">
              <strong className="block text-slate-900 mb-1">Regra do E</strong>
              Se já termina em E, só adicione R ou ST.
              <br/><span className="text-xs text-slate-500">Nice → Nicer (não Niceer)</span>
            </li>
          </ul>
        </div>

        {/* Equality */}
        <div className="bg-indigo-50 p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold text-indigo-900 mb-4 flex items-center gap-2">
            <ArrowUpRight size={20} /> Igualdade (Equality)
          </h3>
          <p className="text-sm text-indigo-800 mb-4">
            Para dizer que duas coisas são iguais, não importa se o adjetivo é curto ou longo.
          </p>
          <div className="bg-white p-4 rounded-xl text-center mb-4 text-slate-700 shadow-sm">
            <span className="font-mono font-bold text-indigo-600">AS + adjective + AS</span>
          </div>
          <div className="space-y-2 text-sm text-slate-700">
            <p className="flex gap-2">✅ <span className="italic">Ferrari is <strong>as expensive as</strong> Lamborghini.</span></p>
            <p className="flex gap-2">✅ <span className="italic">I am <strong>as tall as</strong> you.</span></p>
            <p className="flex gap-2 mt-4 text-red-600 font-bold">Negativa (Not as...as):</p>
            <p className="italic">"English is not <strong>as difficult as</strong> Math."</p>
          </div>
        </div>

        {/* Inferiority */}
        <div className="bg-amber-50 p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
            <ArrowDownRight size={20} /> Inferioridade
          </h3>
          <p className="text-sm text-amber-800 mb-4">
            Para dizer que algo é "menos" que outro. É formal, mas cai em provas.
          </p>
          
          <div className="space-y-4">
            <div>
              <strong className="block text-amber-900 text-sm mb-1">Comparativo (Less)</strong>
              <div className="bg-white p-2 rounded text-xs italic text-slate-700 shadow-sm">
                "This phone is <strong>less expensive than</strong> that one."
              </div>
            </div>
            <div>
              <strong className="block text-amber-900 text-sm mb-1">Superlativo (The least)</strong>
              <div className="bg-white p-2 rounded text-xs italic text-slate-700 shadow-sm">
                "This is <strong>the least interesting</strong> book."
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ComparativesSuperlatives;
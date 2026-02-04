import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle, Coffee, Package, Scale } from 'lucide-react';

const CountableUncountable = () => {
  return (
    <div className="space-y-8 pb-12">
      <header>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Countable vs Uncountable Nouns</h2>
        <p className="text-slate-600">Entenda a diferença entre o que podemos contar e o que medimos em massa.</p>
      </header>
      
      {/* Definition Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700"><CheckCircle2 size={24} /></div>
              <h3 className="text-xl font-bold text-slate-800">Countable (Contáveis)</h3>
            </div>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              Substantivos que podem ser separados em unidades individuais. Eles aceitam números e têm plural.
            </p>
            <div className="bg-emerald-50 rounded-xl p-4 text-sm space-y-2 text-emerald-900 font-medium">
              <div className="flex justify-between border-b border-emerald-200/50 pb-2">
                <span>Singular</span>
                <span>Plural</span>
              </div>
              <div className="flex justify-between"><span>A car</span> <span>Two cars</span></div>
              <div className="flex justify-between"><span>An apple</span> <span>Some apples</span></div>
              <div className="flex justify-between"><span>A job</span> <span>Many jobs</span></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-100 rounded-lg text-red-700"><XCircle size={24} /></div>
              <h3 className="text-xl font-bold text-slate-800">Uncountable (Incontáveis)</h3>
            </div>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              Conceitos abstratos, líquidos, pós ou materiais. Não usamos números (1, 2, 3) diretamente com eles.
            </p>
            <div className="bg-red-50 rounded-xl p-4 text-sm space-y-2 text-red-900 font-medium">
              <div className="flex items-center gap-2">❌ One water / Two waters</div>
              <div className="flex items-center gap-2">✅ Some water / A lot of water</div>
              <div className="mt-2 text-xs opacity-75 border-t border-red-200/50 pt-2">
                Exemplos: Money, Information, Advice, Furniture, Bread, Cheese.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantifiers Table */}
      <section className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="p-6 border-b border-slate-50 bg-slate-50/30">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Scale className="text-indigo-500" size={20} />
            Quantifiers (Quantificadores)
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-600 uppercase text-xs tracking-wider">
                <th className="p-4 w-1/4">Quantidade</th>
                <th className="p-4 w-1/3">Countable (Plural)</th>
                <th className="p-4 w-1/3">Uncountable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <tr className="hover:bg-slate-50/50">
                <td className="p-4 font-semibold text-slate-700">Grande (+)</td>
                <td className="p-4">
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded">Many</span>
                  <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded ml-2">A lot of</span>
                </td>
                <td className="p-4">
                  <span className="text-red-600 font-bold bg-red-50 px-2 py-1 rounded">Much</span>
                  <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded ml-2">A lot of</span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-4 font-semibold text-slate-700">Pequena (-)</td>
                <td className="p-4">
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded">A few</span>
                  <div className="text-xs text-slate-400 mt-1">"Alguns poucos"</div>
                </td>
                <td className="p-4">
                  <span className="text-red-600 font-bold bg-red-50 px-2 py-1 rounded">A little</span>
                  <div className="text-xs text-slate-400 mt-1">"Um pouquinho"</div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-4 font-semibold text-slate-700">Indefinida (?)</td>
                <td className="p-4" colSpan={2}>
                  <div className="flex gap-4">
                    <div>
                      <span className="font-bold text-indigo-700">Some</span>
                      <p className="text-xs text-slate-500">Frases Afirmativas (+)</p>
                    </div>
                    <div>
                      <span className="font-bold text-indigo-700">Any</span>
                      <p className="text-xs text-slate-500">Negativas (-) e Perguntas (?)</p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Advanced Section: Measuring & Context */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        <section className="bg-indigo-50 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-indigo-900 mb-4 flex items-center gap-2">
            <Package size={20} /> Tornando o Incontável -> Contável
          </h3>
          <p className="text-sm text-indigo-800 mb-4">
            Usamos "Partitives" (recipientes ou medidas) para contar substantivos incontáveis.
          </p>
          <ul className="space-y-3">
            <li className="bg-white p-3 rounded-lg flex justify-between items-center shadow-sm">
              <span className="text-slate-600">Water</span>
              <span className="font-bold text-indigo-600">A glass of water</span>
            </li>
            <li className="bg-white p-3 rounded-lg flex justify-between items-center shadow-sm">
              <span className="text-slate-600">Bread</span>
              <span className="font-bold text-indigo-600">A slice of bread</span>
            </li>
            <li className="bg-white p-3 rounded-lg flex justify-between items-center shadow-sm">
              <span className="text-slate-600">Information</span>
              <span className="font-bold text-indigo-600">A piece of information</span>
            </li>
            <li className="bg-white p-3 rounded-lg flex justify-between items-center shadow-sm">
              <span className="text-slate-600">Coke (Soda)</span>
              <span className="font-bold text-indigo-600">A can of Coke</span>
            </li>
          </ul>
        </section>

        <section className="bg-amber-50 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
            <Coffee size={20} /> Cuidado: O Contexto Muda Tudo!
          </h3>
          <p className="text-sm text-amber-800 mb-4">
            Algumas palavras podem ser os dois tipos, dependendo do significado.
          </p>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border-l-4 border-amber-400 shadow-sm">
              <strong className="block text-slate-800 mb-1">Hair (Cabelo)</strong>
              <div className="text-sm space-y-1">
                <p>💆‍♀️ <span className="text-red-600 font-bold">Uncountable:</span> "She has long hair." (A cabeleira toda)</p>
                <p>🔍 <span className="text-emerald-600 font-bold">Countable:</span> "There is <span className="underline">a hair</span> in my soup!" (Um fio)</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border-l-4 border-amber-400 shadow-sm">
              <strong className="block text-slate-800 mb-1">Coffee / Beer / Tea</strong>
              <div className="text-sm space-y-1">
                <p>☕ <span className="text-red-600 font-bold">Uncountable:</span> "I love coffee." (A bebida em geral)</p>
                <p>🛒 <span className="text-emerald-600 font-bold">Countable:</span> "Two coffees, please." (Dois copos de café)</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CountableUncountable;
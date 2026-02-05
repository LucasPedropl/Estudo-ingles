import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle, Coffee, Package, Scale, ShoppingBasket, Lightbulb, ArrowRight, HelpCircle } from 'lucide-react';

const CountableUncountable = () => {
  return (
    <div className="space-y-12 pb-12">
      <header>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Countable vs Uncountable Nouns</h2>
        <p className="text-slate-600">Understand the difference between what we can count and what we measure in mass. This is crucial for choosing the right verb forms (is/are) and quantifiers.</p>
      </header>
      
      {/* Definition Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md relative overflow-hidden border-t-4 border-emerald-500">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700"><CheckCircle2 size={24} /></div>
              <h3 className="text-xl font-bold text-slate-800">Countable Nouns</h3>
            </div>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              Things you can count individually using numbers. They have both <strong>Singular</strong> and <strong>Plural</strong> forms.
            </p>
            <div className="bg-emerald-50 rounded-xl p-4 text-sm space-y-3 text-emerald-900 font-medium">
              <div className="flex justify-between items-center border-b border-emerald-200/50 pb-2">
                 <span>One apple</span>
                 <ArrowRight size={14} />
                 <span>Two apple<strong>s</strong></span>
              </div>
              <div className="flex justify-between items-center border-b border-emerald-200/50 pb-2">
                 <span>A job</span>
                 <ArrowRight size={14} />
                 <span>Many job<strong>s</strong></span>
              </div>
              <div className="flex justify-between items-center">
                 <span>A bottle</span>
                 <ArrowRight size={14} />
                 <span>Three bottle<strong>s</strong></span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md relative overflow-hidden border-t-4 border-red-500">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-100 rounded-lg text-red-700"><XCircle size={24} /></div>
              <h3 className="text-xl font-bold text-slate-800">Uncountable Nouns</h3>
            </div>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              Substances, concepts, or collective masses. They <strong>NEVER</strong> take "A/An" or a number. They act like singular subjects.
            </p>
            <div className="bg-red-50 rounded-xl p-4 text-sm space-y-3 text-red-900 font-medium">
              <div className="flex items-center gap-2">
                 <AlertTriangle size={14} /> The water <strong>IS</strong> cold. (Not "are")
              </div>
              <div className="flex items-center gap-2">
                 <XCircle size={14} className="text-red-600" /> <span className="line-through opacity-70">A water</span> / <span className="line-through opacity-70">Two waters</span>
              </div>
              <div className="flex items-center gap-2">
                 <CheckCircle2 size={14} className="text-emerald-600" /> <strong>Some</strong> water / <strong>Much</strong> water
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Tricky List */}
      <section className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="text-amber-500" size={28} />
            <div>
                <h3 className="text-xl font-bold text-slate-800">Common "False Friends"</h3>
                <p className="text-slate-500 text-sm">These words are often countable in other languages but <strong>UNCOUNTABLE</strong> in English.</p>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
                { word: "Bread", icon: "🍞" },
                { word: "Information", icon: "ℹ️" },
                { word: "Advice", icon: "💬" },
                { word: "Furniture", icon: "🛋️" },
                { word: "News", icon: "📰" },
                { word: "Luggage", icon: "🧳" },
                { word: "Homework", icon: "📝" },
                { word: "Money", icon: "💰" },
            ].map((item) => (
                <div key={item.word} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex flex-col">
                        <span className="font-bold text-slate-700 text-sm">{item.word}</span>
                        <span className="text-[10px] text-red-500 font-bold uppercase">Always Singular</span>
                    </div>
                </div>
            ))}
        </div>
        <div className="mt-4 p-3 bg-white rounded-lg border-l-4 border-amber-400 text-sm text-slate-600 italic shadow-sm">
            "The news <strong>is</strong> shocking today." (News ends in S but is singular!)
        </div>
      </section>

      {/* Quantifiers Table */}
      <section className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="p-6 border-b border-slate-50 bg-slate-50/30">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Scale className="text-indigo-500" size={20} />
            Quantifiers
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-900 text-slate-300 uppercase text-xs tracking-wider">
                <th className="p-4 w-1/4">Quantity</th>
                <th className="p-4 w-1/3">Countable (Plural)</th>
                <th className="p-4 w-1/3">Uncountable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50">
                <td className="p-4 font-semibold text-slate-700">Large (+)</td>
                <td className="p-4">
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded border border-emerald-100">Many</span>
                  <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded ml-2 border border-indigo-100">A lot of</span>
                </td>
                <td className="p-4">
                  <span className="text-red-600 font-bold bg-red-50 px-2 py-1 rounded border border-red-100">Much</span>
                  <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded ml-2 border border-indigo-100">A lot of</span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-4 font-semibold text-slate-700">Small (-)</td>
                <td className="p-4">
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded border border-emerald-100">A few</span>
                  <div className="text-xs text-slate-400 mt-1">"Some few" (Positive connotation)</div>
                </td>
                <td className="p-4">
                  <span className="text-red-600 font-bold bg-red-50 px-2 py-1 rounded border border-red-100">A little</span>
                  <div className="text-xs text-slate-400 mt-1">"A small amount"</div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-4 font-semibold text-slate-700">Zero / Questions</td>
                <td className="p-4" colSpan={2}>
                  <div className="flex gap-4">
                    <div>
                      <span className="font-bold text-indigo-700">Some</span>
                      <p className="text-xs text-slate-500">Affirmative Sentences (+)</p>
                    </div>
                    <div>
                      <span className="font-bold text-indigo-700">Any</span>
                      <p className="text-xs text-slate-500">Negatives (-) and Questions (?)</p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Exception: Some in Questions */}
      <section className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex items-start gap-3">
        <HelpCircle className="text-indigo-500 shrink-0 mt-1" />
        <div className="text-sm">
            <h4 className="font-bold text-indigo-900">Exception: "Some" in Questions</h4>
            <p className="text-indigo-800">
                We usually use <strong>ANY</strong> for questions. However, if we are <strong>Offering</strong> or <strong>Requesting</strong> something, we use <strong>SOME</strong>.
            </p>
            <ul className="mt-2 space-y-1 text-slate-700 italic">
                <li>"Would you like <strong>some</strong> coffee?" (Offer)</li>
                <li>"Can I have <strong>some</strong> water?" (Request)</li>
            </ul>
        </div>
      </section>

      {/* Advanced Section: Measuring & Context */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        <section className="bg-white rounded-2xl p-6 shadow-md border-t-4 border-indigo-500">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Package size={20} className="text-indigo-500" /> Partitives: Measuring the Uncountable
          </h3>
          <p className="text-sm text-slate-600 mb-4">
            Since we can't count liquids or powders, we count the containers or pieces.
          </p>
          <ul className="space-y-3">
            {[
                { u: "Water", c: "A glass of water" },
                { u: "Bread", c: "A slice / loaf of bread" },
                { u: "Chocolate", c: "A bar of chocolate" },
                { u: "Information", c: "A piece of information" },
                { u: "Advice", c: "A piece of advice" },
                { u: "Furniture", c: "A piece of furniture" },
            ].map((item, idx) => (
                <li key={idx} className="bg-slate-50 p-3 rounded-lg flex justify-between items-center shadow-sm border border-slate-100">
                    <span className="text-red-400 font-medium text-sm line-through decoration-red-300">{item.u}s</span>
                    <ArrowRight size={14} className="text-slate-300"/>
                    <span className="font-bold text-emerald-700 text-sm">{item.c}</span>
                </li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-2xl p-6 shadow-md border-t-4 border-amber-500">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Coffee size={20} className="text-amber-500" /> Context Changes Meaning
          </h3>
          <p className="text-sm text-slate-600 mb-4">
            Some words change from Uncountable to Countable depending on the specific meaning.
          </p>
          
          <div className="space-y-4">
            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
              <strong className="block text-slate-800 mb-1">Hair</strong>
              <div className="text-sm space-y-1">
                <p>💆‍♀️ <span className="text-red-500 font-bold text-xs uppercase">Uncountable</span> "She has long hair." (All of it)</p>
                <p>🔍 <span className="text-emerald-500 font-bold text-xs uppercase">Countable</span> "There is <strong>a hair</strong> in my soup!" (One strand)</p>
              </div>
            </div>

            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
              <strong className="block text-slate-800 mb-1">Room</strong>
              <div className="text-sm space-y-1">
                <p>📏 <span className="text-red-500 font-bold text-xs uppercase">Uncountable</span> "Is there room for me?" (Space)</p>
                <p>🏠 <span className="text-emerald-500 font-bold text-xs uppercase">Countable</span> "My house has 5 rooms." (Bedrooms/Kitchen)</p>
              </div>
            </div>

            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
              <strong className="block text-slate-800 mb-1">Paper</strong>
              <div className="text-sm space-y-1">
                <p>📝 <span className="text-red-500 font-bold text-xs uppercase">Uncountable</span> "I need some paper to write." (Material)</p>
                <p>📰 <span className="text-emerald-500 font-bold text-xs uppercase">Countable</span> "I bought a paper (newspaper)." (Document)</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CountableUncountable;
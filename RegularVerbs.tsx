import React, { useState } from 'react';
import { Search, BookA, Volume2 } from 'lucide-react';

const RegularVerbs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Data transcribed from the provided image
  const verbs = [
    { infinitive: 'To Answer', past: 'Answered', participle: 'Answered', translation: 'Responder' },
    { infinitive: 'To Ask', past: 'Asked', participle: 'Asked', translation: 'Perguntar' },
    { infinitive: 'To Call', past: 'Called', participle: 'Called', translation: 'Chamar/Ligar' },
    { infinitive: 'To Carry', past: 'Carried', participle: 'Carried', translation: 'Carregar' },
    { infinitive: 'To Change', past: 'Changed', participle: 'Changed', translation: 'Mudar' },
    { infinitive: 'To Close', past: 'Closed', participle: 'Closed', translation: 'Fechar' },
    { infinitive: 'To Flirt', past: 'Flirted', participle: 'Flirted', translation: 'Paquerar' },
    { infinitive: 'To Happen', past: 'Happened', participle: 'Happened', translation: 'Acontecer' },
    { infinitive: 'To Hate', past: 'Hated', participle: 'Hated', translation: 'Odiar' },
    { infinitive: 'To Help', past: 'Helped', participle: 'Helped', translation: 'Ajudar' },
    { infinitive: 'To Lie', past: 'Lied', participle: 'Lied', translation: 'Mentir' },
    { infinitive: 'To Like', past: 'Liked', participle: 'Liked', translation: 'Gostar' },
    { infinitive: 'To Listen', past: 'Listened', participle: 'Listened', translation: 'Escutar' },
    { infinitive: 'To Love', past: 'Loved', participle: 'Loved', translation: 'Amar' },
    { infinitive: 'To Need', past: 'Needed', participle: 'Needed', translation: 'Precisar' },
    { infinitive: 'To Open', past: 'Opened', participle: 'Opened', translation: 'Abrir' },
    { infinitive: 'To Play', past: 'Played', participle: 'Played', translation: 'Jogar/Brincar' },
    { infinitive: 'To Repeat', past: 'Repeated', participle: 'Repeated', translation: 'Repetir' },
    { infinitive: 'To Study', past: 'Studied', participle: 'Studied', translation: 'Estudar' },
    { infinitive: 'To Talk', past: 'Talked', participle: 'Talked', translation: 'Conversar' },
    { infinitive: 'To Try', past: 'Tried', participle: 'Tried', translation: 'Tentar' },
    { infinitive: 'To Walk', past: 'Walked', participle: 'Walked', translation: 'Andar' },
    { infinitive: 'To Want', past: 'Wanted', participle: 'Wanted', translation: 'Querer' },
    { infinitive: 'To Watch', past: 'Watched', participle: 'Watched', translation: 'Assistir' },
    { infinitive: 'To Work', past: 'Worked', participle: 'Worked', translation: 'Trabalhar' },
  ];

  const filteredVerbs = verbs.filter(verb => 
    verb.infinitive.toLowerCase().includes(searchTerm.toLowerCase()) ||
    verb.past.toLowerCase().includes(searchTerm.toLowerCase()) ||
    verb.translation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2 flex items-center gap-3">
            <BookA className="text-emerald-500" size={32} /> Regular Verbs
          </h2>
          <p className="text-slate-600">
            Lista de verbos regulares. Regra geral: Adicione <strong>-ED</strong> no final.
          </p>
        </div>
        
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search verb..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </header>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-emerald-500 text-white">
                <th className="p-4 font-semibold w-1/4">Present Infinitive</th>
                <th className="p-4 font-semibold w-1/4">Past (V2)</th>
                <th className="p-4 font-semibold w-1/4">Past Participle (V3)</th>
                <th className="p-4 font-semibold w-1/4">Translation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredVerbs.map((verb, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors group">
                  <td className="p-4 font-medium text-slate-800">{verb.infinitive}</td>
                  <td className="p-4 text-slate-600 font-mono text-sm bg-slate-50/50">{verb.past}</td>
                  <td className="p-4 text-slate-600 font-mono text-sm">{verb.participle}</td>
                  <td className="p-4 text-slate-500 italic text-sm">{verb.translation}</td>
                </tr>
              ))}
              {filteredVerbs.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500">
                    Nenhum verbo encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegularVerbs;
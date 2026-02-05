import React, { useState } from 'react';
import { Search, BookA, Volume2 } from 'lucide-react';

const RegularVerbs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Data (Removed PT translation to strictly follow "no Portuguese" rule)
  const verbs = [
    { infinitive: 'To Answer', past: 'Answered', participle: 'Answered' },
    { infinitive: 'To Ask', past: 'Asked', participle: 'Asked' },
    { infinitive: 'To Call', past: 'Called', participle: 'Called' },
    { infinitive: 'To Carry', past: 'Carried', participle: 'Carried' },
    { infinitive: 'To Change', past: 'Changed', participle: 'Changed' },
    { infinitive: 'To Close', past: 'Closed', participle: 'Closed' },
    { infinitive: 'To Flirt', past: 'Flirted', participle: 'Flirted' },
    { infinitive: 'To Happen', past: 'Happened', participle: 'Happened' },
    { infinitive: 'To Hate', past: 'Hated', participle: 'Hated' },
    { infinitive: 'To Help', past: 'Helped', participle: 'Helped' },
    { infinitive: 'To Lie', past: 'Lied', participle: 'Lied' },
    { infinitive: 'To Like', past: 'Liked', participle: 'Liked' },
    { infinitive: 'To Listen', past: 'Listened', participle: 'Listened' },
    { infinitive: 'To Love', past: 'Loved', participle: 'Loved' },
    { infinitive: 'To Need', past: 'Needed', participle: 'Needed' },
    { infinitive: 'To Open', past: 'Opened', participle: 'Opened' },
    { infinitive: 'To Play', past: 'Played', participle: 'Played' },
    { infinitive: 'To Repeat', past: 'Repeated', participle: 'Repeated' },
    { infinitive: 'To Study', past: 'Studied', participle: 'Studied' },
    { infinitive: 'To Talk', past: 'Talked', participle: 'Talked' },
    { infinitive: 'To Try', past: 'Tried', participle: 'Tried' },
    { infinitive: 'To Walk', past: 'Walked', participle: 'Walked' },
    { infinitive: 'To Want', past: 'Wanted', participle: 'Wanted' },
    { infinitive: 'To Watch', past: 'Watched', participle: 'Watched' },
    { infinitive: 'To Work', past: 'Worked', participle: 'Worked' },
  ];

  const filteredVerbs = verbs.filter(verb => 
    verb.infinitive.toLowerCase().includes(searchTerm.toLowerCase()) ||
    verb.past.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2 flex items-center gap-3">
            <BookA className="text-emerald-500" size={32} /> Regular Verbs
          </h2>
          <p className="text-slate-600">
            List of regular verbs. General Rule: Add <strong>-ED</strong> at the end.
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
                <th className="p-4 font-semibold w-1/3">Present Infinitive</th>
                <th className="p-4 font-semibold w-1/3">Past (V2)</th>
                <th className="p-4 font-semibold w-1/3">Past Participle (V3)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredVerbs.map((verb, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors group">
                  <td className="p-4 font-medium text-slate-800">{verb.infinitive}</td>
                  <td className="p-4 text-slate-600 font-mono text-sm bg-slate-50/50">{verb.past}</td>
                  <td className="p-4 text-slate-600 font-mono text-sm">{verb.participle}</td>
                </tr>
              ))}
              {filteredVerbs.length === 0 && (
                <tr>
                  <td colSpan={3} className="p-8 text-center text-slate-500">
                    No verbs found.
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
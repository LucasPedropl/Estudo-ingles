import React, { useState } from 'react';
import { Search, BookKey, AlertTriangle } from 'lucide-react';

const IrregularVerbs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Comprehensive list combining all parts (1, 2, 3, and 4)
  // Removed Portuguese translations to follow "No Portuguese" rule.
  const verbs = [
    { infinitive: 'To Be', past: 'Was/Were', participle: 'Been' },
    { infinitive: 'To Bear', past: 'Bore', participle: 'Born' },
    { infinitive: 'To Beat', past: 'Beat', participle: 'Beaten' },
    { infinitive: 'To Become', past: 'Became', participle: 'Become' },
    { infinitive: 'To Begin', past: 'Began', participle: 'Begun' },
    { infinitive: 'To Bend', past: 'Bent', participle: 'Bent' },
    { infinitive: 'To Bet', past: 'Bet', participle: 'Bet' },
    { infinitive: 'To Bind', past: 'Bound', participle: 'Bound' },
    { infinitive: 'To Bite', past: 'Bit', participle: 'Bitten' },
    { infinitive: 'To Bleed', past: 'Bled', participle: 'Bled' },
    { infinitive: 'To Blow', past: 'Blew', participle: 'Blown' },
    { infinitive: 'To Break', past: 'Broke', participle: 'Broken' },
    { infinitive: 'To Bring', past: 'Brought', participle: 'Brought' },
    { infinitive: 'To Build', past: 'Built', participle: 'Built' },
    { infinitive: 'To Burn', past: 'Burnt / Burned', participle: 'Burnt / Burned' },
    { infinitive: 'To Burst', past: 'Burst', participle: 'Burst' },
    { infinitive: 'To Buy', past: 'Bought', participle: 'Bought' },
    { infinitive: 'To Cast', past: 'Cast', participle: 'Cast' },
    { infinitive: 'To Catch', past: 'Caught', participle: 'Caught' },
    { infinitive: 'To Choose', past: 'Chose', participle: 'Chosen' },
    { infinitive: 'To Come', past: 'Came', participle: 'Come' },
    { infinitive: 'To Cost', past: 'Cost', participle: 'Cost' },
    { infinitive: 'To Creep', past: 'Crept / Creeped', participle: 'Crept / Creeped' },
    { infinitive: 'To Cut', past: 'Cut', participle: 'Cut' },
    { infinitive: 'To Deal', past: 'Dealt', participle: 'Dealt' },
    { infinitive: 'To Do', past: 'Did', participle: 'Done' },
    { infinitive: 'To Draw', past: 'Drew', participle: 'Drawn' },
    { infinitive: 'To Dream', past: 'Dreamt / Dreamed', participle: 'Dreamt / Dreamed' },
    { infinitive: 'To Drink', past: 'Drank', participle: 'Drunk' },
    { infinitive: 'To Drive', past: 'Drove', participle: 'Driven' },
    { infinitive: 'To Eat', past: 'Ate', participle: 'Eaten' },
    { infinitive: 'To Fall', past: 'Fell', participle: 'Fallen' },
    { infinitive: 'To Feed', past: 'Fed', participle: 'Fed' },
    { infinitive: 'To Feel', past: 'Felt', participle: 'Felt' },
    { infinitive: 'To Fight', past: 'Fought', participle: 'Fought' },
    { infinitive: 'To Find', past: 'Found', participle: 'Found' },
    { infinitive: 'To Flee', past: 'Fled', participle: 'Fled' },
    { infinitive: 'To Fly', past: 'Flew', participle: 'Flown' },
    { infinitive: 'To Forbid', past: 'Forbade', participle: 'Forbidden' },
    { infinitive: 'To Forget', past: 'Forgot', participle: 'Forgotten' },
    { infinitive: 'To Forgive', past: 'Forgave', participle: 'Forgiven' },
    { infinitive: 'To Freeze', past: 'Froze', participle: 'Frozen' },
    { infinitive: 'To Get', past: 'Got', participle: 'Gotten' },
    { infinitive: 'To Give', past: 'Gave', participle: 'Given' },
    { infinitive: 'To Go', past: 'Went', participle: 'Gone' },
    { infinitive: 'To Grow', past: 'Grew', participle: 'Grown' },
    { infinitive: 'To Hang', past: 'Hung', participle: 'Hung' },
    { infinitive: 'To Have', past: 'Had', participle: 'Had' },
    { infinitive: 'To Hear', past: 'Heard', participle: 'Heard' },
    { infinitive: 'To Hide', past: 'Hid', participle: 'Hid / Hidden' },
    { infinitive: 'To Hit', past: 'Hit', participle: 'Hit' },
    { infinitive: 'To Hold', past: 'Held', participle: 'Held' },
    { infinitive: 'To Hurt', past: 'Hurt', participle: 'Hurt' },
    { infinitive: 'To Keep', past: 'Kept', participle: 'Kept' },
    { infinitive: 'To Kneel', past: 'Knelt / Kneeled', participle: 'Knelt / Kneeled' },
    { infinitive: 'To Knit', past: 'Knit', participle: 'Knit' },
    { infinitive: 'To Know', past: 'Knew', participle: 'Known' },
    { infinitive: 'To Lay', past: 'Laid', participle: 'Laid' },
    { infinitive: 'To Lead', past: 'Led', participle: 'Led' },
    { infinitive: 'To Lean', past: 'Leant / Leaned', participle: 'Leant / Leaned' },
    { infinitive: 'To Learn', past: 'Learnt / Learned', participle: 'Learnt / Learned' },
    { infinitive: 'To Leave', past: 'Left', participle: 'Left' },
    { infinitive: 'To Lend', past: 'Lent', participle: 'Lent' },
    { infinitive: 'To Let', past: 'Let', participle: 'Let' },
    { infinitive: 'To Lie', past: 'Lay', participle: 'Lain' },
    { infinitive: 'To Light', past: 'Lit', participle: 'Lit' },
    { infinitive: 'To Lose', past: 'Lost', participle: 'Lost' },
    { infinitive: 'To Make', past: 'Made', participle: 'Made' },
    { infinitive: 'To Mean', past: 'Meant', participle: 'Meant' },
    { infinitive: 'To Meet', past: 'Met', participle: 'Met' },
    { infinitive: 'To Overcome', past: 'Overcame', participle: 'Overcome' },
    { infinitive: 'To Pay', past: 'Paid', participle: 'Paid' },
    { infinitive: 'To Put', past: 'Put', participle: 'Put' },
    { infinitive: 'To Read', past: 'Read (Red)', participle: 'Read (Red)' },
    { infinitive: 'To Ride', past: 'Rode', participle: 'Ridden' },
    { infinitive: 'To Ring', past: 'Rang', participle: 'Rung' },
    { infinitive: 'To Rise', past: 'Rose', participle: 'Risen' },
    { infinitive: 'To Run', past: 'Ran', participle: 'Run' },
    { infinitive: 'To Say', past: 'Said', participle: 'Said' },
    { infinitive: 'To See', past: 'Saw', participle: 'Seen' },
    { infinitive: 'To Seek', past: 'Sought', participle: 'Sought' },
    { infinitive: 'To Sell', past: 'Sold', participle: 'Sold' },
    { infinitive: 'To Send', past: 'Sent', participle: 'Sent' },
    { infinitive: 'To Set', past: 'Set', participle: 'Set' },
    { infinitive: 'To Sew', past: 'Sewed', participle: 'Sewn' },
    { infinitive: 'To Shake', past: 'Shook', participle: 'Shaken' },
    { infinitive: 'To Shine', past: 'Shone', participle: 'Shone' },
    { infinitive: 'To Shoot', past: 'Shot', participle: 'Shot' },
    { infinitive: 'To Show', past: 'Showed', participle: 'Shown' },
    { infinitive: 'To Shut', past: 'Shut', participle: 'Shut' },
    { infinitive: 'To Sing', past: 'Sang', participle: 'Sung' },
    { infinitive: 'To Sink', past: 'Sank', participle: 'Sunk' },
    { infinitive: 'To Sit', past: 'Sat', participle: 'Sat' },
    { infinitive: 'To Sleep', past: 'Slept', participle: 'Slept' },
    { infinitive: 'To Smell', past: 'Smelt', participle: 'Smelt' },
    { infinitive: 'To Speak', past: 'Spoke', participle: 'Spoken' },
    { infinitive: 'To Speed', past: 'Sped', participle: 'Sped' },
    { infinitive: 'To Spell', past: 'Spelt', participle: 'Spelt' },
    { infinitive: 'To Spend', past: 'Spent', participle: 'Spent' },
    { infinitive: 'To Spill', past: 'Spilt', participle: 'Spilt' },
    { infinitive: 'To Spin', past: 'Spun', participle: 'Spun' },
    { infinitive: 'To Spoil', past: 'Spoilt', participle: 'Spoilt' },
    { infinitive: 'To Spread', past: 'Spread', participle: 'Spread' },
    { infinitive: 'To Spring', past: 'Sprang', participle: 'Sprung' },
    { infinitive: 'To Stand', past: 'Stood', participle: 'Stood' },
    { infinitive: 'To Steal', past: 'Stole', participle: 'Stolen' },
    { infinitive: 'To Stick', past: 'Stuck', participle: 'Stuck' },
    { infinitive: 'To Stink', past: 'Stank', participle: 'Stunk' },
    { infinitive: 'To Strike', past: 'Struck', participle: 'Struck' },
    { infinitive: 'To Swear', past: 'Swore', participle: 'Sworn' },
    { infinitive: 'To Sweat', past: 'Sweat', participle: 'Sweat' },
    { infinitive: 'To Sweep', past: 'Swept', participle: 'Swept' },
    { infinitive: 'To Swim', past: 'Swam', participle: 'Swum' },
    { infinitive: 'To Swing', past: 'Swung', participle: 'Swung' },
    { infinitive: 'To Take', past: 'Took', participle: 'Taken' },
    { infinitive: 'To Teach', past: 'Taught', participle: 'Taught' },
    { infinitive: 'To Tear', past: 'Tore', participle: 'Torn' },
    { infinitive: 'To Tell', past: 'Told', participle: 'Told' },
    { infinitive: 'To Think', past: 'Thought', participle: 'Thought' },
    { infinitive: 'To Throw', past: 'Threw', participle: 'Thrown' },
    { infinitive: 'To Understand', past: 'Understood', participle: 'Understood' },
    { infinitive: 'To Wake', past: 'Woke', participle: 'Woken' },
    { infinitive: 'To Wear', past: 'Wore', participle: 'Worn' },
    { infinitive: 'To Weep', past: 'Wept', participle: 'Wept' },
    { infinitive: 'To Win', past: 'Won', participle: 'Won' },
    { infinitive: 'To Withdraw', past: 'Withdrew', participle: 'Withdrawn' },
    { infinitive: 'To Write', past: 'Wrote', participle: 'Written' },
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
            <BookKey className="text-rose-500" size={32} /> Irregular Verbs
          </h2>
          <p className="text-slate-600">
            Complete list of irregular verbs.
          </p>
        </div>
        
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search verb..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
        </div>
      </header>

      <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl flex items-start gap-3">
        <AlertTriangle className="text-rose-500 shrink-0" />
        <div className="text-sm text-rose-800">
          <strong>Tip:</strong> Some verbs have two accepted forms (e.g. Dreamt / Dreamed). Both are listed.
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-rose-500 text-white">
                <th className="p-4 font-semibold w-1/3">Present Infinitive</th>
                <th className="p-4 font-semibold w-1/3">Past (V2)</th>
                <th className="p-4 font-semibold w-1/3">Past Participle (V3)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredVerbs.map((verb, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors group">
                  <td className="p-4 font-medium text-slate-800">{verb.infinitive}</td>
                  <td className="p-4 text-slate-600 font-mono text-sm font-bold bg-rose-50/30">{verb.past}</td>
                  <td className="p-4 text-slate-600 font-mono text-sm font-bold bg-rose-50/30">{verb.participle}</td>
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

export default IrregularVerbs;
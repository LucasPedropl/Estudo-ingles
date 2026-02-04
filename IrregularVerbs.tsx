import React, { useState } from 'react';
import { Search, BookKey, AlertTriangle } from 'lucide-react';

const IrregularVerbs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Comprehensive list combining all parts (1, 2, 3, and 4)
  const verbs = [
    { infinitive: 'To Be', past: 'Was/Were', participle: 'Been', translation: 'Ser/Estar' },
    { infinitive: 'To Bear', past: 'Bore', participle: 'Born', translation: 'Suportar/Nascer' },
    { infinitive: 'To Beat', past: 'Beat', participle: 'Beaten', translation: 'Bater' },
    { infinitive: 'To Become', past: 'Became', participle: 'Become', translation: 'Tornar-se' },
    { infinitive: 'To Begin', past: 'Began', participle: 'Begun', translation: 'Começar' },
    { infinitive: 'To Bend', past: 'Bent', participle: 'Bent', translation: 'Curvar' },
    { infinitive: 'To Bet', past: 'Bet', participle: 'Bet', translation: 'Apostar' },
    { infinitive: 'To Bind', past: 'Bound', participle: 'Bound', translation: 'Unir/Vincular' },
    { infinitive: 'To Bite', past: 'Bit', participle: 'Bitten', translation: 'Morder' },
    { infinitive: 'To Bleed', past: 'Bled', participle: 'Bled', translation: 'Sangrar' },
    { infinitive: 'To Blow', past: 'Blew', participle: 'Blown', translation: 'Soprar' },
    { infinitive: 'To Break', past: 'Broke', participle: 'Broken', translation: 'Quebrar' },
    { infinitive: 'To Bring', past: 'Brought', participle: 'Brought', translation: 'Trazer' },
    { infinitive: 'To Build', past: 'Built', participle: 'Built', translation: 'Construir' },
    { infinitive: 'To Burn', past: 'Burnt / Burned', participle: 'Burnt / Burned', translation: 'Queimar' },
    { infinitive: 'To Burst', past: 'Burst', participle: 'Burst', translation: 'Estourar' },
    { infinitive: 'To Buy', past: 'Bought', participle: 'Bought', translation: 'Comprar' },
    { infinitive: 'To Cast', past: 'Cast', participle: 'Cast', translation: 'Lançar/Elencar' },
    { infinitive: 'To Catch', past: 'Caught', participle: 'Caught', translation: 'Pegar' },
    { infinitive: 'To Choose', past: 'Chose', participle: 'Chosen', translation: 'Escolher' },
    { infinitive: 'To Come', past: 'Came', participle: 'Come', translation: 'Vir' },
    { infinitive: 'To Cost', past: 'Cost', participle: 'Cost', translation: 'Custar' },
    { infinitive: 'To Creep', past: 'Crept / Creeped', participle: 'Crept / Creeped', translation: 'Rastejar' },
    { infinitive: 'To Cut', past: 'Cut', participle: 'Cut', translation: 'Cortar' },
    { infinitive: 'To Deal', past: 'Dealt', participle: 'Dealt', translation: 'Lidar/Negociar' },
    { infinitive: 'To Do', past: 'Did', participle: 'Done', translation: 'Fazer' },
    { infinitive: 'To Draw', past: 'Drew', participle: 'Drawn', translation: 'Desenhar' },
    { infinitive: 'To Dream', past: 'Dreamt / Dreamed', participle: 'Dreamt / Dreamed', translation: 'Sonhar' },
    { infinitive: 'To Drink', past: 'Drank', participle: 'Drunk', translation: 'Beber' },
    { infinitive: 'To Drive', past: 'Drove', participle: 'Driven', translation: 'Dirigir' },
    { infinitive: 'To Eat', past: 'Ate', participle: 'Eaten', translation: 'Comer' },
    { infinitive: 'To Fall', past: 'Fell', participle: 'Fallen', translation: 'Cair' },
    { infinitive: 'To Feed', past: 'Fed', participle: 'Fed', translation: 'Alimentar' },
    { infinitive: 'To Feel', past: 'Felt', participle: 'Felt', translation: 'Sentir' },
    { infinitive: 'To Fight', past: 'Fought', participle: 'Fought', translation: 'Lutar' },
    { infinitive: 'To Find', past: 'Found', participle: 'Found', translation: 'Encontrar' },
    { infinitive: 'To Flee', past: 'Fled', participle: 'Fled', translation: 'Fugir' },
    { infinitive: 'To Fly', past: 'Flew', participle: 'Flown', translation: 'Voar' },
    { infinitive: 'To Forbid', past: 'Forbade', participle: 'Forbidden', translation: 'Proibir' },
    { infinitive: 'To Forget', past: 'Forgot', participle: 'Forgotten', translation: 'Esquecer' },
    { infinitive: 'To Forgive', past: 'Forgave', participle: 'Forgiven', translation: 'Perdoar' },
    { infinitive: 'To Freeze', past: 'Froze', participle: 'Frozen', translation: 'Congelar' },
    { infinitive: 'To Get', past: 'Got', participle: 'Gotten', translation: 'Obter/Conseguir' },
    { infinitive: 'To Give', past: 'Gave', participle: 'Given', translation: 'Dar' },
    { infinitive: 'To Go', past: 'Went', participle: 'Gone', translation: 'Ir' },
    { infinitive: 'To Grow', past: 'Grew', participle: 'Grown', translation: 'Crescer' },
    { infinitive: 'To Hang', past: 'Hung', participle: 'Hung', translation: 'Pendurar' },
    { infinitive: 'To Have', past: 'Had', participle: 'Had', translation: 'Ter' },
    { infinitive: 'To Hear', past: 'Heard', participle: 'Heard', translation: 'Ouvir' },
    { infinitive: 'To Hide', past: 'Hid', participle: 'Hid / Hidden', translation: 'Esconder' },
    { infinitive: 'To Hit', past: 'Hit', participle: 'Hit', translation: 'Bater' },
    { infinitive: 'To Hold', past: 'Held', participle: 'Held', translation: 'Segurar' },
    { infinitive: 'To Hurt', past: 'Hurt', participle: 'Hurt', translation: 'Machucar' },
    { infinitive: 'To Keep', past: 'Kept', participle: 'Kept', translation: 'Manter/Guardar' },
    { infinitive: 'To Kneel', past: 'Knelt / Kneeled', participle: 'Knelt / Kneeled', translation: 'Ajoelhar-se' },
    { infinitive: 'To Knit', past: 'Knit', participle: 'Knit', translation: 'Tricotar' },
    { infinitive: 'To Know', past: 'Knew', participle: 'Known', translation: 'Saber/Conhecer' },
    { infinitive: 'To Lay', past: 'Laid', participle: 'Laid', translation: 'Por/Deitar (algo)' },
    { infinitive: 'To Lead', past: 'Led', participle: 'Led', translation: 'Liderar' },
    { infinitive: 'To Lean', past: 'Leant / Leaned', participle: 'Leant / Leaned', translation: 'Inclinar-se' },
    { infinitive: 'To Learn', past: 'Learnt / Learned', participle: 'Learnt / Learned', translation: 'Aprender' },
    { infinitive: 'To Leave', past: 'Left', participle: 'Left', translation: 'Partir/Deixar' },
    { infinitive: 'To Lend', past: 'Lent', participle: 'Lent', translation: 'Emprestar' },
    { infinitive: 'To Let', past: 'Let', participle: 'Let', translation: 'Deixar/Permitir' },
    { infinitive: 'To Lie', past: 'Lay', participle: 'Lain', translation: 'Deitar-se (posição)' },
    { infinitive: 'To Light', past: 'Lit', participle: 'Lit', translation: 'Acender' },
    { infinitive: 'To Lose', past: 'Lost', participle: 'Lost', translation: 'Perder' },
    { infinitive: 'To Make', past: 'Made', participle: 'Made', translation: 'Fazer (Criar)' },
    { infinitive: 'To Mean', past: 'Meant', participle: 'Meant', translation: 'Significar' },
    { infinitive: 'To Meet', past: 'Met', participle: 'Met', translation: 'Encontrar' },
    { infinitive: 'To Overcome', past: 'Overcame', participle: 'Overcome', translation: 'Superar' },
    { infinitive: 'To Pay', past: 'Paid', participle: 'Paid', translation: 'Pagar' },
    { infinitive: 'To Put', past: 'Put', participle: 'Put', translation: 'Colocar' },
    { infinitive: 'To Read', past: 'Read (Red)', participle: 'Read (Red)', translation: 'Ler' },
    { infinitive: 'To Ride', past: 'Rode', participle: 'Ridden', translation: 'Montar/Andar' },
    { infinitive: 'To Ring', past: 'Rang', participle: 'Rung', translation: 'Tocar (som)' },
    { infinitive: 'To Rise', past: 'Rose', participle: 'Risen', translation: 'Subir/Erguer-se' },
    { infinitive: 'To Run', past: 'Ran', participle: 'Run', translation: 'Correr' },
    { infinitive: 'To Say', past: 'Said', participle: 'Said', translation: 'Dizer' },
    { infinitive: 'To See', past: 'Saw', participle: 'Seen', translation: 'Ver' },
    { infinitive: 'To Seek', past: 'Sought', participle: 'Sought', translation: 'Buscar' },
    { infinitive: 'To Sell', past: 'Sold', participle: 'Sold', translation: 'Vender' },
    { infinitive: 'To Send', past: 'Sent', participle: 'Sent', translation: 'Enviar' },
    { infinitive: 'To Set', past: 'Set', participle: 'Set', translation: 'Pôr/Configurar' },
    { infinitive: 'To Sew', past: 'Sewed', participle: 'Sewn', translation: 'Costurar' },
    { infinitive: 'To Shake', past: 'Shook', participle: 'Shaken', translation: 'Sacudir' },
    { infinitive: 'To Shine', past: 'Shone', participle: 'Shone', translation: 'Brilhar' },
    { infinitive: 'To Shoot', past: 'Shot', participle: 'Shot', translation: 'Atirar' },
    { infinitive: 'To Show', past: 'Showed', participle: 'Shown', translation: 'Mostrar' },
    { infinitive: 'To Shut', past: 'Shut', participle: 'Shut', translation: 'Fechar' },
    { infinitive: 'To Sing', past: 'Sang', participle: 'Sung', translation: 'Cantar' },
    { infinitive: 'To Sink', past: 'Sank', participle: 'Sunk', translation: 'Afundar' },
    { infinitive: 'To Sit', past: 'Sat', participle: 'Sat', translation: 'Sentar' },
    { infinitive: 'To Sleep', past: 'Slept', participle: 'Slept', translation: 'Dormir' },
    { infinitive: 'To Smell', past: 'Smelt', participle: 'Smelt', translation: 'Cheirar' },
    { infinitive: 'To Speak', past: 'Spoke', participle: 'Spoken', translation: 'Falar' },
    { infinitive: 'To Speed', past: 'Sped', participle: 'Sped', translation: 'Acelerar' },
    { infinitive: 'To Spell', past: 'Spelt', participle: 'Spelt', translation: 'Soletrar' },
    { infinitive: 'To Spend', past: 'Spent', participle: 'Spent', translation: 'Gastar' },
    { infinitive: 'To Spill', past: 'Spilt', participle: 'Spilt', translation: 'Derramar' },
    { infinitive: 'To Spin', past: 'Spun', participle: 'Spun', translation: 'Girar' },
    { infinitive: 'To Spoil', past: 'Spoilt', participle: 'Spoilt', translation: 'Estragar' },
    { infinitive: 'To Spread', past: 'Spread', participle: 'Spread', translation: 'Espalhar' },
    { infinitive: 'To Spring', past: 'Sprang', participle: 'Sprung', translation: 'Saltar/Brotar' },
    { infinitive: 'To Stand', past: 'Stood', participle: 'Stood', translation: 'Ficar de pé' },
    { infinitive: 'To Steal', past: 'Stole', participle: 'Stolen', translation: 'Roubar' },
    { infinitive: 'To Stick', past: 'Stuck', participle: 'Stuck', translation: 'Grudar' },
    { infinitive: 'To Stink', past: 'Stank', participle: 'Stunk', translation: 'Feder' },
    { infinitive: 'To Strike', past: 'Struck', participle: 'Struck', translation: 'Golpear' },
    { infinitive: 'To Swear', past: 'Swore', participle: 'Sworn', translation: 'Jurar' },
    { infinitive: 'To Sweat', past: 'Sweat', participle: 'Sweat', translation: 'Suar' },
    { infinitive: 'To Sweep', past: 'Swept', participle: 'Swept', translation: 'Varrer' },
    { infinitive: 'To Swim', past: 'Swam', participle: 'Swum', translation: 'Nadar' },
    { infinitive: 'To Swing', past: 'Swung', participle: 'Swung', translation: 'Balançar' },
    { infinitive: 'To Take', past: 'Took', participle: 'Taken', translation: 'Tomar/Levar' },
    { infinitive: 'To Teach', past: 'Taught', participle: 'Taught', translation: 'Ensinar' },
    { infinitive: 'To Tear', past: 'Tore', participle: 'Torn', translation: 'Rasgar' },
    { infinitive: 'To Tell', past: 'Told', participle: 'Told', translation: 'Contar/Dizer' },
    { infinitive: 'To Think', past: 'Thought', participle: 'Thought', translation: 'Pensar' },
    { infinitive: 'To Throw', past: 'Threw', participle: 'Thrown', translation: 'Jogar' },
    { infinitive: 'To Understand', past: 'Understood', participle: 'Understood', translation: 'Entender' },
    { infinitive: 'To Wake', past: 'Woke', participle: 'Woken', translation: 'Acordar' },
    { infinitive: 'To Wear', past: 'Wore', participle: 'Worn', translation: 'Vestir/Usar' },
    { infinitive: 'To Weep', past: 'Wept', participle: 'Wept', translation: 'Chorar' },
    { infinitive: 'To Win', past: 'Won', participle: 'Won', translation: 'Vencer' },
    { infinitive: 'To Withdraw', past: 'Withdrew', participle: 'Withdrawn', translation: 'Retirar/Sacar' },
    { infinitive: 'To Write', past: 'Wrote', participle: 'Written', translation: 'Escrever' },
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
            <BookKey className="text-rose-500" size={32} /> Irregular Verbs
          </h2>
          <p className="text-slate-600">
            Lista completa de verbos irregulares.
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
          <strong>Dica:</strong> Alguns verbos possuem duas formas aceitas (ex: Dreamt / Dreamed). Ambas estão listadas.
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-rose-500 text-white">
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
                  <td className="p-4 text-slate-600 font-mono text-sm font-bold bg-rose-50/30">{verb.past}</td>
                  <td className="p-4 text-slate-600 font-mono text-sm font-bold bg-rose-50/30">{verb.participle}</td>
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

export default IrregularVerbs;
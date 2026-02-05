import React from 'react';
import { Zap, Map, Lightbulb, Clock } from 'lucide-react';

const FutureForms = () => {
  return (
    <div className="space-y-8 pb-12">
      <header>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Future: Will vs Going To</h2>
        <p className="text-slate-600">The battle of futures: Momentary decision vs. Premeditated plans.</p>
      </header>

      {/* Main Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* WILL Card */}
        <div className="bg-white rounded-2xl shadow-lg shadow-blue-900/10 overflow-hidden flex flex-col">
          <div className="p-8 bg-blue-50">
            <h3 className="text-3xl font-extrabold text-blue-600">WILL</h3>
            <p className="text-blue-800 font-medium">The Spontaneous Future</p>
          </div>
          <div className="p-8 flex-1 space-y-6">
            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 rounded-xl h-fit text-blue-600"><Zap size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Quick Decision</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-2">
                  You decided NOW, while speaking. It was not on your schedule.
                </p>
                <div className="bg-slate-50 p-3 rounded-lg text-sm border-l-4 border-blue-300 italic text-slate-700">
                  "Oh, we don't have milk? I <strong>will</strong> go to the supermarket."
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 rounded-xl h-fit text-blue-600"><Lightbulb size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Opinion / Prediction w/o Proof</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-2">
                  What you <em>think</em> will happen.
                </p>
                <div className="bg-slate-50 p-3 rounded-lg text-sm border-l-4 border-blue-300 italic text-slate-700">
                  "I think Brazil <strong>will</strong> win the World Cup." (I think so, but I'm not sure)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GOING TO Card */}
        <div className="bg-white rounded-2xl shadow-lg shadow-purple-900/10 overflow-hidden flex flex-col">
          <div className="p-8 bg-purple-50">
            <h3 className="text-3xl font-extrabold text-purple-600">GOING TO</h3>
            <p className="text-purple-800 font-medium">The Planned Future</p>
          </div>
          <div className="p-8 flex-1 space-y-6">
            <div className="flex gap-4">
              <div className="bg-purple-100 p-3 rounded-xl h-fit text-purple-600"><Map size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Plans and Intentions</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-2">
                  You decided BEFORE speaking. It is already in your mind.
                </p>
                <div className="bg-slate-50 p-3 rounded-lg text-sm border-l-4 border-purple-300 italic text-slate-700">
                  "I <strong>am going to</strong> visit my mom this weekend." (I planned this yesterday)
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-purple-100 p-3 rounded-xl h-fit text-purple-600"><Lightbulb size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Prediction with Evidence</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-2">
                  You are seeing something happen now. It is almost certain.
                </p>
                <div className="bg-slate-50 p-3 rounded-lg text-sm border-l-4 border-purple-300 italic text-slate-700">
                  "Look at those clouds! It <strong>is going to</strong> rain." (The cloud is the evidence)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signal Words Section */}
      <section className="bg-slate-800 text-slate-200 rounded-2xl p-6 md:p-8 shadow-xl">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Clock className="text-amber-400" /> Signal Words
        </h3>
        <p className="mb-6 text-slate-400">In tests, look for these words to help you choose.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-700/50 p-5 rounded-xl border border-slate-600">
            <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-wider">Use WILL with:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400"></span> Maybe</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400"></span> Probably</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400"></span> I think...</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400"></span> I hope...</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400"></span> I promise...</li>
            </ul>
          </div>

          <div className="bg-slate-700/50 p-5 rounded-xl border border-slate-600">
            <h4 className="text-purple-400 font-bold mb-3 uppercase tracking-wider">Contexts for GOING TO:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-400"></span> "Have you decided?" (If yes &rarr; Going to)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-400"></span> "Look at..." (Visual Evidence)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-400"></span> Specific dates with confirmed plans</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FutureForms;
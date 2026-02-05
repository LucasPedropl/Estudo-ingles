import React from 'react';
import { Zap, Map, Calendar, Clock, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

const FutureForms = () => {
  return (
    <div className="space-y-12 pb-12">
      <header>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Future Forms: Will vs Going To vs Present Continuous</h2>
        <p className="text-slate-600">English has 3 main ways to talk about the future. Choosing the right one depends on <strong>how sure</strong> or <strong>how planned</strong> the event is.</p>
      </header>

      {/* The Certainty Scale */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-lg font-bold text-slate-800 mb-6 text-center">The "Planning" Scale</h3>
        <div className="relative pt-6 pb-2">
           <div className="h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 rounded-full"></div>
           <div className="flex justify-between mt-4 text-xs md:text-sm font-medium text-slate-600">
              <div className="text-center w-1/3">
                 <span className="text-blue-600 font-bold block text-lg mb-1">WILL</span>
                 0% Planned<br/>(Instant Decision)
              </div>
              <div className="text-center w-1/3 border-x border-slate-100">
                 <span className="text-purple-600 font-bold block text-lg mb-1">GOING TO</span>
                 50% Planned<br/>(Intention)
              </div>
              <div className="text-center w-1/3">
                 <span className="text-emerald-600 font-bold block text-lg mb-1">P. CONTINUOUS</span>
                 100% Planned<br/>(Arrangement)
              </div>
           </div>
        </div>
      </section>

      {/* Detailed Cards */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* WILL */}
        <div className="bg-white rounded-2xl shadow-md border-t-8 border-blue-500 overflow-hidden flex flex-col">
           <div className="p-6 bg-blue-50 flex items-center gap-3">
              <Zap className="text-blue-600" size={28} />
              <h3 className="text-xl font-bold text-blue-900">WILL</h3>
           </div>
           <div className="p-6 flex-1 space-y-4">
              <div>
                 <strong className="text-blue-800 block mb-1">1. Instant Decision</strong>
                 <p className="text-sm text-slate-600">You decide at the moment of speaking.</p>
                 <p className="text-sm italic mt-1 bg-slate-50 p-2 rounded border-l-2 border-blue-300">"The phone is ringing. I <strong>will</strong> answer it."</p>
              </div>
              <div>
                 <strong className="text-blue-800 block mb-1">2. Prediction (Opinion)</strong>
                 <p className="text-sm text-slate-600">Based on what you think/believe.</p>
                 <p className="text-sm italic mt-1 bg-slate-50 p-2 rounded border-l-2 border-blue-300">"I think cars <strong>will</strong> fly in 2050."</p>
              </div>
              <div>
                 <strong className="text-blue-800 block mb-1">3. Promises / Offers</strong>
                 <p className="text-sm italic mt-1 bg-slate-50 p-2 rounded border-l-2 border-blue-300">"I <strong>will</strong> help you."</p>
              </div>
           </div>
        </div>

        {/* GOING TO */}
        <div className="bg-white rounded-2xl shadow-md border-t-8 border-purple-500 overflow-hidden flex flex-col">
           <div className="p-6 bg-purple-50 flex items-center gap-3">
              <Map className="text-purple-600" size={28} />
              <h3 className="text-xl font-bold text-purple-900">GOING TO</h3>
           </div>
           <div className="p-6 flex-1 space-y-4">
              <div>
                 <strong className="text-purple-800 block mb-1">1. Intention / Plan</strong>
                 <p className="text-sm text-slate-600">You decided <em>before</em> speaking, but maybe no ticket booked yet.</p>
                 <p className="text-sm italic mt-1 bg-slate-50 p-2 rounded border-l-2 border-purple-300">"I <strong>am going to</strong> buy a new car next year."</p>
              </div>
              <div>
                 <strong className="text-purple-800 block mb-1">2. Prediction (Evidence)</strong>
                 <p className="text-sm text-slate-600">You can see it happening.</p>
                 <p className="text-sm italic mt-1 bg-slate-50 p-2 rounded border-l-2 border-purple-300">"Look at the clouds! It <strong>is going to</strong> rain."</p>
              </div>
           </div>
        </div>

        {/* PRESENT CONTINUOUS */}
        <div className="bg-white rounded-2xl shadow-md border-t-8 border-emerald-500 overflow-hidden flex flex-col">
           <div className="p-6 bg-emerald-50 flex items-center gap-3">
              <Calendar className="text-emerald-600" size={28} />
              <h3 className="text-xl font-bold text-emerald-900">P. CONTINUOUS</h3>
           </div>
           <div className="p-6 flex-1 space-y-4">
              <div>
                 <strong className="text-emerald-800 block mb-1">1. Fixed Arrangement</strong>
                 <p className="text-sm text-slate-600">It is in your diary. It involves time, place, or other people. Tickets are bought.</p>
                 <p className="text-sm italic mt-1 bg-slate-50 p-2 rounded border-l-2 border-emerald-300">"I <strong>am flying</strong> to Paris tomorrow at 8 AM."</p>
              </div>
               <div>
                 <strong className="text-emerald-800 block mb-1">Key Difference</strong>
                 <p className="text-xs text-slate-500">
                    <span className="font-bold">Going to:</span> I want to do it.<br/>
                    <span className="font-bold">P. Continuous:</span> Everything is ready/booked.
                 </p>
              </div>
           </div>
        </div>

      </div>

      {/* Special Section: Present Simple for Future */}
      <section className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
         <div className="flex items-center gap-3 mb-4">
            <Clock className="text-orange-500" size={24} />
            <h3 className="text-lg font-bold text-slate-800">Bonus: Present Simple for Timetables</h3>
         </div>
         <p className="text-slate-600 mb-4 text-sm">
            We use the <strong>Present Simple</strong> (usually for routines) to talk about the future only for <strong>public schedules</strong> (trains, flights, movies, classes).
         </p>
         <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-orange-400">
               <p className="text-sm text-slate-700">"The train <strong>leaves</strong> at 9:00 PM tonight."</p>
               <p className="text-xs text-slate-400 mt-1">(It's not my plan, it's the schedule)</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-orange-400">
               <p className="text-sm text-slate-700">"The movie <strong>starts</strong> in 10 minutes."</p>
            </div>
         </div>
      </section>

      {/* Comparison Scenarios */}
      <section className="bg-gradient-to-br from-indigo-900 to-slate-800 rounded-3xl p-8 text-white shadow-xl">
         <h3 className="text-2xl font-bold mb-8 text-center">Scenario Comparison</h3>
         
         <div className="space-y-6">
            {/* Scenario 1 */}
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
               <h4 className="font-bold text-blue-300 mb-2 text-lg">Scenario: "The Party"</h4>
               <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                     <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Will (Decision)</span>
                     <p className="mt-1">"Really? There is a party? I <strong>will go</strong> too!"</p>
                     <p className="text-xs text-slate-500 mt-1 italic">I just found out.</p>
                  </div>
                  <div>
                     <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Going To (Intention)</span>
                     <p className="mt-1">"I <strong>am going to go</strong> to the party."</p>
                     <p className="text-xs text-slate-500 mt-1 italic">I decided yesterday.</p>
                  </div>
                  <div>
                     <span className="text-xs font-bold uppercase tracking-wider text-slate-400">P. Continuous (Arrangement)</span>
                     <p className="mt-1">"I <strong>am going</strong> to the party with Sarah."</p>
                     <p className="text-xs text-slate-500 mt-1 italic">I have a ride/date arranged.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Structure Guide */}
      <div className="grid md:grid-cols-2 gap-8">
         <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Structure: WILL</h3>
            <ul className="space-y-3 text-sm">
               <li className="flex justify-between items-center bg-slate-50 p-2 rounded">
                  <span className="text-green-600 font-bold">(+)</span>
                  <span>Subject + <strong>will</strong> + Verb</span>
               </li>
               <li className="flex justify-between items-center bg-slate-50 p-2 rounded">
                  <span className="text-red-500 font-bold">(-)</span>
                  <span>Subject + <strong>won't</strong> + Verb</span>
               </li>
               <li className="flex justify-between items-center bg-slate-50 p-2 rounded">
                  <span className="text-amber-500 font-bold">(?)</span>
                  <span><strong>Will</strong> + Subject + Verb?</span>
               </li>
            </ul>
         </div>

         <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Structure: GOING TO</h3>
            <ul className="space-y-3 text-sm">
               <li className="flex justify-between items-center bg-slate-50 p-2 rounded">
                  <span className="text-green-600 font-bold">(+)</span>
                  <span>Subj + <strong>am/is/are going to</strong> + Verb</span>
               </li>
               <li className="flex justify-between items-center bg-slate-50 p-2 rounded">
                  <span className="text-red-500 font-bold">(-)</span>
                  <span>Subj + <strong>'m not/isn't/aren't going to</strong> + V</span>
               </li>
               <li className="flex justify-between items-center bg-slate-50 p-2 rounded">
                  <span className="text-amber-500 font-bold">(?)</span>
                  <span><strong>Am/Is/Are</strong> + Subj + <strong>going to</strong> + V?</span>
               </li>
            </ul>
         </div>
      </div>

    </div>
  );
};

export default FutureForms;
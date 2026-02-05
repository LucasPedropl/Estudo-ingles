import React from 'react';
import { ShieldAlert, Star, Zap, ArrowRight, BookOpen } from 'lucide-react';

const ModalVerbs = () => {

  const modalList = [
    {
      title: "CAN",
      description: "General ability, informal permission, and requests.",
      theme: "border-blue-200 bg-blue-50",
      iconColor: "text-blue-600",
      examples: [
        { intent: "General Ability", sentence: "She can play the piano very well." },
        { intent: "Informal Permission", sentence: "Can I borrow your pen for a second?" },
        { intent: "Request", sentence: "Can you help me carry these boxes?" }
      ]
    },
    {
      title: "COULD",
      description: "Past ability, polite requests, and possibility.",
      theme: "border-indigo-200 bg-indigo-50",
      iconColor: "text-indigo-600",
      examples: [
        { intent: "Past Ability", sentence: "I could run very fast when I was a child." },
        { intent: "Polite Request", sentence: "Could you open the window, please?" },
        { intent: "Possibility", sentence: "We could go to the cinema if you like." }
      ]
    },
    {
      title: "MAY",
      description: "Formal permission and probability.",
      theme: "border-emerald-200 bg-emerald-50",
      iconColor: "text-emerald-600",
      examples: [
        { intent: "Formal Permission", sentence: "May I leave the room, Mr. Smith?" },
        { intent: "Probability (50%)", sentence: "It may rain later, take an umbrella." },
        { intent: "Formal Wish", sentence: "May you have a wonderful life." }
      ]
    },
    {
      title: "MIGHT",
      description: "Remote possibility and polite suggestions.",
      theme: "border-teal-200 bg-teal-50",
      iconColor: "text-teal-600",
      examples: [
        { intent: "Remote Probability (30%)", sentence: "I might join you, but I'm not sure yet." },
        { intent: "Polite Suggestion", sentence: "You might want to try the cheesecake." },
        { intent: "Past Possibility", sentence: "He might have missed the bus." }
      ]
    },
    {
      title: "SHALL",
      description: "Offers, suggestions, and formal obligations.",
      theme: "border-fuchsia-200 bg-fuchsia-50",
      iconColor: "text-fuchsia-600",
      examples: [
        { intent: "Offer", sentence: "Shall I carry your bag for you?" },
        { intent: "Suggestion", sentence: "Shall we go out for dinner tonight?" },
        { intent: "Formal Obligation", sentence: "The tenant shall pay the rent on the 1st." }
      ]
    },
    {
      title: "SHOULD",
      description: "Advice, opinion, and logical expectation.",
      theme: "border-green-200 bg-green-50",
      iconColor: "text-green-600",
      examples: [
        { intent: "Advice", sentence: "You should brush your teeth twice a day." },
        { intent: "Opinion", sentence: "I think the government should do more for the poor." },
        { intent: "Expectation", sentence: "He left an hour ago, so he should be here soon." }
      ]
    },
    {
      title: "OUGHT TO",
      description: "Moral obligation and advice (synonym for Should).",
      theme: "border-lime-200 bg-lime-50",
      iconColor: "text-lime-700",
      examples: [
        { intent: "Moral Advice", sentence: "You ought to apologize to your sister." },
        { intent: "Duty", sentence: "We ought to vote in the elections." },
        { intent: "Probability", sentence: "The price ought to come down soon." }
      ]
    },
    {
      title: "HAD BETTER",
      description: "Strong advice implies a warning or bad consequence.",
      theme: "border-orange-200 bg-orange-50",
      iconColor: "text-orange-600",
      examples: [
        { intent: "Strong Advice / Warning", sentence: "You had better wake up, or you will miss the train." },
        { intent: "Urgency", sentence: "We had better leave now before the traffic gets bad." },
        { intent: "Threat", sentence: "He had better not be late again." }
      ]
    },
    {
      title: "MUST",
      description: "Strong obligation and logical deduction.",
      theme: "border-red-200 bg-red-50",
      iconColor: "text-red-600",
      examples: [
        { intent: "Strong Obligation", sentence: "You must wear a seatbelt in the car." },
        { intent: "Strong Deduction (Certainty)", sentence: "Look at his car! He must be rich." },
        { intent: "Prohibition (Mustn't)", sentence: "You must not smoke in the hospital." }
      ]
    },
    {
      title: "WOULD",
      description: "Conditionals, past habits, and invitations.",
      theme: "border-violet-200 bg-violet-50",
      iconColor: "text-violet-600",
      examples: [
        { intent: "Polite Offer / Invitation", sentence: "Would you like a cup of coffee?" },
        { intent: "Hypothetical (Conditional)", sentence: "I would travel the world if I had money." },
        { intent: "Past Habit", sentence: "When I was young, I would play soccer every Sunday." }
      ]
    },
  ];

  return (
    <div className="space-y-8 pb-12">
      <header>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Modal Verbs Dictionary</h2>
        <p className="text-slate-600">A complete guide to auxiliary verbs that express specific meanings.</p>
      </header>

      {/* The Golden Rules */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 md:p-8 text-white shadow-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <ShieldAlert className="text-yellow-400" /> The 3 Golden Rules
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm md:text-base">
            <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <strong className="block text-yellow-300 mb-2 text-lg">1. No "S"</strong>
                <p className="text-slate-300">Never add <strong>-s</strong>, <strong>-ed</strong>, or <strong>-ing</strong>.</p>
                <div className="mt-3 text-xs bg-black/20 p-2 rounded">
                  <span className="text-green-400 block">✓ She can swim.</span>
                  <span className="text-red-400 block decoration-line-through">✕ She cans swim.</span>
                </div>
            </div>
            <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <strong className="block text-yellow-300 mb-2 text-lg">2. No "TO"</strong>
                <p className="text-slate-300">The next verb comes in <strong>Base Form</strong> (except Ought to / Have to).</p>
                <div className="mt-3 text-xs bg-black/20 p-2 rounded">
                  <span className="text-green-400 block">✓ I must go.</span>
                  <span className="text-red-400 block decoration-line-through">✕ I must to go.</span>
                </div>
            </div>
            <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <strong className="block text-yellow-300 mb-2 text-lg">3. No "DO"</strong>
                <p className="text-slate-300">They do not need auxiliary verbs for questions or negatives.</p>
                <div className="mt-3 text-xs bg-black/20 p-2 rounded">
                  <span className="text-green-400 block">✓ Can you go?</span>
                  <span className="text-red-400 block decoration-line-through">✕ Do you can go?</span>
                </div>
            </div>
        </div>
      </section>

      {/* Dictionary List */}
      <div className="grid gap-6">
        {modalList.map((modal, index) => (
          <div key={index} className={`rounded-2xl border-l-8 shadow-sm overflow-hidden ${modal.theme} bg-white`}>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg bg-white shadow-sm ${modal.iconColor}`}>
                  <Zap size={20} fill="currentColor" />
                </div>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">{modal.title}</h3>
              </div>
              
              <p className="text-slate-600 font-medium mb-6 ml-1">{modal.description}</p>

              <div className="grid md:grid-cols-3 gap-4">
                {modal.examples.map((ex, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm relative group hover:shadow-md transition-shadow">
                    <div className="absolute top-3 right-3 text-slate-300">
                      <Star size={12} />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-wider mb-2 block ${modal.iconColor}`}>
                      {ex.intent}
                    </span>
                    <p className="text-slate-800 text-sm leading-relaxed font-medium">
                      "{ex.sentence}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ModalVerbs;
import React, { useState } from 'react';
import { BrainCircuit, CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, Play, HelpCircle, Layers, Zap } from 'lucide-react';

const questionsData = [
    // --- TOPIC: Quantifiers (Much/Many/Little/Few) ---
    { 
        id: 101, 
        topic: 'Quantifiers', 
        question: 'Complete: "There are ___ people in the room."', 
        options: ['much', 'many', 'a little', 'any'], 
        answer: 'many', 
        explanation: '"People" is countable (plural of person). We use "Many".' 
    },
    { 
        id: 102, 
        topic: 'Quantifiers', 
        question: 'Complete: "I don\'t have ___ money."', 
        options: ['many', 'much', 'few', 'a few'], 
        answer: 'much', 
        explanation: '"Money" is uncountable. In negatives, we use "Much" for large quantities.' 
    },
    { 
        id: 103, 
        topic: 'Quantifiers', 
        question: 'Complete: "We have ___ time before the train leaves."', 
        options: ['few', 'little', 'many', 'a few'], 
        answer: 'little', 
        explanation: '"Time" is uncountable. We use "Little" for small quantities.' 
    },
    { 
        id: 104, 
        topic: 'Quantifiers', 
        question: 'Complete: "There are a ___ jars of jam on the shelf."', 
        options: ['little', 'much', 'few', 'any'], 
        answer: 'few', 
        explanation: '"Jars" is countable and plural. We use "Few".' 
    },
    { 
        id: 105, 
        topic: 'Quantifiers', 
        question: 'Specific Noun: "She gave me ___ advice."', 
        options: ['an', 'some', 'many', 'a few'], 
        answer: 'some', 
        explanation: '"Advice" is UNCOUNTABLE in English. You cannot say "an advice" or "many advices".' 
    },
    { 
        id: 106, 
        topic: 'Quantifiers', 
        question: 'Context: "The room looks empty. There is ___ furniture."', 
        options: ['little', 'few', 'many', 'a lot'], 
        answer: 'little', 
        explanation: '"Furniture" is uncountable. "Little" means a small amount (almost nothing).' 
    },
    { 
        id: 107, 
        topic: 'Quantifiers', 
        question: 'Interrogative: "How ___ stars can you see tonight?"', 
        options: ['much', 'long', 'many', 'little'], 
        answer: 'many', 
        explanation: '"Stars" are countable. We ask questions with "How many".' 
    },

    // --- TOPIC: Frequency Adverbs ---
    { 
        id: 201, 
        topic: 'Adverbs', 
        question: 'Choose the correct order: "He / listens / often / to the radio"', 
        options: ['He listens often to the radio.', 'He often listens to the radio.', 'Often he listens to the radio.', 'He listens to the radio often.'], 
        answer: 'He often listens to the radio.', 
        explanation: 'Frequency adverbs come BEFORE the main verb (listens).' 
    },
    { 
        id: 202, 
        topic: 'Adverbs', 
        question: 'Choose the correct order: "She / late / arrives / always (Negative)"', 
        options: ['She doesn\'t always arrive late.', 'She always doesn\'t arrive late.', 'She doesn\'t arrive always late.', 'Always she doesn\'t arrive late.'], 
        answer: 'She doesn\'t always arrive late.', 
        explanation: 'In negative sentences, the adverb comes between the auxiliary (doesn\'t) and the main verb.' 
    },
    { 
        id: 203, 
        topic: 'Adverbs', 
        question: 'Auxiliary Verbs: "I ___ been to Spain."', 
        options: ['have never', 'never have', 'have ever', 'never am'], 
        answer: 'have never', 
        explanation: 'With Present Perfect, the adverb goes between the auxiliary (Have) and the main verb (Been).' 
    },

    // --- TOPIC: Comparatives & Superlatives ---
    { 
        id: 301, 
        topic: 'Comparatives', 
        question: 'Ferrari is ___ car in the world.', 
        options: ['the most expensive', 'more expensive', 'expensiver', 'the most expensives'], 
        answer: 'the most expensive', 
        explanation: 'Superlative of long adjectives (expensive) uses "The most". Adjectives do not have plural forms.' 
    },
    { 
        id: 302, 
        topic: 'Comparatives', 
        question: 'Brazil is ___ than England.', 
        options: ['hoter', 'hotter', 'more hot', 'the hottest'], 
        answer: 'hotter', 
        explanation: 'Short CVC adjective (Hot). Double the last letter + ER.' 
    },
    { 
        id: 303, 
        topic: 'Comparatives', 
        question: 'Equality: "Sandra is ___ Mary."', 
        options: ['as old as', 'so old as', 'older than', 'more old'], 
        answer: 'as old as', 
        explanation: 'Comparative of equality uses the structure "AS + adjective + AS".' 
    },
    { 
        id: 304, 
        topic: 'Comparatives', 
        question: 'Inferiority: "Cartoons are ___ interesting than movies."', 
        options: ['least', 'less', 'fewer', 'minor'], 
        answer: 'less', 
        explanation: 'Comparative of inferiority uses "LESS + adjective + THAN".' 
    },
    { 
        id: 305, 
        topic: 'Comparatives', 
        question: 'Irregular: "This movie is ___ than the previous one."', 
        options: ['badder', 'worse', 'more bad', 'worst'], 
        answer: 'worse', 
        explanation: 'Bad is an irregular adjective. Bad -> Worse.' 
    },
    { 
        id: 306, 
        topic: 'Comparatives', 
        question: 'Superlative: "He is the ___ student in the class."', 
        options: ['goodest', 'most good', 'best', 'better'], 
        answer: 'best', 
        explanation: 'Good is irregular. Good -> Better -> The Best.' 
    },
    { 
        id: 307, 
        topic: 'Comparatives', 
        question: 'Distance: "Pluto is ___ than Mars from the Sun."', 
        options: ['farther', 'more far', 'farest', 'farer'], 
        answer: 'farther', 
        explanation: 'Far is irregular. Use "Farther" or "Further" for distance.' 
    },

    // --- TOPIC: Future (Will vs Going To) ---
    { 
        id: 401, 
        topic: 'Future Forms', 
        question: 'Look at those dark clouds! It ___.', 
        options: ['will rain', 'is going to rain', 'rains', 'rain'], 
        answer: 'is going to rain', 
        explanation: 'Prediction with visual evidence (clouds) requires "Going to".' 
    },
    { 
        id: 402, 
        topic: 'Future Forms', 
        question: 'Mary: "I forgot the book." John: "No problem, I ___ lend you mine."', 
        options: ['am going to', 'will', 'am lending', 'lend'], 
        answer: 'will', 
        explanation: 'Spontaneous decision made at the moment of speaking requires "Will".' 
    },
    { 
        id: 403, 
        topic: 'Future Forms', 
        question: '"I have a plan. I ___ buy some stamps at the post office."', 
        options: ['will', 'am going to', 'buy', 'going to'], 
        answer: 'am going to', 
        explanation: 'Intention or plan decided before speaking requires "Going to".' 
    },
    { 
        id: 404, 
        topic: 'Future Forms', 
        question: 'Phone rings. "I ___ get it!"', 
        options: ['am going to', 'am getting', 'will', 'go to'], 
        answer: 'will', 
        explanation: 'Instant decision made at the moment of speaking = WILL.' 
    },
    { 
        id: 405, 
        topic: 'Future Forms', 
        question: 'Arrangement: "I ___ my dentist tomorrow at 10 AM."', 
        options: ['will see', 'am seeing', 'see', 'going to see'], 
        answer: 'am seeing', 
        explanation: 'Fixed arrangement with a specific time in the future uses Present Continuous.' 
    },
    { 
        id: 406, 
        topic: 'Future Forms', 
        question: 'Timetable: "The train ___ at 6:00 PM."', 
        options: ['leaving', 'is going to leave', 'leaves', 'will leave'], 
        answer: 'leaves', 
        explanation: 'Official schedules (timetables) use Present Simple.' 
    },
    { 
        id: 407, 
        topic: 'Future Forms', 
        question: 'Uncertainty: "Maybe I ___ stay home tonight."', 
        options: ['am going to', 'will', 'stay', 'staying'], 
        answer: 'will', 
        explanation: 'With words like "Maybe", "I think", "Probably", we usually use "Will".' 
    },
    { 
        id: 408, 
        topic: 'Future Forms', 
        question: 'Promise: "I promise I ___ tell anyone your secret."', 
        options: ['won\'t', 'not going to', 'don\'t', 'am not'], 
        answer: 'won\'t', 
        explanation: 'Promises always use "Will" (or "Won\'t" for negative).' 
    },

    // --- TOPIC: Simple Past (Regular/Irregular) ---
    { 
        id: 501, 
        topic: 'Simple Past', 
        question: 'He ___ (drink) wine at lunch yesterday.', 
        options: ['drinked', 'drank', 'drunk', 'drinks'], 
        answer: 'drank', 
        explanation: 'Irregular verb: Drink -> Drank.' 
    },
    { 
        id: 502, 
        topic: 'Simple Past', 
        question: 'Negative form: "The old man broke his arm."', 
        options: ['The old man didn\'t broke his arm.', 'The old man didn\'t break his arm.', 'The old man not broke his arm.', 'The old man doesn\'t break his arm.'], 
        answer: 'The old man didn\'t break his arm.', 
        explanation: 'When using the auxiliary DIDN\'T, the verb returns to the base form (Break).' 
    },
    { 
        id: 503, 
        topic: 'Simple Past', 
        question: '___ you at home last night?', 
        options: ['Did', 'Were', 'Was', 'Are'], 
        answer: 'Were', 
        explanation: 'Verb To Be (Were) does not use "Did". You = Were.' 
    },
    { 
        id: 504, 
        topic: 'Simple Past', 
        question: 'I ___ (not/go) to the party last Saturday.', 
        options: ['didn\'t went', 'didn\'t go', 'not went', 'don\'t went'], 
        answer: 'didn\'t go', 
        explanation: 'Negative in Simple Past: Didn\'t + Base Verb (Go).' 
    },
    { 
        id: 505, 
        topic: 'Simple Past', 
        question: 'To Be: "When ___ you born?"', 
        options: ['did', 'were', 'was', 'are'], 
        answer: 'were', 
        explanation: 'We always use "Were you born" (To Be), never "Did you born".' 
    },
    { 
        id: 506, 
        topic: 'Simple Past', 
        question: 'Irregular: "She ___ (buy) a new computer."', 
        options: ['buyed', 'bought', 'braught', 'buying'], 
        answer: 'bought', 
        explanation: 'Buy is irregular. Buy -> Bought.' 
    },
    { 
        id: 507, 
        topic: 'Simple Past', 
        question: 'Question: "___ she ___ the email?"', 
        options: ['Did / sent', 'Did / send', 'Does / send', 'Has / sent'], 
        answer: 'Did / send', 
        explanation: 'Question in past: Did + Subject + Base Verb.' 
    },

    // --- TOPIC: Present Perfect vs Simple Past ---
    { 
        id: 601, 
        topic: 'Pres. Perf. vs Past', 
        question: '___ you ever ___ a famous movie star?', 
        options: ['Did / see', 'Have / saw', 'Have / seen', 'Do / see'], 
        answer: 'Have / seen', 
        explanation: 'Life experience (Ever) without a defined time requires Present Perfect.' 
    },
    { 
        id: 602, 
        topic: 'Pres. Perf. vs Past', 
        question: 'I ___ Keanu Reeves last year.', 
        options: ['have seen', 'saw', 'seen', 'see'], 
        answer: 'saw', 
        explanation: 'Specific defined time ("last year") requires Simple Past.' 
    },
    { 
        id: 603, 
        topic: 'Pres. Perf. vs Past', 
        question: 'Shakespeare ___ many famous plays.', 
        options: ['has written', 'wrote', 'had written', 'was writing'], 
        answer: 'wrote', 
        explanation: 'Shakespeare is dead. The time period is finished. Simple Past.' 
    },
    { 
        id: 604, 
        topic: 'Pres. Perf. vs Past', 
        question: 'I ___ my keys! I can\'t open the door.', 
        options: ['lost', 'have lost', 'lose', 'was losing'], 
        answer: 'have lost', 
        explanation: 'Recent past with a consequence in the present (can\'t open door). Present Perfect.' 
    },
    { 
        id: 605, 
        topic: 'Pres. Perf. vs Past', 
        question: 'She ___ (live) in London since 2010.', 
        options: ['lived', 'lives', 'has lived', 'is living'], 
        answer: 'has lived', 
        explanation: 'Action started in the past and continuing now (Since). Present Perfect.' 
    },
    { 
        id: 606, 
        topic: 'Pres. Perf. vs Past', 
        question: 'Signal Word: "I haven\'t finished ___."', 
        options: ['just', 'already', 'yet', 'ever'], 
        answer: 'yet', 
        explanation: '"Yet" is used at the end of negative sentences (meaning "until now").' 
    },
    { 
        id: 607, 
        topic: 'Pres. Perf. vs Past', 
        question: 'They ___ (be) married for 20 years. (They are still married)', 
        options: ['were', 'are', 'have been', 'had been'], 
        answer: 'have been', 
        explanation: 'Unfinished time (For 20 years) connecting past to present -> Present Perfect.' 
    },

    // --- TOPIC: Present Perfect Continuous ---
    { 
        id: 701, 
        topic: 'Perf. Continuous', 
        question: 'Gina ___ (wait) for the bus for three hours.', 
        options: ['is waiting', 'has been waiting', 'have been waiting', 'waited'], 
        answer: 'has been waiting', 
        explanation: 'Action started in past and continues (emphasis on duration). Gina = Has.' 
    },
    { 
        id: 702, 
        topic: 'Perf. Continuous', 
        question: 'Look at the ground! It is wet. It ___.', 
        options: ['rained', 'has been raining', 'is raining', 'was raining'], 
        answer: 'has been raining', 
        explanation: 'Visible evidence of a recent continuous activity.' 
    },
    { 
        id: 703, 
        topic: 'Perf. Continuous', 
        question: 'WARNING: I ___ (know) him for years.', 
        options: ['have been knowing', 'have known', 'knew', 'am knowing'], 
        answer: 'have known', 
        explanation: 'Stative Verb (Know) usually cannot be continuous. Use Present Perfect Simple.' 
    },

    // --- TOPIC: Past Continuous vs Past Perfect ---
    { 
        id: 801, 
        topic: 'Past Tenses Mix', 
        question: 'Before I moved to London, I ___ in New York.', 
        options: ['have worked', 'worked', 'had worked', 'was working'], 
        answer: 'had worked', 
        explanation: 'Action happening BEFORE another past action (moved). Past Perfect.' 
    },
    { 
        id: 802, 
        topic: 'Past Tenses Mix', 
        question: 'Paul ___ (read) while his sister was working.', 
        options: ['read', 'is reading', 'was reading', 'had read'], 
        answer: 'was reading', 
        explanation: 'Parallel actions in the past (While). Past Continuous.' 
    },
    { 
        id: 803, 
        topic: 'Past Tenses Mix', 
        question: 'I ___ (sleep) when the phone rang.', 
        options: ['slept', 'am sleeping', 'was sleeping', 'had slept'], 
        answer: 'was sleeping', 
        explanation: 'Long action (sleeping) interrupted by short action (rang).' 
    },
    { 
        id: 804, 
        topic: 'Past Tenses Mix', 
        question: 'When we arrived at the cinema, the film ___ (already/start).', 
        options: ['started', 'was starting', 'had already started', 'has started'], 
        answer: 'had already started', 
        explanation: 'The film started BEFORE we arrived. Past Perfect.' 
    },
    { 
        id: 805, 
        topic: 'Past Tenses Mix', 
        question: 'Cause/Effect: "She failed the test because she ___."', 
        options: ['didn\'t studied', 'hasn\'t studied', 'hadn\'t studied', 'wasn\'t studying'], 
        answer: 'hadn\'t studied', 
        explanation: 'The cause (not studying) happened BEFORE the result (failed). Past Perfect.' 
    },

    // --- TOPIC: Modals ---
    { 
        id: 901, 
        topic: 'Modal Verbs', 
        question: 'Advice: "You look tired. You ___ get some rest."', 
        options: ['should', 'can', 'must', 'have to'], 
        answer: 'should', 
        explanation: '"Should" is used to give advice.' 
    },
    { 
        id: 902, 
        topic: 'Modal Verbs', 
        question: 'Opportunity (Negative): "I\'m sorry, I ___ help you. I have to work."', 
        options: ['mustn\'t', 'shouldn\'t', 'can\'t', 'don\'t have to'], 
        answer: 'can\'t', 
        explanation: '"Can\'t" expresses lack of ability or opportunity in the moment.' 
    },
    { 
        id: 903, 
        topic: 'Modal Verbs', 
        question: 'Strong Deduction: "He has a Ferrari. He ___ be rich!"', 
        options: ['must', 'can', 'should', 'would'], 
        answer: 'must', 
        explanation: 'Logical deduction (95% certainty) uses "Must".' 
    },
    { 
        id: 904, 
        topic: 'Modal Verbs', 
        question: 'Prohibition: "You ___ smoke in the hospital."', 
        options: ['don\'t have to', 'mustn\'t', 'shouldn\'t', 'couldn\'t'], 
        answer: 'mustn\'t', 
        explanation: 'Mustn\'t indicates something is strictly prohibited.' 
    },
    { 
        id: 905, 
        topic: 'Modal Verbs', 
        question: 'Lack of Obligation: "You ___ buy a ticket. The museum is free."', 
        options: ['mustn\'t', 'don\'t have to', 'can\'t', 'shouldn\'t'], 
        answer: 'don\'t have to', 
        explanation: '"Don\'t have to" means it is not necessary, but you can do it if you want. "Mustn\'t" would mean it is forbidden.' 
    },
    { 
        id: 906, 
        topic: 'Modal Verbs', 
        question: 'Formal Permission: "___ I come in, Sir?"', 
        options: ['Can', 'May', 'Must', 'Will'], 
        answer: 'May', 
        explanation: '"May" is the most formal and polite way to ask for permission.' 
    },
    { 
        id: 907, 
        topic: 'Modal Verbs', 
        question: 'Past Ability: "When I was 5, I ___ read."', 
        options: ['can', 'could', 'should', 'would'], 
        answer: 'could', 
        explanation: '"Could" is the past form of "Can". Used for past abilities.' 
    },
    { 
        id: 908, 
        topic: 'Modal Verbs', 
        question: 'Offer: "___ I help you with those bags?"', 
        options: ['Will', 'Shall', 'Must', 'Would'], 
        answer: 'Shall', 
        explanation: '"Shall" is often used to make offers or suggestions with "I" or "We".' 
    },
];

const Quiz = () => {
    const [gameState, setGameState] = useState('menu'); // menu, playing, result
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedTopic, setSelectedTopic] = useState('All');
    const [activeQuestions, setActiveQuestions] = useState([]);
    const [lastAnswerCorrect, setLastAnswerCorrect] = useState(null); // null, true, false
    const [showExplanation, setShowExplanation] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null); // Track user selection

    const topics = [
        'All', 
        'Quantifiers', 
        'Adverbs', 
        'Comparatives', 
        'Future Forms', 
        'Simple Past', 
        'Pres. Perf. vs Past',
        'Perf. Continuous',
        'Past Tenses Mix',
        'Modal Verbs'
    ];

    const startQuiz = (topic) => {
        let filtered = topic === 'All' 
            ? questionsData 
            : questionsData.filter(q => q.topic === topic);
        
        // Shuffle questions
        filtered = filtered.sort(() => Math.random() - 0.5);
        
        setActiveQuestions(filtered);
        setSelectedTopic(topic);
        setCurrentQuestionIndex(0);
        setScore(0);
        setLastAnswerCorrect(null);
        setShowExplanation(false);
        setSelectedOption(null);
        setGameState('playing');
    };

    const startTenseChallenge = () => {
        const tenseTopics = ['Future Forms', 'Simple Past', 'Pres. Perf. vs Past', 'Perf. Continuous', 'Past Tenses Mix'];
        let filtered = questionsData.filter(q => tenseTopics.includes(q.topic));
        filtered = filtered.sort(() => Math.random() - 0.5);
        
        setActiveQuestions(filtered);
        setSelectedTopic("Ultimate Verb Tense Challenge");
        setCurrentQuestionIndex(0);
        setScore(0);
        setLastAnswerCorrect(null);
        setShowExplanation(false);
        setSelectedOption(null);
        setGameState('playing');
    }

    const handleAnswer = (option) => {
        const currentQ = activeQuestions[currentQuestionIndex];
        const isCorrect = option === currentQ.answer;

        setSelectedOption(option);
        if (isCorrect) setScore(score + 1);
        setLastAnswerCorrect(isCorrect);
        setShowExplanation(true);
    };

    const nextQuestion = () => {
        if (currentQuestionIndex + 1 < activeQuestions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setLastAnswerCorrect(null);
            setShowExplanation(false);
            setSelectedOption(null);
        } else {
            setGameState('result');
        }
    };

    const restart = () => {
        setGameState('menu');
    };

    // --- RENDER: MENU ---
    if (gameState === 'menu') {
        return (
            <div className="flex flex-col items-center justify-center min-h-[500px] text-center space-y-8 pb-20">
                <div className="bg-fuchsia-100 p-6 rounded-full text-fuchsia-600 mb-4 animate-bounce shadow-lg shadow-fuchsia-200">
                    <BrainCircuit size={64} />
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-slate-800 mb-2">Book 2 Simulation</h2>
                    <p className="text-slate-500 max-w-md mx-auto">
                        Based on real exam questions. Choose a topic or take the full simulation.
                    </p>
                </div>

                <div className="w-full max-w-4xl px-4 flex flex-col items-center gap-4">
                     {/* SPECIAL BUTTON */}
                     <button
                        onClick={startTenseChallenge}
                        className="w-full md:w-2/3 p-5 rounded-xl border-2 font-bold transition-all transform hover:-translate-y-1 hover:shadow-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-transparent shadow-lg text-lg flex items-center justify-center gap-3"
                    >
                        <Zap className="text-yellow-300" />
                        ⚔️ Ultimate Verb Tense Challenge
                    </button>

                    <div className="w-full h-px bg-slate-200 my-2"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                        {topics.map(topic => (
                            <button
                                key={topic}
                                onClick={() => startQuiz(topic)}
                                className={`p-4 rounded-xl border-2 font-bold transition-all transform hover:-translate-y-1 hover:shadow-md ${
                                    topic === 'All' 
                                        ? 'bg-fuchsia-600 text-white border-fuchsia-600 shadow-lg hover:bg-fuchsia-700 col-span-1 sm:col-span-2 lg:col-span-3 text-lg' 
                                        : 'bg-white text-slate-600 border-slate-200 hover:border-fuchsia-400 hover:text-fuchsia-600'
                                }`}
                            >
                                {topic === 'All' ? '🔥 Mix Everything (All Topics)' : topic}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // --- RENDER: RESULT ---
    if (gameState === 'result') {
        const percentage = Math.round((score / activeQuestions.length) * 100);
        let message = '';
        let color = '';
        
        if (percentage === 100) { message = 'Perfect! You crushed the exam!'; color='text-emerald-500'; }
        else if (percentage >= 80) { message = 'Excellent! Almost perfect.'; color='text-teal-500'; }
        else if (percentage >= 60) { message = 'Good job! Review your mistakes.'; color='text-yellow-500'; }
        else { message = 'Keep studying! Use the dictionary on the sidebar.'; color='text-red-500'; }

        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6 animate-fade-in">
                <div className={`p-6 rounded-full bg-slate-50 ${percentage >= 70 ? 'text-yellow-400' : 'text-slate-300'}`}>
                    <Trophy size={80} />
                </div>
                
                <div>
                    <h2 className="text-3xl font-bold text-slate-800">Final Result</h2>
                    <p className="text-slate-500 mt-2 font-medium uppercase tracking-wide">{selectedTopic}</p>
                </div>

                <div className="bg-slate-900 text-white p-8 rounded-3xl min-w-[300px] shadow-xl">
                    <div className="text-6xl font-bold mb-2">{score} <span className="text-2xl text-slate-400">/ {activeQuestions.length}</span></div>
                    <div className={`text-xl font-bold ${percentage >= 60 ? 'text-emerald-400' : 'text-red-400'}`}>{percentage}% correct</div>
                </div>

                <p className={`font-bold text-lg ${color}`}>{message}</p>

                <button 
                    onClick={restart}
                    className="flex items-center gap-2 bg-fuchsia-600 text-white px-8 py-4 rounded-full font-bold hover:bg-fuchsia-700 transition-colors shadow-lg shadow-fuchsia-200 hover:shadow-xl transform hover:-translate-y-1"
                >
                    <RotateCcw size={20} /> Try Again
                </button>
            </div>
        );
    }

    // --- RENDER: PLAYING ---
    const question = activeQuestions[currentQuestionIndex];
    
    return (
        <div className="max-w-3xl mx-auto pb-20">
            {/* Header */}
            <div className="flex justify-between items-end mb-6 border-b border-slate-200 pb-4">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Topic
                    </span>
                    <span className="text-fuchsia-600 font-bold bg-fuchsia-50 px-3 py-1 rounded-full text-sm">
                        {question.topic}
                    </span>
                </div>
                <span className="text-2xl font-bold text-slate-300">
                    <span className="text-slate-800">{currentQuestionIndex + 1}</span>
                    <span className="text-lg">/{activeQuestions.length}</span>
                </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-slate-100 rounded-full mb-8 overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${((currentQuestionIndex) / activeQuestions.length) * 100}%` }}
                ></div>
            </div>

            {/* Question Card */}
            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 mb-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-fuchsia-500"></div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 leading-relaxed">
                    {question.question}
                </h3>

                <div className="grid gap-3">
                    {question.options.map((option, idx) => {
                        let btnClass = "w-full p-4 md:p-5 rounded-xl text-left border-2 font-medium transition-all duration-200 relative ";
                        let icon = null;

                        if (showExplanation) {
                            if (option === question.answer) {
                                btnClass += "bg-emerald-50 border-emerald-500 text-emerald-800 shadow-md";
                                icon = <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-600" />;
                            }
                            else if (option === selectedOption && option !== question.answer) {
                                btnClass += "bg-red-50 border-red-500 text-red-800 shadow-md";
                                icon = <XCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-red-600" />;
                            }
                            else {
                                btnClass += "bg-slate-50 border-slate-100 text-slate-400 opacity-50";
                            }
                        } else {
                            btnClass += "bg-white border-slate-200 hover:border-fuchsia-400 hover:bg-fuchsia-50 hover:text-fuchsia-900 text-slate-700 hover:shadow-md hover:-translate-y-0.5";
                        }

                        return (
                            <button
                                key={idx}
                                disabled={showExplanation}
                                onClick={() => handleAnswer(option)}
                                className={btnClass}
                            >
                                <span className="mr-8 block">{option}</span>
                                {icon}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Feedback / Next Button */}
            {showExplanation && (
                <div className={`p-6 md:p-8 rounded-2xl mb-6 animate-fade-in shadow-lg border-l-4 ${lastAnswerCorrect ? 'bg-emerald-50 border-l-emerald-500 border-y border-r border-emerald-100' : 'bg-red-50 border-l-red-500 border-y border-r border-red-100'}`}>
                    <div className="flex items-center gap-3 mb-3">
                        {lastAnswerCorrect 
                            ? <div className="p-2 bg-emerald-100 rounded-full text-emerald-600"><CheckCircle2 size={24} /></div>
                            : <div className="p-2 bg-red-100 rounded-full text-red-600"><XCircle size={24} /></div>
                        }
                        <h4 className={`text-lg font-bold ${lastAnswerCorrect ? 'text-emerald-900' : 'text-red-900'}`}>
                            {lastAnswerCorrect ? 'Correct!' : 'Incorrect!'}
                        </h4>
                    </div>
                    
                    <div className="flex items-start gap-3">
                        <HelpCircle className={`shrink-0 mt-1 ${lastAnswerCorrect ? 'text-emerald-600' : 'text-red-600'}`} size={18} />
                        <p className={`text-sm md:text-base leading-relaxed ${lastAnswerCorrect ? 'text-emerald-800' : 'text-red-800'}`}>
                            {question.explanation}
                        </p>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button 
                            onClick={nextQuestion}
                            className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-slate-800 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            {currentQuestionIndex + 1 === activeQuestions.length ? 'See Result' : 'Next Question'} <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
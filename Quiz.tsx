import React, { useState } from 'react';
import { BrainCircuit, CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, Play, HelpCircle } from 'lucide-react';

const questionsData = [
    // --- TOPIC: Quantifiers (Much/Many/Little/Few) ---
    { 
        id: 101, 
        topic: 'Quantifiers', 
        question: 'Complete: "There are ___ people in the room."', 
        options: ['much', 'many', 'a little', 'any'], 
        answer: 'many', 
        explanation: '"People" é contável (plural de person). Usamos "Many".' 
    },
    { 
        id: 102, 
        topic: 'Quantifiers', 
        question: 'Complete: "I don\'t have ___ money."', 
        options: ['many', 'much', 'few', 'a few'], 
        answer: 'much', 
        explanation: '"Money" é incontável. Em negativas, usamos "Much" para grande quantidade.' 
    },
    { 
        id: 103, 
        topic: 'Quantifiers', 
        question: 'Complete: "We have ___ time before the train leaves."', 
        options: ['few', 'little', 'many', 'a few'], 
        answer: 'little', 
        explanation: '"Time" (tempo) é incontável. Usamos "Little" para pequena quantidade.' 
    },
    { 
        id: 104, 
        topic: 'Quantifiers', 
        question: 'Complete: "There are a ___ jars of jam on the shelf."', 
        options: ['little', 'much', 'few', 'any'], 
        answer: 'few', 
        explanation: '"Jars" (potes) é contável e plural. Usamos "Few".' 
    },

    // --- TOPIC: Frequency Adverbs ---
    { 
        id: 201, 
        topic: 'Adverbs', 
        question: 'Choose the correct order: "He / listens / often / to the radio"', 
        options: ['He listens often to the radio.', 'He often listens to the radio.', 'Often he listens to the radio.', 'He listens to the radio often.'], 
        answer: 'He often listens to the radio.', 
        explanation: 'Advérbios de frequência vêm ANTES do verbo principal (listens).' 
    },
    { 
        id: 202, 
        topic: 'Adverbs', 
        question: 'Choose the correct order: "She / late / arrives / always (Negative)"', 
        options: ['She doesn\'t always arrive late.', 'She always doesn\'t arrive late.', 'She doesn\'t arrive always late.', 'Always she doesn\'t arrive late.'], 
        answer: 'She doesn\'t always arrive late.', 
        explanation: 'Na negativa, o advérbio vem entre o auxiliar (doesn\'t) e o verbo principal.' 
    },

    // --- TOPIC: Comparatives & Superlatives ---
    { 
        id: 301, 
        topic: 'Comparatives', 
        question: 'Ferrari is ___ car in the world.', 
        options: ['the most expensive', 'more expensive', 'expensiver', 'the most expensives'], 
        answer: 'the most expensive', 
        explanation: 'Superlativo de adjetivo longo (expensive) usa "The most". Não existe plural em adjetivos (expensives é errado).' 
    },
    { 
        id: 302, 
        topic: 'Comparatives', 
        question: 'Brazil is ___ than England.', 
        options: ['hoter', 'hotter', 'more hot', 'the hottest'], 
        answer: 'hotter', 
        explanation: 'Adjetivo curto CVC (Hot). Dobra a última letra + ER.' 
    },
    { 
        id: 303, 
        topic: 'Comparatives', 
        question: 'Equality: "Sandra is ___ Mary."', 
        options: ['as old as', 'so old as', 'older than', 'more old'], 
        answer: 'as old as', 
        explanation: 'Comparativo de igualdade usa a estrutura "AS + adjetivo + AS".' 
    },
    { 
        id: 304, 
        topic: 'Comparatives', 
        question: 'Inferiority: "Cartoons are ___ interesting than movies."', 
        options: ['least', 'less', 'fewer', 'minor'], 
        answer: 'less', 
        explanation: 'Comparativo de inferioridade usa "LESS + adjetivo + THAN".' 
    },

    // --- TOPIC: Future (Will vs Going To) ---
    { 
        id: 401, 
        topic: 'Future Forms', 
        question: 'Look at those dark clouds! It ___.', 
        options: ['will rain', 'is going to rain', 'rains', 'rain'], 
        answer: 'is going to rain', 
        explanation: 'Previsão com evidência visual (nuvens) exige "Going to".' 
    },
    { 
        id: 402, 
        topic: 'Future Forms', 
        question: 'Mary: "I forgot the book." John: "No problem, I ___ lend you mine."', 
        options: ['am going to', 'will', 'am lending', 'lend'], 
        answer: 'will', 
        explanation: 'Decisão espontânea feita no momento da fala (oferecer ajuda) usa "Will".' 
    },
    { 
        id: 403, 
        topic: 'Future Forms', 
        question: '"I have a plan. I ___ buy some stamps at the post office."', 
        options: ['will', 'am going to', 'buy', 'going to'], 
        answer: 'am going to', 
        explanation: 'Intenção ou plano já decidido antes de falar usa "Going to".' 
    },

    // --- TOPIC: Simple Past (Regular/Irregular) ---
    { 
        id: 501, 
        topic: 'Simple Past', 
        question: 'He ___ (drink) wine at lunch yesterday.', 
        options: ['drinked', 'drank', 'drunk', 'drinks'], 
        answer: 'drank', 
        explanation: 'Verbo irregular: Drink -> Drank.' 
    },
    { 
        id: 502, 
        topic: 'Simple Past', 
        question: 'Negative form: "The old man broke his arm."', 
        options: ['The old man didn\'t broke his arm.', 'The old man didn\'t break his arm.', 'The old man not broke his arm.', 'The old man doesn\'t break his arm.'], 
        answer: 'The old man didn\'t break his arm.', 
        explanation: 'Ao usar o auxiliar DIDN\'T, o verbo volta para a forma base (Break), não fica no passado (Broke).' 
    },

    // --- TOPIC: Present Perfect vs Simple Past ---
    { 
        id: 601, 
        topic: 'Pres. Perf. vs Past', 
        question: '___ you ever ___ a famous movie star?', 
        options: ['Did / see', 'Have / saw', 'Have / seen', 'Do / see'], 
        answer: 'Have / seen', 
        explanation: 'Experiência de vida (Ever) sem tempo definido pede Present Perfect.' 
    },
    { 
        id: 602, 
        topic: 'Pres. Perf. vs Past', 
        question: 'I ___ Keanu Reeves last year.', 
        options: ['have seen', 'saw', 'seen', 'see'], 
        answer: 'saw', 
        explanation: 'Tempo específico definido ("last year") exige Simple Past.' 
    },

    // --- TOPIC: Present Perfect Continuous ---
    { 
        id: 701, 
        topic: 'Perf. Continuous', 
        question: 'Gina ___ (wait) for the bus for three hours.', 
        options: ['is waiting', 'has been waiting', 'have been waiting', 'waited'], 
        answer: 'has been waiting', 
        explanation: 'Ação que começou no passado e continua (ênfase na duração "for three hours"). Gina = Has.' 
    },

    // --- TOPIC: Past Continuous vs Past Perfect ---
    { 
        id: 801, 
        topic: 'Past Tenses Mix', 
        question: 'Before I moved to London, I ___ in New York.', 
        options: ['have worked', 'worked', 'had worked', 'was working'], 
        answer: 'had worked', 
        explanation: 'Ação que aconteceu ANTES de outra ação no passado (moved). Past Perfect (Had + V3).' 
    },
    { 
        id: 802, 
        topic: 'Past Tenses Mix', 
        question: 'Paul ___ (read) while his sister was working.', 
        options: ['read', 'is reading', 'was reading', 'had read'], 
        answer: 'was reading', 
        explanation: 'Ações paralelas no passado (conectadas por "While"). Ambas usam Past Continuous.' 
    },

    // --- TOPIC: Modals ---
    { 
        id: 901, 
        topic: 'Modal Verbs', 
        question: 'Advice: "You look tired. You ___ get some rest."', 
        options: ['should', 'can', 'must', 'have to'], 
        answer: 'should', 
        explanation: '"Should" é usado para dar conselhos.' 
    },
    { 
        id: 902, 
        topic: 'Modal Verbs', 
        question: 'Opportunity (Negative): "I\'m sorry, I ___ help you. I have to work."', 
        options: ['mustn\'t', 'shouldn\'t', 'can\'t', 'don\'t have to'], 
        answer: 'can\'t', 
        explanation: '"Can\'t" expressa falta de habilidade ou impossibilidade/oportunidade no momento.' 
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
                    <h2 className="text-4xl font-bold text-slate-800 mb-2">Simulado Book 2</h2>
                    <p className="text-slate-500 max-w-md mx-auto">
                        Baseado nas questões reais do exame. Escolha um tópico ou faça o simulado completo.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl px-4">
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
                            {topic === 'All' ? '🔥 Simulado Completo (Mix)' : topic}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    // --- RENDER: RESULT ---
    if (gameState === 'result') {
        const percentage = Math.round((score / activeQuestions.length) * 100);
        let message = '';
        let color = '';
        
        if (percentage === 100) { message = 'Perfeito! Você destruiu o simulado!'; color='text-emerald-500'; }
        else if (percentage >= 80) { message = 'Excelente! Quase gabaritou.'; color='text-teal-500'; }
        else if (percentage >= 60) { message = 'Bom trabalho! Mas revise os erros.'; color='text-yellow-500'; }
        else { message = 'Continue estudando! Use o dicionário ao lado.'; color='text-red-500'; }

        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6 animate-fade-in">
                <div className={`p-6 rounded-full bg-slate-50 ${percentage >= 70 ? 'text-yellow-400' : 'text-slate-300'}`}>
                    <Trophy size={80} />
                </div>
                
                <div>
                    <h2 className="text-3xl font-bold text-slate-800">Resultado Final</h2>
                    <p className="text-slate-500 mt-2 font-medium uppercase tracking-wide">{selectedTopic}</p>
                </div>

                <div className="bg-slate-900 text-white p-8 rounded-3xl min-w-[300px] shadow-xl">
                    <div className="text-6xl font-bold mb-2">{score} <span className="text-2xl text-slate-400">/ {activeQuestions.length}</span></div>
                    <div className={`text-xl font-bold ${percentage >= 60 ? 'text-emerald-400' : 'text-red-400'}`}>{percentage}% de acerto</div>
                </div>

                <p className={`font-bold text-lg ${color}`}>{message}</p>

                <button 
                    onClick={restart}
                    className="flex items-center gap-2 bg-fuchsia-600 text-white px-8 py-4 rounded-full font-bold hover:bg-fuchsia-700 transition-colors shadow-lg shadow-fuchsia-200 hover:shadow-xl transform hover:-translate-y-1"
                >
                    <RotateCcw size={20} /> Tentar Novamente
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
                            {lastAnswerCorrect ? 'Correto!' : 'Incorreto!'}
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
                            {currentQuestionIndex + 1 === activeQuestions.length ? 'Ver Resultado' : 'Próxima Questão'} <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
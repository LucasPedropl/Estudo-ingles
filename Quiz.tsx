import React, { useState } from 'react';
import { BrainCircuit, CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, Play } from 'lucide-react';

const questionsData = [
    // Simple Past
    { id: 1, topic: 'Simple Past', question: 'I ___ to the mall yesterday.', options: ['go', 'went', 'gone', 'going'], answer: 'went', explanation: 'No Simple Past, o passado irregular de "go" é "went".' },
    { id: 2, topic: 'Simple Past', question: 'She ___ pizza last night.', options: ['didn\'t eat', 'didn\'t ate', 'not ate', 'no eat'], answer: 'didn\'t eat', explanation: 'Na negativa do passado, usamos "didn\'t" + verbo na forma base.' },
    
    // Past Continuous
    { id: 3, topic: 'Past Continuous', question: 'I ___ when the phone rang.', options: ['slept', 'was sleeping', 'were sleeping', 'sleep'], answer: 'was sleeping', explanation: 'Ação longa interrompida. I (eu) usa "was".' },
    { id: 4, topic: 'Past Continuous', question: 'They ___ playing soccer at 10 PM.', options: ['was', 'were', 'did', 'are'], answer: 'were', explanation: 'Para "They" no passado contínuo, usamos o auxiliar "were".' },

    // Present Perfect
    { id: 5, topic: 'Present Perfect', question: 'I have ___ that movie three times.', options: ['see', 'saw', 'seen', 'seeing'], answer: 'seen', explanation: 'Present Perfect usa Have + Past Participle (V3). O V3 de see é SEEN.' },
    { id: 6, topic: 'Present Perfect', question: 'She ___ arrived yet.', options: ['haven\'t', 'hasn\'t', 'didn\'t', 'don\'t'], answer: 'hasn\'t', explanation: 'Para "She", usamos "has". O "yet" indica present perfect.' },

    // Past Perfect
    { id: 7, topic: 'Past Perfect', question: 'When I arrived, the train ___.', options: ['left', 'has left', 'had left', 'was left'], answer: 'had left', explanation: 'O trem partiu ANTES de eu chegar. Passado do passado = Had + Participle.' },

    // Modals
    { id: 8, topic: 'Modals', question: 'You ___ smoke here. It\'s prohibited.', options: ['mustn\'t', 'don\'t have to', 'shouldn\'t', 'couldn\'t'], answer: 'mustn\'t', explanation: '"Mustn\'t" indica proibição.' },
    
    // Countables
    { id: 9, topic: 'Quantifiers', question: 'I don\'t have ___ money.', options: ['some', 'many', 'any', 'no'], answer: 'any', explanation: 'Em frases negativas, usamos "ANY".' },

    // Future
    { id: 10, topic: 'Future', question: 'Look at those clouds! It ___.', options: ['will rain', 'is going to rain', 'rains', 'rained'], answer: 'is going to rain', explanation: 'Previsão com evidência visual (nuvens) pede "Going to".' },
];

const Quiz = () => {
    const [gameState, setGameState] = useState('menu'); // menu, playing, result
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedTopic, setSelectedTopic] = useState('All');
    const [activeQuestions, setActiveQuestions] = useState([]);
    const [lastAnswerCorrect, setLastAnswerCorrect] = useState(null); // null, true, false
    const [showExplanation, setShowExplanation] = useState(false);

    const topics = ['All', 'Simple Past', 'Past Continuous', 'Present Perfect', 'Past Perfect', 'Modals', 'Quantifiers', 'Future'];

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
        setGameState('playing');
    };

    const handleAnswer = (option) => {
        const currentQ = activeQuestions[currentQuestionIndex];
        const isCorrect = option === currentQ.answer;

        if (isCorrect) setScore(score + 1);
        setLastAnswerCorrect(isCorrect);
        setShowExplanation(true);
    };

    const nextQuestion = () => {
        if (currentQuestionIndex + 1 < activeQuestions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setLastAnswerCorrect(null);
            setShowExplanation(false);
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
            <div className="flex flex-col items-center justify-center min-h-[500px] text-center space-y-8">
                <div className="bg-fuchsia-100 p-6 rounded-full text-fuchsia-600 mb-4 animate-bounce">
                    <BrainCircuit size={64} />
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-slate-800 mb-2">Grammar Quiz Challenge</h2>
                    <p className="text-slate-500 max-w-md mx-auto">
                        Escolha um tópico específico para praticar ou desafie-se com todos os assuntos misturados.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                    {topics.map(topic => (
                        <button
                            key={topic}
                            onClick={() => startQuiz(topic)}
                            className={`p-4 rounded-xl border-2 font-bold transition-all transform hover:scale-105 ${
                                topic === 'All' 
                                    ? 'bg-fuchsia-600 text-white border-fuchsia-600 shadow-lg hover:bg-fuchsia-700' 
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-fuchsia-400 hover:text-fuchsia-600'
                            }`}
                        >
                            {topic === 'All' ? '🔥 Mix Geral (All Topics)' : topic}
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
        if (percentage === 100) message = 'Perfeito! Você é um mestre!';
        else if (percentage >= 70) message = 'Muito bem! Continue assim.';
        else message = 'Continue estudando, você chega lá!';

        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6">
                <Trophy size={80} className={percentage >= 70 ? 'text-yellow-400' : 'text-slate-300'} />
                
                <div>
                    <h2 className="text-3xl font-bold text-slate-800">Quiz Finalizado!</h2>
                    <p className="text-slate-500 mt-2">{selectedTopic}</p>
                </div>

                <div className="bg-slate-900 text-white p-6 rounded-2xl min-w-[300px]">
                    <div className="text-5xl font-bold mb-2">{score} / {activeQuestions.length}</div>
                    <div className="text-fuchsia-400 font-bold">{percentage}% de acerto</div>
                </div>

                <p className="text-slate-600 font-medium">{message}</p>

                <button 
                    onClick={restart}
                    className="flex items-center gap-2 bg-fuchsia-600 text-white px-8 py-3 rounded-full font-bold hover:bg-fuchsia-700 transition-colors"
                >
                    <RotateCcw size={20} /> Tentar Novamente
                </button>
            </div>
        );
    }

    // --- RENDER: PLAYING ---
    const question = activeQuestions[currentQuestionIndex];
    
    return (
        <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Topic: <span className="text-fuchsia-600">{question.topic}</span>
                </span>
                <span className="text-sm font-bold text-slate-600">
                    Question {currentQuestionIndex + 1} / {activeQuestions.length}
                </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-slate-200 rounded-full mb-8">
                <div 
                    className="h-full bg-fuchsia-500 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex) / activeQuestions.length) * 100}%` }}
                ></div>
            </div>

            {/* Question Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 leading-relaxed">
                    {question.question}
                </h3>

                <div className="grid gap-3">
                    {question.options.map((option, idx) => {
                        let btnClass = "w-full p-4 rounded-xl text-left border-2 font-medium transition-all ";
                        
                        if (showExplanation) {
                            if (option === question.answer) btnClass += "bg-emerald-100 border-emerald-500 text-emerald-800";
                            else if (option !== question.answer && !lastAnswerCorrect &&  option === 'TODO:selected') btnClass += "bg-red-100 border-red-500 text-red-800"; // Simplified for this logic
                            else btnClass += "bg-slate-50 border-slate-100 text-slate-400 opacity-50";
                        } else {
                            btnClass += "bg-white border-slate-200 hover:border-fuchsia-400 hover:bg-fuchsia-50 text-slate-700";
                        }

                        return (
                            <button
                                key={idx}
                                disabled={showExplanation}
                                onClick={() => handleAnswer(option)}
                                className={btnClass}
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Feedback / Next Button */}
            {showExplanation && (
                <div className={`p-6 rounded-2xl mb-6 animate-fade-in ${lastAnswerCorrect ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'}`}>
                    <div className="flex items-center gap-3 mb-2">
                        {lastAnswerCorrect 
                            ? <CheckCircle2 className="text-emerald-600" /> 
                            : <XCircle className="text-red-600" />
                        }
                        <h4 className={`font-bold ${lastAnswerCorrect ? 'text-emerald-800' : 'text-red-800'}`}>
                            {lastAnswerCorrect ? 'Correto!' : 'Incorreto'}
                        </h4>
                    </div>
                    <p className="text-slate-700 text-sm mb-4">
                        {question.explanation}
                    </p>
                    <button 
                        onClick={nextQuestion}
                        className="bg-slate-900 text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-slate-800 flex items-center gap-2"
                    >
                        Próxima <ArrowRight size={16} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quiz;
import React, { useState, useEffect } from 'react';
import questions from '../subComponents/Tests/Tests.json';
import '../subComponents/Tests/style.css';
import PowerButton from '../subComponents/PowerButton';

function Tests() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(new Array(questions.questions.length).fill(null));
    const [questionsData, setQuestionsData] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [quizFinished, setQuizFinished] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const shuffledQuestions = questions.questions.sort(() => Math.random() - 0.5);
        setQuestionsData(shuffledQuestions);
    }, []);

    const handleAnswer = (selectedAnswer) => {
        setSelectedOption(selectedAnswer);
    };

    const handleNextQuestion = () => {
        if (selectedOption !== null) {
            const updatedAnswers = [...answers];
            updatedAnswers[currentQuestion] = selectedOption;
            setAnswers(updatedAnswers);
            setSelectedOption(null);
            if (currentQuestion + 1 < questionsData.length) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                finishQuiz();
            }
        }
    };

    const restart = () => {
        setQuizFinished(false);
        setCurrentQuestion(0);
        setAnswers(new Array(questions.questions.length).fill(null));
        setSelectedOption(null);
    };

    const finishQuiz = () => {
        let currentScore = 0;
        answers.forEach((answer, index) => {
            const correctAnswer = questionsData[index].correct_answer;
            if (answer === correctAnswer) {
                currentScore++;
            }
        });
        setScore(currentScore);
        setQuizFinished(true);
    };

    const resetSelectedOption = () => {
        setSelectedOption(null);
    };

    const progress = ((currentQuestion + 1) / questionsData.length) * 100;
    const filteredAnswers = answers.filter((answer) => answer !== null);
    const correctAnswers = filteredAnswers.filter((answer, index) => answer === questionsData[index].correct_answer).length;
    const percentage = (correctAnswers / questionsData.length) * 100;

    return (
        <>
            <PowerButton />
            {!quizFinished ? (
                <div className='main-test'>
                    <div className='container'>
                        {questionsData.length > 0 && currentQuestion < questionsData.length && (
                            <>
                                <h2>Вопрос {currentQuestion + 1}</h2>
                                <p>{questionsData[currentQuestion].question}</p>
                                <ul>
                                    {questionsData[currentQuestion].options.map((option, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => handleAnswer(option)}
                                                className={selectedOption === option ? 'selected' : ''}
                                            >
                                                {option}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                {currentQuestion < questionsData.length - 1 && (
                                    <button onClick={() => { handleNextQuestion(); resetSelectedOption(); }} disabled={selectedOption === null}>
                                        Следующий вопрос
                                    </button>
                                )}
                                {currentQuestion === questionsData.length - 1 && (
                                    <button onClick={handleNextQuestion} disabled={selectedOption === null}>
                                        Перейти к результатам
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            ) : (
                <div className='end-container'>
                    <div className='container'>
                        <h2>Результаты</h2>
                        <p>Результат: {correctAnswers}/{questionsData.length}</p>
                        <img src={require('../subComponents/Tests/classSign.png')} alt="Вы молодец" />
                        <p>Вы знаете о чернобыле на {Math.floor(percentage)}%</p>
                        <button onClick={restart}>Начать сначала</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Tests;

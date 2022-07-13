import { useState } from "react";
import QuestionCard from "./QuestionCard";
import {AnswerObject, QuestionState, fetchQuizQuestion, Difficulty} from '../../pages/api/QuizAppAPI'
import styles from '../../styles/QuizApp.module.scss'


const TOTAL_QUESTIONS = 10

const QuizApp =()=> {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  console.log(questions)

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestion(    
      TOTAL_QUESTIONS,
      Difficulty.EASY)

    setQuestions(newQuestions)
    setScore(0)
    setNumber(0)
    setUserAnswers([])
    setLoading(false)
  }

  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value // user answer
      const correct = questions[number].correct_answer === answer // check if user answer = correct answer
      if  (correct) setScore(prev => prev + 1) // add score if correct
      const  AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers(prev => [...prev, AnswerObject])
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }


  return (
    <>

    <div className={styles.quizApp_container}>
      <h1>React Quiz App</h1>

      { 
      gameOver || userAnswers.length === TOTAL_QUESTIONS 
      ?
        (<button className={styles.start_btn} onClick={startTrivia}>Start</button>) 
      : null
      }

      { !gameOver 
      ? 
        <p className={styles.score}>Score: {score}</p>
      : null
      }

      { loading
      ?
        <p>Loading Question ...</p>
        :
        null
      }

      { !loading && !gameOver && <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answer={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}

      />}

      {   !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS-1 
      ? 
          <button className={styles.next} onClick={nextQuestion}>Next Question</button>
      :   
          null
      }
     
    </div>
    </>
  );
}

export default QuizApp;

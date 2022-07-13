import React from 'react'
import { AnswerObject } from '../../pages/api/QuizAppAPI'
import styles from '../../styles/QuizApp.module.scss'


type Props = {
    question: string;
    answer: string[];
    callback: (e:React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}


const QuestionCard: React.FC<Props> = ({
    question,
    answer,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => {
  return (
    <div className={styles.questions_block}>
        <p className={styles.number}>
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question}}></p>
        <div className={styles.questions}>
            {answer.map(answer => (
                <div key={answer} className={styles.question}>
                    <button className={styles.button} disabled={!!userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer}}/>
                    </button>
                </div>
            ) )}
        </div>
    </div>
  )
}

export default QuestionCard
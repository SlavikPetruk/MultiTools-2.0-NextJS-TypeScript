const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5)

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  }

export type QuestionState = Question & { answers: string[]}

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    Hard = "hard",
}

export const fetchQuizQuestion =async (amount:number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data = await (await (await fetch(endpoint)).json())
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([
            ...question.incorrect_answers,
             question.correct_answer])
    }))
} 
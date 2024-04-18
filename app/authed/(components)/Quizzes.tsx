import toast, { Toaster } from 'react-hot-toast';
import { updateQuiz } from '../(server)/Actions'

export default function Quizzes({ props }: { props: any }) {
    const handleUpdate = (qid: number, correct: string) => async (e: any) => {
        e.preventDefault()

        if (props.userData.question_num < qid - 1) {
            toast.error("You must complete the previous question first!")
            return
        }

        const formData = new FormData(e.target);
        const answer = formData.get("quiz") as string;

        if (answer === correct) {
            toast.success("Correct!")
        } else {
            toast.error("Incorrect!")
        }

        const resData = await updateQuiz(props.userData, qid, answer === correct)
        props.setQuizData((resData as any).quizData);
        props.setUserData((resData as any).userData);

        const leaderData = await props.getLeaders()
        props.setLeaderData(leaderData)
    }

    return (
        <div className="w-[80%] mx-auto">
            {props.quizData && props.quizData.map((quiz: any) => {
                return (
                    <div key={quiz.id} className="relative bg-gray-100 p-4 my-4 rounded-md">
                        <h1 className="text-2xl font-bold">{quiz.question}</h1>
                        <form onSubmit={handleUpdate(quiz.id, quiz.answer)}>
                            <div className="my-1">
                                <input
                                    type="radio"
                                    name="quiz"
                                    value="A"
                                    className="mr-1"
                                    required
                                />
                                A: {quiz.a}
                            </div>
                            <div className="my-1">
                                <input
                                    type="radio"
                                    name="quiz"
                                    value="B"
                                    className="mr-1"
                                    required
                                />
                                B: {quiz.b}
                            </div>
                            <div className="my-1">
                                <input
                                    type="radio"
                                    name="quiz"
                                    value="C"
                                    className="mr-1"
                                    required
                                />
                                C: {quiz.c}
                            </div>
                            <div className="my-1">
                                <input
                                    type="radio"
                                    name="quiz"
                                    value="D"
                                    className="mr-1"
                                    required
                                />
                                D: {quiz.d}
                            </div>
                            <button
                                type="submit"
                                className="absolute bottom-4 right-4 bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-md mt-2"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                )
            })}
            <Toaster />
        </div>
    )
}
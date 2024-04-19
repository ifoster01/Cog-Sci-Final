import toast, { Toaster } from 'react-hot-toast';
import { updateQuiz } from '../(server)/Actions'
import { useQueryClient, useMutation } from '@tanstack/react-query';

export default function Quizzes({ props }: { props: any }) {
    const queryClient = useQueryClient();
    
    const mutation = useMutation({
        mutationFn: async ( quizData: any ) => {
            await updateQuiz(props.userData, quizData.qid, quizData.answer === quizData.correct)
        },
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: [props.userData.id] });
        }
    })
    
    const handleUpdate = (qid: number, correct: string) => async (e: any) => {
        e.preventDefault()

        console.log(props.userData.question_num, qid - 1)

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

        const mutationData = {
            qid,
            answer,
            correct
        }

        mutation.mutate(mutationData)
    }

    return (
        <div className="w-[80%] mx-auto">
            { props.quizData.length === 0 &&
                <div className="mt-8 2xl:mt-16 mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">No more questions!</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        You have completed all the questions! Check your score to see how you're doing or check the leaderboard to see how you stack up against your peers. To keep playing, add more quiz questions under the "add questions" tab.
                    </p>
                    <p className="mt-6 text-sm leading-8 text-gray-600">
                        ** Please note: as this is a very new app, if you don't see your new questions, just refresh :) **
                    </p>
                </div>
            }
            {props.quizData && props.quizData.map((quiz: any) => {
                return (
                    <div key={quiz.id} className="relative bg-gray-100 p-4 my-4 rounded-md">
                        <h1 className="text-2xl font-bold">{quiz.question}</h1>
                        <form onSubmit={handleUpdate(quiz.id, quiz.answer)}>
                            { quiz.type === "choice" &&
                            <>
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
                            </>
                            }
                            { quiz.type === "tf" &&
                            <>
                                <div className="my-1">
                                    <input
                                        type="radio"
                                        name="quiz"
                                        value="true"
                                        className="mr-1"
                                        required
                                    />
                                    True
                                </div>
                                <div className="my-1">
                                    <input
                                        type="radio"
                                        name="quiz"
                                        value="false"
                                        className="mr-1"
                                        required
                                    />
                                    False
                                </div>
                            </>
                            }
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
export default function Quizzes({ props }: { props: any }) {   

    return (
        <div className="w-[80%] mx-auto">
            {props.quizData && props.quizData.map((quiz: any) => {
                return (
                    <div key={quiz.id} className="bg-gray-100 p-4 my-4 rounded-md">
                        <h1 className="text-2xl font-bold">{quiz.question}</h1>
                        <div className="my-1">
                            <input
                                type="radio"
                                name="quiz"
                                value={quiz.a}
                                className="mr-1"
                            />
                            A: {quiz.a}
                        </div>
                        <div className="my-1">
                            <input
                                type="radio"
                                name="quiz"
                                value={quiz.b}
                                className="mr-1"
                            />
                            B: {quiz.b}
                        </div>
                        <div className="my-1">
                            <input
                                type="radio"
                                name="quiz"
                                value={quiz.c}
                                className="mr-1"
                            />
                            C: {quiz.c}
                        </div>
                        <div className="my-1">
                            <input
                                type="radio"
                                name="quiz"
                                value={quiz.d}
                                className="mr-1"
                            />
                            D: {quiz.d}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
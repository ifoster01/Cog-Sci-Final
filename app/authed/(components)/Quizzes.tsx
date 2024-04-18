"use client"
import { getData } from '../(server)/getQuiz'
import { useEffect, useState } from 'react'

export default function Quizzes({ user }: { user: any }) {
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        getData(user.id).then((res) => {
            setData(res)
        })
    }, [])

    return (
        <div className="w-[80%] mx-auto">
            {data && data.map((quiz: any) => {
                return (
                    <div key={quiz.id} className="bg-gray-100 p-4 my-4 rounded-md">
                        <h1 className="text-2xl font-bold">{quiz.question}</h1>
                        <input type="radio" name="quiz" value={quiz.a} />A: {quiz.a}
                        <input type="radio" name="quiz" value={quiz.b} />B: {quiz.b}
                        <input type="radio" name="quiz" value={quiz.c} />C: {quiz.c}
                        <input type="radio" name="quiz" value={quiz.d} />D: {quiz.d}
                    </div>
                )
            })}
        </div>
    )
}
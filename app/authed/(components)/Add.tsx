'use client'
import { useState } from 'react'
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { addQuestion } from '../(server)/Actions';
import toast, { Toaster } from 'react-hot-toast';

export default function Add({ props }: { props: any }) {
    const queryClient = useQueryClient();

    const [type, setType] = useState("")
    const [question, setQuestion] = useState("")
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    const [c, setC] = useState("")
    const [d, setD] = useState("")
    const [answer, setAnswer] = useState("")

    const mutation = useMutation({
        mutationFn: async () => {
            await addQuestion(question, type, a, b, c, d, answer, props.userData.id)
            
            setQuestion("")
            setA("")
            setB("")
            setC("")
            setD("")
            setAnswer("")
        },
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: [props.userData.id] });

            toast.success("Question added successfully!")
        }
    })

    const postQuestion = async (e: any) => {
        e.preventDefault()

        mutation.mutate()
    }

    return (
        <div className="w-[80%] mx-auto relative pt-10">
            <h1 className="text-2xl font-bold">Add Questions</h1>
            <form onSubmit={postQuestion}>
                <div className="grid grid-cols-2 mt-4 text-right">
                    <div className="flex items-center">
                        <h2 className="text-xl font-semibold">Question:</h2>
                        <input
                            type="text"
                            className="w-full border-2 border-gray-300 rounded-md p-1 ml-2"
                            placeholder="Enter the question here..."
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="type-select" className="mr-2">Select question type you'd like to add:</label>
                        <select
                            name="qtype"
                            id="type-select"
                            className="p-1 rounded-md"
                            onChange={(e) => setType(e.target.value)}
                            required
                        >
                            <option value="">--Please choose an option--</option>
                            <option value="choice">multiple choice</option>
                            <option value="tf">true/false</option>
                        </select>
                    </div>
                </div>
                { type === "choice" &&
                <>
                    <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                            <label htmlFor="choice-a" className="block text-lg font-medium leading-6 text-gray-900">
                                A)
                            </label>
                            <input
                                type="text"
                                name="choice-a"
                                placeholder="Enter the answer for A..."
                                className="w-full border-2 border-gray-300 rounded-md p-1 ml-2"
                                value={a}
                                onChange={(e) => setA(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex items-center gap-x-3">
                            <label htmlFor="choice-a" className="block text-lg font-medium leading-6 text-gray-900">
                                B)
                            </label>
                            <input
                                type="text"
                                name="choice-b"
                                placeholder="Enter the answer for B..."
                                className="w-full border-2 border-gray-300 rounded-md p-1 ml-2"
                                value={b}
                                onChange={(e) => setB(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex items-center gap-x-3">
                            <label htmlFor="choice-a" className="block text-lg font-medium leading-6 text-gray-900">
                                C)
                            </label>
                            <input
                                type="text"
                                name="choice-c"
                                placeholder="Enter the answer for C..."
                                className="w-full border-2 border-gray-300 rounded-md p-1 ml-2"
                                value={c}
                                onChange={(e) => setC(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex items-center gap-x-3">
                            <label htmlFor="choice-a" className="block text-lg font-medium leading-6 text-gray-900">
                                D)
                            </label>
                            <input
                                type="text"
                                name="choice-d"
                                placeholder="Enter the answer for D..."
                                className="w-full border-2 border-gray-300 rounded-md p-1 ml-2"
                                value={d}
                                onChange={(e) => setD(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <h2 className='mt-6 text-2xl mb-4'>Please select the correct answer</h2>
                    <div className="flex space-x-6">
                        <div className="flex items-center gap-x-3">
                            <label htmlFor="choice-a" className="block text-lg font-medium leading-6 text-gray-900">
                                A)
                            </label>
                            <input
                                type="radio"
                                name="choice-ans"
                                value="A"
                                checked={answer === "A"}
                                onChange={(e) => setAnswer(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex items-center gap-x-3">
                            <label htmlFor="choice-a" className="block text-lg font-medium leading-6 text-gray-900">
                                B)
                            </label>
                            <input
                                type="radio"
                                name="choice-ans"
                                value="B"
                                checked={answer === "B"}
                                onChange={(e) => setAnswer(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex items-center gap-x-3">
                            <label htmlFor="choice-a" className="block text-lg font-medium leading-6 text-gray-900">
                                C)
                            </label>
                            <input
                                type="radio"
                                name="choice-ans"
                                value="C"
                                checked={answer === "C"}
                                onChange={(e) => setAnswer(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex items-center gap-x-3">
                            <label htmlFor="choice-a" className="block text-lg font-medium leading-6 text-gray-900">
                                D)
                            </label>
                            <input
                                type="radio"
                                name="choice-ans"
                                value="D"
                                checked={answer === "D"}
                                onChange={(e) => setAnswer(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </>
                }
                { type === "tf" &&
                <>
                    <h2 className='mt-6 text-2xl mb-4'>Please select the correct answer</h2>
                    <div className="mt-6 flex space-x-6">
                        <div className="flex items-center gap-x-3">
                            <label htmlFor="choice-a" className="block text-lg font-medium leading-6 text-gray-900">
                                True
                            </label>
                            <input
                                type="radio"
                                name="tf-ans"
                                value="true"
                                checked={answer === "true"}
                                onChange={(e) => setAnswer(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex items-center gap-x-3">
                            <label htmlFor="choice-a" className="block text-lg font-medium leading-6 text-gray-900">
                                False
                            </label>
                            <input
                                type="radio"
                                name="tf-ans"
                                value="false"
                                checked={answer === "false"}
                                onChange={(e) => setAnswer(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </>
                }
                <button type="submit" className="mt-6 bg-blue-500 text-white p-2 rounded-md">
                    Add Question
                </button>
            </form>

            <Toaster />
        </div>
    )
}
'use client'
import { useEffect, useState } from 'react'

export default function Add({ user }: { user: any }) {
    const [type, setType] = useState("")
    const [question, setQuestion] = useState("")
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    const [c, setC] = useState("")
    const [d, setD] = useState("")

    const addQuestion = async () => {

    }

    return (
        <div className="w-[80%] mx-auto relative pt-10">
            <h1 className="text-2xl font-bold">Add Questions</h1>
            <form onSubmit={addQuestion}>
                <div className="grid grid-cols-2 mt-4 text-right">
                    <div className="flex items-center">
                        <h2 className="text-xl font-semibold">Question:</h2>
                        <input
                            type="text"
                            className="w-full border-2 border-gray-300 rounded-md p-1 ml-2"
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
                    <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                            <label htmlFor="choice-a" className="block text-lg font-medium leading-6 text-gray-900">
                                A)
                            </label>
                            <input
                                type="text"
                                name="choice-a"
                                placeholder="Enter the option for A"
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
                                placeholder="Enter the option for B"
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
                                placeholder="Enter the option for C"
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
                                placeholder="Enter the option for D"
                                className="w-full border-2 border-gray-300 rounded-md p-1 ml-2"
                                value={d}
                                onChange={(e) => setD(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                }
                { type === "tf" &&
                    <div className="mt-6 text-2xl mb-24">
                        True/False Selected!
                    </div>
                }
                <button type="submit" className="mt-6 bg-blue-500 text-white p-2 rounded-md">
                    Add Question
                </button>
            </form>
        </div>
    )
}
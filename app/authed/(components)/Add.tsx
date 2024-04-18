'use client'
import { useEffect, useState } from 'react'

export default function Add({ user }: { user: any }) {
    const [type, setType] = useState("choice")
    const [question, setQuestion] = useState("")

    return (
        <div className="w-[80%] mx-auto relative pt-10">
            <div className="absolute top-4 right-0 flex flex-col">
                <label htmlFor="type-select">Select question type you'd like to add:</label>
                <select name="qtype" id="type-select" className="p-1 rounded-md">
                    <option value="">--Please choose an option--</option>
                    <option value="choice">multiple choice</option>
                    <option value="tf">true/false</option>
                </select>
            </div>
            <h1 className="text-2xl font-bold">Add Questions</h1>
            <div className="flex items-center mt-4">
                <h2 className="text-xl font-semibold">Question:</h2>
                <input
                    type="text"
                    className="w-full border-2 border-gray-300 rounded-md p-1 ml-2"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                />
            </div>
            <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                    <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    Everything
                    </label>
                </div>
                <div className="flex items-center gap-x-3">
                    <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    Same as email
                    </label>
                </div>
                <div className="flex items-center gap-x-3">
                    <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                    No push notifications
                    </label>
                </div>
            </div>
        </div>
    )
}
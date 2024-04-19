"use client"
import { useEffect, useState } from 'react'
import { getQuiz, getUser, getLeaders } from './(server)/Actions'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
// store
import { useSessionStore } from "./AuthContext"
// components
import Slider from "./(components)/Slider"
import Add from "./(components)/Add"
import Quizzes from "./(components)/Quizzes"
import Scores from "./(components)/Scores"
import Leaderboard from "./(components)/Leaderboard"
// assets
import Logo from "@/public/app.jpg"

export default function Authed() {
    const user = useSessionStore((state) => state.session);
    const [activePage, setActivePage] = useState("quizzes");

    const getData = async () => {
        const quizData = await getQuiz(user.id)
        const userData = await getUser(user.id)
        const leaderData = await getLeaders()

        return {
            quizData,
            userData,
            leaderData
        }
    }

    // getting all required app data
    const { isLoading, error, data: appData } = useQuery({
        queryFn: () => getData(),
        queryKey: [user.id]
    })

    if (error) {
        console.log(error)
    }

    if (isLoading) {
        return <div className="w-full max-w-screen max-h-screen">
            <Image
                src={Logo}
                alt="Cognitive Science Quiz App"
                width={200}
                height={200}
                className="animate-bounce mx-auto mt-[10%]"
            />
        </div>
    }

    return (
        <div className="">
            <h1 className="text-2xl 2xl:text-4xl font-bold text-center mt-2 2xl:mt-4">
                Welcome to the Cognitive Science Quiz App, {user.user_metadata.firstname}!
            </h1>

            <Slider props={{ activePage, setActivePage }} />

            {activePage === "add" && <Add props={{ userData: appData?.userData }} />}
            {activePage === "quizzes" && <Quizzes props={{ userData: appData?.userData, quizData: appData?.quizData }} />}
            {activePage === "scores" && <Scores props={{ userData: appData?.userData }} />}
            {activePage === "leaderboard" && <Leaderboard props={{ leaderData: appData?.leaderData }} />}
        </div>
    )
}
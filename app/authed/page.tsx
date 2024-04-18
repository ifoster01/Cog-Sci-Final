"use client"
import { useEffect, useState } from 'react'
import { getQuiz, getUser, getLeaders } from './(server)/Actions'
// store
import { useSessionStore } from "./AuthContext";
// components
import Slider from "./(components)/Slider"
import Add from "./(components)/Add"
import Quizzes from "./(components)/Quizzes"
import Scores from "./(components)/Scores"
import Leaderboard from "./(components)/Leaderboard";

export default function Authed() {
    const user = useSessionStore((state) => state.session);
    const [activePage, setActivePage] = useState("dashboard");

    const [quizData, setQuizData] = useState<any>(null)
    const [userData, setUserData] = useState<any>(null)
    const [leaderData, setLeaderData] = useState<any>(null)

    useEffect(() => {
        getQuiz(user.id).then((res) => {
            setQuizData(res)
        })

        getUser(user.id).then((res) => {
            setUserData(res)
        })

        getLeaders().then((res) => {
            setLeaderData(res)
        })
    }, [])


    return (
        <div className="">
            <h1 className="text-2xl 2xl:text-4xl font-bold text-center mt-2 2xl:mt-4">
                Welcome to the Cognitive Science Quiz App, {user.user_metadata.firstname}!
            </h1>

            <Slider props={{ activePage, setActivePage }} />

            {activePage === "add" && <Add user={user} />}
            {activePage === "quizzes" && <Quizzes props={{ userData, setUserData, quizData, setQuizData, getLeaders, setLeaderData }} />}
            {activePage === "scores" && <Scores props={{ userData }} />}
            {activePage === "leaderboard" && <Leaderboard props={{ leaderData }} />}
        </div>
    )
}
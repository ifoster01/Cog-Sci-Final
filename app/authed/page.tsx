"use client"
import { useEffect, useState } from 'react'
import { getQuiz, getUser, getLeaders } from './(server)/getData'
// store
import { useSessionStore } from "./AuthContext";
// components
import Slider from "./(components)/Slider"
import Dashboard from "./(components)/Dashboard"
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
            <h1 className="text-4xl font-bold text-center mt-4">
                Welcome to the Cognitive Science Quiz App, {user.user_metadata.firstname}!
            </h1>
    
            <Slider props={{ activePage, setActivePage }} />

            {activePage === "dashboard" && <Dashboard user={user} />}
            {activePage === "quizzes" && <Quizzes props={{ user, quizData }} />}
            {activePage === "scores" && <Scores props={{ user, userData }} />}
            {activePage === "leaderboard" && <Leaderboard props={{ user, leaderData }} />}
        </div>
    )
}
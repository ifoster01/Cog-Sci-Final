"use client"
import { useState } from "react"
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

    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center mt-4">
                Welcome to the Cognitive Science Quiz App, {user.user_metadata.firstname}!
            </h1>
    
            <Slider props={{ activePage, setActivePage }} />

            {activePage === "dashboard" && <Dashboard user={user} />}
            {activePage === "quizzes" && <Quizzes user={user} />}
            {activePage === "scores" && <Scores user={user} />}
            {activePage === "leaderboard" && <Leaderboard user={user} />}
        </div>
    )
}
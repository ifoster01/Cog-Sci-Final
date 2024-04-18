export default function Slider({ props }: { props: any }) {
    return (
        <div className="w-[80%] mx-auto">
            <div className="text-3xl text-center grid grid-cols-4 mt-12 mb-2">
                <button onClick={() => props.setActivePage("dashboard")}>
                    Dashboard
                </button>
                <button onClick={() => props.setActivePage("quizzes")}>
                    Quiz
                </button>
                <button onClick={() => props.setActivePage("scores")}>
                    Score
                </button>
                <button onClick={() => props.setActivePage("leaderboard")}>
                    Leaderboard
                </button>
            </div>
            <div className="flex h-2 bg-gray-200 rounded-full">
                <div className={`w-1/4 h-2 bg-black rounded-full transition-all duration-500 ${
                    props.activePage === "dashboard" ? 'ml-0' :
                    props.activePage === "quizzes" ? 'ml-[25%]':
                    props.activePage === "scores" ? 'ml-[50%]' :
                    props.activePage === "leaderboard" ? 'ml-[75%]' : ''
                }`} />
            </div>
        </div>
    )
}
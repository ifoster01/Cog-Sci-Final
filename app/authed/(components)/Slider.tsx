"use client"
import { useMediaQuery } from 'react-responsive'
import {
    QueueListIcon,
    ChartPieIcon,
    ListBulletIcon,
    PlusCircleIcon
} from '@heroicons/react/24/outline'

export default function Slider({ props }: { props: any }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <div className="w-[80%] mx-auto -mt-8 2xl:mt-0">
            <div className="text-xl 2xl:text-3xl text-center grid grid-cols-4 mt-12 mb-2">
                { isMobile &&
                <>
                    <button onClick={() => props.setActivePage("quizzes")}>
                        <QueueListIcon className="mx-auto h-8 w-8" />
                    </button>
                    <button onClick={() => props.setActivePage("scores")}>
                        <ChartPieIcon className="mx-auto h-8 w-8" />
                    </button>
                    <button onClick={() => props.setActivePage("leaderboard")}>
                        <ListBulletIcon className="mx-auto h-8 w-8" />
                    </button>
                    <button onClick={() => props.setActivePage("add")}>
                        <PlusCircleIcon className="mx-auto h-8 w-8" />
                    </button>
                </>
                }
                { !isMobile &&
                <>
                    <button onClick={() => props.setActivePage("quizzes")}>
                        Quiz
                    </button>
                    <button onClick={() => props.setActivePage("scores")}>
                        Score
                    </button>
                    <button onClick={() => props.setActivePage("leaderboard")}>
                        Leaderboard
                    </button>
                    <button onClick={() => props.setActivePage("add")}>
                        Add Questions
                    </button>
                </>
                }
            </div>
            <div className="flex h-2 bg-gray-200 rounded-full">
                <div className={`w-1/4 h-2 bg-black rounded-full transition-all duration-500 ${
                    props.activePage === "quizzes" ? 'ml-0' :
                    props.activePage === "scores" ? 'ml-[25%]':
                    props.activePage === "leaderboard" ? 'ml-[50%]' :
                    props.activePage === "add" ? 'ml-[75%]' : ''
                }`} />
            </div>
        </div>
    )
}
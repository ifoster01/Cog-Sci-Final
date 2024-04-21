"use client"
import { useMediaQuery } from 'react-responsive'

export default function Leaderboard({ props }: { props: any }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <div className="w-[80%] mx-auto">
            <h1 className="text-3xl my-6">
                Leaderboard:
            </h1>
            { !isMobile &&
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Position
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Correct
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Incorrect
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            { props.leaderData && props.leaderData.map((leader: any, index: number) => {
                                return (
                                    <tr key={leader.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <td className="px-6 py-4">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {leader.first_name} {leader.last_name}
                                        </td>
                                        <td className="px-12 py-4 text-green-500">
                                            {leader.correct}
                                        </td>
                                        <td className="px-14 py-4 text-red-500">
                                            {leader.incorrect}
                                        </td>
                                        <td className="px-10 py-4 text-yellow-600">
                                            {leader.total}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            }
            { isMobile &&
                <div className="flex flex-col space-y-4">
                    { props.leaderData && props.leaderData.map((leader: any, index: number) => {
                        return (
                            <div key={leader.id} className="flex flex-col space-y-2 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-medium text-gray-900 dark:text-white">
                                        {index + 1}. {leader.first_name} {leader.last_name}
                                    </span>
                                    <span className="text-yellow-600">
                                        {leader.total} total
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-green-500">
                                        {leader.correct} correct
                                    </span>
                                    <span className="text-red-500">
                                        {leader.incorrect} incorrect
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}
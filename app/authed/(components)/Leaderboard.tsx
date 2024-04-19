

export default function Leaderboard({ props }: { props: any }) {
    return (
        <div className="w-[80%] mx-auto">
            <h1 className="text-3xl my-6">
                Leaderboard:
            </h1>
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
        </div>
    )
}
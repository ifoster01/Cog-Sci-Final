

export default function Leaderboard({ props }: { props: any }) {
    return (
        <div className="w-[80%] mx-auto">
            <h1 className="text-3xl my-6">
                Leaderboard:
            </h1>
            {props.leaderData && props.leaderData.map((leader: any, index: number) => {
                return (
                    <div key={leader.id} className="bg-gray-100 p-4 my-4 rounded-md">
                        <h1 className="text-2xl font-bold">{index + 1}) {leader.first_name} {leader.last_name}</h1>
                        <div className="grid grid-cols-3">
                            <div className="my-1">
                                <p className="text-xl text-green-400">Correct: {leader.correct}</p>
                            </div>
                            <div className="my-1">
                                <p className="text-xl text-red-500">Incorrect: {leader.incorrect}</p>
                            </div>
                            <div className="my-1">
                                <p className="text-xl text-yellow-600">Total: {leader.total}</p>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}
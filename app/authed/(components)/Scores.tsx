import { PieChart, Pie, Cell } from 'recharts'

function Chart({ pieData }: { pieData: any }) {
    return (
        <div className="relative mx-auto">
            <PieChart width={100} height={100}>
                <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={40}
                    dataKey="value"
                    stroke="none"
                    cornerRadius={10}
                    paddingAngle={-4}
                >
                    { pieData.map((data: any, index: number) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={
                                data.name === "correct" ? "#4ade80" :
                                data.name === "correctbg" ? "#dcfce7" :
                                data.name === "incorrect" ? "#f87171" :
                                data.name === "incorrectbg" ? "#fee2e2" :
                                ""
                            }
                        />
                    ))}
                </Pie>
            </PieChart>
            <h2 className={`absolute top-9 left-8 text-xl ${
                    pieData[1].name === 'correct' ? 'text-green-400' :
                    pieData[1].name === 'incorrect' ? 'text-red-400' :
                    ''
                }
            `}>
                {pieData[1].value.toFixed(0)}%
            </h2>
        </div>
    )
}

export default function Scores({ props }: { props: any }) {
    const correctData = [
        { name: 'correctbg', value: props.userData.total === 0 ? 100 : (props.userData.incorrect / props.userData.total) * 100 },
        { name: 'correct', value: props.userData.total === 0 ? 0 : (props.userData.correct / props.userData.total) * 100 },
    ]
    const incorrectData = [
        { name: 'incorrectbg', value: props.userData.total === 0 ? 100 : (props.userData.correct / props.userData.total) * 100 },
        { name: 'incorrect', value: props.userData.total === 0 ? 0 : (props.userData.incorrect / props.userData.total) * 100 },
    ]

    return (
        <div className="w-[80%] mx-auto">
            <h1 className="text-3xl my-6">
                Your current stats:
            </h1>
            <div className="grid grid-cols-2">
                <div className="flex items-center mx-auto p-4 rounded-md">
                    <h1 className="text-2xl font-bold">Correct:</h1>
                    <p className="text-2xl ml-2">{props.userData.correct}</p>
                </div>
                <Chart pieData={correctData} />
            </div>
            <div className="h-[1px] w-full bg-gray-200" />
            <div className="grid grid-cols-2">
                <div className="flex items-center mx-auto p-4 rounded-md">
                    <h1 className="text-2xl font-bold">Incorrect:</h1>
                    <p className="text-2xl ml-2">{props.userData.incorrect}</p>
                </div>
                <Chart pieData={incorrectData} />
            </div>
            <div className="h-[1px] w-full bg-gray-200" />
            <div className="flex justify-center space-x-2 p-4 rounded-md">
                <h1 className="text-2xl font-bold">Total:</h1>
                <p className="text-2xl">{props.userData.total}</p>
            </div>
        </div>
    )
}
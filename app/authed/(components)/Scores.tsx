

export default function Scores({ props }: { props: any }) {
    return (
        <div className="w-[80%] mx-auto">
            <h1 className="text-3xl my-6">
                Your current stats:
            </h1>
            <div className="bg-green-50 p-4 rounded-md">
                <h1 className="text-2xl font-bold">Correct:</h1>
                <p className="text-2xl">{props.userData.correct}</p>
            </div>
            <div className="bg-red-50 p-4 rounded-md">
                <h1 className="text-2xl font-bold">Incorrect:</h1>
                <p className="text-2xl">{props.userData.incorrect}</p>
            </div>
        </div>
    )
}
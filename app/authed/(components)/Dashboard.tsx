

export default function Dashboard({ user }: { user: any }) {
    return (
        <div className="w-[80%] mx-auto">
            <div className="grid grid-cols-2">
                <div className="bg-green-50">
                    hello
                </div>
                <div className="bg-red-50">
                    hello
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="bg-red-50">
                    hello
                </div>
                <div className="bg-green-50">
                    hello
                </div>
            </div>
        </div>
    )
}
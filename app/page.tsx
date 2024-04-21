import Link from 'next/link';

import Header from '../components/Header';

export default async function Index() {
  return (
    <div className="max-w-screen h-screen">
      <Header user={null} />

      {/* Body content */}
      <div className="w-full px-[25%] text-center">
        <h1 className="mt-[20%] sm:mt-[10%] 2xl:mt-[25%] mb-8 text-2xl xl:text-6xl font-bold">Welcome to the<br/><span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Cognitive Science Quiz App</span></h1>
        <h2 className="text-lg sm:text-2xl">
          The Cognitive Science Quiz App offers an immersive experience in exploring key concepts of cognitive science through an interactive quiz format
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-center space-y-2 sm:space-y-0 sm:space-x-6 mt-8">
          <Link href='/signup' className="text-nowrap text-sm sm:text-base font-extralight text-white bg-green-500 px-4 py-4 rounded-sm cursor-pointer hover:bg-green-400">
            Sign up to get started!
          </Link>
          <Link href='/about' className="text-nowrap text-sm sm:text-base font-extralight text-white bg-black px-16 py-4 rounded-sm cursor-pointer hover:bg-gray-800">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}

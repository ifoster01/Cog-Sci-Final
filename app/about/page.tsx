import Link from 'next/link';

import Header from '../../components/Header';

export default async function Index() {
  return (
    <div className="w-full max-w-screen h-screen">
      <Link
        href="/"
        className="absolute left-8 top-24 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <Header user={null} />

      {/* Body content */}
      <div className="w-full px-[5%] sm:px-[25%] mb-8 sm:mb-0 text-center">
        <div className="mx-auto text-center">
            <h2 className="mt-[15%] text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About This Project</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                The Cognitive Science Quiz App offers an immersive experience in exploring key concepts of cognitive science through an interactive quiz format. Designed as a one-week coding project, this web-based application presents users with multiple-choice questions covering various topics such as memory, perception, attention, decision-making, and problem-solving.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                With a user-friendly interface and a diverse database of quiz questions, users can test their knowledge and enhance their understanding of cognitive science principles. The app features a scoring system to track performance and provide instant feedback on quiz results, fostering engagement and learning.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Developed using Next.js, a React framework, the Cognitive Science Quiz App combines basic coding skills with cognitive science themes, making it accessible to users with varying levels of technical proficiency. Through this project, users can delve into the fascinating world of cognitive science in a fun and interactive manner.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Embark on a journey of discovery and challenge your cognitive prowess with the Cognitive Science Quiz App!
            </p>
        </div>
      </div>
    </div>
  );
}

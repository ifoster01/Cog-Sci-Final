import Link from 'next/link';

import Header from '../../components/Header';

export default async function Index() {
  return (
    <div className="w-full max-w-screen h-screen">
      <Header user={null} />

      {/* Body content */}
      <div className="w-full px-[25%] text-center">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-[15%] text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Us</h2>
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

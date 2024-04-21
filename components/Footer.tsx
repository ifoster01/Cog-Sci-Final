"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Logo from '../public/GitHub-Logo.svg';

export default function Footer() {
    const router = useRouter();

    return (
        <footer className="w-full max-w-screen flex justify-center items-center">
            <Link href="https://github.com/ifoster01/Cog-Sci-Final" target="_blank" className="flex items-center text-sm sm:text-base font-light cursor-pointer hover:text-gray-700">
                GitHub Repository
                <Image src={Logo} alt="GitHub Logo" width={50} height={50} />
            </Link>
        </footer>
    );
}
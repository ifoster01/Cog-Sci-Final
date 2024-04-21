"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Logo from '../public/GitHub-Logo.svg';

export default function Footer() {
    const router = useRouter();

    return (
        <footer className="w-full max-w-screen flex justify-center items-center">
            GitHub Repository
            <Image src={Logo} alt="GitHub Logo" width={50} height={50} />
        </footer>
    );
}
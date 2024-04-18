"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logout from './logout-action';

import Logo from '../public/app.jpg';
import {
    ArrowRightIcon
} from '@heroicons/react/20/solid';

export default function Header({ user }: { user: any }) {
    const router = useRouter();

    const logout = async () => {
        await Logout();
        return router.push("/");
    }

    return (
        <header className="w-full max-w-screen flex justify-between px-12 2xl:px-20 items-center">
            <Link href="/" className="flex items-center space-x-2">
                <Image src={Logo} alt="Logo" width={75} height={75} />
            </Link>
            <nav>
                <ul className="flex space-x-8">
                    {user &&
                    <>
                        <li>
                            <button onClick={() => logout()} className="text-xl hover:text-gray-700">
                                Log out
                            </button>
                        </li>
                    </>
                    }
                    { !user &&
                    <>
                        <li>
                            <Link href="/login" className="hover:text-gray-700">
                                Sign In
                            </Link>
                        </li>
                        <li>
                            <Link href="/signup" className="bg-black text-white px-4 py-2 rounded-md group">
                                Sign Up
                                <ArrowRightIcon className="ml-1 w-5 h-5 inline-block group-hover:translate-x-1 transition duration-150 ease-in-out" />
                            </Link>
                        </li>
                    </>
                    }
                </ul>
            </nav>
        </header>
    );
}
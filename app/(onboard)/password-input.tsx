"use client";
import { useState } from "react";

import {
    EyeIcon,
    EyeSlashIcon
  } from "@heroicons/react/20/solid";

export function PasswordInput() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="mt-2 relative">
            <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
            { showPassword && <EyeSlashIcon onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-2 h-6 w-6 text-gray-400 cursor-pointer" /> }
            { !showPassword && <EyeIcon onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-2 h-6 w-6 text-gray-400 cursor-pointer" /> }
        </div>
    );
}

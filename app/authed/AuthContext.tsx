"use client";
import { FC, ReactNode, useEffect } from "react";
import { produce } from "immer";
import { create } from "zustand";

export const useSessionStore = create<{
    session: any | null;
    updateSession: (session: any | null) => void;
}>()((set) => ({
    session: null,
    updateSession: (session) =>
        set(
            produce((state) => {
                state.session = session;
            }),
        ),
}));

export const AuthWrapper: FC<{
    user: any;
    children: ReactNode;
}> = ({ user, children }) => {
    // update session
    const { updateSession } = useSessionStore((state) => ({
        updateSession: state.updateSession,
    }));

    const userStore = useSessionStore((state) => state.session);

    // update session on mount
    useEffect(() => {
        updateSession(user);
    }, [updateSession, user]);

    return (
        <div className="w-full max-w-screen">
            {userStore && children}
        </div>
    );
}
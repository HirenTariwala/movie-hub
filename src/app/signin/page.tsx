"use client";
import { useSignIn } from "./useSignIn";
const SignIn = dynamic(() => import('@/components/page/Auth/SignIn'));
import dynamic from "next/dynamic";

export default function SignInPage() {
    const {
        handleLogin,
        email,
        setEmail,
        password,
        setPassword, } = useSignIn()

    return (
        <SignIn handleLogin={handleLogin} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
    )
}

"use client";
import SignIn from "@/components/page/Auth/SignIn";
import { useSignIn } from "./useSignIn";

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

"use client";
import Button from '@/components/common/Button'
import Checkbox from '@/components/common/CheckBox'
import Input from '@/components/common/Input'
import Typography from '@/components/common/Typography'
import React, { Dispatch, SetStateAction } from 'react'

type SignInProps = {
    handleLogin: () => void
    email: string
    setEmail: Dispatch<SetStateAction<string>>;
    password: string
    setPassword: Dispatch<SetStateAction<string>>
}
const SignIn = ({ handleLogin,
    email,
    setEmail,
    password,
    setPassword }: SignInProps) => {
    return (
        <div className="flex flex-col items-center h-screen w-full">
            <div className='max-w-[300px] w-full flex items-center flex-col gap-6 h-full justify-center'>
                <Typography variant='h1' className=' mb-[14px]'> Sign in </Typography>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} classNames={{ container: "w-full" }} placeholder="Email" />
                <Input value={password} onChange={(e) => setPassword(e.target.value)} classNames={{ container: "w-full" }} placeholder="Password" />
                <Checkbox label='Remember me' />
                <Button className={"w-full"} variant='filled' onClick={handleLogin}>Login </Button>
            </div>
        </div>
    )
}

export default SignIn

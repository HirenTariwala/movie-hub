import Button from '@/components/common/Button'
import Typography from '@/components/common/Typography'
import React from 'react'

export default function NoFoundMovie() {
    return (
        <div className="h-screen flex items-center text-center justify-center flex-col gap-10">
            <Typography variant="h2" className="leading-[56px]">Your movie list is empty</Typography>
            <Button variant='filled' className='px-4 py-7'>Add a new movie</Button>
        </div>
    )
}

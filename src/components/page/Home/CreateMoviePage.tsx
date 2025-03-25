"use client";
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Typography from '@/components/common/Typography';
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone';

export default function CreateMoviePage() {
    const onDrop = useCallback((acceptedFiles: any) => {
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { "image/*": [] } });

    return (
        <div className="min-h-screen max-w-[1248px] pt-[120px] m-auto px-[24px]">
            <div className='pb-[120px]'>
                <Typography variant="h2" className="leading-[56px]">Create a new movie</Typography>
            </div>

            <div className='grid sm:grid-cols-[1fr_1.27fr] grid-cols-1  sm:grid-rows-3 grid-rows-3 gap-x-[127px] '>
                <div
                    {...getRootProps()}
                    className=" h-[504px] text-center row-span-3 border-2 max-sm:order-1 border-dashed border-white rounded-[10px] flex justify-center items-center cursor-pointer bg-#224957"
                >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the image here...</p>
                    ) : (
                        <p>Drop an image here or click to select</p>
                    )}
                </div>

                <div className='max-sm:order-0'>
                    <div className='max-w-[362px] flex flex-col gap-6'>
                        <Input classNames={{ container: "w-full" }} placeholder="Title" />
                        <Input classNames={{ container: "w-[60%]" }} placeholder="Publishing year" />
                    </div>
                </div>

                <div className="flex max-sm:order-2 gap-4 h-fit">
                    <div className='max-w-[362px] flex w-full gap-4'>
                        <Button className={"w-full"} variant='outlined'>Cancel </Button>
                        <Button className={"w-full"} variant='filled'>Submit </Button>
                    </div>
                </div>
            </div >


        </div >
    );
}
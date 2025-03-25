"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Typography from "@/components/common/Typography";
import UploadImage from "@/components/common/UploadImage";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function CreateMoviePage() {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  return (
    <div className="min-h-screen max-w-[1248px] md:pt-[120px] pt-20 m-auto px-[24px]">
      <div className="md:pb-[120px] pb-20">
        <Typography variant="h2" className="leading-[56px]">
          Create a new movie
        </Typography>
      </div>

      <div className="grid md:grid-cols-[1fr_1.27fr] max-md:grid-rows-[auto] grid-cols-1 max-md:gap-6 sm:grid-rows-3 grid-rows-3 gap-x-[127px] max-md:pb-20">
        <div
          {...getRootProps()}
          className=" h-[372px] md:h-[504px] text-center row-span-3 border-2 max-sm:order-1 border-dashed bg-[#2A4B55] border-white rounded-[10px] flex justify-center items-center cursor-pointer bg-#224957"
        >
          <input {...getInputProps()} />
          {isDragActive ? <p>Drop the image here...</p> : <UploadImage />}
        </div>

        <div className="max-sm:order-0">
          <div className="md:max-w-[362px] max-md:w-full flex flex-col gap-6">
            <Input classNames={{ container: "w-full" }} placeholder="Title" />
            <Input
              classNames={{ container: "w-[60%] max-md:w-full" }}
              placeholder="Publishing year"
            />
          </div>
        </div>

        <div className="flex max-sm:order-2 gap-4 h-fit">
          <div className="max-w-[362px] flex w-full gap-4">
            <Button className={"w-full"} variant="outlined">
              Cancel{" "}
            </Button>
            <Button className={"w-full"} variant="filled">
              Submit{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

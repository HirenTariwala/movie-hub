"use client";
import { useState } from "react";
import MovieCard from "./MovieCard";
import Typography from "@/components/common/Typography";
import Button from "@/components/common/Button";
import PlusIcon from "@/assets/svg/PlusIcon";
import LogOuIcon from "@/assets/svg/LogOutIcon";
import Pagination from "./Pagination";
import NoFoundMovie from "./NoFoundMovie";

let image = "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const moviesData = [
    { id: 1, image: image, title: "Movie 1", year: "2021" },
    { id: 2, image: image, title: "Movie 2", year: "2022" },
    { id: 3, image: image, title: "Movie 3", year: "2023" },
    { id: 4, image: image, title: "Movie 4", year: "2024" },
    { id: 5, image: image, title: "Movie 5", year: "2021" },
    { id: 6, image: image, title: "Movie 6", year: "2022" },
    { id: 7, image: image, title: "Movie 6", year: "2022" },
    { id: 8, image: image, title: "Movie 6", year: "2022" },
];


const MovieListPage = () => {

    return (
        moviesData?.length ?
            <div className="min-h-screen max-w-[1248px] pt-[120px] m-auto px-[24px] mb-[160px]">
                <div className="flex items-center pb-[120px]">
                    <div className="flex justify-center items-center mb-4 gap-2">
                        <Typography variant="h2" className="leading-[56px]">My Movies</Typography>
                        <PlusIcon />
                    </div>
                    <div className="ml-auto flex gap-2">
                        <Typography variant="span" className="font-bold leading-[24px]">Logout</Typography>
                        <LogOuIcon />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                    {moviesData.map((movie) => (
                        <MovieCard key={movie.id} {...movie} />
                    ))}
                </div>

                <Pagination />

            </div>
            :
            <NoFoundMovie />

    );
};

export default MovieListPage;

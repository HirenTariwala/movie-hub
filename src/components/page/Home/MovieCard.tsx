import Typography from "@/components/common/Typography";
import React from "react";

interface MovieCardProps {
    image: string;
    title: string;
    year: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ image, title, year }) => {
    return (
        <div className="bg-[#092C39] p-[8px] rounded-xl flex flex-col gap-4">
            <img
                src={image}
                alt={title}
                className="w-full h-[400px]  object-cover rounded-md"
            />
            <div className="flex flex-col gap-[8px]">
                <Typography variant="h3">{title}</Typography>
                <Typography variant="p">{year}</Typography>
            </div>
        </div>
    );
};

export default MovieCard;

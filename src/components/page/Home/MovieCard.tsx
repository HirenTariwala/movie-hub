import Typography from "@/components/common/Typography";
import Image from "next/image";
import React from "react";

interface MovieCardProps {
  image: string;
  title: string;
  year: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ image, title, year }) => {
  return (
    <div className="bg-[#092C39] md:p-[8px] rounded-[12px] overflow-hidden flex flex-col md:gap-4">
      <Image
        height={400}
        width={300}
        src={image}
        alt={title}
        className="w-full aspect-[1/1.505]  object-cover md:rounded-[12px]"
      />
      <div className="flex flex-col md:gap-2 gap-4 p-3 md:p-0 md:pb-2 md:px-2">
        <Typography variant="h4" className="max-md:font-bold">{title}</Typography>
        <Typography variant="p">{year}</Typography>
      </div>
    </div>
  );
};

export default MovieCard;

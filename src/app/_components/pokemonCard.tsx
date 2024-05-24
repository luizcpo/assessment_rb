import React from "react";
import Image from "next/image";

interface PokemonCardProps {
  name: string;
  image: string;
  innerRef?: (node?: Element | null | undefined) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, innerRef }) => {
  return (
    <React.Fragment>
      <div className="" ref={innerRef}>
        <div className="flex cursor-pointer flex-row items-center gap-4 rounded  border-r-4 bg-white p-2 shadow-lg">
          <div className="h-[4.5rem] w-[4.5rem] rounded-full">
            <Image
              src={image}
              alt="profileImg"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <span>{name}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PokemonCard;

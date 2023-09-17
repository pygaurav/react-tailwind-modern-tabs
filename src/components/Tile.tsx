import { FC } from "react";
import { thing } from "../api/thing.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Tile: FC<thing> = ({ imageUrl, title, ratings }) => {
  return (
    <div className="p-4 m-2 border border-gray-800 rounded-lg shadow-sm shadow-gray-800 hover:border-cyan-700 hover:shadow-md overflow-hidden transition-transform duration-700 delay-75 hover:scale-110 cursor-pointer">
      <img className="w-40 h-40 rounded-lg mx-auto mb-2" src={imageUrl} alt={title} />
      <div className="pl-4 m-2">
      <div className="p-1 text-sm text-gray-200 truncate font-sans">
        {title}
      </div>
      <div className="flex items-center text-sm">
        <span className="text-gray-400 text-xs">{ratings}</span>{" "}
        <FontAwesomeIcon
          className="text-gray-400 mx-1"
          fontSize={10}
          icon={faStar}
        />
      </div>
      </div>
    </div>
  );
};

export default Tile;

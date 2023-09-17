import { FC } from "react";
import { thing } from "../api/thing.types";
import Tile from "./Tile";

const Display: FC<{ things: thing[] }> = ({ things }) => {
  return (
    <div className="grid grid-cols-3 gap-1 w-[50vw]">
      {things.map(({ imageUrl, ratings, title }) => (
        <Tile imageUrl={imageUrl} ratings={ratings} title={title} />
      ))}
    </div>
  );
};

export default Display;

import { useState } from "react";

import { ITetris } from "../types";
import { randomTetromino } from "../tetrominos";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false
  });

  const updatePlayerPos = ({ x, y, collided }: ITetris) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided
    }));
  };

  

  return [player];
};

export default usePlayer;
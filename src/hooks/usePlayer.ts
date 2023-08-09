import { useCallback, useState } from "react";

import { randomTetromino, TETROMINOS } from "../tetrominos";
import { STAGE_WIDTH } from "../gameHelpers";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false
  });

  interface IPlayerPros {
    x: number,
    y: number,
    collided?: boolean
  }

  const rotate = (matrix: any, direction: any) => {
    debugger
    // make the rows to become cols (transpose)
    const rotatedTetro = matrix.map((_: number[], index: number) => matrix.map((col: any) => col[index]))
    
    // reverse each row  to get a rotated matrix
    if(direction > 0) return rotatedTetro.map((row: any) => row.reverse());
    return rotatedTetro.reverse()
  }

  const playerRotate = (stage: any, direction: any) => {
    debugger
    const clonedPlayer = JSON.parse(JSON.stringify(player))
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, direction)

    setPlayer(clonedPlayer)
  }


  const updatePlayerPos = (props: IPlayerPros) => {
    const {x, y, collided} = props;

    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided: collided ? collided : prev.collided
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: {x: STAGE_WIDTH / 2 - 2, y: 0},
      tetromino: randomTetromino().shape,
      collided: false
    })
  }, [])
  

  return {player,updatePlayerPos,resetPlayer, playerRotate};
};

export default usePlayer;

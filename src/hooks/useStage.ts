import { useEffect, useState } from "react";
import { createStage } from "../gameHelpers";

interface IPos {
  x: number;
  y: number;
}
interface IStage {
  player: {
    pos: IPos,
    tetromino: (string | number)[][],
    collided: boolean
  };
  resetPlayer: () => void;
}
const useStage  = (props: IStage ) => {
  const {player, resetPlayer} = props;
  const [stage, setStage] = useState<(string | number)[][][]>(createStage());

  useEffect(() => {
    const updateStage = (prevStage: any) => {
      // first flush the stage
      const newStage = prevStage.map((row: any) => 
        row.map((cell: any) => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      )

      // Then draw the tetrominio
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if(value !== 0){
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`
            ]
          }
        })
      });

      // Then check if we collided 
      if(player.collided){
        resetPlayer();
      }
      return newStage;
    }

    setStage(prev => updateStage(prev))
  },[player, resetPlayer])

  return {stage, setStage};
}

export default useStage;
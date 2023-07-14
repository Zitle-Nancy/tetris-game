import { useState } from "react";
import { Display, Stage, StartButton } from "./index";
import { StyledTetris, StyledTetrisWrapper } from "./styles";

import usePlayer from "../hooks/usePlayer";
import useStage from "../hooks/useStage";

import { createStage } from "../gameHelpers";

const LEFT_KEYCODE = 37;
const RIGHT_KEYCODE = 39;
const DOWN_KEYCODE = 40;
const MOVE_LEFT = -1;
const MOVE_RIGHT = 1;

// { callback }
const Tetris = () => {
  // @dropTime is about game speed
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const { player, updatePlayerPos, resetPlayer } = usePlayer();
  const { stage, setStage } = useStage({ player, resetPlayer });

  const movePlayer = (direction: number) => {
    updatePlayerPos({ x: direction, y: 0, collided: false });
  };

  const startGame = () => {
    setStage(createStage());
    resetPlayer();
  };

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  };

  const dropPlayer = () => {
    drop();
  };
  const move = ({ keyCode }: { keyCode: number }) => {
    if (!gameOver) {
      if (keyCode === LEFT_KEYCODE) {
        movePlayer(MOVE_LEFT);
        return;
      }
      if (keyCode === RIGHT_KEYCODE) {
        movePlayer(MOVE_RIGHT);
        return;
      }
      if (keyCode === DOWN_KEYCODE) {
        dropPlayer();
        return;
      }
    }
  };

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex={0}
      onKeyDown={(event) => move(event)}
    >
      <StyledTetris>
        <Stage stage={stage as (string | number)[][][]} />
        <aside>
          {gameOver ? (
            <Display text="Score" gameOver="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;

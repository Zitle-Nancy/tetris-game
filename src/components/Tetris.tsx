import { useState } from "react";
import { Display, Stage, StartButton } from "./index";
import { StyledTetris, StyledTetrisWrapper } from "./styles";
import usePlayer from "../hooks/usePlayer";
import useStage from "../hooks/useStage";

// { callback }
const Tetris = () => {
  // @dropTime is about game speed
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage();

  return (
    <StyledTetrisWrapper>
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
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;

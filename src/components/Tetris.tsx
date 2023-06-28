import { createStage } from "../gameHelpers";
import { Display, Stage, StartButton } from "./index";
import { StyledTetris, StyledTetrisWrapper } from "./styles";

// { callback }
const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" gameOver={""} />
            <Display text="Rows" gameOver={""} />
            <Display text="Level" gameOver={""} />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;

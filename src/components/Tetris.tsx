import { Display, Stage, StartButton } from "./index";

// { callback }
const Tetris = () => {
  return (
    <>
      holis
      <Stage />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
      </aside>
      <StartButton />
    </>
  );
};

export default Tetris;

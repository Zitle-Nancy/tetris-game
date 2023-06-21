import Cell from "./Cell";

interface IStage {
  stage: Array<Array<Array<number | string>>>;
}

const Stage = ({ stage }: IStage) => {
  return (
    <div>
      {stage.map((row) =>
        row.map((cell, x) => {
          return <Cell key={x} type={cell[0]} />;
        })
      )}
    </div>
  );
};

export default Stage;

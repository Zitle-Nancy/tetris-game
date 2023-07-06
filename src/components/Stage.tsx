import Cell from "./Cell";
import { StyledStage } from "./styles";

interface IStage {
  stage: (string | number)[][][];
}

const Stage = ({ stage }: IStage) => {
  return (
    <StyledStage width={stage[0]?.length} height={stage?.length}>
      {stage.map((row) =>
        row.map((cell, x) => {
          return <Cell key={x} type={cell[0]} />;
        })
      )}
    </StyledStage>
  );
};

export default Stage;

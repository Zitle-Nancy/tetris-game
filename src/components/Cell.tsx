import { StyledCell } from "./styles";
import { TETROMINOS } from "../tetrominos";

// @TODO: remove any
const Cell = ({ type }: { type: any }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

export default Cell;

import { StyledDisplay } from "./styles";

const Display = ({ text, gameOver }: { text: string; gameOver: string }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;

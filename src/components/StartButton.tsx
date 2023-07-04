import { StyledStartButton } from "./styles";

const StartButton = ({ callback }: { callback: () => void }): JSX.Element => (
  <StyledStartButton onClick={callback}>Start game</StyledStartButton>
);

export default StartButton;

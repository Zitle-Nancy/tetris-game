import styled from "styled-components";

interface IStage {
  height: number;
  width: number;
}

export const StyledStage = styled.div<IStage>`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: solid 2px;
  width: 100%;
  max-width: 25vw;
  background: #111;
`;

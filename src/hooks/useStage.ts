import { Dispatch, SetStateAction, useState } from "react";
import { createStage } from "../gameHelpers";

const useStage = () => {
  const [stage, setStage] = useState<(string | number)[][][]>(createStage());

  return [stage, setStage];
}

export default useStage;
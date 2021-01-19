export interface Step {
  [step: string]: {
    description: string;
  };
}

export interface Act {
  [act: string]: Step;
}

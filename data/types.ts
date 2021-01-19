export interface Step {
  [step: number]: {
    description: string;
  };
}

export interface Act {
  [act: number]: Step;
}

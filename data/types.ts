export interface Step {
  [step: string]: {
    description: string;
    optional?: true;
    labyrinth?: true;
  };
}

export interface Act {
  [act: string]: Step;
}

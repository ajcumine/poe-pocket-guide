export interface Step {
  description: string;
  optional?: true;
  labyrinth?: true;
  passives?: true;
}

export interface Act {
  [step: string]: Step;
}

export interface Campaign {
  [actNo: string]: Act;
}

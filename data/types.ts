export interface Step {
  description: string;
  optional?: string;
  labyrinth?: true;
  passives?: true;
}

export interface Act {
  [step: string]: Step;
}

export interface Campaign {
  [actNo: string]: Act;
}

export interface ActNotes {
  [actNo: string]: string;
}

export interface BetrayalAgentEffect {
  effect: string;
  quality: 'great' | 'good' | 'neutral' | 'bad';
}

export interface BetrayalAgent {
  name: string;
  transportation: BetrayalAgentEffect;
  fortification: BetrayalAgentEffect;
  research: BetrayalAgentEffect;
  intervention: BetrayalAgentEffect;
}

export type Betrayal = Array<BetrayalAgent>;

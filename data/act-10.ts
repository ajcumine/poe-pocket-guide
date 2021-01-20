import { Step } from './types';

const actTen: Step = {
  1: { description: 'Enter the Cathedral Rooftop.' },
  2: {
    description:
      'Enter the Cathedral Apex, on the immediate left of entering the rooftop area.',
  },
  3: { description: 'Kill the Cultists and Gargoyles to free Bannon.' },
  4: {
    description:
      'Return to the Cathedral Rooftop and make your way to the right.',
  },
  5: { description: 'Enter the Ravaged Square.' },
  6: {
    description:
      'Head upwards until you encounter the Waypoint, and acquire it.',
  },
  7: {
    description:
      'These steps are both optional, and are both found in the Ossuary next to the Waypoint.',
  },
  8: {
    optional: true,
    labyrinth: true,
    description: 'Find the Labyrinth trial and complete it.',
  },
  9: {
    optional: true,
    description: 'Find the Elixir of Allure (rewards Respec points).',
  },
  10: { description: 'Enter the Torched Courts and proceed through the area.' },
  11: {
    description:
      'Enter the Desecrated Chambers, which has a similar layout to the Chambers of Innocence from Act V. Grab the immediate Waypoint.',
  },
  12: { description: 'Find and kill Avarius, Reassembled.' },
  13: { description: 'Return to the Oriath Docks using the Waypoint.' },
  14: {
    description:
      'Talk to Bannon, then talk to Lani to receive the Flask and Armor rewards.',
  },
  15: {
    optional: true,
    description:
      'Return to the Ravaged Square and head downwards to the bottom middle of the area. Enter the Control Blocks and find Vilenta, located roughly where the Miasmeter was in Act V. Kill Vilenta and return to town via logout or Portal. Talk to Lani to receive the Book of Skill reward.',
  },
  16: { description: 'Talk to Innocence.' },
  17: {
    description:
      'Return to the Ravaged Square and head upwards until you find Innocence. Speak with him.',
  },
  18: { description: 'Enter the Canals and proceed through the area.' },
  19: { description: 'Enter The Feeding Trough and proceed through the area.' },
  20: { description: 'Speak with Sin and enter the Altar of Hunger.' },
  21: { description: 'Kill Kitava.' },
  22: {
    description:
      'Speak with Lani in Oriath to receive the Book of Skill reward.',
  },
};

export default actTen;

import { Act } from './types';

const actOne: Act = {
  1: {
    description: 'Kill Hillock at the end of the Twilight Strand.',
  },
  2: {
    description:
      'Enter Lioneye’s Watch and talk to Tarkleigh to receive the reward.',
  },
  3: {
    description:
      'Enter the Coast and run to the end of the zone. Ensure you acquire the Waypoint. Enter the Mud Flats.',
  },
  4: {
    description:
      'Find the 3 Rhoa Nests. Once you have the Ammonite Glyph, Haliotis Glyph, and Roseus Glyph, find the glyph wall and open the exit to The Submerged Passage. Enter and grab the Waypoint.',
  },
  5: {
    description:
      'Take the Waypoint back to the Coast and enter the Tidal Island to the right. Run straight to Hailrake and kill him. Logout and turn the quest in with Nessa. Ensure you choose the Quicksilver Flask.',
    optional:
      'provides a Quicksilver Flask and makes some skill gems purchasable',
  },
  6: { description: 'Talk to Tarkleigh for the gem reward.' },
  7: { description: 'Take the Waypoint to the Submerged Passage.' },
  8: { description: 'Find the exit to the Ledge.' },
  9: {
    description: 'Grab the Waypoint and continue on to the exit to the Climb.',
  },
  10: {
    description:
      'Run all the way through the Climb, grabbing the Waypoint if you come across it.',
  },
  11: { description: 'Enter the Lower Prison and grab the Waypoint.' },
  12: {
    description:
      'Take the Waypoint to the Submerged Passage. If you were quick enough, your original instance should be open.',
  },
  13: {
    description:
      'Find the entrance to the Flooded Depths. Generally this is towards the bottom part of the map.',
  },
  14: { description: 'Kill the Deep Dweller, then logout.' },
  15: {
    passives: true,
    description:
      'Talk to Tarkleigh for the Book of Skill, then take the Waypoint to the Lower Prison.',
  },
  16: {
    labyrinth: true,
    description: 'Find the Labyrinth Trial and complete it.',
  },
  17: { description: 'Locate the exit to the Upper Prison.' },
  18: {
    description:
      'Find the exit to the Warden’s Quarter’s, and immediately make your way to the Warden’s Chambers.',
  },
  19: {
    description:
      'Kill Brutus. Exit to Prisoner’s Gate and take the Waypoint back to Lioneye’s Watch.',
  },
  20: { description: 'Talk to Tarkleigh to receive the gem reward.' },
  21: { description: 'Take the Waypoint back to Prisoner’s Gate.' },
  22: { description: 'Exit into the Ship Graveyard.' },
  23: {
    description:
      'Grab the Waypoint, always located near the entrance of the zone.',
  },
  24: { description: 'Locate the Ship Graveyard Cave and enter it.' },
  25: {
    description: 'Retrieve the Allflame and exit back into the Ship Graveyard.',
  },
  26: {
    description:
      'Find the exit into the Cavern of Wrath and acquire the Waypoint.',
  },
  27: { description: 'Take the Waypoint back to the Ship Graveyard.' },
  28: {
    description:
      'Talk to Fairgraves and kill him. He is always located very near to the Waypoint.',
  },
  29: {
    description:
      'Either logout, or take the Waypoint back to Lioneye’s Watch. Talk to Bestel to receive the Book of Skill.',
  },
  30: { description: 'Speak to Nessa for the gem reward.' },
  31: { description: 'Take the Waypoint to the Cavern of Wrath.' },
  32: { description: 'Exit into the Cavern of Anger.' },
  33: { description: 'Exit into Merveil’s Lair.' },
  34: { description: 'Kill Merveil and enter the Southern Forest.' },
  35: {
    description: 'Run through the zone and enter the Forest Encampment.',
  },
};

export default actOne;

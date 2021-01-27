import { Betrayal, BetrayalAgent } from './types';

const aisling: BetrayalAgent = {
  name: 'Aisling',
  transportation: {
    effect: 'double veiled weapons and jewellery',
    quality: 'neutral',
  },
  fortification: {
    effect: 'double veiled armour and jewellery',
    quality: 'neutral',
  },
  research: { effect: 'add veiled mods', quality: 'neutral' },
  intervention: { effect: 'metamorph scarab', quality: 'good' },
};

const camiera: BetrayalAgent = {
  name: 'Camiera',
  transportation: { effect: 'timeworn unique', quality: 'great' },
  fortification: { effect: 'harbinger orbs', quality: 'good' },
  research: { effect: 'sextants', quality: 'good' },
  intervention: { effect: 'sulphite scarab', quality: 'great' },
};

const elreon: BetrayalAgent = {
  name: 'Elreon',
  transportation: { effect: 'unique weapon', quality: 'neutral' },
  fortification: { effect: 'unique armour', quality: 'neutral' },
  research: { effect: 'unique jewellery', quality: 'neutral' },
  intervention: { effect: 'reliquary scarab', quality: 'neutral' },
};

const gravicius: BetrayalAgent = {
  name: 'Gravicius',
  transportation: { effect: 'full stack divination cards', quality: 'good' },
  fortification: { effect: 'random divination cards', quality: 'neutral' },
  research: { effect: 'swap divination card', quality: 'bad' },
  intervention: { effect: 'divination scarab', quality: 'great' },
};

const guff: BetrayalAgent = {
  name: 'Guff',
  transportation: { effect: 'craft chaos spam', quality: 'neutral' },
  fortification: { effect: 'craft essence spam', quality: 'neutral' },
  research: { effect: 'craft annul/exalt spam', quality: 'neutral' },
  intervention: { effect: 'craft alteration spam', quality: 'neutral' },
};

const haku: BetrayalAgent = {
  name: 'Haku',
  transportation: { effect: 'rare items', quality: 'bad' },
  fortification: { effect: 'random strongbox', quality: 'bad' },
  research: { effect: 'rare items /w quality', quality: 'bad' },
  intervention: { effect: 'strongbox scarab', quality: 'neutral' },
};

const hillock: BetrayalAgent = {
  name: 'Hillock',
  transportation: { effect: 'weapon quality', quality: 'good' },
  fortification: { effect: 'armour quality', quality: 'good' },
  research: { effect: 'flask quality', quality: 'neutral' },
  intervention: { effect: 'map quality', quality: 'neutral' },
};

const itthatfled: BetrayalAgent = {
  name: 'It That Fled',
  transportation: { effect: 'breach splinters', quality: 'neutral' },
  fortification: { effect: 'abyss jewels', quality: 'neutral' },
  research: { effect: 'upgrade breachstone', quality: 'great' },
  intervention: { effect: 'breach scarab', quality: 'great' },
};

const janus: BetrayalAgent = {
  name: 'Janus',
  transportation: { effect: 'quality currency', quality: 'neutral' },
  fortification: { effect: 'currency shards', quality: 'good' },
  research: { effect: 'perandus coins', quality: 'neutral' },
  intervention: { effect: 'perandus scarab', quality: 'neutral' },
};

const jorgin: BetrayalAgent = {
  name: 'Jorgin',
  transportation: { effect: 'talismans', quality: 'neutral' },
  fortification: { effect: 'items with bestiary affixes', quality: 'neutral' },
  research: { effect: 'amulet to talisman', quality: 'neutral' },
  intervention: { effect: 'bestiary scarab', quality: 'great' },
};

const korell: BetrayalAgent = {
  name: 'Korell',
  transportation: { effect: 'essences', quality: 'neutral' },
  fortification: { effect: 'map fragments', quality: 'good' },
  research: { effect: 'fossils', quality: 'good' },
  intervention: { effect: 'elder scarab', quality: 'great' },
};

const leo: BetrayalAgent = {
  name: 'Leo',
  transportation: { effect: 'silver coins', quality: 'neutral' },
  fortification: { effect: 'random currency', quality: 'good' },
  research: { effect: 'use currency on item', quality: 'good' },
  intervention: { effect: 'torment scarab', quality: 'neutral' },
};

const riker: BetrayalAgent = {
  name: 'Riker',
  transportation: { effect: 'take one currency', quality: 'good' },
  fortification: { effect: 'take one unique', quality: 'neutral' },
  research: { effect: 'take one veiled rare', quality: 'bad' },
  intervention: { effect: 'take one divination card', quality: 'good' },
};

const rin: BetrayalAgent = {
  name: 'Rin',
  transportation: { effect: 'normal maps', quality: 'neutral' },
  fortification: { effect: 'rare maps', quality: 'neutral' },
  research: { effect: 'unique maps', quality: 'neutral' },
  intervention: { effect: 'cartography scarab', quality: 'great' },
};

const tora: BetrayalAgent = {
  name: 'Tora',
  transportation: { effect: 'timed take one item', quality: 'good' },
  fortification: { effect: 'enchanted item', quality: 'neutral' },
  research: { effect: 'gem experience', quality: 'great' },
  intervention: { effect: 'harbinger scarab', quality: 'great' },
};

const vagan: BetrayalAgent = {
  name: 'Vagan',
  transportation: { effect: 'legion splinters', quality: 'good' },
  fortification: { effect: 'legion chests', quality: 'good' },
  research: { effect: 'incubators', quality: 'good' },
  intervention: { effect: 'legion scarab', quality: 'great' },
};

const vorici: BetrayalAgent = {
  name: 'Vorici',
  transportation: { effect: 'gems /w quality', quality: 'neutral' },
  fortification: { effect: 'socket currency', quality: 'neutral' },
  research: { effect: 'white sockets', quality: 'good' },
  intervention: { effect: 'shaper scarab', quality: 'good' },
};

const betrayalData: Betrayal = [
  aisling,
  camiera,
  elreon,
  gravicius,
  guff,
  haku,
  hillock,
  itthatfled,
  janus,
  jorgin,
  korell,
  leo,
  riker,
  rin,
  tora,
  vagan,
  vorici,
];

export default betrayalData;

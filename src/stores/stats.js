import {
  DEFAULT_POINT_COUNT,
  DEFAULT_STAT_VALUE,
  DEFAULT_MAX_STAT,
  defaultPointBuySchema,
} from '../constants';
import { writable, derived } from 'svelte/store';

// better validation/point cost method would be to upload a pointbuy scheme
// but I'm going to disregard that for this example

function validateStatValue(stat) {
  console.log(stat)

  if (Number.isNaN(stat) || stat < 8) {
    return 8;
  }

  if (stat > 15) {
    return 15;
  }

  console.log('passed validation', stat)

  return stat;
}

function createStatStore() {
  const { set, update, subscribe } = writable(DEFAULT_STAT_VALUE);

  return {
    subscribe,
    increment: () => update(n => validateStatValue(n + 1)),
    decrement: () => update(n => validateStatValue(n - 1)),
    reset: () => set(DEFAULT_STAT_VALUE),
    max: () => set(DEFAULT_MAX_STAT),
    set: value => set(validateStatValue(value)),
  };
}
// create a custom store to add validation into increment/update/set methods
export const STR = createStatStore(DEFAULT_STAT_VALUE);
export const DEX = createStatStore(DEFAULT_STAT_VALUE);
export const CON = createStatStore(DEFAULT_STAT_VALUE);
export const WIS = createStatStore(DEFAULT_STAT_VALUE);
export const INT = createStatStore(DEFAULT_STAT_VALUE);
export const CHR = createStatStore(DEFAULT_STAT_VALUE);

export const stats = [
  ['STR', STR],
  ['DEX', DEX],
  ['CON', CON],
  ['WIS', WIS],
  ['INT', INT],
  ['CHR', CHR],
]


// points should be a derived store from stats and schema
// normally get schema, but for example just using default schema
export const pointsRemaining = derived(
  [STR, DEX, CON, WIS, INT, CHR],
  ([$STR, $DEX, $CON, $WIS, $INT, $CHR]) =>
    DEFAULT_POINT_COUNT
    - defaultPointBuySchema[$STR]
    - defaultPointBuySchema[$DEX]
    - defaultPointBuySchema[$CON]
    - defaultPointBuySchema[$WIS]
    - defaultPointBuySchema[$INT]
    - defaultPointBuySchema[$CHR]
);


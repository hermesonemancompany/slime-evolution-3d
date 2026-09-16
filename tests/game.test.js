import { describe, expect, it } from 'vitest';
import { canEat, chooseTarget, createLevelConfig, getStarSpeed, nextLevelState } from '../src/game/rules.js';

describe('slime evolution rules', () => {
  it('only eats weaker targets', () => {
    expect(canEat(4, 3)).toBe(true);
    expect(canEat(4, 4)).toBe(false);
    expect(canEat(4, 5)).toBe(false);
  });

  it('scales movement speed gently with stars', () => {
    expect(getStarSpeed(1)).toBeLessThan(getStarSpeed(5));
    expect(getStarSpeed(5)).toBeLessThan(4);
  });

  it('hunters pursue weaker targets and flee stronger ones', () => {
    expect(chooseTarget({ stars: 3 }, [{ stars: 1, id: 'prey' }, { stars: 4, id: 'threat' }])).toEqual({ type: 'pursue', id: 'prey' });
    expect(chooseTarget({ stars: 3 }, [{ stars: 4, id: 'threat' }])).toEqual({ type: 'flee', id: 'threat' });
    expect(chooseTarget({ stars: 3 }, [])).toEqual({ type: 'wander' });
  });

  it('defines a progressively harder ten-level campaign', () => {
    const first = createLevelConfig(1);
    const last = createLevelConfig(10);
    expect(first.creatures).toBeLessThan(last.creatures);
    expect(first.hazard).not.toBe(last.hazard);
    expect(last.bossStars).toBeGreaterThan(first.bossStars);
  });

  it('carries growth and unlock state between levels', () => {
    expect(nextLevelState({ level: 2, stars: 4, eaten: 7 })).toEqual({ level: 3, stars: 4, eaten: 0 });
  });
});

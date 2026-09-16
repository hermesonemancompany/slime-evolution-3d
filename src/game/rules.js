export const LEVELS = [
  ['Verdant Cradle', 'mist', 7, 2, 1], ['Crystal Caves', 'crystal', 9, 3, 2], ['Ember Basin', 'ember', 11, 4, 3],
  ['Mosswood Canopy', 'moss', 13, 5, 4], ['Moonlit Marsh', 'marsh', 15, 6, 5], ['Storm Shelf', 'storm', 17, 7, 6],
  ['Sunken Ruins', 'ruins', 19, 8, 7], ['Frostglass Ridge', 'frost', 21, 9, 8], ['Void Garden', 'void', 23, 10, 9], ['Crown of Titans', 'crown', 26, 12, 11]
];
export const canEat = (playerStars, targetStars) => targetStars < playerStars;
export const getStarSpeed = (stars) => 1.15 + Math.min(stars, 12) * 0.19;
export function chooseTarget(self, nearby) {
  const prey = nearby.filter((item) => item.stars < self.stars).sort((a, b) => a.stars - b.stars)[0];
  if (prey) return { type: 'pursue', id: prey.id };
  const threat = nearby.filter((item) => item.stars > self.stars).sort((a, b) => b.stars - a.stars)[0];
  if (threat) return { type: 'flee', id: threat.id };
  return { type: 'wander' };
}
export function createLevelConfig(level) {
  const row = LEVELS[Math.max(1, Math.min(10, level)) - 1];
  return { level, name: row[0], theme: row[1], creatures: row[2], bossStars: row[3], hazard: row[4] };
}
export const nextLevelState = ({ level, stars }) => ({ level: Math.min(10, level + 1), stars, eaten: 0 });

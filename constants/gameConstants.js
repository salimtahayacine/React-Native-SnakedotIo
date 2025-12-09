// Game configuration constants
export const GAME_CONFIG = {
  GRID_SIZE: 20,
  CELL_SIZE: 15,
  INITIAL_SPEED: 150,
  MIN_SPEED: 50,
  SPEED_INCREMENT: 5,
};

export const DIRECTIONS = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
};

export const COLORS = {
  SNAKE: '#4CAF50',
  FOOD: '#FF5252',
  BACKGROUND: '#000000',
  GRID: '#111111',
  TEXT: '#FFFFFF',
};

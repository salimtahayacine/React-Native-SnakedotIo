import { GAME_CONFIG } from '../constants/gameConstants';

// Check if two positions are equal
export const positionEqual = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
};

// Check if snake has collided with itself
export const checkSelfCollision = (head, body) => {
  return body.some(segment => positionEqual(segment, head));
};

// Check if snake has collided with walls
export const checkWallCollision = (head) => {
  return (
    head.x < 0 ||
    head.x >= GAME_CONFIG.GRID_SIZE ||
    head.y < 0 ||
    head.y >= GAME_CONFIG.GRID_SIZE
  );
};

// Generate random position for food
export const generateFood = (snake) => {
  let food;
  let validPosition = false;

  while (!validPosition) {
    food = {
      x: Math.floor(Math.random() * GAME_CONFIG.GRID_SIZE),
      y: Math.floor(Math.random() * GAME_CONFIG.GRID_SIZE),
    };

    // Make sure food doesn't spawn on snake
    validPosition = !snake.some(segment => positionEqual(segment, food));
  }

  return food;
};

// Calculate new snake position
export const moveSnake = (snake, direction) => {
  const head = snake[0];
  const newHead = {
    x: head.x + direction.x,
    y: head.y + direction.y,
  };

  return [newHead, ...snake.slice(0, -1)];
};

// Grow the snake
export const growSnake = (snake, direction) => {
  const head = snake[0];
  const newHead = {
    x: head.x + direction.x,
    y: head.y + direction.y,
  };

  return [newHead, ...snake];
};

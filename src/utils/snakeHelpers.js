export const GRID = 16;
export const CAN_SIZE = 336;
export const FOOD_TARGET = 10;

export const getRandomFoodPosition = () => ({
  x: Math.floor(Math.random() * (CAN_SIZE / GRID)) * GRID,
  y: Math.floor(Math.random() * (CAN_SIZE / GRID)) * GRID,
});

export const checkCollision = (head, snake) => {
  return (
    head.x < 0 ||
    head.y < 0 ||
    head.x >= CAN_SIZE ||
    head.y >= CAN_SIZE ||
    snake.some((s) => s.x === head.x && s.y === head.y)
  );
};

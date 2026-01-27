import { useEffect, useRef, useState, useCallback } from "react";
import {
  GRID,
  CAN_SIZE,
  FOOD_TARGET,
  getRandomFoodPosition,
  checkCollision,
} from "../utils/snakeHelpers";

export const useSnakeGame = () => {
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState("start");
  const [foodCount, setFoodCount] = useState(0);

  const snakeRef = useRef([]);
  const dirRef = useRef({ x: 0, y: -GRID });
  const foodRef = useRef({});
  const loopRef = useRef(null);
  const foodCountRef = useRef(0);

  const endGame = useCallback((type) => {
    if (loopRef.current) {
      clearInterval(loopRef.current);
      loopRef.current = null;
    }
    setGameState(type);
  }, []);

  const gameLoop = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");

    const head = {
      x: snakeRef.current[0].x + dirRef.current.x,
      y: snakeRef.current[0].y + dirRef.current.y,
    };

    if (checkCollision(head, snakeRef.current)) {
      endGame("lose");
      return;
    }

    snakeRef.current.unshift(head);

    if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
      foodCountRef.current += 1;
      setFoodCount(foodCountRef.current);

      if (foodCountRef.current >= FOOD_TARGET) {
        endGame("win");
        return;
      }
      foodRef.current = getRandomFoodPosition();
    } else {
      snakeRef.current.pop();
    }

    ctx.clearRect(0, 0, CAN_SIZE, CAN_SIZE);

    ctx.fillStyle = "#43D9AD";
    snakeRef.current.forEach((s, index) => {
      ctx.globalAlpha = 1 - index / (snakeRef.current.length + 8);
      ctx.fillRect(s.x, s.y, GRID - 1, GRID - 1);
    });

    ctx.globalAlpha = 1.0;
    ctx.fillStyle = "#43D9AD";
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#43D9AD";
    ctx.beginPath();
    ctx.arc(
      foodRef.current.x + GRID / 2,
      foodRef.current.y + GRID / 2,
      GRID / 3,
      0,
      2 * Math.PI,
    );
    ctx.fill();
    ctx.shadowBlur = 0;
  };

  const startGame = useCallback(() => {
    snakeRef.current = [
      { x: 160, y: 160 },
      { x: 160, y: 160 + GRID },
      { x: 160, y: 160 + GRID * 2 },
    ];
    dirRef.current = { x: 0, y: -GRID };
    foodRef.current = getRandomFoodPosition();
    foodCountRef.current = 0;
    setFoodCount(0);
    setGameState("playing");

    if (loopRef.current) clearInterval(loopRef.current);
    loopRef.current = setInterval(gameLoop, 100);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (gameState !== "playing") return;

      const { x, y } = dirRef.current;
      if ((e.key === "ArrowUp" || e.key === "w") && y === 0)
        dirRef.current = { x: 0, y: -GRID };
      if ((e.key === "ArrowDown" || e.key === "s") && y === 0)
        dirRef.current = { x: 0, y: GRID };
      if ((e.key === "ArrowLeft" || e.key === "a") && x === 0)
        dirRef.current = { x: -GRID, y: 0 };
      if ((e.key === "ArrowRight" || e.key === "d") && x === 0)
        dirRef.current = { x: GRID, y: 0 };
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gameState]);

  useEffect(() => {
    return () => {
      if (loopRef.current) clearInterval(loopRef.current);
    };
  }, []);

  return {
    canvasRef,
    gameState,
    foodCount,
    startGame,
  };
};

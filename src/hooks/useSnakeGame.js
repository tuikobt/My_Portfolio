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

  const endGame = useCallback((type) => {
    if (loopRef.current) clearInterval(loopRef.current);
    setGameState(type);
  }, []);

  const startGame = useCallback(() => {
    snakeRef.current = [
      { x: 120, y: 192 },
      { x: 120, y: 204 },
      { x: 120, y: 216 },
    ];
    dirRef.current = { x: 0, y: -GRID };
    foodRef.current = getRandomFoodPosition();
    setFoodCount(0);
    setGameState("playing");

    if (loopRef.current) clearInterval(loopRef.current);
    loopRef.current = setInterval(gameLoop, 90);
  }, []);

  const gameLoop = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, CAN_SIZE, CAN_SIZE);

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
      setFoodCount((prev) => {
        const newCount = prev + 1;
        if (newCount === FOOD_TARGET) endGame("win");
        return newCount;
      });
      foodRef.current = getRandomFoodPosition();
    } else {
      snakeRef.current.pop();
    }

    // Vẽ Rắn
    ctx.fillStyle = "#43D9AD";
    snakeRef.current.forEach((s, index) => {
      ctx.globalAlpha = 1 - index / (snakeRef.current.length + 8);
      ctx.fillRect(s.x, s.y, GRID, GRID);
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

  useEffect(() => {
    const handleKey = (e) => {
      if (gameState !== "playing") return;
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)
      ) {
        e.preventDefault();
      }

      const { x, y } = dirRef.current;
      if (e.key === "ArrowUp" && y === 0) dirRef.current = { x: 0, y: -GRID };
      if (e.key === "ArrowDown" && y === 0) dirRef.current = { x: 0, y: GRID };
      if (e.key === "ArrowLeft" && x === 0) dirRef.current = { x: -GRID, y: 0 };
      if (e.key === "ArrowRight" && x === 0) dirRef.current = { x: GRID, y: 0 };
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gameState]);

  useEffect(() => {
    if (gameState === "start" && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, CAN_SIZE, CAN_SIZE);
    }
  }, [gameState]);

  return {
    canvasRef,
    gameState,
    foodCount,
    startGame,
  };
};

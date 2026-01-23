import React, { useEffect, useRef, useState } from "react";

const GRID = 12; // Tăng grid một chút cho cân đối
const CAN_SIZE = 312; // Tăng kích thước màn game (chia hết cho 12)
const FOOD_TARGET = 10;

export default function SnakeGame() {
  const canvasRef = useRef(null);
  const [state, setState] = useState("start");
  const [foodCount, setFoodCount] = useState(0);

  const snakeRef = useRef([]);
  const dirRef = useRef({ x: 0, y: -GRID });
  const foodRef = useRef({});
  const loopRef = useRef(null);

  const randomFood = () => ({
    x: Math.floor(Math.random() * (CAN_SIZE / GRID)) * GRID,
    y: Math.floor(Math.random() * (CAN_SIZE / GRID)) * GRID,
  });

  const startGame = () => {
    snakeRef.current = [
      { x: 120, y: 192 },
      { x: 120, y: 204 },
      { x: 120, y: 216 },
    ];
    dirRef.current = { x: 0, y: -GRID };
    foodRef.current = randomFood();
    setFoodCount(0);
    setState("playing");

    if (loopRef.current) clearInterval(loopRef.current);
    loopRef.current = setInterval(update, 90);
  };

  const endGame = (type) => {
    clearInterval(loopRef.current);
    setState(type);
  };

  const update = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, CAN_SIZE, CAN_SIZE);

    const head = {
      x: snakeRef.current[0].x + dirRef.current.x,
      y: snakeRef.current[0].y + dirRef.current.y,
    };

    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= CAN_SIZE ||
      head.y >= CAN_SIZE ||
      snakeRef.current.some((s) => s.x === head.x && s.y === head.y)
    ) {
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
      foodRef.current = randomFood();
    } else {
      snakeRef.current.pop();
    }

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
      if (state !== "playing") return;
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1
      ) {
        e.preventDefault();
      }
      if (e.key === "ArrowUp" && dirRef.current.y === 0)
        dirRef.current = { x: 0, y: -GRID };
      if (e.key === "ArrowDown" && dirRef.current.y === 0)
        dirRef.current = { x: 0, y: GRID };
      if (e.key === "ArrowLeft" && dirRef.current.x === 0)
        dirRef.current = { x: -GRID, y: 0 };
      if (e.key === "ArrowRight" && dirRef.current.x === 0)
        dirRef.current = { x: GRID, y: 0 };
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [state]);

  useEffect(() => {
    if (state === "start" && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, CAN_SIZE, CAN_SIZE);
    }
  }, [state]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center font-mono p-4 relative overflow-hidden">
      <div
        className="relative z-10 flex flex-col md:flex-row gap-6 p-6 md:p-8
                      bg-[#011627]/80 backdrop-blur-md 
                      border border-white/10 rounded-xl shadow-2xl
                      h-[600px] max-h-[80vh]"
      >
        <Screw className="top-3 left-3 opacity-60" />
        <Screw className="top-3 right-3 opacity-60" />
        <Screw className="bottom-3 left-3 opacity-60" />
        <Screw className="bottom-3 right-3 opacity-60" />
        <div className="relative h-full bg-[#010C15]/80 rounded-lg shadow-inner border border-[#1E2D3D] flex items-center justify-center">
          <canvas
            ref={canvasRef}
            width={CAN_SIZE}
            height={CAN_SIZE}
            className="block rounded-lg"
          />

          {state === "start" && (
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <button
                onClick={startGame}
                className="bg-[#FEA55F] text-[#010C15] hover:bg-[#ffb67f] px-8 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-orange-500/20 transform transition hover:-translate-y-1"
              >
                start-game
              </button>
            </div>
          )}

          {state === "lose" && (
            <div className="absolute inset-x-0 bottom-12 bg-[#011627]/95 py-5 flex flex-col items-center border-y border-[#1E2D3D] backdrop-blur-sm">
              <h2 className="text-[#43D9AD] text-2xl mb-3 font-medium">
                GAME OVER!
              </h2>
              <button
                onClick={startGame}
                className="text-[#607B96] hover:text-white text-sm transition-colors"
              >
                start-again
              </button>
            </div>
          )}

          {state === "win" && (
            <div className="absolute inset-x-0 bottom-12 bg-[#011627]/95 py-5 flex flex-col items-center border-y border-[#1E2D3D] backdrop-blur-sm">
              <h2 className="text-[#43D9AD] text-2xl mb-3 font-medium">
                WELL DONE!
              </h2>
              <button
                onClick={startGame}
                className="text-[#607B96] hover:text-white text-sm transition-colors"
              >
                play-again
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col h-full justify-between select-none min-w-[180px]">
          <div className="space-y-6">
            {/* Hướng dẫn */}
            <div className="bg-[#01121d]/60 p-4 rounded-lg border border-[#1E2D3D]/50 backdrop-blur-sm">
              <p className="text-white text-xs mb-1">// use keyboard</p>
              <p className="text-white text-xs mb-3">// arrows to play</p>
              <div className="grid grid-cols-3 gap-1.5 w-fit mx-auto scale-110 p-2">
                <div />
                <ArrowKey>▲</ArrowKey>
                <div />
                <ArrowKey>◀</ArrowKey>
                <ArrowKey>▼</ArrowKey>
                <ArrowKey>▶</ArrowKey>
              </div>
            </div>

            <div className="px-2">
              <p className="text-white text-xs mb-3">// food left</p>
              <div className="grid grid-cols-5 gap-3">
                {Array.from({ length: FOOD_TARGET }).map((_, i) => {
                  const isActive = i < FOOD_TARGET - foodCount;
                  return (
                    <div
                      key={i}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[#43D9AD] shadow-[0_0_8px_#43D9AD] opacity-100"
                          : "bg-[#1E2D3D] opacity-30"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button className="text-[#607B96] border border-[#607B96] rounded-lg px-5 py-2 text-sm hover:text-white hover:border-white hover:bg-white/5 transition-all w-fit">
              skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const ArrowKey = ({ children }) => (
  <div className="w-8 h-7 bg-[#010C15] border border-[#1E2D3D] rounded flex items-center justify-center text-[#607B96] text-xs shadow-sm hover:border-white/40 hover:text-white transition-colors cursor-pointer">
    {children}
  </div>
);

const Screw = ({ className }) => (
  <div
    className={`absolute w-3 h-3 rounded-full bg-[#15232d] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.6)] flex items-center justify-center ${className}`}
  >
    <div className="text-[#2a3b4c] text-[8px] leading-none">+</div>
  </div>
);

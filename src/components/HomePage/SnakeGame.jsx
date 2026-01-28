/*import React from "react";
import { useSnakeGame } from "../../hooks/useSnakeGame";
import { CAN_SIZE, FOOD_TARGET } from "../../utils/snakeHelpers";

export default function SnakeGame({ handleSkip }) {
  const { canvasRef, gameState, foodCount, startGame } = useSnakeGame();

  return (
    <div className="w-full flex items-center justify-center font-mono relative overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row gap-6 p-6 md:p-8 bg-[#011627]/80 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl h-[600px] max-h-[80vh]">
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

          {gameState === "start" && (
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <button
                onClick={startGame}
                className="bg-[#FEA55F] text-[#010C15] hover:bg-[#ffb67f] px-8 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-orange-500/20 transform transition hover:-translate-y-1"
              >
                start-game
              </button>
            </div>
          )}

          {(gameState === "lose" || gameState === "win") && (
            <div className="absolute inset-x-0 bottom-12 bg-[#011627]/95 py-5 flex flex-col items-center border-y border-[#1E2D3D] backdrop-blur-sm">
              <h2 className="text-[#43D9AD] text-2xl mb-3 font-medium">
                {gameState === "lose" ? "GAME OVER!" : "WELL DONE!"}
              </h2>
              <button
                onClick={startGame}
                className="text-[#607B96] hover:text-white text-sm transition-colors"
              >
                {gameState === "lose" ? "start-again" : "play-again"}
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col h-full justify-between select-none min-w-[180px]">
          <div className="space-y-6">
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
            <button
              className="text-[#607B96] border border-[#607B96] rounded-lg px-5 py-2 text-sm hover:text-white hover:border-white hover:bg-white/5 transition-all w-fit"
              onClick={handleSkip}
            >
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
);*/
import React from "react";
import { useSnakeGame } from "../../hooks/useSnakeGame";
import { CAN_SIZE, FOOD_TARGET } from "../../utils/snakeHelpers";

export default function SnakeGame({ handleSkip }) {
  const { canvasRef, gameState, foodCount, startGame } = useSnakeGame();

  return (
    <div className="w-full h-[600px] flex items-center justify-center font-mono relative overflow-hidden">
      {/* Thêm h-[600px] cố định */}

      <div className="relative z-10 flex flex-col md:flex-row gap-6 p-6 md:p-8 bg-[#011627]/80 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl h-full max-h-full">
        {/* Đổi h-[600px] max-h-[80vh] → h-full max-h-full */}

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

          {gameState === "start" && (
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <button
                onClick={startGame}
                className="bg-[#FEA55F] text-[#010C15] hover:bg-[#ffb67f] px-8 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-orange-500/20 transform transition hover:-translate-y-1"
              >
                start-game
              </button>
            </div>
          )}

          {(gameState === "lose" || gameState === "win") && (
            <div className="absolute inset-x-0 bottom-12 bg-[#011627]/95 py-5 flex flex-col items-center border-y border-[#1E2D3D] backdrop-blur-sm">
              <h2 className="text-[#43D9AD] text-2xl mb-3 font-medium">
                {gameState === "lose" ? "GAME OVER!" : "WELL DONE!"}
              </h2>
              <button
                onClick={startGame}
                className="text-[#607B96] hover:text-white text-sm transition-colors"
              >
                {gameState === "lose" ? "start-again" : "play-again"}
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col h-full justify-between select-none min-w-[180px]">
          <div className="space-y-6">
            {/* Instructions */}
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
            <button
              className="text-[#607B96] border border-[#607B96] rounded-lg px-5 py-2 text-sm hover:text-white hover:border-white hover:bg-white/5 transition-all w-fit"
              onClick={handleSkip}
            >
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

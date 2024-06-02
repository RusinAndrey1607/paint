import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import React, { FC, useEffect, useRef } from "react";
import { canvasActions } from "../model/slice/CanvasSlice";

type LocalCanvasProps = {};

export const LocalCanvas: FC<LocalCanvasProps> = () => {
  const canvasRef = useRef(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (canvasRef.current) {
      dispatch(canvasActions.setCanvas(canvasRef.current));
    }
  }, []);
  return (
    <div className="flex justify-center">
      <canvas className="bg-white border border-black " ref={canvasRef} width={800} height={600}></canvas>
    </div>
  );
};

import { createAsyncThunk } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

export const loadImage = createAsyncThunk(
  'canvas/loadImage',
  async (dataUrl: string, { getState }) => {
    const { canvas, context } = (getState() as StateSchema).canvas;
    if (canvas && context) {
      const img = new Image();
      img.src = dataUrl;
      await new Promise(resolve => {
        img.onload = resolve;
      });
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }
);
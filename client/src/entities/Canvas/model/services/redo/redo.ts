import { createAsyncThunk } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { canvasActions } from "../../slice/CanvasSlice";
import { loadImage } from "../loadImage/loadImage";

export const redo = createAsyncThunk(
    'canvas/redo',
    async (_, { dispatch, getState }) => {
      const state = getState() as StateSchema;
      const canvas = state.canvas.canvas;
      const redoList = state.canvas.redoList;
  
      if (canvas && redoList.length > 0) {
        const dataUrl = redoList[redoList.length - 1];
        dispatch(canvasActions.pushToUndo(canvas.toDataURL()));
        await dispatch(loadImage(dataUrl));
        dispatch(canvasActions.removeFromRedo());
      }
    }
  );
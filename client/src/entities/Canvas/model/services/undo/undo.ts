import { createAsyncThunk } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { canvasActions } from "../../slice/CanvasSlice";
import { loadImage } from "../loadImage/loadImage";
import { clearCanvas } from "../clearCanvas/clearCanvas";

export const undo = createAsyncThunk(
    'canvas/undo',
    async (_, { dispatch, getState }) => {
      const state = getState() as StateSchema;
      const canvas = state.canvas.canvas;
      const undoList = state.canvas.undoList;
  
      if (canvas && undoList.length > 0) {
        const dataUrl = undoList[undoList.length - 1];
        dispatch(canvasActions.pushToRedo(canvas.toDataURL()));
        await dispatch(loadImage(dataUrl));
        dispatch(canvasActions.removeFromUndo());
      } else if (canvas) {
        dispatch(clearCanvas());
      }
    }
  );
import { canvasReducer } from "./model/slice/CanvasSlice";
import { CanvasSchema } from "./model/types/CanvasSchema";
import {RemoteCanvas} from "./ui/RemoteCanvas";
import {LocalCanvas} from "./ui/LocalCanvas";

export { canvasReducer, type CanvasSchema, RemoteCanvas, LocalCanvas };

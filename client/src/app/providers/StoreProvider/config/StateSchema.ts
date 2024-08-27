import { CanvasSchema } from 'entities/Canvas/';
import type { AuthSchema } from 'features/Auth';

export interface StateSchema {
  auth: AuthSchema;
  canvas: CanvasSchema;
}

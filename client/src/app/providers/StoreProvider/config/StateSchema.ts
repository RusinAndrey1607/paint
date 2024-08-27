import { AuthSchema } from 'entities/Auth/';
import { CanvasSchema } from 'entities/Canvas/';

export interface StateSchema {
  auth: AuthSchema;
  canvas: CanvasSchema;
}

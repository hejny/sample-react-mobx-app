import { IVector3 } from './IVectors';
import { ICorners } from './ICorners';
import { IController } from './IController';

export interface IAppState {
    name: string;
    corners: ICorners | null;
    calibrationProgress: IVector3[];
}

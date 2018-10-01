import { ICorners } from './../model/ICorners';
import { IFrame } from '../model/IAppState';
import { IVector2 } from '../model/IVectors';

export function convertSceneVectorToWallVector(
    frame: IFrame,
    corners: ICorners,
):IVector2{
    return {
        x: ((frame.position.x * 100 + 250) / 600 - 0.5) * 4 + 0.5 + 0.2,
        y: (((3 - frame.position.y) * 100 + 200) / 600 - 0.5) * 4 + 0.5 + 0.3,
    };
}

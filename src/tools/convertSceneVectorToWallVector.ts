import { ICorners } from './../model/ICorners';
import { IVector3 } from '../model/IVectors';

export function convertSceneVectorToWallVector(
    sceneVector: IVector3,
    corners: ICorners,
) {
    return {
        x: ((sceneVector.x * 100 + 250) / 600 - 0.5) * 4 + 0.5 + 0.2,
        y: (((3 - sceneVector.y) * 100 + 200) / 600 - 0.5) * 4 + 0.5 + 0.3,
    };
}

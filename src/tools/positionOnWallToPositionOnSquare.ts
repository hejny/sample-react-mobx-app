import { ICorners } from '../model/ICorners';
import { IVector2, IVector3 } from '../model/IVectors';
import { cleanVectorToBabylon } from './vectors';

export function positionOnWallToPositionOnSquare(
    positionOnWall: IVector3,
    corners: ICorners,
): IVector2 | null {


    const middle = cleanVectorToBabylon(positionOnWall).subtractInPlace(cleanVectorToBabylon(corners.topLeft));


    const left = cleanVectorToBabylon(corners.topRight).subtractInPlace(cleanVectorToBabylon(corners.topLeft));
    const down = cleanVectorToBabylon(corners.bottomLeft).subtractInPlace(cleanVectorToBabylon(corners.topLeft));


    const x = BABYLON.Vector3.Dot(middle,left) / left.length();
    const y = BABYLON.Vector3.Dot(middle,down) / down.length();




    return {
        x, //((frame.positionOnSquare.x * 100 + 250) / 600 - 0.5) * 4 + 0.5 + 0.2,
        y, //(((3 - frame.positionOnSquare.y) * 100 + 200) / 600 - 0.5) * 4 + 0.5 + 0.3,
    };
}

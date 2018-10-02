import { ICorners } from '../model/ICorners';
import { IVector2, IVector3 } from '../model/IVectors';

export function positionOnWallToPositionOnSquare(
    positionOnWall: IVector3,
    corners: ICorners,
): IVector2 | null {
    //console.group('convertSceneVectorToWallVector');
    //console.log('frame.position',frame.position);
    //console.log('frame.rotation',frame.rotation);
    /*
    const ray = new BABYLON.Ray(
        cleanVectorToBabylon(frame.position),
        frame.rotation,
        100,
    );
    //console.log('ray', ray);



    const hit = wallMesh
        .getScene()
        .pickWithRay(ray, (mesh) => mesh === wallMesh);
    
    if(!hit)return null;


    console.log(hit.hit);

    //console.log('hit', hit);
    //console.groupEnd();
    */

    return {
        x: Math.random(), //((frame.positionOnSquare.x * 100 + 250) / 600 - 0.5) * 4 + 0.5 + 0.2,
        y: Math.random(), //(((3 - frame.positionOnSquare.y) * 100 + 200) / 600 - 0.5) * 4 + 0.5 + 0.3,
    };
}

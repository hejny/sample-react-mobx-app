import { ICorners } from './../model/ICorners';
import { IVector3 } from "../model/IVectors";

export function convertSceneVectorToWallVector(sceneVector:IVector3, corners: ICorners){
    return({
        x: sceneVector.x * 200,
        y: sceneVector.y * 200
    })
}
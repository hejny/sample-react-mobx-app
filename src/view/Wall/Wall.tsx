import './Wall.css';
import * as TC from 'touchcontroller';
import * as React from 'react';
import { observer } from 'mobx-react';
import { IAppState } from '../../model/IAppState';
import { IObservableObject } from 'mobx';
import World from '../../3d/World/World';
import { ISituationState } from '../../model/ISituationState';
import { convertSceneVectorToWallVector } from '../../tools/convertSceneVectorToWallVector';
import { drawOnWallAppStateDrawing, drawOnWallSituationStateControllers } from '../../tools/drawWallDrawing';

interface IWallProps {
    appState: IAppState & IObservableObject;
    situationState: ISituationState & IObservableObject;
}

//todo hide when appState.corners calibration in process

export const Wall = observer(({ appState, situationState }: IWallProps) => {
    return (
        <div className="Wall">
            <canvas
                data-refresh={
                    JSON.stringify(situationState.controllers) /*todo optimize*/
                }
                ref={(canvasElement) => {
                    if (canvasElement) {
                        //console.log('Canvas element for wall:', canvasElement);

                        canvasElement.width = canvasElement.getBoundingClientRect().width;
                        canvasElement.height = canvasElement.getBoundingClientRect().height;

                        const ctx = canvasElement.getContext('2d')!;

                        drawOnWallAppStateDrawing(appState.drawings,appState.corners!,ctx);
                        drawOnWallSituationStateControllers(situationState.controllers,appState.corners!,ctx);

                        TC;
                        /*
                        ctx.lineWidth = 10;
                        ctx.lineCap = 'round';

                        const touchController = TC.TouchController.fromCanvas(
                            canvasElement,
                        );
                        touchController.touches.subscribe(function(touch) {
                            console.log('touch', touch);

                            const color =
                                '#' +
                                Math.floor(Math.random() * 16777215).toString(
                                    16,
                                );
                            let lastFrame = touch.firstFrame;

                            touch.frames.subscribe((frame) => {
                                ctx.strokeStyle = color;
                                ctx.beginPath();
                                ctx.moveTo(
                                    lastFrame.position.x,
                                    lastFrame.position.y,
                                );
                                ctx.lineTo(frame.position.x, frame.position.y);
                                ctx.stroke();
                                lastFrame = frame;
                            });
                        });
                        */
                    }
                }}
            />
        </div>
    );
});

import './Wall.css';
import * as TC from 'touchcontroller';
import * as React from 'react';
import { observer } from 'mobx-react';
import { IAppState } from '../../model/IAppState';
import { IObservableObject } from 'mobx';
import World from '../../3d/World/World';

interface IWallProps {
    appState: IAppState & IObservableObject;
}

export const Wall = observer(({ appState }: IWallProps) => {
    return (
        <div className="Wall">
            <canvas
                ref={(canvasElement) => {
                    if (canvasElement) {
                        console.log('Canvas element for wall:', canvasElement);

                        canvasElement.width = canvasElement.getBoundingClientRect().width;
                        canvasElement.height = canvasElement.getBoundingClientRect().height;

                        const ctx = canvasElement.getContext('2d')!;
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
                    }
                }}
            />
        </div>
    );
});

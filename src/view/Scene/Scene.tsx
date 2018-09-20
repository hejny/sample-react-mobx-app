import './Scene.css';
import * as React from 'react';
import { observer } from 'mobx-react';
import { IAppState } from '../../model/IAppState';
import { IObservableObject } from 'mobx';
import World from '../../3d/World/World';

interface ISceneProps {
    appState: IAppState & IObservableObject;
}

export const Scene = observer(({ appState }: ISceneProps) => {
    return (
        <div className="Scene">
            <canvas
                ref={(canvasElement) => {
                    if (canvasElement) {
                        console.log('canvasElement', canvasElement);

                        const world = new World(canvasElement, appState);
                        world.run();
                    }
                }}
            />
        </div>
    );
});

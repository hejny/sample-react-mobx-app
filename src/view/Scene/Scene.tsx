import './Scene.css';
import * as React from 'react';
import { observer } from 'mobx-react';
import { IAppState } from '../../model/IAppState';
import { IObservableObject } from 'mobx';

interface ISceneProps {
    appState: IAppState & IObservableObject;
}

export const Scene = observer(({ appState }: ISceneProps) => {
    return (
        <div className="Scene">
            <canvas ref={(canvasElement)=>{
                if(canvasElement){


                }
            }}/>
        </div>
    );
});

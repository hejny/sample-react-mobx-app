import './Root.css';
import * as React from 'react';
import { observer } from 'mobx-react';
import { Message } from '../Message/Message';
import { IAppState } from '../../model/IAppState';
import { IObservableObject } from 'mobx';
import { ISaveState } from '../../controller/saver/ISaveState';
import { Scene } from '../Scene/Scene';

interface IAppProps {
    appState: IAppState & IObservableObject;
    saveState: ISaveState & IObservableObject;
}

export const Root = observer(({ appState, saveState }: IAppProps) => {
    return (
        <div className="Root">
            <Message {...{ appState }} />

            {saveState.saved && (
                <div>Saved at {saveState.saved.toString()}</div>
            )}


            {appState.corners?(
                <button onClick={()=>{appState.corners=null;appState.calibrationProgress=[];}}>ReCalibrate</button>
            ):(
                <div>
                    Calibrating {appState.calibrationProgress.length+1}. corner.
                </div>
            )}




            <Scene {...{ appState }} />
        </div>
    );
});

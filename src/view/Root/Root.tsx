import './Root.css';
import * as React from 'react';
import { observer } from 'mobx-react';
import { Message } from '../Message/Message';
import { IAppState } from '../../model/IAppState';
import { IObservableObject } from 'mobx';
import { ISaveState } from '../../controller/saver/ISaveState';
import { Scene } from '../Scene/Scene';
import { Wall } from '../Wall/Wall';
import { ISituationState } from '../../model/ISituationState';

interface IAppProps {
    appState: IAppState & IObservableObject;
    saveState: ISaveState & IObservableObject;
    situationState: ISituationState & IObservableObject;
}

export const Root = observer(
    ({ appState, saveState, situationState }: IAppProps) => {
        return (
            <div className="Root">
                <Message {...{ appState }} />

                {saveState.saved && (
                    <div>Saved at {saveState.saved.toString()}</div>
                )}

                <div>
                    Controllers:
                    {situationState.controllers.map((controller) => (
                        <div key={controller.id}>
                            <b>{controller.id}:</b>[
                            {controller.position.x.toFixed(2)},
                            {controller.position.y.toFixed(2)},
                            {controller.position.z.toFixed(2)}]
                        </div>
                    ))}
                </div>

                <Wall {...{ appState, situationState }} />

                {appState.corners ? (
                    <button
                        onClick={() => {
                            appState.corners = null;
                            //appState.calibrationProgress = [];
                        }}
                    >
                        ReCalibrate
                    </button>
                ) : (
                    <div>
                        Calibrating {appState.calibrationProgress.length + 1}.
                        corner.
                    </div>
                )}

                <div>
                    Wall contains {appState.drawings.length} drawings.
                    <button
                        onClick={() => {
                            if (confirm('Are you sure?')) {
                                appState.drawings = [];
                            }
                        }}
                    >
                        clean
                    </button>
                </div>

                <Scene {...{ appState, situationState }} />
            </div>
        );
    },
);

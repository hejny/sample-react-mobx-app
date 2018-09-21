import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IAppState } from './model/IAppState';
import { ISaveState } from './controller/saver/ISaveState';
import { IObservableObject, observable } from 'mobx';
import { restoreAppState } from './controller/saver/restoreAppState';
import { saveAppStateAfterChange } from './controller/saver/saveAppStateAfterChange';
import { Root } from './view/Root/Root';
import { ISituationState } from './model/ISituationState';
import { createDefaultSituationState } from './model/createDefaultSituationState';

export class App {
    constructor(private rootElement: HTMLDivElement) {}

    public appState: IAppState & IObservableObject;
    public saveState: ISaveState & IObservableObject;
    public situationState: ISituationState & IObservableObject;

    run() {
        this.appState = restoreAppState();
        this.saveState = saveAppStateAfterChange(this.appState);
        this.situationState = observable(createDefaultSituationState());

        ReactDOM.render(
            <Root
                {...{
                    appState: this.appState,
                    saveState: this.saveState,
                    situationState: this.situationState,
                }}
            />,
            this.rootElement,
        );
    }
}

import './App.css';
import * as React from 'react';
import { observer } from 'mobx-react';
import { Message } from '../Message/Message';
import { IAppState } from '../../model/IAppState';
import { IObservableObject } from 'mobx';

interface IAppProps {
    appState: IAppState & IObservableObject;
}

export const App = observer(({ appState }: IAppProps) => {
    return (
        <div className="App">
            <Message {...{ appState }} />

            <div>Char count: {appState.message.length}</div>
            <div>Word count: {appState.message.split(' ').length}</div>
        </div>
    );
});

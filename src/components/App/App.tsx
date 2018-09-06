import './App.css';
import * as React from 'react';
import { observer } from 'mobx-react';
import { AppModel } from '../../model/AppModel';
import { Message } from '../Message/Message';

interface IAppProps {
    appModel: AppModel;
}

export const App = observer(({ appModel }: IAppProps) => {
    return (
        <div className="App">
            <Message {...{appModel}} />

            <div>Char count: {appModel.message.length}</div>
        </div>
    );
});

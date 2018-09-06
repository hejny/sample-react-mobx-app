import './App.css';
import * as React from 'react';
import { observer } from 'mobx-react';
import { Message } from '../Message/Message';
import { IAppModel } from '../../model/IAppModel';

interface IAppProps {
    appModel: IAppModel;
}

export const App = observer(({ appModel }: IAppProps) => {
    return (
        <div className="App">
            <Message {...{appModel}} />

            <div>Char count: {appModel.message.length}</div>
        </div>
    );
});

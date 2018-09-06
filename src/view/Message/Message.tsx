import './Message.css';
import * as React from 'react';
import { observer } from 'mobx-react';
import { IAppModel } from '../../model/IAppModel';

interface IMessageProps {
    appModel: IAppModel;
}

export const Message = observer(({ appModel }: IMessageProps) => {
    return (
        <div className="Message">
            <textarea
                defaultValue={appModel.message}
                onChange={(event) => (appModel.message = event.target.value)}
            />
        </div>
    );
});

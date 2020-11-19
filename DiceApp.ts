import { IConfigurationExtend, ILogger } from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';

import { RandomCommand } from './src/DiceCommands';

export class DiceApp extends App {

    constructor(info: IAppInfo, logger: ILogger) {
        super(info, logger);
    }

    public async initialize(configuration: IConfigurationExtend): Promise<void> {
        await configuration.slashCommands.provideSlashCommand(new RandomCommand('dice'));
        await configuration.slashCommands.provideSlashCommand(new RandomCommand('roll'));
    }

}

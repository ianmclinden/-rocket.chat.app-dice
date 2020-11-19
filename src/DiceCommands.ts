import { IModify, IRead } from '@rocket.chat/apps-engine/definition/accessors';
import { ISlashCommand, SlashCommandContext } from '@rocket.chat/apps-engine/definition/slashcommands';

const alias = 'Dice';
const avatar = ':game_die:';

function roll(n: number, t = 1): string {
    var rstr = `${avatar} Rolled a _*d${n}*_`;
    var results : string[] = [];

    for (var i=0; i<t; i++) {
        var r = Math.floor(Math.random() * n) + 1;
        results.push(`_*${r}*_`);
    }

    if (t > 1) {
        rstr += ` _${t}_ times, and got \n\t${avatar} : ${results.join(`\n\t${avatar} : `)}`;
    } else {
        rstr += `, and got ${results.join('')}` 
    }
        
    return rstr;
}

export class RandomCommand implements ISlashCommand {
    public command: string;

    public constructor(command: string) {
        this.command = command;
    }

    public i18nParamsExample = 'cmd_dice_example';
    public i18nDescription = 'cmd_dice_desc';
    public providesPreview = false;

    public async executor(context: SlashCommandContext, read: IRead, modify: IModify): Promise<void> {
        const params = context.getArguments();

        const n = parseInt(params[0], 10);
        if ( isNaN(n) || n <= 0 ) {
            throw new Error(`\"${params[0]}\" is not a valid number`)
        }

        var t = parseInt(params[1], 10);
        if ( isNaN(t) || t <= 0) {
            t = 1;
        }

        const builder = modify.getCreator().startMessage()
            .setSender(context.getSender())
            .setRoom(context.getRoom())
            .setEmojiAvatar(avatar)
            .setUsernameAlias(alias)
            .setGroupable(true)
            .setText(roll(n, t));

        try {
            modify.getCreator().finish(builder);
        } catch (e) {
            const errorText = `An error occured when trying to ${this.command} :disappointed_relieved:
Command executed:
\`\`\`
/${this.command} ${ params }
\`\`\`
${e}
    `;
            const builder = modify.getCreator().startMessage()
                .setSender(context.getSender())
                .setRoom(context.getRoom())
                .setEmojiAvatar(avatar)
                .setText(errorText)
                .setUsernameAlias(alias)
                .setGroupable(false);

            modify.getNotifier().notifyUser(context.getSender(), builder.getMessage());
        }
    }
}

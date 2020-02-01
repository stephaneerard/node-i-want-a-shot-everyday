import * as api from "i-want-a-shot-list"
import * as schedule from "node-schedule"
import Process = NodeJS.Process;

export const builder = Object.assign({
    schedule: {
        default: "* * *",
        type: 'string',
        description: 'Take a Shot List Everyday !'
    },
    daemon: {
        default: true,
        type: 'boolean',
        description: 'Take it to the back !'
    }
}, api.builder);

export interface CronJobTimingInterface {
    one?: any
    two?: any
    three?: any
    four?: any
    five?: any
}

export interface RequestInterface extends api.RequestInterface {
    schedule?: CronJobTimingInterface
}

export interface ArgvInterface extends api.ArgvInterface {
    schedule?: string
}

async function waitKill(console: Console, process: Process): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log('Press CTRL+C to exit...');
        process.on('SIGINT', () => {
            console.log('CTRL+C broke, exiting...');
            process.exit(0);
        });
    });
}

export async function takeAshot(request: RequestInterface): Promise<number> {

    const scheduling = [request.schedule.one, request.schedule.two, request.schedule.three, request.schedule.four, request.schedule.five].join(' ');

    console.log('Running schedule %s', scheduling);

    schedule.scheduleJob(scheduling, async function (fireDate: Date) {
        console.log('Running (fireDate: %s, runningDate: %s)', fireDate.toISOString(), (new Date().toISOString()));

        await api.takeAshot({
            query: request.query,
            basePath: request.basePath,
            userAgent: request.userAgent,
            resolutions: request.resolutions,
            pages: request.pages,
            lite: request.lite,
            lilo: request.lilo,
            egp: request.egp,
            edu: request.edu,
            ecosia: request.ecosia,
            bing: request.bing,
            api: request.api,
            list: request.list
        });
    });

    return await waitKill(console, process);
}

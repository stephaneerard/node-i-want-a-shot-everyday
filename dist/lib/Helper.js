"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api = require("i-want-a-shot-list");
const schedule = require("node-schedule");
exports.builder = Object.assign({
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
async function waitKill(console, process) {
    return new Promise((resolve, reject) => {
        console.log('Press CTRL+C to exit...');
        process.on('SIGINT', () => {
            console.log('CTRL+C broke, exiting...');
            process.exit(0);
        });
    });
}
async function takeAshot(request) {
    const scheduling = [request.schedule.one, request.schedule.two, request.schedule.three, request.schedule.four, request.schedule.five].join(' ');
    console.log('Running schedule %s', scheduling);
    schedule.scheduleJob(scheduling, async function (fireDate) {
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
exports.takeAshot = takeAshot;
//# sourceMappingURL=Helper.js.map
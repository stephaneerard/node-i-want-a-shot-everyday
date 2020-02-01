import * as api from "./../lib/Helper"

exports.command = 'shot'
exports.desc = 'take a qwant shot list !'
exports.builder = api.builder;
exports.handler = async function (argv: api.ArgvInterface) {
    const scheduling = argv.schedule.split(' ');

    const request: api.RequestInterface = {
        query: argv.query,
        api: argv.api,
        lite: argv.lite,
        edu: argv.edu,
        egp: argv.egp,
        ecosia: argv.ecosia,
        bing: argv.bing,
        lilo: argv.lilo,
        pages: argv.pages,
        userAgent: argv.userAgent,
        resolutions: argv.resolutions,
        list: argv.list,
        basePath: argv.path,
        schedule: {
            one: scheduling[0] || '*',
            two: scheduling[1] || '*',
            three: scheduling[2] || '*',
            four: scheduling[3] || '*',
            five: scheduling[4] || '*'
        }
    };

    await api.takeAshot(request);
};

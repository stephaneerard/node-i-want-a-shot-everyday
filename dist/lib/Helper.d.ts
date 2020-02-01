import * as api from "i-want-a-shot-list";
export declare const builder: any;
export interface CronJobTimingInterface {
    one?: any;
    two?: any;
    three?: any;
    four?: any;
    five?: any;
}
export interface RequestInterface extends api.RequestInterface {
    schedule?: CronJobTimingInterface;
}
export interface ArgvInterface extends api.ArgvInterface {
    schedule?: string;
}
export declare function takeAshot(request: RequestInterface): Promise<number>;

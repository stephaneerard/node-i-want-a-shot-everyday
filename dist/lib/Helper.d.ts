import * as api from "i-want-a-shot-list";
export declare const builder: {
    schedule: {
        default: string;
        type: string;
        description: string;
    };
    daemon: {
        default: boolean;
        type: string;
        description: string;
    };
} & {
    query: {
        default: any[];
        type: string;
        description: string;
    };
} & {
    lite: {
        type: string;
        default: boolean;
        description: string;
    };
    api: {
        type: string;
        default: boolean;
        description: string;
    };
    edu: {
        type: string;
        default: boolean;
        description: string;
    };
    egp: {
        type: string;
        default: boolean;
        description: string;
    };
    bing: {
        type: string;
        default: boolean;
        description: string;
    };
    ecosia: {
        type: string;
        default: boolean;
        description: string;
    };
    pages: {
        type: string;
        default: number;
    };
    path: {
        type: string;
        default: string;
    };
    'user-agent': {
        type: string;
        default: string;
    };
    resolutions: {
        type: string;
        default: string[];
    };
};
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

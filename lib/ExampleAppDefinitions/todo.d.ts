declare let state: {
    tasks: {
        complete: boolean;
        title: string;
    }[];
    stats: {
        complete: () => number;
        incomplete: () => number;
        all: () => number;
    };
};
declare let tasks: {
    complete: boolean;
    title?: string;
}[];
declare let tasks_item: {
    complete: boolean;
    title: string;
};
declare let actions: {
    completeAll: {
        at: () => boolean;
        do: () => void;
        pre: () => ({
            complete: false;
        } | {
            complete: true;
        })[];
        nat: () => {
            complete: true;
        }[];
        post: () => {
            complete: true;
        }[];
    };
    resetAll: {
        at: () => boolean;
        do: () => void;
        pre: () => {
            complete: true;
        }[];
        nat: () => ({
            complete: false;
        } | {
            complete: true;
        })[];
        post: () => {
            complete: false;
        }[];
    };
    createTask: {
        do: (input: string) => number;
        input: () => string;
        pre: () => {
            complete: boolean;
            title?: string;
        }[];
        post: () => {
            complete: false;
            title: string;
        }[];
    };
    tasks_item: {
        delete: {
            do: (i: number) => {
                complete: boolean;
                title?: string;
            }[];
            input: () => number;
            pre: () => ({
                complete: false;
            } | {
                complete: true;
            })[];
            post: () => {
                complete: true;
            }[];
        };
        completeTask: {
            at: () => boolean;
            do: () => boolean;
            pre: () => boolean;
            nat: () => boolean;
            post: () => boolean;
        };
        resetTask: {
            at: () => boolean;
            do: () => boolean;
            pre: () => boolean;
            nat: () => boolean;
            post: () => boolean;
        };
        changeTitle: {
            do: (input: string) => string;
            input: () => string;
            pre: () => string;
            post: () => boolean;
        };
    };
};
declare let filters: {
    all: () => {
        complete: boolean;
        title?: string;
    }[];
    incomplete: () => {
        complete: boolean;
        title?: string;
    }[];
    complete: () => {
        complete: boolean;
        title?: string;
    }[];
    search: (input: string) => {
        complete: boolean;
        title?: string;
    }[];
};
declare let markup: JSX.Element;
declare let markup2: JSX.Element;

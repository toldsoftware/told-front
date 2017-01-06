// state, actions, filters, markup

// State
let state = {
    tasks: [
        {
            complete: false,
            title: 'This task is not done yet!'
        },
        {
            complete: true,
            title: 'This task is already done!'
        }
    ],
    stats: {
        complete: () => state.tasks.filter(x => x.complete).length,
        incomplete: () => state.tasks.filter(x => !x.complete).length,
        all: () => state.tasks.length
    }
};

let tasks: { complete: boolean, title?: string }[] = state.tasks;
let tasks_item = state.tasks[0];

// Note: The proxy can learn action type by recording set values
// Actions
let actions = {
    completeAll: {
        at: () => tasks.some(x => !x.complete),
        do: () => tasks.forEach(x => x.complete = true),
        pre: () => tasks = [{ complete: false }, { complete: true }],
        nat: () => tasks = [{ complete: true }, { complete: true }],
        post: () => tasks = [{ complete: true }, { complete: true }],
    },
    resetAll: {
        at: () => tasks.every(x => x.complete),
        do: () => tasks.forEach(x => x.complete = false),
        pre: () => tasks = [{ complete: true }, { complete: true }],
        nat: () => tasks = [{ complete: false }, { complete: true }],
        post: () => tasks = [{ complete: false }, { complete: false }],
    },
    createTask: {
        do: (input: string) => tasks.push({ complete: false, title: input }),
        input: () => 'New Task',
        pre: () => tasks = [] as typeof tasks,
        post: () => tasks = [{ complete: false, title: 'New Task' }],
    },
    tasks_item: {
        delete: {
            do: (i: number) => tasks = tasks.splice(i, 1),
            input: () => 0,
            pre: () => tasks = [{ complete: false }, { complete: true }],
            post: () => tasks = [{ complete: true }],
        },
        completeTask: {
            at: () => tasks_item.complete === false,
            do: () => tasks_item.complete = true,
            pre: () => tasks_item.complete = false,
            nat: () => tasks_item.complete = true,
            post: () => tasks_item.complete === true,
        },
        resetTask: {
            at: () => tasks_item.complete === true,
            do: () => tasks_item.complete = false,
            pre: () => tasks_item.complete = true,
            nat: () => tasks_item.complete = false,
            post: () => tasks_item.complete === false,
        },
        changeTitle: {
            do: (input: string) => tasks_item.title = input,
            input: () => 'Change',
            pre: () => tasks_item.title = 'Task',
            post: () => tasks_item.title === 'Change',
        }
    },
};

// Filters
let filters = {
    all: () => tasks,
    incomplete: () => tasks.filter(x => !x.complete),
    complete: () => tasks.filter(x => x.complete),
    search: (input: string) => tasks.filter(x => x.title.match(input))
};

// Markup
let markup =
    <stack>
        <heading>tasks</heading>
        <shelf>
            <checkbox>{[actions.completeAll, actions.resetAll]}</checkbox>
            <textbox placeholder='What should I do?'>{actions.createTask}</textbox>
        </shelf>
        <stack items={state.tasks}>
            <shelf>
                <checkbox>{[actions.tasks_item.completeTask, actions.tasks_item.resetTask]}</checkbox>
                <textbox>{actions.tasks_item.changeTitle}</textbox>
                <button>{actions.tasks_item.delete}</button>
            </shelf>
        </stack>
        <shelf>
            <label suffix={() => state.stats.incomplete() === 1 ? ' item left' : ' items left'}>{state.stats.incomplete}</label>
            <button>{filters.all}</button>
            <button>{filters.complete}</button>
            <button>{filters.incomplete}</button>
            <spacer></spacer>
        </shelf>
    </stack>;

let markup2 =
    <panel>
        <header>
            <stack>
                <heading>tasks</heading>
                <shelf>
                    <checkbox>{[actions.completeAll, actions.resetAll]}</checkbox>
                    <textbox placeholder='What should I do?'>{actions.createTask}</textbox>
                </shelf>
                <textbox>{filters.search}</textbox>
            </stack>
        </header>
        <stack items={state.tasks}>
            <shelf>
                <checkbox>{[actions.tasks_item.completeTask, actions.tasks_item.resetTask]}</checkbox>
                <textbox>{actions.tasks_item.changeTitle}</textbox>
                <button>{actions.tasks_item.delete}</button>
            </shelf>
        </stack>
        <footer>
            <shelf>
                <label suffix={() => state.stats.incomplete() === 1 ? ' item left' : ' items left'}>{state.stats.incomplete}</label>
                <button>{filters.all}</button>
                <button>{filters.complete}</button>
                <button>{filters.incomplete}</button>
                <spacer></spacer>
            </shelf>
        </footer>
    </panel>;
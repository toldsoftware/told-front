// state, actions, filters, markup
// State
var state = {
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
        complete: function () { return state.tasks.filter(function (x) { return x.complete; }).length; },
        incomplete: function () { return state.tasks.filter(function (x) { return !x.complete; }).length; },
        all: function () { return state.tasks.length; }
    }
};
var tasks = state.tasks;
var tasks_item = state.tasks[0];
// Note: The proxy can learn action type by recording set values
// Actions
var actions = {
    completeAll: {
        at: function () { return tasks.some(function (x) { return !x.complete; }); },
        do: function () { return tasks.forEach(function (x) { return x.complete = true; }); },
        pre: function () { return tasks = [{ complete: false }, { complete: true }]; },
        nat: function () { return tasks = [{ complete: true }, { complete: true }]; },
        post: function () { return tasks = [{ complete: true }, { complete: true }]; },
    },
    resetAll: {
        at: function () { return tasks.every(function (x) { return x.complete; }); },
        do: function () { return tasks.forEach(function (x) { return x.complete = false; }); },
        pre: function () { return tasks = [{ complete: true }, { complete: true }]; },
        nat: function () { return tasks = [{ complete: false }, { complete: true }]; },
        post: function () { return tasks = [{ complete: false }, { complete: false }]; },
    },
    createTask: {
        do: function (input) { return tasks.push({ complete: false, title: input }); },
        input: function () { return 'New Task'; },
        pre: function () { return tasks = []; },
        post: function () { return tasks = [{ complete: false, title: 'New Task' }]; },
    },
    tasks_item: {
        delete: {
            do: function (i) { return tasks = tasks.splice(i, 1); },
            input: function () { return 0; },
            pre: function () { return tasks = [{ complete: false }, { complete: true }]; },
            post: function () { return tasks = [{ complete: true }]; },
        },
        completeTask: {
            at: function () { return tasks_item.complete === false; },
            do: function () { return tasks_item.complete = true; },
            pre: function () { return tasks_item.complete = false; },
            nat: function () { return tasks_item.complete = true; },
            post: function () { return tasks_item.complete === true; },
        },
        resetTask: {
            at: function () { return tasks_item.complete === true; },
            do: function () { return tasks_item.complete = false; },
            pre: function () { return tasks_item.complete = true; },
            nat: function () { return tasks_item.complete = false; },
            post: function () { return tasks_item.complete === false; },
        },
        changeTitle: {
            do: function (input) { return tasks_item.title = input; },
            input: function () { return 'Change'; },
            pre: function () { return tasks_item.title = 'Task'; },
            post: function () { return tasks_item.title === 'Change'; },
        }
    },
};
// Filters
var filters = {
    all: function () { return tasks; },
    incomplete: function () { return tasks.filter(function (x) { return !x.complete; }); },
    complete: function () { return tasks.filter(function (x) { return x.complete; }); },
    search: function (input) { return tasks.filter(function (x) { return x.title.match(input); }); }
};
// Markup
var markup = TsxBuilder.createElement("stack", null,
    TsxBuilder.createElement("heading", null, "tasks"),
    TsxBuilder.createElement("shelf", null,
        TsxBuilder.createElement("checkbox", null, [actions.completeAll, actions.resetAll]),
        TsxBuilder.createElement("textbox", { placeholder: 'What should I do?' }, actions.createTask)),
    TsxBuilder.createElement("stack", { items: state.tasks },
        TsxBuilder.createElement("shelf", null,
            TsxBuilder.createElement("checkbox", null, [actions.tasks_item.completeTask, actions.tasks_item.resetTask]),
            TsxBuilder.createElement("textbox", null, actions.tasks_item.changeTitle),
            TsxBuilder.createElement("button", null, actions.tasks_item.delete))),
    TsxBuilder.createElement("shelf", null,
        TsxBuilder.createElement("label", { suffix: function () { return state.stats.incomplete() === 1 ? ' item left' : ' items left'; } }, state.stats.incomplete),
        TsxBuilder.createElement("button", null, filters.all),
        TsxBuilder.createElement("button", null, filters.complete),
        TsxBuilder.createElement("button", null, filters.incomplete),
        TsxBuilder.createElement("spacer", null)));
var markup2 = TsxBuilder.createElement("panel", null,
    TsxBuilder.createElement("header", null,
        TsxBuilder.createElement("stack", null,
            TsxBuilder.createElement("heading", null, "tasks"),
            TsxBuilder.createElement("shelf", null,
                TsxBuilder.createElement("checkbox", null, [actions.completeAll, actions.resetAll]),
                TsxBuilder.createElement("textbox", { placeholder: 'What should I do?' }, actions.createTask)),
            TsxBuilder.createElement("textbox", null, filters.search))),
    TsxBuilder.createElement("stack", { items: state.tasks },
        TsxBuilder.createElement("shelf", null,
            TsxBuilder.createElement("checkbox", null, [actions.tasks_item.completeTask, actions.tasks_item.resetTask]),
            TsxBuilder.createElement("textbox", null, actions.tasks_item.changeTitle),
            TsxBuilder.createElement("button", null, actions.tasks_item.delete))),
    TsxBuilder.createElement("footer", null,
        TsxBuilder.createElement("shelf", null,
            TsxBuilder.createElement("label", { suffix: function () { return state.stats.incomplete() === 1 ? ' item left' : ' items left'; } }, state.stats.incomplete),
            TsxBuilder.createElement("button", null, filters.all),
            TsxBuilder.createElement("button", null, filters.complete),
            TsxBuilder.createElement("button", null, filters.incomplete),
            TsxBuilder.createElement("spacer", null))));
//# sourceMappingURL=todo.js.map
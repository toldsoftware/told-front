"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var state_1 = require("./state");
// Build platform elements with factory
// Subscribe to data changes and notify platform elements of changes
// Platform elements are entirely passive (and use events)
var TsxBuilder = (function () {
    function TsxBuilder() {
    }
    TsxBuilder.createElement = function (ctor, attributes) {
        var content = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            content[_i - 2] = arguments[_i];
        }
        return TsxBuilder.instance.createElement(ctor, attributes, content);
    };
    ;
    TsxBuilder.prototype.createElement = function (name, attributes, content) {
        console.log('TsxBuilder.createElement START', name, attributes, content);
        // return TsxBuilder.provider.createElement(name, attributes, content);
        if (content.length > 0 && content.every(function (x) { return x.elementInstance; })) {
            return this.createContainerElement(name, attributes, content);
        }
        else if (content.length === 1) {
            return this.createTextElement(name, attributes, content[0]);
        }
        else if (!content || !content.length) {
            return this.createEmptyElement(name, attributes);
        }
        throw "TsxBuilder: Unknown Content: \"" + content + "\"";
    };
    TsxBuilder.prototype.createContainerElement = function (name, attributes, content) {
        // console.log('TsxBuilder.createContainerElement START', name, attributes, content);
        var instance = TsxBuilder.factory.createContainerElement(name, attributes, content.map(function (x) { return x.elementInstance; }));
        this.subscribeActions(instance, content);
        return { elementInstance: instance, children: content };
    };
    TsxBuilder.prototype.createTextElement = function (name, attributes, content) {
        console.log('TsxBuilder.createTextElement START', name, attributes, content);
        var text = content;
        if (content.subscribe) {
            var s = content;
            text = s.value;
            s.subscribe(function (x) {
                instance.setText(x);
            });
        }
        else if (typeof content === 'string') {
        }
        else if (typeof content === 'function') {
            console.log('TsxBuilder.createTextElement FUNCTION', content);
            text = autoSubscribe(content, function (x) { return instance.setText(x); });
        }
        else if (content.label) {
            console.log('TsxBuilder.createTextElement LABEL', content);
            text = content.label;
        }
        else {
            console.log('TsxBuilder.createTextElement UNKNOWN', content);
        }
        var valueAttributes = autoSubscribeAttributes(attributes, function (x) { return instance.setAttributes(x); });
        console.log('valueAttributes=', valueAttributes);
        var instance = TsxBuilder.factory.createTextElement(name, valueAttributes, text);
        this.subscribeActions(instance, content);
        return { elementInstance: instance };
    };
    TsxBuilder.prototype.createEmptyElement = function (name, attributes) {
        switch (name) {
            case 'wrap':
                return this.createContainerElement(name, attributes, []);
            case 'label':
                return this.createTextElement(name, attributes, []);
        }
        throw "TsxBuilder: Unknown Empty Element Name: \"" + name + "\"";
    };
    TsxBuilder.prototype.subscribeActions = function (instance, content) {
        if (content.do) {
            instance.setOnClick(function () { return content.do(); });
        }
    };
    return TsxBuilder;
}());
TsxBuilder.instance = new TsxBuilder();
exports.TsxBuilder = TsxBuilder;
var TsxElement = (function () {
    function TsxElement() {
    }
    return TsxElement;
}());
exports.TsxElement = TsxElement;
var ContainerTsxElement = (function (_super) {
    __extends(ContainerTsxElement, _super);
    function ContainerTsxElement() {
        return _super.apply(this, arguments) || this;
    }
    return ContainerTsxElement;
}(TsxElement));
exports.ContainerTsxElement = ContainerTsxElement;
function autoSubscribe(valueOrMethod, setValue) {
    if (typeof valueOrMethod === 'function') {
        var subId = state_1.StateSpy.Instance.subscribe_getValue(function (statePath) {
            console.log('TsxBuilder.autoSubscribe SUBSCRIBED', statePath._fullPath);
            statePath.subscribe(function (x) {
                console.log("statePath '" + statePath._fullPath + "' CHANGE", x);
                setValue(valueOrMethod());
            });
        });
        var text = valueOrMethod();
        state_1.StateSpy.Instance.unsubscribe_getValue(subId);
        return text;
    }
    else {
        return valueOrMethod;
    }
}
function autoSubscribeAttributes(attributes, setAttributes) {
    if (!attributes) {
        return null;
    }
    var a = {};
    var _loop_1 = function (k) {
        a[k] = autoSubscribe(attributes[k], function (x) {
            a[k] = x;
            setAttributes(a);
        });
    };
    for (var _i = 0, _a = Object.getOwnPropertyNames(attributes); _i < _a.length; _i++) {
        var k = _a[_i];
        _loop_1(k);
    }
    return a;
}
//# sourceMappingURL=tsxBuilder.js.map
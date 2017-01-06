"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        if (content.filter(function (x) { return x instanceof TsxElement; })) {
            return this.createContainerElement(name, attributes, content);
        }
        else if (content.length === 1) {
            return this.createTextElement(name, attributes, content[0]);
        }
        else if (content == null) {
            return this.createEmptyElement(name, attributes);
        }
        throw "Unknown Content: \"" + content + "\"";
    };
    TsxBuilder.prototype.createContainerElement = function (name, attributes, content) {
        var instance = TsxBuilder.factory.createContainerElement(name, attributes, content.map(function (x) { return x.elementInstance; }));
        return { elementInstance: instance };
    };
    TsxBuilder.prototype.createTextElement = function (name, attributes, content) {
        throw 'Not Implmented';
    };
    TsxBuilder.prototype.createEmptyElement = function (name, attributes) {
        throw 'Not Implmented';
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
//# sourceMappingURL=tsxBuilder.js.map
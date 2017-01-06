"use strict";
var div_1 = require("./elements/div");
var span_1 = require("./elements/span");
var HtmlElementFactory = (function () {
    function HtmlElementFactory() {
    }
    // createEmptyElement(name: string, attributes: ValueAttributes): ElementInstance {
    //     return this.createTextElement(name, attributes, '');
    // }
    HtmlElementFactory.prototype.createTextElement = function (name, attributes, text) {
        console.log('HtmlElementFactory.createTextElement START', name, attributes, text);
        switch (name) {
            case 'label':
                return new span_1.SpanHtmlElementInstance(attributes, text);
        }
        throw "Unknown Text Element Type: \"" + name + "\"";
    };
    HtmlElementFactory.prototype.createContainerElement = function (name, attributes, children) {
        console.log('HtmlElementFactory.createContainerElement START', name, attributes, children);
        switch (name) {
            case 'wrap':
                return new div_1.DivHtmlElementInstance(attributes, children);
        }
        throw "Unknown Container Element Type: \"" + name + "\" children=" + children;
    };
    return HtmlElementFactory;
}());
exports.HtmlElementFactory = HtmlElementFactory;
//# sourceMappingURL=htmlElementFactory.js.map
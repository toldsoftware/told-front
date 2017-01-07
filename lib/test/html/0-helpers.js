"use strict";
var src_1 = require("./../../src");
var htmlElementFactory_1 = require("./../../src/platforms/html/htmlElementFactory");
var factory;
function initPlatform() {
    src_1.TsxBuilder.factory = factory = factory || new htmlElementFactory_1.HtmlElementFactory();
}
exports.initPlatform = initPlatform;
function toHtml(element) {
    return element.elementInstance.domElement.outerHTML;
}
exports.toHtml = toHtml;
function expectHtml(element, expected) {
    var actual = toHtml(element);
    var normExpected = expected.replace(/\s+/g, ' ');
    var normActual = actual.replace(/\s+/g, ' ');
    expect(normActual).toBe(normExpected);
}
exports.expectHtml = expectHtml;
function raiseOnChange(element) {
    if ('createEvent' in document) {
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent('change', false, true);
        element.dispatchEvent(evt);
    }
    else {
        element['fireEvent']('onchange');
    }
}
exports.raiseOnChange = raiseOnChange;
//# sourceMappingURL=0-helpers.js.map
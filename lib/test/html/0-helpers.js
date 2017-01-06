"use strict";
var src_1 = require("./../../src");
var htmlTsxBuilder_1 = require("./../../src/platforms/html/htmlTsxBuilder");
var provider;
function initPlatform() {
    src_1.TsxBuilder.provider = provider = provider || new htmlTsxBuilder_1.HtmlTsxBuilder();
}
exports.initPlatform = initPlatform;
function toHtml(element) {
    return element.domElement.outerHTML;
}
exports.toHtml = toHtml;
function expectHtml(element, expected) {
    var actual = toHtml(element);
    var normExpected = expected.replace(/\s+/g, ' ');
    var normActual = actual.replace(/\s+/g, ' ');
    expect(normActual).toBe(normExpected, 'actual=' + normActual);
}
exports.expectHtml = expectHtml;
//# sourceMappingURL=0-helpers.js.map
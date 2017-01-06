"use strict";
var div_1 = require("./elements/div");
var span_1 = require("./elements/span");
var HtmlTsxBuilder = (function () {
    function HtmlTsxBuilder() {
    }
    HtmlTsxBuilder.prototype.createElement = function (name, attributes, content) {
        console.log('HtmlTsxBuilder START', name, attributes, content);
        switch (name) {
            case 'wrap':
                return div_1.createDiv(attributes, content);
            case 'label':
                return span_1.createSpan(attributes, content);
        }
        throw "Unknown Element Type: \"" + name + "\"";
    };
    return HtmlTsxBuilder;
}());
exports.HtmlTsxBuilder = HtmlTsxBuilder;
//# sourceMappingURL=htmlTsxBuilder.js.map
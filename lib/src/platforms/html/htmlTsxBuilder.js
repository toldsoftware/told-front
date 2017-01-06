"use strict";
var HtmlTsxBuilder = (function () {
    function HtmlTsxBuilder() {
    }
    HtmlTsxBuilder.prototype.createElement = function (ctor, attributes) {
        var content = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            content[_i - 2] = arguments[_i];
        }
        console.log('HtmlTsxBuilder START', ctor, attributes, content);
    };
    return HtmlTsxBuilder;
}());
exports.HtmlTsxBuilder = HtmlTsxBuilder;
//# sourceMappingURL=htmlTsxBuilder.js.map
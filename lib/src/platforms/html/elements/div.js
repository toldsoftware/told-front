"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var htmlElementInstance_1 = require("./../htmlElementInstance");
var DivHtmlElementInstance = (function (_super) {
    __extends(DivHtmlElementInstance, _super);
    function DivHtmlElementInstance(attributes, content) {
        var _this = _super.call(this) || this;
        var dom = document.createElement('div');
        for (var _i = 0, _a = content; _i < _a.length; _i++) {
            var x = _a[_i];
            dom.appendChild(x.domElement);
        }
        _this.domElement = dom;
        return _this;
    }
    DivHtmlElementInstance.prototype.setAttributes = function (attributes) { throw 'Not Implemenented'; };
    DivHtmlElementInstance.prototype.replaceChildren = function (children) { throw 'Not Implemenented'; };
    DivHtmlElementInstance.prototype.insert = function (i, child) { throw 'Not Implemenented'; };
    DivHtmlElementInstance.prototype.remove = function (i) { throw 'Not Implemenented'; };
    return DivHtmlElementInstance;
}(htmlElementInstance_1.HtmlContainerElementInstance));
exports.DivHtmlElementInstance = DivHtmlElementInstance;
//# sourceMappingURL=div.js.map
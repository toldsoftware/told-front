"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var htmlElementInstance_1 = require("./../htmlElementInstance");
var SpanHtmlElementInstance = (function (_super) {
    __extends(SpanHtmlElementInstance, _super);
    function SpanHtmlElementInstance(attributes, text) {
        var _this = _super.call(this) || this;
        _this.attributes = attributes;
        _this.text = text;
        var dom = document.createElement('span');
        _this.domElement = dom;
        _this.update();
        return _this;
        // console.log('SpanHtmlElementInstance CREATED', this.domElement.innerText, this.attributes, this.text);
    }
    SpanHtmlElementInstance.prototype.setAttributes = function (attributes) { this.attributes = attributes; this.update(); };
    SpanHtmlElementInstance.prototype.setText = function (text) { this.text = text; this.update(); };
    SpanHtmlElementInstance.prototype.update = function () {
        var text = this.text;
        var attributes = this.attributes;
        if (attributes) {
            if (attributes['prefix']) {
                text = attributes['prefix'] + text;
            }
            if (attributes['suffix']) {
                text = text + attributes['suffix'];
            }
        }
        this.domElement.innerText = text;
        // console.log('SpanHtmlElementInstance UPDATED', this.domElement.innerText, this.attributes, this.text);
    };
    return SpanHtmlElementInstance;
}(htmlElementInstance_1.HtmlTextElementInstance));
exports.SpanHtmlElementInstance = SpanHtmlElementInstance;
//# sourceMappingURL=span.js.map